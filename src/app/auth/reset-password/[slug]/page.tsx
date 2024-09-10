import ResetPasswordForm from '@/app/components/ResetPasswordForm'
import React from 'react'

const ResetPassword = ({ params }: { params: { slug: string } }) => {
  const getMail = params.slug

  return (
    <div>
      <ResetPasswordForm getMail={getMail} />
    </div>
  )
}

export default ResetPassword
