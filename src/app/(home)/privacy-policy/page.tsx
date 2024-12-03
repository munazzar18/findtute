import React from 'react'
import Head from 'next/head'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.findtute.com/privacy-policy" />
        <title>Privacy Policy | Best Online Teachers</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we handle and protect your personal information."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Data Protection, Online Teaching Privacy, Tutor Privacy"
        />
        <meta
          property="og:title"
          content="Privacy Policy | Best Online Teachers"
        />
        <meta
          property="og:description"
          content="Learn about how we protect your personal information and our data handling practices."
        />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/privacy-policy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy | Best Online Teachers"
        />
        <meta
          name="twitter:description"
          content="Read about our privacy practices and how we safeguard your data."
        />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>

      <div className="px-4 sm:px-8 lg:px-16 xl:px-32">
        <div className="card shadow-xl">
          <div className="card-body">
            <div className="flex flex-col items-center justify-center w-full mb-6">
              <div>
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
              </div>
              <div>
                <p className="text-lg">Thank you for choosing Findtute.com!</p>
              </div>
              <div>
                <p className="text-lg">
                  This Privacy Policy outlines how we collect, use, and protect
                  your personal information.
                </p>
              </div>

              <div className="divider"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Why do we need your personal information?
              </h3>
              <p className="text-md mb-2">
                Findtute.com offers a range of online teaching and tutoring and
                also help you to find tutors near you to learn from them onsite.
                We collect personal information to provide you with the best
                possible experience. Findtute.com personalized one to one online
                tutoring sessions. We need to have some persional information to
                able to serve you better.
              </p>
              <h4 className="text-md font-bold mb-4">
                Please find the details of your information that we collect, why
                we need your information and how we use it.
              </h4>
              <div className="mx-4 mb-4">
                <ul>
                  <li className="list-disc text-md">
                    Username will be used on the site to identify you. This is
                    what the tutor/student will see when they respond to your
                    question(s). You can choose to keep your username display
                    very different from your real name.
                  </li>
                  <li className="list-disc text-md">
                    Your email and cell phone number are primary means of
                    communication
                  </li>
                  <li className="list-disc text-md">
                    Your profile picture will be displayed on findtute.com
                  </li>
                  <li className="list-disc text-md">
                    We do not store credit card information on our site
                  </li>
                  <li className="list-disc text-md">
                    Your real name and address is used for verification purposes
                    and location is used to connect with tutors/students nearby
                  </li>
                  <li className="list-disc text-md">
                    Your payment amount and mode will be shared with the
                    vendor(company), that processes the payment against your
                    profile
                  </li>
                  <li className="list-disc text-md">
                    Your login timings and usage of TutorBees.net services (for
                    example, time, duration, search terms or surveys that you
                    respond to) is stored with us and it is used to meaningfully
                    communicate with you and to personalize the service for you
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-md font-bold">
                  The information that you provide to us is yours and you can
                  update it any time.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  With whom and why do we share your information?
                </h2>
              </div>
              <div>
                <p className="text-md">
                  We do not store your credit card information with us. For
                  credit card payments, we use Third Party services..
                </p>
                <p>
                  Note that your information may be shared with legal
                  authorities if ever needed.
                </p>
                <p>
                  If you do not agree with any provisions of this Privacy
                  Policy, you should not use this website. For any questions or
                  concerns, please contact us at{' '}
                  <a className="text-blue-700" href="mailto:info@findtute.com">
                    info@findtute.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
