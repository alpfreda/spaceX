import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'

const App = (): JSX.Element => {
  return (
    <div className='wrapper'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
