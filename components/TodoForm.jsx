import { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
const TodoForm = ({ createTodo, selectedTodo, updateTodo }) => {
	const [value, setValue] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			userId: 3,
			id: uuidV4(),
			title: value,
			completed: false,
		};
		if (selectedTodo) {
			updateTodo({
				...selectedTodo,
				title: value,
			});
		} else {
			createTodo(newTodo);
		}
		setValue('');
	};

	useEffect(() => {
		if (selectedTodo) {
			setValue(selectedTodo.title);
		}
	}, [selectedTodo]);
	return (
		<form onSubmit={onSubmit} className='flex'>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				required={true}
				placeholder='Type your text here'
				className='flex-1 rounded-l-lg text-black px-5'
			/>
			<button className='bg-purple-500 py-2 px-4 rounded-r-lg'>
				{selectedTodo ? 'Edit Todo' : 'Add Task'}
			</button>
		</form>
	);
};
export default TodoForm;
