import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {
	AiOutlineReload,
	AiFillYoutube,
	AiFillFolder,
	AiOutlineBarChart,
	AiOutlineAlignRight,
	AiFillSetting,
} from 'react-icons/ai';
import {Link} from 'react-router-dom';

import IconTextFloat from '../parts/IconTextFloat';

export default function Sidebar() {
	const [side, setSide] = useState(false);
	const change = () => {
		setSide(!side);
	};
	const menu = [
		{
			name: 'Actual',
			icon: <AiOutlineReload />,
		},
		{
			name: 'Estadísticas',
			icon: <AiOutlineBarChart />,
		},
		{
			name: 'Local',
			icon: <AiFillFolder />,
		},
		{
			name: 'Youtube',
			icon: <AiFillYoutube />,
		},
	];
	return (
		<>
			<nav
				className={`h-screen fixed ${
					side ? 'w-64' : 'w-16'
				} py-4 flex flex-col items-center content-between duration-300`}
			>
				{/* User */}
				<div className='flex gap-4 items-center content-center overflow-hidden cursor-default'>
					<img
						src='https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D'
						alt=''
						className='w-12 h-12 object-cover rounded-full'
					/>
					<div className={`${side ? 'inline-block' : 'hidden'}`}>
						<p className='font-rubik font-semibold'>Username here</p>
						<p className='text-sm text-gray-600'>Este es su apodo</p>
					</div>
				</div>
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
				<div className={`${side ? 'w-full' : 'w-fit'} flex flex-col justify-start mt-14 flex-grow`}>
					{menu.map((i) => (
						<Link key={i.name}>
							<IconTextFloat name={i.name} icon={i.icon} color='bg-principal' textColor={'text-dark'} state={side} />
						</Link>
					))}
				</div>
				<div className='w-full'>
					<button
						className={`${
							side ? 'w-[90%]' : 'w-fit'
						} flex gap-2 items-center group mx-auto bg-gray-200 rounded-md shadow-md px-4 py-2`}
					>
						<span className={`text-lg font-bold ${side ? 'inline-block' : 'hidden'}`}>Settings</span>
						<i className='text-xl group-hover:rotate-180 duration-150'>
							<AiFillSetting />
						</i>
					</button>
					<div>
						<span>Dark Mode</span>
						<button className='w-8 h-4 flex justify-start rounded-full bg-gray-500'>
							<span className='w-4 h-4 rounded-full bg-dark dark:bg-white inline-block'></span>
						</button>
					</div>
				</div>
			</nav>
			<div className={`${side ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
				<Outlet />
			</div>
		</>
	);
}
