import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
