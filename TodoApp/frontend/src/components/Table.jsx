import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";





const Table = ({todos,setTodos,isLoading}) => {

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
        <tbody className=" ">
          {/* Map through todos and display each todo item */}
          { isLoading ? <div className="text-center p-4">Loading...</div> :
          <>
           { todos.map((todoItem,index) => {
            return (
               <tr>
                 <td className="p-3 text-xl " title={todoItem.id}>
                <span className="cursor-pointer" >{todoItem.complete ? <IoIosCheckboxOutline className="text-green-600" /> 
                :
                <MdCheckBoxOutlineBlank />

                 }
               
              </span></td>
            <td className="p-3 text-sm">{todoItem.body ||  "Finish homework"}</td>
            <td className="p-3 text-sm">
              <span className="bg-green-300 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                 {todoItem.complete ? "Done" : "Pending"}
              </span>
            </td>
            <td className="p-3 text-sm">{todoItem.updated || " 2025-08-05"}</td>
            <td className="p-3 text-sm">{todoItem.priority || "High"}</td>
            <td className=" text-xl flex flex-row">
              <span className="p-3 cursor-pointer text-green-600"><FaRegEdit /></span>
              <span className="p-3 cursor-pointer text-red-600 "><MdDelete /></span>
            </td>
          </tr>
            )
           })}
           </>
          }
         
        </tbody>
      </table>
    </div>
  );
};

export default Table;
