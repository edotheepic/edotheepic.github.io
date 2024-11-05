
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<About/>}></Route>
                </Route>
            </Routes>
      </Router>
    </>
  )
}

export default App
