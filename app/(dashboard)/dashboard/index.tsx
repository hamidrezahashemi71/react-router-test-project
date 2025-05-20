import { Outlet } from 'react-router'

export default function DashboardPage() {
  return (
    <div className='bg-yellow-200'>
      This is dashboard page
      <Outlet />
    </div>
  )
}
