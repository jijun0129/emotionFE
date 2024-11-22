// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useUserStore from '../store/userStore.js';
import styled from 'styled-components';
import TheHeader from '../components/layouts/TheHeader.jsx';
import EmotionSubmit from '../components/emotion/EmotionSubmit.jsx';

const Main = styled.main`
	width: 100vw;
	height: 93vh;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const SubmitSection = styled.section`
	width: 300px;
	margin-bottom: 4vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	border: 1px solid var(--color-grey-2);
`;

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
			<Main>
				<SubmitSection>
					<EmotionSubmit />
				</SubmitSection>
			</Main>
		</>
	);
};

export default SubmitPage;
