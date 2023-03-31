import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: 'Redirect from notfound'
      }) //ve trang dau
      // navigate(-1) ve trang dang sd
    }, 2000)
  }, [navigate])
  return <div>Not Found</div>
  // <Navigate to='/' />
}
