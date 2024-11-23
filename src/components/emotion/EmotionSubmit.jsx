import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOST } from '../../config.js';
import axios from 'axios';
import useUserStore from '../../store/userStore.js';
import styled from 'styled-components';
import EmptyStress from '../../assets/emptyStress.svg';
import FullStress from '../../assets/fullStress.svg';
import Meh from '../../assets/meh.svg';
import Frown from '../../assets/frown.svg';
import Smile from '../../assets/smile.svg';

const Form = styled.form`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const Name = styled.div`
	margin-top: 20px;
	font-size: 18px;
	display: flex;
	justify-content: center;
`;
const Content = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: center;
`;

const Button = styled.button`
	height: 35px;
	margin: 20px 100px;

	font-size: 16px;
	color: var(--color-white);
	background-color: rgba(065, 105, 225, 0.5);
	&:hover {
		background-color: rgba(065, 105, 225, 0.9);
	}
	border: none;
	border-radius: 10px;
	cursor: pointer;
`;

const HiddenRadio = styled.input`
	display: none;
`;
const LabelEmotion = styled.label`
	cursor: pointer;
	margin: 10px;
	img {
		width: 70px;
		height: 70px;
		opacity: ${props => (props.checked ? 1 : 0.5)};
	}
`;

const LabelStress = styled.label`
	cursor: pointer;
	margin: 10px;
	img {
		width: 50px;
		height: 60px;
	}
`;

const EmotionSubmit = () => {
	const navigate = useNavigate();
	const { username } = useUserStore();
	const [emotion, setEmotion] = useState(null);
	const [stress, setStress] = useState(null);

	const handleEmotionChange = e => {
		setEmotion(e.target.value);
	};
	const handleStressChange = e => {
		setStress(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const LogRequest = {
			username,
			mood: emotion,
			stress,
		};

		axios
			.post(`${HOST}/emotions/log`, LogRequest, {
				headers: {
					'Content-Type': 'application/json', // JSON 형식 명시
				},
			})
			.then(response => {
				console.log('회원가입 성공:', response.data); // 성공 시 데이터 출력
				alert('회원가입이 성공하였습니다.');
			})
			.catch(error => {
				if (error.response) {
					// 서버에서 반환한 오류 메시지 처리
					console.error('회원가입 오류 응답:', error.response.data);
					alert(`회원가입 실패: ${error.response.data.message}`);
				} else if (error.request) {
					// 요청이 전송되었으나 응답이 없는 경우
					console.error('서버 응답 없음:', error.request);
					alert('회원가입 실패: 서버 응답이 없습니다.');
				} else {
					// 기타 에러 처리
					console.error('요청 설정 오류:', error.message);
					alert(`회원가입 실패: ${error.message}`);
				}
			});

		if (emotion && stress) {
			navigate('/graph');
		} else {
			alert('기분과 스트레스를 입력해주세요.');
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Name>기분</Name>
			<Content>
				<HiddenRadio
					type="radio"
					value="1"
					id="radio-1"
					checked={emotion === '1'}
					onChange={handleEmotionChange}
				/>
				<LabelEmotion htmlFor="radio-1" checked={emotion === '1'}>
					<img src={Frown} alt="Frown" />
				</LabelEmotion>
				<HiddenRadio
					type="radio"
					value="2"
					id="radio-2"
					checked={emotion === '2'}
					onChange={handleEmotionChange}
				/>
				<LabelEmotion htmlFor="radio-2" checked={emotion === '2'}>
					<img src={Meh} alt="Meh" />
				</LabelEmotion>
				<HiddenRadio
					type="radio"
					value="3"
					id="radio-3"
					checked={emotion === '3'}
					onChange={handleEmotionChange}
				/>
				<LabelEmotion htmlFor="radio-3" checked={emotion === '3'}>
					<img src={Smile} alt="Smiley" />
				</LabelEmotion>
			</Content>
			<Name>스트레스</Name>
			<Content>
				{[1, 2, 3, 4, 5].map(stressCount => (
					<label key={stressCount}>
						<HiddenRadio
							type="radio"
							value={stressCount}
							id={`stress-${stressCount}`}
							checked={stress === stressCount.toString()}
							onChange={handleStressChange}
						/>
						<LabelStress
							htmlFor={`stress-${stressCount}`}
							checked={stress === stressCount.toString()}
						>
							{stress >= stressCount.toString() ? (
								<img src={FullStress} alt={`FullStress ${stressCount}`} />
							) : (
								<img src={EmptyStress} alt={`EmptyStress ${stressCount}`} />
							)}
						</LabelStress>
					</label>
				))}
			</Content>
			<Button type="submit">제출</Button>
		</Form>
	);
};

export default EmotionSubmit;
