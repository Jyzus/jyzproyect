import {useEffect, useState} from 'react';

const useFetch = () => {
	const [user, setUser] = useState([]);
	const getData = () => {
		fetch('/public/helpers/user.json')
			.then((res) => res.json())
			.then((res) => setUser(res));
	};
	useEffect(() => {
		getData();
	}, []);
	return {
		user,
	};
};

export default useFetch;
