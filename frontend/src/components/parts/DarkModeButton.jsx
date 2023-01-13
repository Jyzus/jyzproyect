import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';

export default function DarkModeButton({state}) {
	const [darkMode, setDarkMode] = useState(true);
	const changeMode = () => {
		setDarkMode(!darkMode);
	};
	const darkElement = document.documentElement;
	if (darkMode == true) {
		darkElement.classList.add('dark');
	} else if (darkMode == false) {
		darkElement.classList.remove('dark');
	}
	return (
		<div
			className={`${
				state ? 'w-[85%] mx-auto' : 'w-fit'
			} flex items-center justify-between px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md mt-4 shadow-md`}
		>
			<span className={`${state ? 'inline-block' : 'hidden'} font-bold text-lg`}>Dark Mode</span>
			<button
				className={`${darkMode ? 'justify-end' : 'justify-start'} w-8 h-4 flex rounded-full bg-gray-500 duration-200`}
				onClick={changeMode}
			>
				<span className='w-4 h-4 rounded-full bg-white dark:bg-dark inline-block'></span>
			</button>
		</div>
	);
}
