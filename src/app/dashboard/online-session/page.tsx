import { cookies } from 'next/headers'

interface User {
  id: string
  username: string
  email: string
  role: string
}

const Page = () => {
  const token = cookies().get('access_token')?.value
  const user: User = JSON.parse(cookies().get('user')?.value || '{}')

  return <div>Online Session</div>
}

export default Page
