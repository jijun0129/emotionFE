import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../assets/title.png'

const Header = styled.header`
	width: 100%;
	height: 7vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleImg = styled.img`
	width: 40px;
	height: 40px;
`;

const Nav = styled.nav`
	width: 100%;
	height: 7vh;
	background-color: rgba(065,105,225,0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		text-decoration: none;
		color: #121212;
	}
`;

const SignHeader = () => {
	return (
		<>
			<Header>
				<Nav>
					<h1>
						<Link to="/sign" style={{ display: 'flex', alignItems: 'center' }}><TitleImg src={Title}/>Emotion</Link>
					</h1>
				</Nav>
			</Header>
		</>
	);
};

export default SignHeader;
