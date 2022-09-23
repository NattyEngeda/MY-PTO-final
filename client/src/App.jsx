import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './layouts/Header'
import Project from './pages/Project'
import Blog from './pages/Blog'
import Footer from './layouts/Footer'

function App() {
  const [talkopened, setTalkOpened] = useState(false);

  return (
   <Router>
    <div className='relative'>
      <Header/>
      <main className='min-h-screen scroll-smooth'>
      <Routes>
          <Route path='/' element={<Home talkopened={talkopened} setTalkOpened={setTalkOpened}/>}/>
          <Route path='/project' element={<Project/>}/> 
          <Route path='/blog' element={<Blog/>}/>
       </Routes>
      </main>
      <Footer setTalkOpened={setTalkOpened}/>
      </div>
   </Router>
  )
}

export default App
