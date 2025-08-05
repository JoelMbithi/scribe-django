import React, { useState } from 'react';
import axios from 'axios';


const TodoForm = () => {
  const [form, setForm] = useState({
    'body' :''
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      'body':e.target.value
    }))
    console.log(form);
  }

  const postTodo = async () => {
    try {
      await axios.post('http://127.0.0.1:8002/api/todo/',form)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mx-auto mt-10 b-indigo-300 p-6 rounded-lg ring-1 ring-indigo-300">
      
      <form  className="space-y-4 flex flex-row gap-6 items-center">

        {/* Title */}
        <div className='flex flex-row gap-4 items-center'>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            
            required
            className="mt-1 block w-full border bg-indigo-100 border-gray-300  rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add Todo"
          />
        </div>

    

        {/* Priority */}
        <div className='flex flex-row gap-4 items-center'>
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            
            className="mt-1 block w-full border bg-indigo-100 border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>High</option>
            <option>Low</option>
            
          </select>
        </div>

        {/* Status */}
        <div className='flex flex-row gap-4 items-center'>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            
            className="mt-1 block w-full border bg-indigo-100 border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            
            <option>In Progress</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            onClick={postTodo}
            className="w-full bg-indigo-700 text-white text-sm py-2 px-2 rounded-md hover:bg-indigo-600 transition"
          >
            ADD TODO
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
