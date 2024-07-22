import { react } from 'react'

import './App.css'
import Topbar from './components/navbar/Topbar'
import Displaycontents from './components/display1/Displaycontent'
import Updates from './components/Updates/Updates'
import Makeit from './components/Makeit/Makeit'

function App() {
  

  return (
    <main>
      <Topbar />
      <Displaycontents />
      <Updates />
      <Makeit />
    </main>
  )
}

export default App
