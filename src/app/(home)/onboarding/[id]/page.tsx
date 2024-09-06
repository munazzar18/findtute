import UserProfileData from '@/app/components/UserProfileData'

const TeacherProfile = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-24 items-center justify-between mt-4 sm:mt-4 md:mt-8 lg:mt-16 mb-8 sm:mb-8 md:mb-16 lg:mb-24">
      <UserProfileData />
    </div>
  )
}

export default TeacherProfile
