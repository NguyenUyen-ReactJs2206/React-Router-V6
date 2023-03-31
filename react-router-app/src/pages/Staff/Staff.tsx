import { Outlet, NavLink, Routes, Route } from 'react-router-dom'
import StaffItem from '../../components/StaffItem'
import AddStaff from '../../components/AddStaff'
import StaffList from '../../components/StaffList'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) =>
                `active inline-block rounded-t-lg border-b-2 ${
                  isActive
                    ? 'border-blue-600 p-4 text-blue-600'
                    : 'inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 '
                } `
              }
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) =>
                `active inline-block rounded-t-lg border-b-2 ${
                  isActive
                    ? 'border-blue-600 p-4 text-blue-600'
                    : 'inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 '
                } `
              }
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path=':id' element={<StaffItem />} />
        <Route path='add' element={<AddStaff />} />
        <Route index element={<StaffList />} />
      </Routes>
      {/* <Outlet context={{ profile: { name: 'uyen' } }} /> */}
    </div>
  )
}
