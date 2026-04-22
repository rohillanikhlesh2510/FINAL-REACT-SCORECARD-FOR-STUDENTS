import { useEffect, useState } from "react";

function AllDetails({students,updateScore}) {

  const [inputs,setInputs] = useState(students.map(s=>s.score))

  const handleChange = (index,value)=>{
  
     const newInputs = [...inputs]
     newInputs[index] = value
     setInputs(newInputs)
  }
  
 useEffect(()=>{
  setInputs(students.map(s=>s.score))
 },[students])

  return (
    <div className="w-200">
        <div className="flex border border-[#7C3AED] p-2 justify-between items-center">
          <span className="text-[#7C3AED] text-xs">STUDENT RECORDS</span>
          <span className="text-[#7C3AED] text-xs">4 Enteries</span>
        </div>
      <table className="w-full border border-[#7C3AED] border-collapse">
  <thead>
    <tr className="text-[#7C3AED]">
      <th className="text-left p-3 border-b border-[#7C3AED]">Name</th>
      <th className="text-left p-3 border-b border-[#7C3AED]">Score</th>
      <th className="text-left p-3 border-b border-[#7C3AED]">Status</th>
      <th className="text-left p-3 border-b border-[#7C3AED]">Update</th>
    </tr>
  </thead>

  <tbody>
  
   {students.map((item,index)=>{


    return (
        <tr className="text-[#7C3AED]">
      <td className="p-3">{item.name}</td>
      <td className="p-3">{item.score}</td>

      <td className="p-3 ">

         {item.score>=40 ? <div className="flex items-center gap-1 w-20 p-1 px-2 text-sm text-green-600 border border-green-500">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          <span>Pass</span>
        </div> :  <div className="flex items-center gap-1 w-20 p-1 px-2 text-sm text-red-600 border border-red-500">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          <span>Fail</span>
          </div>


         }

      
       
        
      </td>

      <td className="p-3 flex gap-3 items-center">
        <input
          type="text"
          value={inputs[index]}
          onChange={(e)=>handleChange(index,e.target.value)}
          className="w-12 p-1 px-2 outline-none border border-[#C084FC1A] text-gray-200"
        />
        <button className="border border-[#7C3AED] px-3 py-1 cursor-pointer hover:bg-[#C084FC1A] hover:text-[#C084FC]" onClick={(e)=>updateScore(index,inputs[index])}>
          Save
        </button>
      </td>
    </tr>
    )
   })

   }
  </tbody>
</table>
    </div>
  )
}

export default AllDetails;