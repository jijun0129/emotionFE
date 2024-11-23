import styled from 'styled-components';

const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TitleDiv = styled.div`
	margin-top: 10px;
	background-color: #D9E1F9;
	padding: 5px 10vw;
	border-radius: 10px;
`;
const ContextDiv = styled.div`
	margin: 20px 5px;
	border: 3px solid #D9E1F9;
	border-radius: 10px;
	padding: 5px 7px;
`;

const EmotionActivity = () => {
	return (
		<CardDiv>
			<TitleDiv>명상</TitleDiv>
			<ContextDiv>
				<div>조용한 장소에서 편안하게 앉습니다.</div>
			<div>✔ 눈을 감고 깊고 천천히 숨을 쉬며 호흡에 집중합니다.</div>
			<div>조용한 장소에서 편안하게 앉습니다.</div>
			<div>눈을 감고 깊고 천천히 숨을 쉬며 호흡에 집중합니다.</div>
			<div>떠오르는 생각을 억지로 밀어내지 말고 자연스럽게 흘려보냅니다.</div>
			<div>현재 순간에 집중하며, 과거나 미래의 걱정을 내려놓습니다.</div>
			<div>매일 꾸준히 연습하세요..</div>
<div>떠오르는 생각을 억지로 밀어내지 말고 
자연스럽게 흘려보냅니다</div>
<div>현재 순간에 집중하며, 과거나 미래의 걱정을 내려놓습니다.</div>

<div>매일 꾸준히 연습하세요.</div>









			</ContextDiv>
		</CardDiv>
	);
};

export default EmotionActivity;
