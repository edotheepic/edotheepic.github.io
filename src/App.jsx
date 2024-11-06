
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './Pages/About'
import Education from './Pages/Education'
import Experience from './Pages/Experience'
import Skills from './Pages/Skills'
import NoPage from './Pages/NoPage'

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<About/>}></Route>
                    <Route path="education" element={<Education/>}></Route>
                    <Route path="experience" element={<Experience/>}></Route>
                    <Route path="skills" element={<Skills/>}></Route>
                    <Route path="*" element={<NoPage/>}></Route>
                </Route>
            </Routes>
      </Router>
    </>
  )
}

export default App
