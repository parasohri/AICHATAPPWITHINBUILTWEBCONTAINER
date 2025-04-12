import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './routes/Routes'
import {UserProvider} from './context/user.context.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
      <Routes/>
      </UserProvider>
    </>
  )
}

export default App
