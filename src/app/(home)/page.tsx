import React from "react";
import Counter from "../helper/Counter";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  faArrowRight,
  faBook,
  faBookOpen,
  faEarthAsia,
  faGlobe,
  faHandsHoldingChild,
  faIdBadge,
  faMagnifyingGlass,
  faNetworkWired,
  faPersonChalkboard,
  faPersonSnowboarding,
  faRocket,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
          {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.findtute.com/"
          },
          {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Find Online Best Tutors",
        "description": "Best Online Teachers for Personalized Learning,Affordable Online Teaching Platforms
        Experienced Online Tutors for All Subjects,Top Online Tutors for High School Students,How to Find Qualified Online Teachers,Online Tutoring Services for Math and Science,Benefits of Online Teaching for Professionals,Online Tutors Available 24/7,Online Teaching for K-12 Students,Private Online Tutors for Exam Preparation,Online Tutors for College Students,Online Teaching for Corporate Training,Online Tutors for English Language Learners,Online Tutors for Kids,Online Tutors for Test Preparation"
      },
    `}
        </script>

        <meta
          name="description"
          content="Discover the best teachers and tutors online for personalized learning. Our platform connects you with expert online teaching professionals, offering flexible and interactive lessons. Start improving your skills with top online tutors today!"
        />
        <meta
          property="og:title"
          content="Find Expert Online Teachers and Tutors for Personalized Learning"
        />
        <meta
          property="og:description"
          content="Connect with expert online teachers and tutors for personalized learning. Our platform makes online teaching easy and accessible, with flexible options to suit your needs. Find the best tutors online today!"
        />
        <meta
          property="og:image"
          content="https://findtute.com/assets/images/blog/blog-details-1.png"
        />
      </Head>

      <section className="bg-warm pt-[78px] lg:mb-15 mb-10 relative">
        <div className="container relative">
          <div className="flex flex-col items-center text-center relative z-10">
            <h1 className="font-normal xl:text-[70px] lg:text-6xl md:text-5xl text-4xl xl:leading-[128%] lg:leading-[125%] md:leading-[120%] max-w-[776px]">
              <span className="relative">
                Level Up Your Skills{" "}
                <span className="absolute -left-6 top-1 text-3xl">
                  <i className="icon-three-line"></i>
                </span>
              </span>
              <span className="font-bold">Find Your Perfect Tutor </span>{" "}
              <span className="font-bold text-destructive-foreground">
                Online or Nearby!
              </span>
            </h1>

            <div className="flex absolute right-[87px] top-14 animate-skw">
              <img
                src="/assets/images/shapes/shap.png"
                alt="shap-2"
                className="w-7.5 h-12.5 relative top-9"
              />
              <img src="/assets/images/shapes/shap.png" alt="shap-1" />
              <img
                src="/assets/images/shapes/shap.png"
                alt="shap-2"
                className="w-5 h-8 -mt-7"
              />
            </div>

            <p className="pt-5 max-w-[731px]">
            Discover top online teachers and tutors for personalized learning, Findtute available 24/7 for all subjects, including exam preparation. Explore affordable online teaching Findtute platforms that provide flexible and high-quality education for students of all levels, from K-12 to corporate training. Benefit from virtual learning, interactive online classes, and remote tutors tailored to your specific educational needs.
            </p>

            <p className="pt-5 max-w-[731px]">
              Stop searching, start learning! We make finding the perfect tutor
              a breeze. Browse profiles of highly qualified teachers across a
              wide range of subjects. Connect with experienced educators today and enhance your learning journey with comprehensive online education services
            </p>
          </div>
          <div className="absolute left-2.5 lg:top-0 top-10 lg:max-w-full max-w-[200px] sm:block hidden animate-up-down">
            <img src="/assets/images/banner/boy_img_1.png" alt="banner-img-1" />
            <span className="absolute -left-2.5 top-[9px] border-2 border-primary rounded-[125px] w-full h-full"></span>
          </div>

          <div className="absolute right-0 bottom-0 pb-[71px] lg:block hidden animate-up-down">
            <img src="/assets/images/banner/boy_img_2.png" alt="banner-img-2" />
            <span className="absolute -left-2.5 top-[9px] border-2 border-secondary rounded-[125px] max-h-[369px] w-full h-full"></span>
          </div>

          <div className="lg:pt-[72px]">
            <img src="/assets/images/banner/painting.png" alt="painting" />
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="absolute left-0 top-[60px] animate-left-right-2">
            <img src="/assets/images/banner/left-circle-1.png" alt="img" />
          </div>
          <div className="absolute left-[37px] top-[186px] animate-left-right-2">
            <img src="/assets/images/banner/left-circle-2.png" alt="img" />
          </div>
          <div className="absolute right-0 bottom-[165px] animate-up-down">
            <img src="/assets/images/banner/right-circle.png" alt="img" />
          </div>
        </div>
      </section>

      <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
        <div className="container">
          <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">
            <div className="lg:max-w-[600px]">
              <p className="text-primary-foreground font-bubblegum-sans text-[19px] wow fadeInUp">
                Number Talks
              </p>
              <h2
                className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] lg:max-w-[410px] pb-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                Invest in education invest in the future
              </h2>
              <p className="wow fadeInUp text-justify" data-wow-delay=".3s">
                Finding the perfect tutor shouldn't feel like a chore. Our
                platform streamlines the process with a quick and easy signup
                that takes just seconds. No more sifting through endless
                applications or complicated registration forms. Get ready to
                focus on what truly matters: unlocking your learning potential.
              </p>
              <button
                type="button"
                className="border border-gray-200 rounded-md lg:mt-10 mt-7 btn"
              >
                Get a quote
              </button>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
              <div
                className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-full bg-primary lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faSchool}
                    className="lg:text-[40px] text-3xl text-cream-foreground"
                  />
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    <Counter start={0} end={150} />
                  </h4>
                  <p>Running Students</p>
                </div>
              </div>

              <div
                className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-full bg-destructive lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="lg:text-[40px] text-3xl text-cream-foreground"
                  />
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    <Counter start={10} end={1500} />
                    {/* 13K */}
                  </h4>
                  <p>Completed</p>
                </div>
              </div>

              <div
                className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-full bg-green lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPersonChalkboard}
                    className="lg:text-[40px] text-3xl text-cream-foreground"
                  />
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    <Counter start={0} end={500} />
                  </h4>
                  <p>Number of teachers</p>
                </div>
              </div>
              <div
                className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-full bg-secondary lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHandsHoldingChild}
                    className="lg:text-[40px] text-3xl text-cream-foreground"
                  />
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    <Counter start={0} end={374} />
                  </h4>
                  <p>Guardian Satishfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 relative z-[1]">
        <div className="container">
          <div className="text-center flex flex-col items-center">
            <p className="text-green-foreground font-bubblegum-sans text-[19px] wow fadeInUp">
              Educational Programs
            </p>
            <h2
              className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] lg:max-w-[630px] wow fadeInUp"
              data-wow-delay=".3s"
            >
              Find teachers nearby
            </h2>
          </div>
          <div className="lg:pl-11">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faRocket}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Get Started in Seconds
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Tired of endlessly searching for qualified tutors? Findtute
                    streamlines the process with a quick and easy signup. No
                    mountains of paperwork, just a few clicks to unlock a world
                    of learning possibilities
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faEarthAsia}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <Link
                      href="/services"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Discover a Network of Expert Tutors at Your Fingertips
                    </Link>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Gone are the days of limited learning options. Our platform
                    boasts a vast network of highly qualified tutors across
                    diverse subjects. With a few clicks, you can browse profiles
                    of teachers conveniently located near you - perfect for
                    those seeking a more personalized touch or a flexible
                    learning schedule.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faIdBadge}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="/services"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Craft Your Personalized Learning Profile
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Dive deeper into your educational journey by creating a
                    personalized profile. This allows you to specify your
                    learning goals, preferred subjects, and desired learning
                    style. Having a clear profile helps connect you with the
                    ideal nearby teachers who can cater to your specific needs
                    and interests.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faBookOpen}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <Link
                      href="/services"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Special Tuition
                    </Link>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Empower yourself with knowledge! Once you've connected with
                    the perfect teacher, it's time to embark on your learning
                    adventure. Our platform facilitates seamless onsite lessons,
                    allowing you to learn from the comfort of your own home.
                    Embrace the flexibility and convenience of learning while
                    receiving expert guidance from qualified tutors.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-15 right-11 z-[-1] lg:max-w-full max-w-36 md:block hidden animate-left-right">
          <img
            src="/assets/images/shapes/pencil-rocket.png"
            alt="pencil"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* what we bring for teachers */}
      <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 relative z-[1]">
        <div className="container">
          <div className="text-center flex flex-col items-center">
            <p className="text-green-foreground font-bubblegum-sans text-[19px] wow fadeInUp">
              What we bring for teachers?
            </p>
            <h2
              className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] lg:max-w-[630px] wow fadeInUp"
              data-wow-delay=".3s"
            >
              Unleash Your Teaching Power
            </h2>
          </div>
          <div className="lg:pl-11">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faPersonSnowboarding}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Effortless Onboarding
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Ditch the complex registration processes! Find tute
                    prioritizes your time. Our easy signup gets you set up
                    quickly, allowing you to focus on what you do best -
                    inspiring young minds. Complete your profile to showcase
                    your qualifications, experience, and teaching style.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faNetworkWired}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <Link
                      href="/services"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Command Center at Your Fingertips
                    </Link>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Stay organized and in control! Your dedicated dashboard
                    provides a centralized hub for managing your teaching
                    experience. Track student progress, schedule lessons, access
                    teaching resources, and maximize your teaching efficiency.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faGlobe}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="/services"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      A World of Opportunity Awaits
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Empower the next generation! Find tute connects you with a
                    diverse pool of motivated students seeking your expertise.
                    Browse student profiles, understand their learning goals,
                    and find students to ignite their academic journey.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <FontAwesomeIcon
                    className="md:text-6xl text-[40px]"
                    icon={faMagnifyingGlass}
                  />
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <Link
                      href="/services"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Seamless Student Discovery
                    </Link>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    No more waiting for opportunities to come your way! Our
                    intuitive search filters within the dashboard allow you to
                    find students based on location, subject, and learning
                    needs. Proactively connect with students seeking your
                    specific skillset and build a thriving online teaching
                    practice.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-15 right-11 z-[-1] lg:max-w-full max-w-36 md:block hidden animate-left-right">
          <img
            src="/assets/images/shapes/pencil-rocket.png"
            alt="pencil"
            className="w-full h-auto"
          />
        </div>

        {/* blockquotes section */}

        <div className="flex flex-col items-center justify-center p-9">
          {/* Block Quote 1 */}
          <div className="relative p-6 mb-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
            <div className="absolute text-6xl text-blue-500 opacity-20 top-4 left-4 -translate-y-1/2">
              <FaQuoteLeft />
            </div>
            <blockquote className="text-lg font-semibold text-gray-700 italic text-center pt-8 pb-4">
              Discover a comprehensive platform for online teaching and
              tutoring. Connect with experienced educators and enhance your
              learning experience today.Want to learn better? Our platform
              connects you with experienced tutors. Sign up now and boost your
              knowledge in a friendly environment!
            </blockquote>
            <div className="absolute text-6xl text-blue-500 opacity-20 bottom-4 right-4 translate-y-1/2">
              <FaQuoteRight />
            </div>
          </div>

          {/* Block Quote 2 */}
          <div className="relative p-6 mb-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
            <div className="absolute text-6xl text-blue-500 opacity-20 top-4 left-4 -translate-y-1/2">
              <FaQuoteLeft />
            </div>
            <blockquote className="text-lg font-semibold text-gray-700 italic text-center pt-8 pb-4">
              Explore our online teaching services and find qualified tutors to
              support your educational journey. Elevate your skills with
              personalized online instruction.
            </blockquote>
            <div className="absolute text-6xl text-blue-500 opacity-20 bottom-4 right-4 translate-y-1/2">
              <FaQuoteRight />
            </div>
          </div>

          {/* Block Quote 3 */}
          <div className="relative p-6 mb-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
            <div className="absolute text-6xl text-blue-500 opacity-20 top-4 left-4 -translate-y-1/2">
              <FaQuoteLeft />
            </div>
            <blockquote className="text-lg font-semibold text-gray-700 italic text-center pt-8 pb-4">
              Join our community of online teachers and tutors dedicated to
              providing quality education. Unlock your potential with tailored
              learning solutions available anytime.
            </blockquote>
            <div className="absolute text-6xl text-blue-500 opacity-20 bottom-4 right-4 translate-y-1/2">
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
