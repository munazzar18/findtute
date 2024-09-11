import React from 'react'
import { Metadata } from 'next';





export const metadata: Metadata = {
  title: 'Blog Post Title | Best Online Teachers',
  description:
    'only platform find teachers onsite or online for learning online or onsite,find expert online tutors for academic success,Looking for top-notch teachers online for online teaching? Look no further! Our expert online tutors offer personalized instruction to help you succeed. Sign up now and experience the difference with our online teaching tutors',
    keywords: 'Virtual Learning,Remote Tutors,Online Classroom,Live Online Lessons,Digital Tutors,E-Learning,Interactive Online Classes,Online Study Help,Online Education Services,Online Learning Platforms',
    openGraph:{
      title: 'Find Online Tute',
      description:
      'only platform find teachers onsite or online for learning online or onsite,find expert online tutors for academic success,Looking for top-notch teachers online for online teaching? Look no further! Our expert online tutors offer personalized instruction to help you succeed. Sign up now and experience the difference with our online teaching tutors',
      url:"https://findtute.com/",
      images:["https://findtute.com/assets/images/shapes/bread-thumb.png","https://findtute.com/assets/images/about/about-1.png","https://findtute.com/assets/images/blog/blog-details-1.png","https://findtute.com/assets/images/blog/blog-3-2.png","https://findtute.com/assets/images/blog/blog-3-3.png"]

    }
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
