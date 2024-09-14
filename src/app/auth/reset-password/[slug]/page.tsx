import ResetPasswordForm from '@/app/components/ResetPasswordForm'
import React from 'react'
import Head from 'next/head';

const ResetPassword = ({ params }: { params: { slug: string } }) => {
  const getMail = params.slug

  return (
    <div>
      <Head>
      <title>Reset Password - Online Teaching Platform</title>
      <meta name="description" content="Reset your password to access online teaching resources, connect with online tutors, and manage your online classes." />
      <meta name="keywords" content="online teacher, online tutor, online teaching, online classes, reset password" />
      <meta property="og:title" content="Reset Password - Online Teaching Platform" />
      <meta property="og:description" content="Reset your password to access online teaching resources, connect with online tutors, and manage your online classes." />
      <meta property="og:image" content="/path/to/your-image.jpg" />
      <meta property="og:url" content="https://www.yoursite.com/reset-password" />
      <link rel="canonical" href="https://www.findtute.com/reset-password" />
    </Head>
      <ResetPasswordForm getMail={getMail} />
    </div>
  )
}

export default ResetPassword
