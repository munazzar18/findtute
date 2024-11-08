import Link from 'next/link'
import { cookies } from 'next/headers'
import UserStatus from '@/utils/userStatus'

const Dashboard = () => {
  const token = cookies().get('access_token')?.value

  if (!token) return

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      {/* <UserStatus token={token} /> */}
    </div>
  )
}

export default Dashboard
