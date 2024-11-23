import styled from 'styled-components';
import EmotionActivity from '../components/emotion/EmotionActivity.jsx';
import EmotionGraph from '../components/emotion/EmotionGragh.jsx';
import EmotionText from '../components/emotion/EmotionText.jsx';
import TheHeader from '../components/layouts/TheHeader.jsx';

const Main = styled.main`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TextDiv = styled.div`
	padding: 3vh 25vw;
	background-color: #d9e1f9;
	margin-top: 40px;
	border-radius: 10px;
`;
const GraghDiv = styled.div`
	margin: 20px;
	width: 500px;
`;
const ActivityDiv = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const activity = [
	{
		title: '명상',
		content:
			'조용한 장소에서 편안하게 앉습니다. 눈을 감고 깊고 천천히 숨을 쉬며 호흡에 집중합니다. 조용한 장소에서 편안하게 앉습니다.눈을 감고 깊고 천천히 숨을 쉬며 호흡에 집중합니다.',
	},
	{
		title: '스트레칭, 요가',
		content:
			'가벼운 스트레칭이나 요가는 긴장을 풀어주고, 몸과 마음을 정리하는 데 도움을 줍니다. 특히, 요가는 심호흡과 함께 진행되므로 마음의 안정도 찾을 수 있습니다. 또한, 할 일 체크리스트를 작성하고, 성취감을 느끼는 것도 좋은 방법입니다.',
	},
	{
		title: '힐링 음악, ASMR 듣기',
		content:
			'음악이나 ASMR은 감정을 안정시켜주는 데 매우 유효합니다. 자연의 소리나 편안한 음악을 듣거나, ASMR 콘텐츠를 통해 스트레스를 완화하고 기분을 편안하게 만들 수 있습니다.',
	},
];

const GraphPage = () => {
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
				<TextDiv>
					<EmotionText />
				</TextDiv>
				<GraghDiv>
					<EmotionGraph />
				</GraghDiv>
				<ActivityDiv>
					{activity.map(acti => (
						<EmotionActivity
							key={acti.title}
							title={acti.title}
							content={acti.content}
						/>
					))}
				</ActivityDiv>
			</Main>
		</>
	);
};
export default GraphPage;
