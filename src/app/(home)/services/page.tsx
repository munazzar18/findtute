import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const Services = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.findtute.com/services" />
        <title>Our Services | FindTute</title>
        <meta
          name="description"
          content="Discover the range of online teaching and tutoring services we offer to help you achieve your learning goals."
        />
        <meta
          name="keywords"
          content="Online Services, Tutoring Services, Teaching Services, Education Solutions"
        />
        <meta
          property="og:title"
          content="Our Services | Best Online Teachers"
        />
        <meta
          property="og:description"
          content="Explore our various online teaching and tutoring services tailored to meet your educational needs."
        />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services | Best Online Teachers"
        />
        <meta
          name="twitter:description"
          content="Learn about the services we provide to support your educational journey."
        />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>

      <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
          <div className="container">
            <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
              <div className="">
                <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">
                  Services
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
                      href="/services"
                      className="lg:text-[28px] text-xl font-bold"
                    >
                      Services
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

      <div className="lg:pb-15 pb-10">
        <div className="container">
          <div className="lg:pl-11">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
              <div
                className="relative rounded-[10px] border-2 bg-background border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-car-toy md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Online Classes
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Welcome to findtute.com online classes, where online
                    teaching excellence meets flexibility. Connect with top
                    online tutors for personalized, high-quality education
                    tailored to your needs. Our platform offers a range of
                    subjects with teachers online to support your academic and
                    skill development goals. Experience exceptional online
                    teaching from the comfort of your home with findtute.com
                  </p>
                </div>
              </div>

              <div
                className="relative rounded-[10px] border-2 bg-background border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-toys md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Formal Tuition
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Formal Tuition delivers premier educational services with a
                    platform of highly qualified tutors. We provide exceptional
                    online teaching focused on academic rigor and personalized
                    instruction. Connect with expert online tutors for a
                    tailored learning experience from the comfort of your home.
                    Achieve your academic goals with confidence through Formal
                    Tuition.
                  </p>
                </div>
              </div>

              <div
                className="relative rounded-[10px] border-2 bg-background border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-feeder md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Preschool
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Preschool offers a nurturing environment with highly trained
                    teachers online who focus on fostering creativity and
                    foundational skills. Through interactive, play-based online
                    teaching, our online tutors help young children grow
                    academically and socially. Start your child’s journey with
                    tutors online at Preschool for a strong educational
                    foundation.
                  </p>
                </div>
              </div>

              <div
                className="relative rounded-[10px] border-2 bg-background border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-book md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Onsite Tutors
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Onsite Tutors are highly qualified and experienced and most
                    importantly they are nearby to your home. You can contact
                    with them and get a personalized instruction. You can then
                    set your time to learn onsite.
                  </p>
                </div>
              </div>

              <div
                className="relative rounded-[10px] border-2 bg-background border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-mat md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Edu Connect
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Education Connect links students with experienced teachers
                    online for flexible and personalized online teaching across
                    various subjects. Our platform offers access to expert
                    online tutors, ensuring tailored learning experiences to
                    meet individual needs. With tutors online available anytime,
                    Education Connect empowers students to achieve their
                    academic goals.
                  </p>
                </div>
              </div>

              <div
                className="relative rounded-[10px] border-2 bg-background border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-baby-body md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Knowledge Hub
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Knowledge Hub provides access to top teachers online for
                    comprehensive and interactive online teaching. Our expert
                    online tutors cover a wide range of subjects, offering
                    personalized support to enhance each student’s learning
                    experience. With flexible tutors online, Knowledge Hub
                    ensures quality education from anywhere at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Services
