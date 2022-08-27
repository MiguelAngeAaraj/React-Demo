import { Route, Routes } from 'react-router-dom'
import './App.css'
import ExerciseType from './Pages/ExerciseType'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Footer from './components/HomeComponents/Footer'
import PageNotFound from './Pages/PageNotFound'
import { Stack } from '@mui/system'
function App() {
  return (
    <>
      <Stack flexDirection="column">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact={true} path="/exercise/:id" element={<ExerciseType />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Stack>
    </>
  )
}

export default App
