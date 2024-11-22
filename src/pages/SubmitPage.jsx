import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore.js';
import TheHeader from '../components/layouts/TheHeader.jsx';
import SubmitForm from '../components/submit/SubmitForm.jsx';

const SubmitPage = () => {
	// 현재 axios 통신이 제대로 구현되지 않음
	// const { isLoggedIn } = useUserStore();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!isLoggedIn) {
	// 		navigate('/sign');
	// 	}
	// }, [isLoggedIn, navigate]);

	return (
		<>
			<TheHeader />
			<SubmitForm />
		</>
	);
};

export default SubmitPage;
