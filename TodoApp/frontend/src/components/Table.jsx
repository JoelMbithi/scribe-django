import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";




const Table = () => {
  return (
    <div className="mt-8 ring-2 ring-indigo-300 rounded-lg p-4">
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
            <tr>
                 <td className="p-3 text-xl">
                <span className="cursor-pointer">
                <IoIosCheckboxOutline />
              </span></td>
            <td className="p-3 text-sm">Finish homework</td>
            <td className="p-3 text-sm">
              <span className="bg-green-300 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                Done
              </span>
            </td>
            <td className="p-3 text-sm">2025-08-05</td>
            <td className="p-3 text-sm">High</td>
            <td className=" text-xl flex flex-row">
              <span className="p-3 cursor-pointer text-green-600"><FaRegEdit /></span>
              <span className="p-3 cursor-pointer text-red-600 "><MdDelete /></span>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default Table;
