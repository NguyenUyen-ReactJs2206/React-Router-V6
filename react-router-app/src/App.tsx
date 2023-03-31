import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom'
import Staff from './pages/Staff'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  console.log(location)
  console.log(Object.fromEntries([...searchParams]), 'searchParams')

  useEffect(() => {
    console.log('searchParams', Object.fromEntries([...searchParams]))
  }, [searchParams])

  useEffect(() => {
    console.log('location', location)
  }, [location])
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} />
          {/* <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} />
           */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
