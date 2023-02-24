import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Wallet from './components/Wallet/Wallet';
import NewCard from './components/NewCard/NewCard';

import './App.css';

function App() {
  function cardNumberGenerator() {
    let rndNum = Math.ceil(Math.random() * 1e17).toString();
    let newRndNum = "";
    let startVal = 0;
    let endVal = 4;
    for (let i = 0; i < 4; i++) {
      newRndNum += rndNum.substring(startVal, endVal) + " ";
      startVal += 4;
      endVal += 4;
    }
    return newRndNum;
  }

  const generatedCardNumber = cardNumberGenerator();

  const [cards, setCards] = useState([])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wallet cards={cards} setCards={setCards} />
    },
    {
      path: "/newcard",
      element: <NewCard cards={cards} setCards={setCards} generatedCardNumber={generatedCardNumber} />
    }
  ])

  return (
    <main className="app-main">
      <RouterProvider router={router} />
    </main>
  )
}

export default App;
