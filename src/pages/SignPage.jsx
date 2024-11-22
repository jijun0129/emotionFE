import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SignInForm from '../components/sign/SignInForm.jsx';
import SignUpForm from '../components/sign/SignUpForm.jsx';
import { useNavigate } from 'react-router-dom';
import TheHeader from '../components/layouts/TheHeader.jsx';
import useUserStore from '../store/userStore.js';

const Main = styled.main`
	width: 100vw;
	height: 93vh;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const SignSection = styled.section`
	width: 300px;
	margin-bottom: 4vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	border: 1px solid var(--color-grey-2);
`;

const DividorDiv = styled.div`
	width: 80%;
	margin: 10px 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 12px;
`;

const Dividor = styled.div`
	width: 100px;

	border-top: 1px solid var(--color-grey-2);
`;

const SwitchDiv = styled.div`
	width: 80%;
	margin-bottom: 30px;

	font-size: 12px;
	text-align: center;
`;

const SwitchSpan = styled.span`
	margin-left: 4px;

	color: var(--color-blue-1);

	cursor: pointer;
`;

const SignPage = () => {
	const { isLoggedIn } = useUserStore();
	const navigate = useNavigate();
	const [isSignIn, setIsSignIn] = useState(true);

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/');
		}
	}, [isLoggedIn, navigate]);

	const onClickSwitchSign = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<>
			<TheHeader />
			<Main>
				<SignSection>
					{isSignIn ? <SignInForm /> : <SignUpForm />}
					<DividorDiv>
						<Dividor />
						<p>OR</p>
						<Dividor />
					</DividorDiv>
					<SwitchDiv>
						<span>
							{isSignIn ? '계정이 없으신가요?' : '계정이 있으신가요?'}
						</span>
						<SwitchSpan onClick={onClickSwitchSign}>
							{isSignIn ? '회원가입' : '로그인'}
						</SwitchSpan>
					</SwitchDiv>
				</SignSection>
			</Main>
		</>
	);
};

export default SignPage;
