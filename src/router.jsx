import { createBrowserRouter } from 'react-router-dom';
import SubmitPage from './pages/submitPage.jsx';
import GraphPage from './pages/GraphPage.jsx';
import SignPage from './pages/SignPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SubmitPage />,
	},
	{
		path: '/graph',
		element: <GraphPage />,
	},
	{
		path: '/sign',
		element: <SignPage />,
	},
]);

export default router;
