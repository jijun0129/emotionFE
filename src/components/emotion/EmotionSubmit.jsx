import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	width: 80%;

	display: flex;
	flex-direction: column;
`;

const Button = styled.button`
	height: 35px;
	margin-top: 10px;

	font-size: 16px;
	color: var(--color-white);
	background-color: var(--color-blue-1);

	border: none;
	border-radius: 10px;
	cursor: pointer;
`;

const EmotionSubmit = () => {
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
		if (emotion && stress) {
			alert(`기분: ${emotion} 스트레스: ${stress}`);
		} else {
			alert('기분과 스트레스를 입력해주세요.');
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div>
				{[1, 2, 3].map(star => (
					<label key={star}>
						<input
							type="radio"
							value={star}
							checked={emotion === star.toString()}
							onChange={handleEmotionChange}
						/>
						{star} ★
					</label>
				))}
			</div>
			<div>
				{[1, 2, 3, 4, 5].map(star => (
					<label key={star}>
						<input
							type="radio"
							value={star}
							checked={stress === star.toString()}
							onChange={handleStressChange}
						/>
						{star} ★
					</label>
				))}
			</div>
			<Button type="submit">제출하기</Button>
		</Form>
	);
};

export default EmotionSubmit;
