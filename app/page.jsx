'use client';
import TodoForm from '@/components/TodoForm';
import TodoItem from '@/components/TodoItem';
import { useState } from 'react';

const page = () => {
	const [todos, setTodos] = useState([
		{
			userId: 5,
			id: 2,
			title: 'Go for a walk',
			completed: true,
		},
		{
			userId: 1,
			id: 3,
			title: 'Finish homework',
			completed: false,
		},
		{
			userId: 7,
			id: 4,
			title: 'Read a book',
			completed: false,
		},
	]);

	const [selectedTodo, setSelectedTodo] = useState(null);

	const createTodo = (newTodo) => {
		setTodos([newTodo, ...todos]);
	};
	const updateTodo = (updatedTodo) => {
		setTodos(
			todos.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))
		);
		setSelectedTodo(null);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((item) => item.id !== id));
	};
	const toggleComplete = (id) => {
		setTodos(
			todos.map((item) =>
				item.id === id
					? {
							...item,
							completed: !item.completed,
					  }
					: item
			)
		);
	};

	const onSelectTodo = (todo) => {
		setSelectedTodo(todo);
	};

	return (
		<div className=' flex justify-center items-center h-full space-4 bg-gradient-to-r from-orange-300 to-red-400'>
			<div className='bg-indigo-700 flex flex-col gap-10 text-white p-10 text-center  h-1/2 w-2/3 lg:w-1/3 rounded-lg '>
				<h1 className=' text-4xl uppercase font-bold'>My Todo List</h1>
				<TodoForm
					createTodo={createTodo}
					selectedTodo={selectedTodo}
					updateTodo={updateTodo}
				/>
				<div className='overflow-auto'>
					<div className='grid gap-3 overflow-auto pr-1'>
						{todos.map((todo) => (
							<TodoItem
								key={todo.id}
								todo={todo}
								deleteTodo={deleteTodo}
								toggleComplete={toggleComplete}
								onSelectTodo={onSelectTodo}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
