import React from 'react'
import Head from 'next/head'
import { FaAngleRight } from 'react-icons/fa'
import { FaLaptopCode, FaBookOpen, FaChalkboard, FaUsers } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'
import { FaChalkboardTeacher, FaUserGraduate, FaUserTie } from 'react-icons/fa'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Link from 'next/link'
import { FaXmark } from 'react-icons/fa6'

const Servicedetails = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.findtute.com/pricing" />
        <title>Pricing | FindTute</title>
        <meta
          name="description"
          content="Detailed information about our online teaching services and what we offer."
        />
        <meta
          name="keywords"
          content="Pricing, Online Teaching Services, Tutoring Information, Education Services"
        />
        <meta property="og:title" content="Pricing | Best Online Teachers" />
        <meta
          property="og:description"
          content="Explore detailed information about the services we provide for online teaching and tutoring."
        />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing | Best Online Teachers" />
        <meta
          name="twitter:description"
          content="Learn more about the specifics of our online teaching and tutoring services."
        />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>

      <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
          <div className="container">
            <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
              <div className="">
                <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">
                  Pricing
                </h2>
                <ul className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2">
                  <li>
                    <Link href="/" className="lg:text-[28px] text-xl font-bold">
                      Home
                    </Link>
                  </li>
                  <li>
                    <FaAngleRight />
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="lg:text-[28px] text-xl font-bold"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="assets/images/shapes/bread-cat.png"
                  alt="cat-img"
                  className="absolute bottom-5 -left-[30px] animate-up-down"
                />
                <img
                  src="assets/images/shapes/bread-thumb.png"
                  alt="thumb-img"
                  className="sm:max-h-full max-h-60"
                />
                <img
                  src="assets/images/shapes/bread-child.png"
                  alt="child-img"
                  className="absolute bottom-0 right-0 animate-left-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <h2
              className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] mt-2.5 text-center max-w-[516px] wow fadeInUp"
              data-wow-delay=".3s"
            >
              Prices are for tutors only
            </h2>
            <p className="text-primary-foreground font-bubblegum-sans text-[19px] wow fadeInUp">
              Choose your plan
            </p>
          </div>
          <div className="lg:pt-15 pt-10">
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-7.5 gap-x-7.5 lg:gap-x-0">
              <div
                className="rounded-[10px] shadow-[-20px_4.8px_24.4px_-6px_rgba(19,16,34,0.10)] bg-background wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="bg-warm py-[15px] rounded-tr-[10px] rounded-tl-[10px]">
                  <p className="lg:text-[28px] text-2xl font-bold text-center text-muted-foreground">
                    Monthly Plan
                  </p>
                </div>
                <div className="lg:pt-7.5 pt-6 lg:pb-10 pb-7 lg:px-10 px-5">
                  <h2 className="lg:text-[70px] md:text-[50px] text-4xl lg:leading-[117%] md:leading-[110%] leading-[100%] font-bold text-green">
                    Rs.499
                    <span className="md:text-2xl text-lg font-semibold text-muted-foreground md:leading-[140%] leading-[130%]">
                      /mo
                    </span>{' '}
                  </h2>
                  <ul className="lg:pt-7.5 pt-5 flex gap-3 flex-col">
                    <li className="flex items-center gap-5">
                      <i className="fa-solid fa-angles-right text-secondary-foreground text-sm"></i>{' '}
                      <span>Monthly Subscription</span>{' '}
                    </li>
                    <li className="flex items-center gap-5">
                      <FaAngleRight className="text-secondary-foreground text-sm" />
                      <span>Get started with montly plan</span>{' '}
                    </li>
                    <li className="flex items-center gap-5">
                      <FaAngleRight className="text-secondary-foreground text-sm" />
                      <span>Inclusive of all taxes</span>{' '}
                    </li>
                    <li className="flex items-center gap-5">
                      <FaAngleRight className="text-secondary-foreground text-sm" />
                      <span>No hidden charges</span>{' '}
                    </li>
                  </ul>
                  <div className="mt-10 flex justify-center">
                    <Link
                      href="/dashboard/payment-request?plan=monthly"
                      className="border border-primary rounded-[10px] btn "
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="rounded-[10px] shadow-[-20px_4.8px_24.4px_-6px_rgba(19,16,34,0.10)] bg-background wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="bg-primary py-[15px] rounded-tr-[10px] rounded-tl-[10px]">
                  <p className="lg:text-[28px] text-2xl font-bold text-center text-cream-foreground">
                    Yearly Plan
                  </p>
                </div>
                <div className="lg:pt-7.5 pt-6 lg:pb-10 pb-7 lg:px-10 px-5">
                  <h2 className="lg:text-[70px] md:text-[50px] text-4xl lg:leading-[117%] md:leading-[110%] leading-[100%] font-bold text-green">
                    Rs.3999
                    <span className="md:text-2xl text-lg font-semibold text-muted-foreground md:leading-[140%] leading-[130%]">
                      /yr
                    </span>{' '}
                  </h2>
                  <ul className="lg:pt-7.5 pt-5 flex gap-3 flex-col">
                    <li className="flex items-center gap-5">
                      <i className="fa-solid fa-angles-right text-secondary-foreground text-sm"></i>{' '}
                      <span>Yearly Subscription</span>{' '}
                    </li>
                    <li className="flex items-center gap-5">
                      <FaAngleRight className="text-secondary-foreground text-sm" />
                      <span>Get started with yearly plan</span>{' '}
                    </li>
                    <li className="flex items-center gap-5">
                      <FaAngleRight className="text-secondary-foreground text-sm" />
                      <span>Inclusive of all taxes</span>{' '}
                    </li>
                    <li className="flex items-center gap-5">
                      <FaAngleRight className="text-secondary-foreground text-sm" />
                      <span>No hidden charges</span>{' '}
                    </li>
                  </ul>
                  <div className="mt-10 flex justify-center">
                    <Link
                      href="/dashboard/payment-request?plan=yearly"
                      className="bg-primary text-cream-foreground rounded-[10px] btn "
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pt-15 pt-10">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-2xl font-bold">
              Before proceeding, please ensure you have read our{' '}
              <Link href="/terms-and-conditions" className="text-primary">
                terms and conditions
              </Link>{' '}
              which cover pricing and billing.
            </h4>
          </div>
        </div>
      </section>

      <section className="lg:pt-15 pt-10">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg">
              These prices are for tutors only. We do not charge any thing from
              students. Although Students and parents decide the amount of fee
              with the tutor of their choice. This can be done, when students
              connects with tutors. For more details,{' '}
              <Link href="/how-it-works" className="text-primary">
                visit here.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="lg:pt-15 pt-10 ">
        <div className="bg-warm py-12.5 relative z-[1]">
          <div className="container">
            <div className="flex md:flex-row flex-col justify-between items-center gap-10">
              <div className="lg:max-w-[573px] max-w-[400px]">
                <p className="text-muted-foreground font-bubblegum-sans text-[19px] wow fadeInUp">
                  Stay With Us
                </p>
                <h2
                  className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] mt-2.5 max-w-[410px] wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  The path to success starts with education
                </h2>
                <p className="mt-5 wow fadeInUp" data-wow-delay=".4s">
                  At Stay With Us, success begins with quality education led by
                  expert teachers online. Our personalized online teaching
                  connects students with experienced online tutors for tailored
                  learning experiences. With flexible tutors online, we help
                  students unlock their potential and achieve academic success
                  from anywhere.
                </p>
              </div>
              <div className="relative">
                <img
                  src="assets/images/newsletter/stay-thumb.png"
                  alt="tree-img"
                />
              </div>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 z-[-1]">
            <img
              src="assets/images/newsletter/stay-shape.png"
              alt="stay-shape"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicedetails
