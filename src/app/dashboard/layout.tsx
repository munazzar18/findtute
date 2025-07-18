import UserSideBar from '@/app/components/UserSideBar'
import CustomToast from '@/utils/customToast'
import UserStatus from '@/utils/userStatus'
import { cookies } from 'next/headers'
import Browse from './browse/page'

interface User {
  id: string
  username: string
  email: string
  role: string
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userCookies = cookies().get('user')
  const token = cookies().get('access_token')?.value
  let user: User | null = null

  try {
    if (userCookies && userCookies.value) {
      user = JSON.parse(userCookies.value)
    }
  } catch (error) {
    console.error('Error parsing user cookie:', error)
  }

  if (!token) return

  return (
    <>
      <div className="flex h-screen min-w-0">
        <UserSideBar />

        <UserStatus token={token} status />
        {/* <CustomToast token={token} currentUserId={user?.id ?? ''} /> */}

        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 p-4 lg:p-6 overflow-y-auto bg-primary-foreground">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
