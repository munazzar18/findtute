'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const logoutAction = async () => {

    const cookieStore = cookies()
    cookieStore.delete('access_token')
    cookieStore.delete('user')
    revalidatePath('/auth/login')
    redirect('/auth/login')
    return
}

export default logoutAction