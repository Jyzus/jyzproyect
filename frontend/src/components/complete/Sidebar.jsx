import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {
	AiOutlineReload,
	AiFillYoutube,
	AiFillFolder,
	AiOutlineBarChart,
	AiOutlineAlignRight,
	AiFillSetting,
	AiFillHome,
} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

// Components parts
import IconTextFloat from '../parts/IconTextFloat';
import DarkModeButton from '../parts/DarkModeButton';

export default function Sidebar() {
	const [side, setSide] = useState(false);
	const {user} = useFetch();
	const change = () => {
		setSide(!side);
	};
	const menu = [
		{
			name: 'Inicio',
			icon: <AiFillHome />,
			link: '/',
		},
		{
			name: 'Actual',
			icon: <AiOutlineReload />,
			link: '/actual',
		},
		{
			name: 'Estadísticas',
			icon: <AiOutlineBarChart />,
			link: '/estadisticas',
		},
		{
			name: 'Local',
			icon: <AiFillFolder />,
			link: '/local',
		},
		{
			name: 'Youtube',
			icon: <AiFillYoutube />,
			link: '/youtube',
		},
	];
	return (
		<>
			<nav
				className={`h-screen fixed ${
					side ? 'w-64' : 'w-16'
				} py-4 flex flex-col items-center content-between duration-300 bg-slate-100 dark:bg-black`}
			>
				{/* User */}
				{user.map((i) => (
					<div className='flex gap-4 items-center content-center overflow-hidden cursor-default' key={i.name}>
						<img src={i.img} alt='' className='w-12 h-12 object-cover rounded-full' />
						<div className={`${side ? 'inline-block' : 'hidden'}`}>
							<p className='font-rubik font-bold text-dark dark:text-white'>
								{i.name} {i.lastName}
							</p>
							<p className='text-sm text-gray-600 dark:text-gray-300 font-semibold'>{i.userName}</p>
						</div>
					</div>
				))}
				{/* Button */}
				<button
					className={`flex items-center gap-4 m-auto mt-4 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 duration-150 shadow-lg ${
						side ? 'w-[90%]' : 'w-fit'
					}`}
					onClick={change}
				>
					<AiOutlineAlignRight className={`${side ? '' : 'rotate-180'} text-lg`} />
					<span className={`${side ? 'inline-block' : 'hidden'} font-bold`}>Cerrar</span>
				</button>
				{/* Options */}
				<div className={`${side ? 'w-full' : 'w-fit'} flex gap-2 flex-col justify-start mt-14 flex-grow`}>
					{menu.map((i) => (
						<Link key={i.name} to={i.link}>
							<IconTextFloat name={i.name} icon={i.icon} color='bg-principal' textColor={'text-black'} state={side} />
						</Link>
					))}
				</div>
				<div className='w-full'>
					<button
						className={`${
							side ? 'w-[85%]' : 'w-fit'
						} flex gap-2 items-center group mx-auto bg-gray-200 hover:bg-gray-300 rounded-md shadow-md px-4 py-2 duration-200`}
					>
						<span className={`text-lg font-bold ${side ? 'inline-block' : 'hidden'}`}>Settings</span>
						<i className='text-xl group-hover:rotate-180 duration-150'>
							<AiFillSetting />
						</i>
					</button>
					<DarkModeButton state={side} />
				</div>
			</nav>
			<div
				className={`${
					side ? 'ml-64' : 'ml-16'
				} transition-all duration-300 text-black bg-white dark:bg-dark dark:text-white min-h-screen`}
			>
				<Outlet />
			</div>
		</>
	);
}
