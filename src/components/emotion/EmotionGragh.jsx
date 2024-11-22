import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from 'chart.js';

const Title = styled.h2`
	text-align: center;
	color: #333;
	margin-bottom: 20px;
`;

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const EmotionGraph = () => {
	const data = {
		labels: ['월', '화', '수', '목', '금', '토', '일'],
		datasets: [
			{
				label: '감정 점수',
				data: [3, 4, 2, 5, 4, 3, 4],
				fill: false,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div>
			<Title>감정 그래프</Title>
			<Line data={data} options={options} />
		</div>
	);
};

export default EmotionGraph;
