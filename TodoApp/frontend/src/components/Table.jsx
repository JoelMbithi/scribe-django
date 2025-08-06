import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import axios from "axios";

const Table = ({ todos, setTodos, isLoading }) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editBody, setEditBody] = useState("");
  const [editPriority, setEditPriority] = useState("High");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8002/api/todo/${id}/`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      const res = await axios.patch(
        `http://127.0.0.1:8002/api/todo/${id}/`,
        value
      );
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? res.data : todo))
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = (id, value) => {
    handleEdit(id, {
      complete: !value,
    });
  };

  const openEditPopup = (todo) => {
    setEditTodoId(todo.id);
    setEditBody(todo.body);
    setEditPriority(todo.priority || "High");
  };

  return (
    <div className="mt-8  ring-1 ring-indigo-300 rounded-lg p-4">
      <table className="w-full text-left border-collapse ">
        <thead className="bg-indigo-200  ">
          <tr className="text-gray-700 ">
            <th className="p-2 text-sm font-bold tracking-wide text-left">
              Checkbox
            </th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">
              To Do
            </th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">
              Status
            </th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">
              Date Created
            </th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">
              Priority
            </th>
            <th className="p-2 text-sm font-bold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6" className="text-center p-4">
                Loading...
              </td>
            </tr>
          ) : (
            <>
              {todos.map((todoItem, index) => (
                <React.Fragment key={todoItem.id || index}>
                  <tr>
                    <td className="p-3 text-xl" title={todoItem.d}>
                      <span
                        onClick={() =>
                          handleCheckbox(todoItem.id, todoItem.complete)
                        }
                        className="cursor-pointer"
                      >
                        {todoItem.complete ? (
                          <IoIosCheckboxOutline className="text-green-600" />
                        ) : (
                          <MdCheckBoxOutlineBlank />
                        )}
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      {todoItem.body || "Finish homework"}
                    </td>
                    <td className="p-3 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          todoItem.complete
                            ? "bg-green-300 text-green-700"
                            : "bg-red-300 text-red-700"
                        }`}
                      >
                        {todoItem.complete ? "Done" : "In Progress"}
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      {new Date(todoItem.created).toLocaleString()}
                    </td>
                    <td className="p-3 text-sm">
                      {todoItem.priority || "High"}
                    </td>
                    <td className="text-xl flex flex-row">
                      <span className="p-3 cursor-pointer text-green-600">
                        <FaRegEdit onClick={() => openEditPopup(todoItem)} />
                      </span>

                      <span
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this item?"
                            )
                          ) {
                            handleDelete(todoItem.id);
                          }
                        }}
                        className="p-3 cursor-pointer text-red-600"
                      >
                        <MdDelete/>
                      </span>
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

      {/* Popup */}
      {editTodoId && (
        <div className="fixed inset-0  bg-opacity-40 backdrop-blur-s flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Edit Todo
            </h2>

            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="editBody"
            >
              Task Description
            </label>
            <input
              id="editBody"
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              placeholder="Enter todo..."
            />

            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="editPriority"
            >
              Priority
            </label>
            <input
              id="editPriority"
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
              placeholder="Enter priority..."
            />

            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
                onClick={() => setEditTodoId(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                onClick={() => {
                  handleEdit(editTodoId, {
                    body: editBody,
                    priority: editPriority,
                  });
                  setEditTodoId(null);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
