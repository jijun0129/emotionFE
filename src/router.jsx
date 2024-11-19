import { createBrowserRouter } from 'react-router-dom';
import SubmitPage from './pages/submitPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SubmitPage />,
	},
]);

export default router;
