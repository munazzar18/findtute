import LogoutButton from '@/app/components/LogoutButton'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Logout() {
  const logoutAction = async () => {
    'use server'
    const cookieStore = cookies()
    cookieStore.delete('access_token')
    cookieStore.delete('user')
    revalidatePath('/auth/login')
    redirect('/auth/login')
    return
  }

  return <LogoutButton logoutAction={logoutAction} />
}
