import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import axios from "axios";





const Table = ({todos,setTodos,isLoading}) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8002/api/todo/${id}/`)
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-8  ring-1 ring-indigo-300 rounded-lg p-4">
      <table className="w-full text-left border-collapse ">
        <thead className="bg-indigo-200  ">
          <tr className="text-gray-700 ">
            <th className="p-2 text-sm font-bold tracking-wide text-left">Checkbox</th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">To Do</th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">Status</th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">Date Created</th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">Priority</th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">Actions</th>
          </tr>
        </thead>
      <tbody>
  {isLoading ? (
    <tr>
      <td colSpan="6" className="text-center p-4">Loading...</td>
    </tr>
  ) : (
    <>
      {todos.map((todoItem, index) => (
        <React.Fragment key={todoItem.id || index}>
          <tr>
            <td className="p-3 text-xl" title={todoItem.d}>
              <span className="cursor-pointer">
                {todoItem.complete ? (
                  <IoIosCheckboxOutline className="text-green-600" />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </span>
            </td>
            <td className="p-3 text-sm">{todoItem.body || "Finish homework"}</td>
            <td className="p-3 text-sm">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                todoItem.complete ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"
              }`}>
                {todoItem.complete ? "Done" : "In Progress"}
              </span>
            </td>
            <td className="p-3 text-sm">{new Date(todoItem.created).toLocaleString()}</td>
            <td className="p-3 text-sm">{todoItem.priority || "High"}</td>
            <td className="text-xl flex flex-row">
              <span className="p-3 cursor-pointer text-green-600"><FaRegEdit /></span>
              <span className="p-3 cursor-pointer text-red-600"><MdDelete onClick={() => handleDelete(todoItem.id )} /></span>
            </td>
          </tr>

          {/* Divider row */}
          <tr>
            <td colSpan="6">
              <hr className="border-t border-gray-400" />
            </td>
          </tr>
        </React.Fragment>
      ))}
    </>
  )}
</tbody>

      </table>
    </div>
  );
};

export default Table;
