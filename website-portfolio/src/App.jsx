import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {
  const pages = {
    home: <HomePage />,
  }

  const [page, setPage] = useState('home')

  return (
    <>
      <Header />
      {pages[page]}
    </>
  )
}

export default App
