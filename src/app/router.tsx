import LaunchesLComparePage from '@pages/launches/compare'
import LaunchesListPage from '@pages/launches/list'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LaunchesListPage />,
  },
  {
    path: '/compare',
    element: <LaunchesLComparePage />,
  },
])
