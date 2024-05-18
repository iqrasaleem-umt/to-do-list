"use client";
import React, { useState } from "react";

export default function Page() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState<Array<{ task: string; desc: string }>>([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Form ke default submit behavior ko rokta hai
    setMainTask((prevTask) => [...prevTask, { task, desc }]);
    setTask("");
    setDesc("");
    console.log(mainTask)
  };
  const deleteHandler = (index: number) => {
    const copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };
  
        let renderTask = <h2>No task Available</h2>;
        if (mainTask.length > 0) {
          renderTask = (
            <ul >
              {mainTask.map((t, index) => (
                <li className="flex items-center justify-between mb-5 " key={index}>
                  <div className="flex items-center justify-between w-2/3">
                    <h5 className="font-bold text-lg">{t.task}</h5>
                    <h6 className="font-bold text-lg">{t.desc}</h6>
                  </div>
                  <button
              onClick={() => deleteHandler(index)}
              className="bg-red-400 px-2 py-4 text-white rounded-lg"
            >
              Delete
            </button>
                </li>
              ))}
            </ul>
          );
        }
  return (
    <div>
      <h1 className="text-5xl font-bold bg-black text-white text-center">
        Checkout to do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="border-black border-4 p-2 mt-5 mx-2"
          type="text"
          value={task}
          placeholder="Enter task here"
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="border-black border-4 p-2 mt-5 mx-2 "
          type="text"
          value={desc}
          placeholder="Enter description here"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit" className="text-white px-4 py-2 font-bold bg-black mx-2">
          Add task
        </button>
      </form>
      <div className="p-8 mt-8 bg-slate-200"> 
       {renderTask}
       </div>
 
     </div>
  )
}

