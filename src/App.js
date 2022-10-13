import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './componants/Home/Home';
import Phone from './componants/Phone/Phone';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('http://localhost:5000/phones/');
          },
          element: <Home></Home>
        },
        {
          path: '/phones/:id',
          loader: async () => {
            return fetch('http://localhost:5000/phones/')
          },
          element: <Phone></Phone>,
        }
      ]
    }

  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
