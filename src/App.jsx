import './App.css'
import Home from './Pages/Home/Home'
import Header from './Component/Header/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
    <>
    <Header />
    <Home />
    </>
    </BrowserRouter>
  )
}

export default App
