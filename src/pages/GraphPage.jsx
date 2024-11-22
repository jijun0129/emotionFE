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
	margin-top: 10px;
`;
const GraghDiv = styled.div`
	margin-top: 10px;
`;
const ActivityDiv = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

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
					<EmotionActivity />
					<EmotionActivity />
					<EmotionActivity />
				</ActivityDiv>
			</Main>
		</>
	);
};
export default GraphPage;
