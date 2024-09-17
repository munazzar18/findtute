import { cookies, headers } from 'next/headers'
import Sidebar from '../components/Sidebar'
import AdminSidebar from '../components/AdminSidebar'

interface User {
  id: string
  email: string
  role: string
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //   const userCookies = cookies().get('user')

  //   let user: User | null = null

  //   try {
  //     if (userCookies && userCookies.value) {
  //       user = JSON.parse(userCookies.value)
  //     }
  //   } catch (error) {
  //     console.error('Error parsing user cookie:', error)
  //   }

  return (
    <>
      <div className="flex min-w-0">
        <AdminSidebar />
        <div className="flex-1 p-6">
          <main className="flex-grow p-6 overflow-auto bg-primary-foreground">
            {children}
          </main>{' '}
        </div>
      </div>
    </>
  )
}
