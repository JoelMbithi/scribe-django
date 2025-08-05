import React, { useState } from 'react';

const TodoForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Pending',
  });



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
            
            className="mt-1 block w-full border bg-indigo-100 border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Status */}
        <div className='flex flex-row gap-4 items-center'>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={form.status}
            
            className="mt-1 block w-full border bg-indigo-100 border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
