import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error'
import HomePage from './pages/Home'
import EventsRootLayout from './pages/EventsRoot'
import EventsPage, {loader as eventsLoader} from './pages/Events'
import EventDetailPage, {loader as eventDetailLoader} from './pages/EventDetail'
import NewEventPage from './pages/NewEvent'
import EditEventPage from './pages/EditEvent'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{index: true, element: <HomePage />},
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{index: true, element: <EventDetailPage />},
							{path: 'edit', element: <EditEventPage />},
						],
					},
					{path: 'new', element: <NewEventPage />},
				],
			},
		],
	},
])



function App() {
	return <RouterProvider router={router} />
}

export default App
