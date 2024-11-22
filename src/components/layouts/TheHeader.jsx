import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../../store/userStore.js';

const Header = styled.header`
	width: 100%;
	height: 5rem;
	background-color: #727272;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Nav = styled.nav`
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Ul = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Li = styled.li`
	margin: 0 0.5rem;
`;

const TheHeader = () => {
	const { logout } = useUserStore();

	const onClickLogout = () => {
		logout();
	};

	return (
		<>
			<Header>
				<Nav>
					<h1>
						<Link to="/">Emotion</Link>
					</h1>
					<Ul>
						<Li>
							<Link to="/">감정상태 입력</Link>
						</Li>
						<Li>
							<Link to="/graph">감정그래프 보기</Link>
						</Li>
						<Li>
							<Link to="/sign" onClick={onClickLogout}>
								로그아웃
							</Link>
						</Li>
					</Ul>
				</Nav>
			</Header>
		</>
	);
};

export default TheHeader;
