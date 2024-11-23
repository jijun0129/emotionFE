import { useState } from 'react';
import styled from 'styled-components';
import useUserStore from '../../store/userStore.js';
import axios from 'axios';
import { HOST } from '../../config.js';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
	width: 80%;

	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	margin-top: 20px;
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
`;

const Input = styled.input`
	height: 40px;
	margin-top: 15px;
	padding: 5px 10px;

	border: 1px solid var(--color-grey-2);
	border-radius:5px;
	background-color: var(--color-grey-1);

	outline: none;
`;

const Button = styled.button`
	height: 35px;
	margin-top: 20px;

	font-size: 16px;
	color: var(--color-white);

	border: none;
	border-radius: 10px;
	cursor: pointer;
	background-color: rgba(065,105,225,0.5);
	&:hover{
		background-color: rgba(065,105,225,0.9);
	}
`;

const SignInForm = () => {
	const navigate = useNavigate();
	const { login } = useUserStore();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onChangeUsername = e => setUsername(e.target.value);

	const onChangePassword = e => setPassword(e.target.value);

	const onSubmitLogin = e => {
		e.preventDefault();

		// 모든 값이 채워져있는지 검증
		if (username.length == 0 || password.length == 0) {
			alert('모든 필드를 채워주세요!');
			return;
		}

		const signInRequest = {
			username,
			password,
		};

		axios
			.post(`${HOST}/auth/login`, signInRequest, {
				withCredentials: true,
			})
			.then(res => {
				const { id, username } = res.data;

				const user = {
					id,
					username,
				};

				console.log(user);
				login(user);

				navigate('/');
			})
			.catch(() => {
				alert('로그인에 실패했습니다.');
			});
	};

	return (
		<Form onSubmit={onSubmitLogin}>
			<Title>로그인</Title>
			<Input
				onChange={onChangeUsername}
				value={username}
				type="text"
				placeholder="Username"
			/>
			<Input
				onChange={onChangePassword}
				value={password}
				type="password"
				placeholder="Password"
			/>
			<Button>Log In</Button>
		</Form>
	);
};

export default SignInForm;
