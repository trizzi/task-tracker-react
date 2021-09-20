import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors appointment',
            day: 'Feb 8th at 8:00am',
            reminder: true
        },
        {
            id: 2,
            text: 'Dentist appointment',
            day: 'August 8th at 8:00am',
            reminder: false
        },
        {
            id: 3,
            text: 'Otholaryngologist appointment',
            day: 'October 8th at 8:00am',
            reminder: true
        }
    ]
)
//Delete Tasks
const deleteTask = (id)=>{
 setTasks(tasks.filter((task)=> task.id !== id))
}

// Reminder
const toggleReminder = (id)=>{
  console.log('toggle')
}
  return (

    <div className="container">
    <Header />
  { tasks.length > 0 ? (<Tasks    tasks={tasks} onDelete={deleteTask } />):(
    'No Tasks To Show'
  )} 
    </div>
  );
}

export default App;
