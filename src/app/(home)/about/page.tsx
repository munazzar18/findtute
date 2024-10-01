import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import {
  FaStar,
  FaChalkboardTeacher,
  FaLaptop,
  FaAngleRight,
} from 'react-icons/fa'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.findtute.com/about" />
        <title>About Our Company | Best Online Teachers</title>
        <meta
          name="description"
          content="Learn about our company, offering top online teachers and tutors for personalized learning and professional development."
        />
        <meta
          name="keywords"
          content="Online Teachers, Online Teaching, Online Tutors, Tutors Online, Best Online Teachers for Personalized Learning, Affordable Online Teaching Platforms, Experienced Online Tutors, Top Online Tutors for High School Students"
        />
        <meta
          property="og:title"
          content="About Our Company | Best Online Teachers"
        />
        <meta
          property="og:description"
          content="Discover how our company connects you with experienced educators for enhanced learning experiences. Explore our top online teaching and tutoring services."
        />
        <meta property="og:url" content="https://findtute.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Our Company | Best Online Teachers"
        />
        <meta
          name="twitter:description"
          content="Learn about our company, offering top online teachers and tutors for personalized learning and professional development."
        />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>

      <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
          <div className="container">
            <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
              <div className="">
                <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">
                  About Us
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
                      href="/about"
                      className="lg:text-[28px] text-xl font-bold"
                    >
                      About Us
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
          <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-x-20 gap-x-7.5 items-center">
            <div className="relative">
              <div className="flex sm:flex-row flex-col sm:items-end gap-6">
                <div className="relative wow fadeInUp" data-wow-delay="1200">
                  <div className=" ">
                    <img src="assets/images/about/shap-1.png" alt="shap" />
                  </div>
                  <div className="ml-9">
                    <img
                      src="assets/images/about/about-1.png"
                      alt="about-bg"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute -bottom-12.5 left-0 bg-primary rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                    <div className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                      <img
                        src="assets/images/about/customer.png"
                        alt="customer"
                      />
                    </div>
                    <div>
                      <h6 className="text-cream-foreground font-bold text-2xl">
                        5,000+
                      </h6>
                      <p className="text-cream-foreground">Satisfied Clients</p>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-8 pt-15 sm:pt-0">
                  <div className="bg-warm max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col items-center justify-center text-center">
                    <img
                      src="assets/images/about/icreement.png"
                      alt="icreement"
                    />
                    <h6 className="text-xl font-bold mt-2.5">Academy</h6>
                    <p>Learning Ladder School</p>
                  </div>
                  <div className="bg-background max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                    <h6 className="text-[32px] font-bold text-secondary-foreground">
                      10+
                    </h6>
                    <p>Learning Ladder School</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-7.5 sm:pt-[70px] lg:pt-0">
              <p className="text-secondary-foreground font-bubblegum-sans text-[19px] wow fadeInUp">
                About Us
              </p>
              <h2
                className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] pb-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                Unlocking Potential, One Child at a just Time in school
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Looking for top-notch online teaching solutions? Our platform
                connects you with experienced online tutors who offer
                personalized lessons tailored to your needs. Whether you’re
                seeking help from tutors online for academic subjects or
                specialized skills, we provide the best teachers online to
                enhance your learning experience. Our online teaching services
                ensure flexibility and convenience, allowing you to learn from
                anywhere, anytime. Discover how our expert online tutors can
                support your educational journey today!
              </p>
              <div className="lg:mt-10 mt-7">
                <a
                  href="#"
                  className="border border-gray-200 hover:text-cream-foreground btn"
                >
                  Get a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 testimonial">
        <div className="container">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 lg:pb-15 pb-10">
            <div className="lg:max-w-[410px]">
              <p className="text-secondary-foreground font-bubblegum-sans text-[19px] wow fadeInUp">
                Clients Testimonial
              </p>
              <h2
                className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] wow fadeInUp"
                data-wow-delay=".3s"
              >
                Unlocking the Power of Wonderworks Child
              </h2>
            </div>
            <p className="lg:max-w-[410px]">
              Use receiving accounts a number a currencies and get paid like a
              local Use receivin accounts a number paid the most beautiful think
            </p>
          </div>
          <div className="relative w-full h-full after:absolute after:left-0 after:top-0 after:lg:max-w-[calc(100%-410px)] after:md:max-w-[calc(100%-310px)] after:max-w-[calc(100%-100px)] after:w-full after:h-full after:bg-testimonial-banner after:bg-cover after:bg-no-repeat after:z-[-1]">
            <div className="py-10">
              <div className="swiper testimonial-swiper max-w-[630px] w-full ml-auto mr-0">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="lg:p-10 sm:p-8 py-8 sm:py-0 sm:-mr-10">
                      <div className="bg-background border border-[#F2F2F2] lg:p-15 md:p-5 p-3 max-w-[630px] w-full rounded-[10px] ml-auto shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-between items-center relative z-10 lg:pb-7.5 pb-5">
                          <div className="flex items-center gap-5">
                            <img
                              src="assets/images/testimonial/user-1.png"
                              alt="bg-img"
                            />
                            <div>
                              <h5 className="md:text-2xl text-xl font-semibold md:leading-[140%]">
                                Shakib Al Hasan
                              </h5>
                              <p>Marketing Manager</p>
                            </div>
                          </div>
                          <div className="absolute right-0 z-[-1]">
                            <img
                              src="assets/images/testimonial/quotation.png"
                              alt="quotation"
                              className="lg:w-auto w-9"
                            />
                          </div>
                        </div>
                        <p>
                          Their product exceeded his my routi expectations. The
                          the quality and attention to detail a the a most
                          outstanding and it has become an essential most a
                          education the man who can do{' '}
                        </p>
                        <ul className="flex items-center gap-1 lg:pt-10 pt-5">
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-regular fa-star text-muted-foreground opacity-30 text-xl"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lg:p-10 sm:p-8 py-8 sm:py-0 sm:-mr-10">
                      <div className="bg-background border border-[#F2F2F2] lg:p-15 md:p-5 p-3 max-w-[630px] w-full rounded-[10px] ml-auto shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-between items-center relative z-10 lg:pb-7.5 pb-5">
                          <div className="flex items-center gap-5">
                            <img
                              src="assets/images/testimonial/user-1.png"
                              alt="bg-img"
                            />
                            <div>
                              <h5 className="md:text-2xl text-xl font-semibold md:leading-[140%]">
                                Shakib Al Hasan
                              </h5>
                              <p>Marketing Manager</p>
                            </div>
                          </div>
                          <div className="absolute right-0 z-[-1]">
                            <img
                              src="assets/images/testimonial/quotation.png"
                              alt="quotation"
                              className="lg:w-auto w-9"
                            />
                          </div>
                        </div>
                        <p>
                          Their product exceeded his my routi expectations. The
                          the quality and attention to detail a the a most
                          outstanding and it has become an essential most a
                          education the man who can do{' '}
                        </p>
                        <ul className="flex items-center gap-1 lg:pt-10 pt-5">
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-regular fa-star text-muted-foreground opacity-30 text-xl"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lg:p-10 sm:p-8 py-8 sm:py-0 sm:-mr-10">
                      <div className="bg-background border border-[#F2F2F2] lg:p-15 md:p-5 p-3 max-w-[630px] w-full rounded-[10px] ml-auto shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-between items-center relative z-10 lg:pb-7.5 pb-5">
                          <div className="flex items-center gap-5">
                            <img
                              src="assets/images/testimonial/user-1.png"
                              alt="bg-img"
                            />
                            <div>
                              <h5 className="md:text-2xl text-xl font-semibold md:leading-[140%]">
                                Shakib Al Hasan
                              </h5>
                              <p>Marketing Manager</p>
                            </div>
                          </div>
                          <div className="absolute right-0 z-[-1]">
                            <img
                              src="assets/images/testimonial/quotation.png"
                              alt="quotation"
                              className="lg:w-auto w-9"
                            />
                          </div>
                        </div>
                        <p>
                          Their product exceeded his my routi expectations. The
                          the quality and attention to detail a the a most
                          outstanding and it has become an essential most a
                          education the man who can do{' '}
                        </p>
                        <ul className="flex items-center gap-1 lg:pt-10 pt-5">
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-primary-foreground text-xl"></i>
                          </li>
                          <li>
                            <i className="fa-regular fa-star text-muted-foreground opacity-30 text-xl"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-pagination"></div>
          </div>
        </div>
      </section>
      {/* add new about page  */}
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-10 sm:flex items-center justify-between">
          <div className="sm:w-1/2 p-5">
            <div className="relative group overflow-hidden">
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="About Our Company"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                About <span className="text-indigo-600">Our Company</span>
              </h2>
              <p className="text-gray-700 mb-5">
                Discover a comprehensive platform for online teaching and
                tutoring. Connect with experienced educators and enhance your
                learning experience today.
              </p>
              <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600">
                Discover a comprehensive platform for online teaching and
                tutoring. Connect with experienced educators and enhance your
                learning experience today.
              </blockquote>
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <FaStar className="text-indigo-600" />
                  <span className="text-gray-700">
                    Top Online Tutors for High School Students
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaChalkboardTeacher className="text-indigo-600" />
                  <span className="text-gray-700">
                    Best Online Teachers for Personalized Learning
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaLaptop className="text-indigo-600" />
                  <span className="text-gray-700">
                    Affordable Online Teaching Platforms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end new about page  */}
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
                <div className="mt-9">
                  <a href="#" className="btn-rounded-full">
                    Read More
                  </a>
                </div>
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

export default About
