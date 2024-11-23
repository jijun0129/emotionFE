import styled from 'styled-components';

const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TitleDiv = styled.div`
	margin-top: 10px;
	background-color: #d9e1f9;
	padding: 5px 10vw;
	border-radius: 10px;
`;
const ContextDiv = styled.div`
	max-width: 300px;
	margin: 20px 5px;
	border: 3px solid #d9e1f9;
	border-radius: 10px;
	padding: 5px 7px;
`;

const EmotionActivity = ({ title, content }) => {
	return (
		<CardDiv>
			<TitleDiv>{title}</TitleDiv>
			<ContextDiv>{content}</ContextDiv>
		</CardDiv>
	);
};

export default EmotionActivity;
