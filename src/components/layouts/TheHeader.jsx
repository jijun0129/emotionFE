import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../../store/userStore.js';

const Header = styled.header`
	width: 100%;
	height: 7vh;
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

const PageUl = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PageLi = styled.li`
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
					<PageUl>
						<PageLi>
							<Link to="/">감정상태 입력</Link>
						</PageLi>
						<PageLi>
							<Link to="/graph">감정그래프 보기</Link>
						</PageLi>
						<PageLi>
							<Link to="/sign" onClick={onClickLogout}>
								로그아웃
							</Link>
						</PageLi>
					</PageUl>
				</Nav>
			</Header>
		</>
	);
};

export default TheHeader;
