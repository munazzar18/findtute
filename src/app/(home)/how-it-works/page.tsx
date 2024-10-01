import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const Blog = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.findtute.com/blog" />
        <title>How it works | Findtute</title>
        <meta
          name="description"
          content="Read the latest articles and insights from our experts on online teaching and tutoring."
        />
        <meta
          name="keywords"
          content="Online Teaching Blog, Online Tutors Articles, Education Insights, Tutoring Tips"
        />
        <meta
          property="og:title"
          content="How it works | Best Online Teachers"
        />
        <meta
          property="og:description"
          content="Explore How it works for the latest updates and expert advice on online teaching and tutoring."
        />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/how-it-works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How it works | Best Online Teachers"
        />
        <meta
          name="twitter:description"
          content="Read How it works for the latest in online teaching and tutoring."
        />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>

      <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
          <div className="container">
            <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
              <div className="">
                <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">
                  How it works
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
                      href="/how-it-works"
                      className="lg:text-[28px] text-xl font-bold"
                    >
                      How it works
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

      <section className="lg:pt-15 pt-10">
        <div className="container">
          <div className=" w-full">
            <div className="flex flex-col justify-center items-center lg:gap-[60px] gap-10">
              <div
                className="shadow-4xl bg-background rounded-[10px] group wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img src="/underconstruction.jpg" alt="blog-img-1" />
                <div className="pt-7.5 pb-10 lg:px-10 px-5">
                  <h4>
                    <a
                      href="#"
                      className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500"
                    >
                      This page is under construction!
                    </a>
                  </h4>

                  <p className="mt-3"></p>
                </div>
              </div>
            </div>
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

export default Blog
