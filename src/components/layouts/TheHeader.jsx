import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../../store/userStore.js';
import Title from '../../assets/title.png'

const Header = styled.header`
	width: 100%;
	height: 7vh;
	background-color: rgba(065,105,225,0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		text-decoration: none;
		color: #121212;
		&:hover {
			text-decoration: underline;
		}
	}
`;
const TitleImg = styled.img`
	width: 40px;
	height: 40px;
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
	margin: 0 1rem;
`;

const ActiveLink = styled(NavLink)`
	text-decoration: none;
	color: #121212;
	&.active {
		text-decoration: underline;
	}

	&:hover {
		text-decoration: underline;
	}
`;

const LogoutButton = styled.button`
	background-color: white;
	color: #121212;
	padding: 0.5rem 1rem;
	cursor: pointer;
	border-radius: 5px;
	border-color: rgba(065,105,225,0.2);
	text-decoration: none;


	&:focus {
		outline: none;
	}
`;

const TheHeader = () => {
	const { logout } = useUserStore();
	const navigate = useNavigate();

	const onClickLogout = () => {
		logout();
		navigate('/sign');
	};

	return (
		<Header>
			<Nav>
				<h1>
					<NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}><TitleImg src={Title}/>Emotion</NavLink>
				</h1>
				<PageUl>
					<PageLi>
						<ActiveLink to="/" end>감정상태 입력</ActiveLink>
					</PageLi>
					<PageLi>
						<ActiveLink to="/graph">감정그래프 보기</ActiveLink>
					</PageLi>
					<PageLi>
						<LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
					</PageLi>
				</PageUl>
			</Nav>
		</Header>
	);
};

export default TheHeader;
