import { useState } from 'react'
import { Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Wallet from './components/Wallet/Wallet';
import NewCard from './components/NewCard/NewCard';

import './App.css';

function App() {
  const [cards, setCards] = useState([]) // Ändra denna till tom array sen när det är skarpt läge

  function addCardToArray() {

  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wallet cards={cards} />
    },
    {
      path: "/newcard",
      element: <NewCard setCards={setCards} />
    }
  ])

  return (
    <main className="app-main">
      <RouterProvider router={router} />
    </main>
  )
}

export default App;
