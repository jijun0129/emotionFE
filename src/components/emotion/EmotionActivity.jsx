import styled from 'styled-components';

const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TitleDiv = styled.div`
	margin-top: 10px;
`;
const ContextDiv = styled.div`
	margin-top: 10px;
`;

const EmotionActivity = () => {
	return (
		<CardDiv>
			<TitleDiv>명상</TitleDiv>
			<ContextDiv>
				명상은 마음을 가라앉히고 내면의 평화를 찾는 데 도움이 되는 훌륭한
				방법입니다. 명상을 시작하는 몇 가지 기본적인 방법을 소개해 드릴게요: 1.
				조용한 장소 선택 편안하고 조용한 장소에서 명상하세요. 방해받지 않는
				환경이 중요합니다. 2. 편안한 자세 취하기 바닥이나 의자에 앉아서 허리를
				곧게 펴고 편안하게 앉으세요. 다리를 꼬거나 자연스럽게 놓아두면 됩니다.
				3. 호흡에 집중 눈을 감고 천천히 깊게 숨을 들이마시고 내쉬세요. 자신의
				호흡에 집중하면서 마음을 차분하게 합니다. 4. 생각 흘려보내기 생각이
				떠오를 때, 그 생각을 밀어내지 말고 그냥 흘려보내세요. 다시 호흡에
				집중하세요. 5. 마인드풀니스 현재 순간에 집중하는 연습입니다. 지금 이
				순간에만 집중하고, 과거나 미래의 걱정에서 벗어나세요. 6. 짧게 시작하기
				처음에는 짧은 시간부터 시작해 보세요. 5분 정도의 명상으로 시작한 후 점차
				시간을 늘려나가세요. 7. 일관성 유지 규칙적으로 명상을 실천하세요. 매일
				같은 시간에 명상을 하면서 습관을 들이는 것이 좋습니다.
			</ContextDiv>
		</CardDiv>
	);
};

export default EmotionActivity;
