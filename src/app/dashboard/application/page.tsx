import { getApplication } from '@/app/lib/getApplication'
import { cookies } from 'next/headers'

interface User {
  id: string
  email: string
  role: string
  username: string
}

const Application = async () => {
  const userCookies = cookies().get('user')
  if (!userCookies) return

  const user: User = JSON.parse(userCookies.value)

  const application = await getApplication(user.id)

  return (
    <div>
      <div className=" bg-base-100 w-full p-8 shadow-xl">
        {application ? (
          <>
            <div>
              <h1 className="text-3xl font-bold mb-4">Application</h1>
            </div>
            <div className="flex justify-start flex-wrap gap-20">
              <div>
                <p className="font-semibold">Name</p>
                <p className="font-bold">{application.name}</p>
              </div>
              <div>
                <p className="font-semibold">Monthly Rate</p>
                <p className="font-bold">Rs.{application.monthly_rate}/month</p>
              </div>
              <div>
                <p className="font-semibold">Hourly Rate</p>
                <p className="font-bold">Rs.{application.hourly_rate}/hr</p>
              </div>
              <div>
                <p className="font-semibold">Teaching Preference</p>
                <p className="font-bold">{application.preference}</p>
              </div>
              <div>
                <p className="font-semibold">Subjects</p>
                {application.subjects.map((subject: string) => (
                  <p key={subject} className="font-bold">
                    {subject}
                  </p>
                ))}
              </div>
              <div>
                <p className="font-semibold">Grades</p>
                {application.grades.map((grade: string) => (
                  <p key={grade} className="font-bold">
                    {grade}
                  </p>
                ))}
              </div>
              <div>
                <p className="font-semibold">Your Lattitude</p>
                <p className="font-bold">{application.lattitude}</p>
              </div>
              <div>
                <p className="font-semibold">Your Longitude</p>
                <p className="font-bold">{application.longitude}</p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <p className="font-semibold">No application found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Application
