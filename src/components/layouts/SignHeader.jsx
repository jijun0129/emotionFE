import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	width: 100%;
	height: 7vh;
	display: flex;
	justify-content: center;
	align-items: center;
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
						<Link to="/sign">Emotion</Link>
					</h1>
				</Nav>
			</Header>
		</>
	);
};

export default SignHeader;
