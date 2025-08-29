import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'



const AuthForm = ({ onClose }) => {
  const { user, setUser } = useContext(UserContext)   
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: "",
    full_name:""
  })

  const [isLogin, setLogin] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleLogin() {
    let userData = formData
    try {
        const response = await fetch('http://localhost:8000/login/',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:  userData.email,
                password: userData.password
              
            }),

            
        })
        if (!response.ok) {
                throw new Error ("Login Failed")
            }

           

            const data = await response.json()
             //  Save both user + token to localStorage
            localStorage.setItem("user", JSON.stringify(data.user));
           localStorage.setItem("token", data.token);

            console.log("Login Successful",data)
            setUser(data.user)
            onClose()
            window.location.reload();
            navigate('/')
    } catch (error) {
        console.log(error)
    }
  }

  const handleRegister = async () => {
     let userData = formData

     try {
      const response = await fetch('http://localhost:8000/register/',{
        method:"POST",
        headers:{"Content-Type":"application/json"},

        body:JSON.stringify({
          username:userData.username,
          email:userData.email,
          password:userData.password,
          full_name:userData.full_name
        })

      })
      
      if (!response.ok) {
        throw new Error("Registration Failed")
      }

      const data = await response.json()
      
       console.log("Registration Successful",data)
       localStorage.setItem("user",JSON.stringify(data))
       setUser(data)
       setLogin(true)
       setFormData({ username: '', email: '', password: "" })
     } catch (error) {
      console.log(error)
     }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      handleLogin()
    } else {
      handleRegister()
    }
  }

  useEffect(() => {
    if (user) {
        navigate('/')
    }
  },[])

  const toggleAuthMode = () => {
    setLogin((prev) => !prev)
    setFormData({ username: '', email: '', password: "" })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-70 z-50">
      <div className="bg-[rgb(10,8,8)] rounded-lg p-8 relative text-amber-100 w-96">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl mb-6">{isLogin ? 'Login' : 'Register'}</h1>

          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="bg-[rgb(15,15,14)] ring-1 ring-amber-100 p-3 rounded-md mb-4 w-full text-white"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[rgb(15,15,14)] ring-1 ring-amber-100 p-3 rounded-md mb-4 w-full text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-[rgb(15,15,14)] ring-1 ring-amber-100 p-3 rounded-md mb-4 w-full text-white"
          />

          <button
            type="submit"
            className="bg-amber-200 text-black px-6 py-3 rounded hover:bg-amber-300 transition duration-300 ease-in-out w-full"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>

          <p className="mt-4 text-sm text-gray-300">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-amber-200 hover:underline ml-2"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
