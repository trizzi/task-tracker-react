import { useState } from 'react';
import Header from './component/Header';
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(true);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors appointment',
			day: 'Feb 8th at 8:00am',
			reminder: true,
		},
		{
			id: 2,
			text: 'Dentist appointment',
			day: 'August 8th at 8:00am',
			reminder: false,
		},
		{
			id: 3,
			text: 'Otholaryngologist appointment',
			day: 'October 8th at 8:00am',
			reminder: true,
		},
	]);

	// Add Tasks
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = {
			id,
			...task,
		};
		setTasks([...tasks, newTask]);
	};

	//Delete Tasks
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							reminder: !task.reminder,
					  }
					: task
			)
		);
	};

	return (
		<div className='container'>
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				'No Tasks To Show'
			)}
		</div>
	);
}

export default App;
