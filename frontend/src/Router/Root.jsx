import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Componentes
import Sidebar from '../components/complete/Sidebar';

// Vistas
import Home from '../views/Home';

export default function Root() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Sidebar />}>
						<Route path='/' element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
