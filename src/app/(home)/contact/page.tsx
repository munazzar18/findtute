import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.findtute.com/contact" />
        <title>Contact Us | Best Online Teachers</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries about online teaching and tutoring services."
        />
        <meta
          name="keywords"
          content="Contact Us, Online Tutors, Inquiry, Education Support"
        />
        <meta property="og:title" content="Contact Us | Best Online Teachers" />
        <meta
          property="og:description"
          content="Reach out to us for more information about our online teaching services."
        />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Best Online Teachers"
        />
        <meta
          name="twitter:description"
          content="Contact us for all your online teaching needs."
        />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>

      <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
          <div className="container">
            <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
              <div className="">
                <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">
                  Contact Us
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
                      href="/contact"
                      className="lg:text-[28px] text-xl font-bold"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/assets/images/shapes/bread-cat.png"
                  alt="cat-img"
                  className="absolute bottom-5 -left-[30px] animate-up-down"
                />
                <img
                  src="/assets/images/shapes/bread-thumb.png"
                  alt="thumb-img"
                  className="sm:max-h-full max-h-60"
                />
                <img
                  src="/assets/images/shapes/bread-child.png"
                  alt="child-img"
                  className="absolute bottom-0 right-0 animate-left-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="lg:pt-15 lg;pb-15 pb-10 pt-10">
        <div className="container">
          <div className="max-w-[546px] mx-auto text-center">
            <p className="text-secondary-foreground font-bubblegum-sans text-[19px]">
              Contact
            </p>
            <h2
              className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] wow fadeInUp"
              data-wow-delay=".3s"
            >
              Unlock your potential with education
            </h2>
          </div>
          <div className="mt-15">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5">
              <div className="relative">
                <div className="absolute top-1/2 -translate-y-1/2 h-full flex flex-col justify-between">
                  <div className="mt-[68px] sm:w-full w-40 animate-up-down">
                    <img
                      src="/assets/images/contact/contact-2.png"
                      alt="two-girls-img"
                    />
                  </div>
                  <div className="bg-primary px-5 py-[18px] rounded-[10px] flex items-center gap-5 mb-7.5 animate-left-right">
                    <div>
                      <img src="/assets/images/contact/winner.svg" alt="img" />
                    </div>
                    <div>
                      <h4 className="text-[28px] font-bold text-cream-foreground leading-[148%] font-nunito">
                        2k+
                      </h4>
                      <h6 className="text-xl font-bold text-cream-foreground mt-[5px] leading-[130%]">
                        Project Completed
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex lg:justify-end justify-center">
                  <img src="/assets/images/contact/contact-1.png" alt="img" />
                </div>
              </div>
              <div>
                <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                  <h3 className="text-[28px] font-bold leading-[148%] font-nunito">
                    Send a message
                  </h3>
                  <form action="#" className="mt-7">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Your Name"
                          id="name"
                          className="w-full rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
                        />
                        <label
                          htmlFor="name"
                          className="absolute right-5 top-1/2 -translate-y-1/2"
                        >
                          <i className="fa-solid fa-paper-plane"></i>
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Your Email"
                          id="email"
                          className="w-full rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
                        />
                        <label
                          htmlFor="email"
                          className="absolute right-5 top-1/2 -translate-y-1/2"
                        >
                          <i className="fa-solid fa-phone"></i>
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-5">
                      <input
                        type="text"
                        placeholder="Your Address"
                        id="address"
                        className="w-full rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
                      />
                      <label
                        htmlFor="address"
                        className="absolute right-5 top-1/2 -translate-y-1/2"
                      >
                        <i className="fa-solid fa-location-dot"></i>
                      </label>
                    </div>

                    <div className="relative mt-5">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Write your Message here"
                        className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
                      ></textarea>
                      <label
                        htmlFor="address"
                        className="absolute right-5 top-[15px]"
                      >
                        <i className="fa-solid fa-envelope"></i>
                      </label>
                    </div>
                    <button className="bg-primary text-cream-foreground rounded-full w-full lg:mt-10 mt-5 btn">
                      Send Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:pb-15 lg:pt-15 pb-10 pt-10">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
            <div
              className="bg-background rounded-md shadow-3xl pt-5 pb-7.5 px-7.5 text-center flex flex-col items-center wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green">
                <span className="text-cream-foreground text-[28px]">
                  <FaEnvelope />
                </span>
              </div>
              <h5 className="font-bold text-xl mt-5 pb-2.5">Mail</h5>
              <p>
                <a href="#">info@findtute.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-15 lg;pb-15 pb-10 pt-10 overflow-x-hidden"></div>

      <section className="p-8 bg-gray-100">
        <blockquote className="mt-8 p-4 bg-white border-l-4 border-blue-500 text-gray-700 italic text-center">
          <p>
            Our platform connects online tutors and learners globally. Whether
            you're looking for the best tutors online or want to enhance your
            skills via online teaching, we have the right solutions for you.
            Join thousands of students and tutors in an immersive learning
            experience
          </p>
        </blockquote>
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
                <div className="mt-9">
                  <Link href="/services" className="btn-rounded-full">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/assets/images/newsletter/stay-thumb.png"
                  alt="tree-img"
                />
              </div>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 z-[-1]">
            <img
              src="/assets/images/newsletter/stay-shape.png"
              alt="stay-shape"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
