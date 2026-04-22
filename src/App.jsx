import React, { useState } from 'react'
import Heading from './components/Heading'
import AddStudent from './components/AddStudent'
import StudentSummary from './components/StudentSummary'
import AddDetails from './components/AddDetails'

function App() {

  const initialStudents = [
    {id:1,name:"Aman",score:78},
    {id:2,name:"Alex",score:58},
    {id:3,name:"Joy",score:39}
  ]
  const [students,setStudents] = useState(initialStudents)
  const updateScore = (index,newScore)=>{
    const updated = students.map(s=>s.id === index+1 ? {...s,score:Number(newScore)}:s)

    setStudents(updated)
  }
  return (
    <div className='w-full flex flex-col items-center gap-10 p-20 h-full bg-[#0E0B16]'>
    <Heading/>
    <AddStudent students={students} setStudents={setStudents}/>
    <StudentSummary/>
    <AddDetails students={students} updateScore={updateScore}/>
    </div>
  )
}
export default App