import UserProfileData from '@/app/components/UserProfileData'
import Head from 'next/head';

const TeacherProfile = () => {
  return (
    <>  
      <Head>
        <title>Onboarding | Best Online Teachers</title>
        <meta name="description" content="Get started with our onboarding process for online teaching and tutoring services." />
        <meta name="keywords" content="Onboarding, Online Teaching Setup, Tutor Onboarding, Education Services" />
        <meta property="og:title" content="Onboarding | Best Online Teachers" />
        <meta property="og:description" content="Begin your journey with our online teaching services through our onboarding process." />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/onboarding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Onboarding | Best Online Teachers" />
        <meta name="twitter:description" content="Start with our onboarding process for a smooth experience with our services." />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>


     <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-24 items-center justify-between mt-4 sm:mt-4 md:mt-8 lg:mt-16 mb-8 sm:mb-8 md:mb-16 lg:mb-24">
      <UserProfileData />
         </div>



    </>
  )
}

export default TeacherProfile
