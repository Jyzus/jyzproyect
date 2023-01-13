import React from 'react';

export default function IconTextFloat({name, icon, color, textColor, state}) {
	return (
		<div
			className={`${
				state ? 'w-[90%] mx-auto px-4' : 'w-12'
			} h-12 flex items-center justify-center relative bg-white dark:bg-dark hover:bg-principal dark:hover:bg-principal group cursor-pointer transition-all duration-200 rounded-md`}
		>
			{/* Icon */}
			<div className={`${textColor} text-dark dark:text-white group-hover:text-white text-3xl`}>{icon}</div>
			{/* text */}
			<div
				className={`${
					state
						? 'w-full justify-start'
						: `absolute top-1/2 -translate-y-1/2 left-0 group-hover:left-[calc(100%+5px)] w-0 group-hover:w-fit -z-10 ${color} overflow-hidden justify-center`
				} flex items-center  h-8 px-4 rounded-md transition-all duration-200`}
			>
				<p className={`${state ? 'text-dark dark:text-white group-hover:text-white' : 'text-white'} font-semibold`}>
					{name}
				</p>
			</div>
		</div>
	);
}
