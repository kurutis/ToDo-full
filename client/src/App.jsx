import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Root} from './routes/Root/Root'
import {Notes, loader as notesloader} from './routes/Notes/Notes'
import {Todo, loader as todoloader} from './routes/Todo/Todo'
import { Register } from './routes/Register/Register'
import { Login } from "./routes/Login/Login"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path:'Notes', 
        element:<Notes />, 
        loader: notesloader
      },
      {
        path: 'ToDo',
				element: <Todo/>,
				loader: todoloader
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />  
}

export default App
