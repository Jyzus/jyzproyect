import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Componentes
import Sidebar from '../components/complete/Sidebar';

// Vistas
import Home from '../views/Home';
import Estadisticas from '../views/Estadisticas';
import Local from '../views/Local';
import Actual from '../views/Actual';
import Youtube from '../views/Youtube';

export default function Root() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Sidebar />}>
						<Route path='/' element={<Home />} />
						<Route path='/actual' element={<Actual />} />
						<Route path='/estadisticas' element={<Estadisticas />} />
						<Route path='/local' element={<Local />} />
						<Route path='/youtube' element={<Youtube />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
