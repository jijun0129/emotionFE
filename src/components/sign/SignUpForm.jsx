import axios from 'axios'; //HTTP 요청을 보내기 위한 라이브러리
import { useState } from 'react';
import styled from 'styled-components';
import { HOST } from '../../config.js'; //API의 기본 URL을 해당 config 파일에서 가져옴

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
	border-radius: 5px;
	background-color: var(--color-grey-1);

	outline: none;
`;

const Button = styled.button`
	height: 30px;
	margin-top: 20px;

	font-size: 16px;
	color: var(--color-white);

	border: none;
	border-radius: 10px;
	cursor: pointer;
	background-color: rgba(065, 105, 225, 0.5);
	&:hover {
		background-color: rgba(065, 105, 225, 0.9);
	}
`;

const SignUpForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const onChangeName = e => setName(e.target.value);

	const onChangeEmail = e => setEmail(e.target.value);

	const onChangePassword = e => setPassword(e.target.value);

	const onChangePasswordConfirm = e => setPasswordConfirm(e.target.value);

	const onSubmitSignUp = e => {
		e.preventDefault();

		if (
			name.length == 0 ||
			email.length == 0 ||
			password.length == 0 ||
			passwordConfirm.length == 0
		) {
			alert('모든 필드는 공백이면 안 됩니다.');
			return;
		}

		// 비밀번호 검증
		if (password != passwordConfirm) {
			alert('비밀번호가 같지 않습니다.');
			return;
		}

		//signUpRequest 객체를 생성하여 axios를 통해 서버에 POST 요청을 보냅니다.
		const signUpRequest = {
			username: name,
			email,
			password,
		};

		axios
			.post(`${HOST}/auth/signup`, signUpRequest, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(response => {
				console.log('회원가입 성공:', response.data);
				alert('회원가입이 성공하였습니다.\n' + '토큰: ' + response.data.token);
			})
			.catch(error => {
				if (error.response) {
					// 서버에서 반환한 오류 메시지 처리
					console.error('회원가입 오류 응답:', error.response.data);
					alert(`회원가입 실패: ${error.response.data.message}`);
				} else if (error.request) {
					console.error('서버 응답 없음:', error.request);
					alert('회원가입 실패: 서버 응답이 없습니다.');
				} else {
					console.error('요청 설정 오류:', error.message);
					alert(`회원가입 실패: ${error.message}`);
				}
			});
	};

	return (
		//폼이 제출될 때 onSubmitSignUp 함수가 호출
		<Form onSubmit={onSubmitSignUp}>
			<Title>회원가입</Title>
			<Input
				onChange={onChangeName}
				value={name}
				type="text"
				placeholder="Username"
			/>
			<Input
				onChange={onChangeEmail}
				value={email}
				type="text"
				placeholder="Email"
			/>
			<Input
				onChange={onChangePassword}
				value={password}
				type="password"
				placeholder="Password"
			/>
			<Input
				onChange={onChangePasswordConfirm}
				value={passwordConfirm}
				type="password"
				placeholder="Password Confirm"
			/>
			<Button>Sign Up</Button>
		</Form>
	);
};

export default SignUpForm;
