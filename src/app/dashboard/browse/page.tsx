import { getMatchingUsers } from '@/app/lib/getMatching'

interface User {
  id: string
  first_name: string
  last_name: string
  preference: string
  avatar: string
}

const Browse = async () => {
  const matchingUsers = await getMatchingUsers()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Browse Students</h1>
      <div>
        {matchingUsers.length === 0 && <p>No matching users found.</p>}
        {matchingUsers.map((user: User) => (
          <div
            className="card bg-base-100 w-64 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            key={user.id}
          >
            <figure className="w-64 aspect-square object-contain">
              <img src={user.avatar} alt={user.first_name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {user.first_name} {user.last_name}
              </h2>
              <p>more data will be here</p>
              <div className="card-actions justify-end">
                <p>Preference: {user.preference}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Browse
