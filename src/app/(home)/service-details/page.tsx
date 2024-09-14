'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import Head from 'next/head';
import { FaAngleRight } from 'react-icons/fa';
import { FaLaptopCode, FaBookOpen, FaChalkboard, FaUsers } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaChalkboardTeacher, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';




const Servicedetails = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const headers = [
    'Teachers Online',
    'Online Teaching',
    'Online Tutors',
    'Online Teaching',
    'Tutors Online',
  ];

  const paragraphs = [
    'Learn from the best teachers available online with interactive sessions.',
    'Our online teaching platform brings quality education to your fingertips.',
    'Find the top-rated online tutors for personalized learning experiences.',
    'Access online teaching materials and live lessons from certified instructors.',
    'Connect with tutors online for real-time problem solving and guidance.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [headers.length]);



  return (
    <>

<Head>
        <link rel="canonical" href="https://www.findtute.com/service-details" />
        <title>Service Details | Best Online Teachers</title>
        <meta name="description" content="Detailed information about our online teaching services and what we offer." />
        <meta name="keywords" content="Service Details, Online Teaching Services, Tutoring Information, Education Services" />
        <meta property="og:title" content="Service Details | Best Online Teachers" />
        <meta property="og:description" content="Explore detailed information about the services we provide for online teaching and tutoring." />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/service-details" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Details | Best Online Teachers" />
        <meta name="twitter:description" content="Learn more about the specifics of our online teaching and tutoring services." />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>






    <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
            <div className="container">
                <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
                    <div className="">
                        <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">Service Details</h2>
                        <ul className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2">
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Home</a></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Service Details</a></li>
                        </ul>
                    </div>
                    <div className="relative">
                        <img src="assets/images/shapes/bread-cat.png" alt="cat-img" className="absolute bottom-5 -left-[30px] animate-up-down" />
                        <img src="assets/images/shapes/bread-thumb.png" alt="thumb-img" className="sm:max-h-full max-h-60" />
                        <img src="assets/images/shapes/bread-child.png" alt="child-img" className="absolute bottom-0 right-0 animate-left-right" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <section className="lg:pt-15 pt-10">
        <div className="container">
            <div className="wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/images/services/service-details-1.png" alt="details" />
            </div>
            <div className="lg:pt-7.5 pt-5 wow fadeInUp" data-wow-delay=".3s">
            <div className="p-6 lg:p-12 bg-gray-100">
            <div className="flex items-center gap-3 lg:gap-4">
      {/* React Icon with hover effect and transition */}
      <FaBookOpen className="text-blue-600 lg:text-4xl text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-blue-800" />
      
      {/* Title Text with hover effect */}
      <h4 className="lg:text-3xl text-2xl lg:leading-[148%] leading-[130%] font-bold font-nunito text-gray-800 hover:text-blue-600 transition-colors duration-300">
        Discover the Power of Education: Knowledge is the Key
      </h4>
    </div>
      <p className="lg:pt-7 pt-4 text-gray-700">
      The landscape of education has evolved significantly with the advent of digital platforms, enabling educators to offer their expertise through virtual tutoring sessions. This innovative approach to teaching allows instructors to conduct online classes, providing personalized guidance and support to students from the comfort of their own homes. With a diverse array of online tutors available, learners can access specialized knowledge across various subjects, enhancing their educational experience. The flexibility of online teaching not only accommodates different learning styles but also connects students with qualified teachers who can cater to their individual needs, making education more accessible than ever before.
      </p>
      <div className="lg:pt-7.5 pt-5 flex flex-col lg:flex-row justify-between lg:gap-7.5 lg:gap-y-[22px] gap-4">
        <div className="flex flex-col lg:gap-y-[22px] gap-4">
          <p className="flex items-center gap-[15px] text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaAngleRight className="text-secondary-foreground transition-transform duration-300 transform hover:translate-x-2" />
            Education is the key to success. It empowers individuals with knowledge
          </p>
          <p className="flex items-center gap-[15px] text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaAngleRight className="text-secondary-foreground transition-transform duration-300 transform hover:translate-x-2" />
            Education opens doors to opportunities, fosters critical thinking, and promote
          </p>
        </div>
        <div className="flex flex-col lg:gap-y-[22px] gap-4">
          <p className="flex items-center gap-[15px] text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaAngleRight className="text-secondary-foreground transition-transform duration-300 transform hover:translate-x-2" />
            Education is the key to success. It empowers individuals with knowledge
          </p>
          <p className="flex items-center gap-[15px] text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaAngleRight className="text-secondary-foreground transition-transform duration-300 transform hover:translate-x-2" />
            Education opens doors to opportunities, fosters critical thinking, and promote
          </p>
        </div>
      </div>
    </div>
                <div className="mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
                    <div>
                        <img src="assets/images/services/service-details-2.png" alt="img-1" className="w-full" />
                    </div>
                    <div>
                        <img src="assets/images/services/service-details-3.png" alt="img-1" className="w-full" />
                    </div>
                    <div>
                        <img src="assets/images/services/service-details-4.png" alt="img-1" className="w-full" />
                    </div>
                </div>

     {/* ////////// */}
     <div className="lg:pt-[70px] pt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
      <div className="bg-warm rounded-[10px] lg:p-7.5 p-4 transition hover:shadow-lg hover:scale-105">
        <div className="bg-background rounded-[10px] p-3.5 lg:max-w-[88px] max-w-[70px] lg:max-h-[88px] max-h-[70px]">
          <FaChalkboardTeacher className="lg:text-6xl text-[40px] text-green-foreground" />
        </div>
        <div className="lg:mt-5 pt-3">
          <h4 className="text-2xl font-semibold leading-[140%] transition duration-500 ease-in-out">
            {headers[currentIndex]}
          </h4>
          <p className="lg:pt-[18px] pt-3 transition duration-500 ease-in-out">
            {paragraphs[currentIndex]}
          </p>
        </div>
      </div>

      <div className="bg-warm rounded-[10px] lg:p-7.5 p-4 transition hover:shadow-lg hover:scale-105">
        <div className="bg-background rounded-[10px] p-3.5 lg:max-w-[88px] max-w-[70px] lg:max-h-[88px] max-h-[70px]">
          <FaUserGraduate className="lg:text-6xl text-[40px] text-green-foreground" />
        </div>
        <div className="lg:mt-5 pt-3">
          <h4 className="text-2xl font-semibold leading-[140%] transition duration-500 ease-in-out">
            {headers[(currentIndex + 1) % headers.length]}
          </h4>
          <p className="lg:pt-[18px] pt-3 transition duration-500 ease-in-out">
            {paragraphs[(currentIndex + 1) % paragraphs.length]}
          </p>
        </div>
      </div>

      <div className="bg-warm rounded-[10px] lg:p-7.5 p-4 transition hover:shadow-lg hover:scale-105">
        <div className="bg-background rounded-[10px] p-3.5 lg:max-w-[88px] max-w-[70px] lg:max-h-[88px] max-h-[70px]">
          <FaUserTie className="lg:text-6xl text-[40px] text-green-foreground" />
        </div>
        <div className="lg:mt-5 pt-3">
          <h4 className="text-2xl font-semibold leading-[140%] transition duration-500 ease-in-out">
            {headers[(currentIndex + 2) % headers.length]}
          </h4>
          <p className="lg:pt-[18px] pt-3 transition duration-500 ease-in-out">
            {paragraphs[(currentIndex + 2) % paragraphs.length]}
          </p>
        </div>
      </div>
    </div>



            </div>
         
            <div className="pt-10">
                <div className="w-[100%] wow fadeInUp" data-wow-delay=".4s">
                <div className="flex items-center justify-center my-6">
      <h1 className="flex items-center text-4xl font-semibold text-center p-4 leading-[140%] text-gray-800 relative group transition-transform duration-300 ease-in-out">
        <FaInfoCircle className="text-blue-600 text-3xl mr-3 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
        <span className="relative z-10">Service All Details</span>
        <div className="absolute inset-0 border border-blue-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out z-0" />
      </h1>
    </div>                    <div className="space-y-8">
      <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <FaLaptopCode className="text-blue-500 text-3xl" />
          <span>Online Tutoring:</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Discover the convenience and flexibility of online tutoring. Our platform connects you with expert tutors across various subjects, offering personalized learning experiences right from the comfort of your home. Whether you're looking for help with academic subjects, test preparation, or skill development, our online tutors provide tailored support to meet your individual needs. Experience effective learning solutions with our professional online tutoring services.
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <FaChalkboardTeacher className="text-green-500 text-3xl" />
          <span>Online Teaching:</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Embrace the future of education with online teaching. Our platform offers educators the tools and resources to deliver engaging and interactive lessons to students worldwide. From creating dynamic lesson plans to utilizing multimedia resources, online teaching allows educators to reach a global audience and facilitate impactful learning experiences. Enhance your teaching methods and expand your reach with our comprehensive online teaching solutions.
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <FaBookOpen className="text-red-500 text-3xl" />
          <span>Online Classes:</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Join a wide range of online classes designed to fit your schedule and learning style. Our platform offers diverse courses in various subjects, from academic disciplines to personal development. Experience the flexibility of learning at your own pace with access to high-quality instructional materials and expert instructors. Whether you're aiming to advance your career, explore new interests, or gain new skills, our online classes provide a convenient and effective learning solution.
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <FaChalkboard className="text-purple-500 text-3xl" />
          <span>Online Teachers:</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Connect with highly qualified online teachers who are dedicated to providing exceptional educational experiences. Our platform features experienced educators who specialize in a variety of subjects and teaching methods. With personalized attention and tailored lesson plans, our online teachers are committed to helping students achieve their academic goals and enhance their learning journey.
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <FaUserGraduate className="text-orange-500 text-3xl" />
          <span>Tutors:</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Find top-notch online tutors who offer expert guidance and support across a broad range of subjects. Our online tutoring services match students with skilled tutors who provide customized instruction and assistance. Whether you need help with homework, exam preparation, or mastering new concepts, our online tutors are here to help you succeed.
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <FaUsers className="text-teal-500 text-3xl" />
          <span>Online Teaching Tutors:</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Explore our network of online teaching tutors who specialize in delivering high-quality education through virtual platforms. Our tutors are skilled in creating interactive and engaging online lessons that cater to diverse learning needs. Benefit from personalized instruction and flexible scheduling as you work with our online teaching tutors to enhance your knowledge and skills.
        </p>
      </div>
    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:pt-8 pt-6 fadeInUp wow" data-wow-delay=".5s">
      {/* Text Section */}
      <ul className="flex lg:gap-y-8 gap-y-6 flex-col">
        {/* List Item 1 */}
        <li className="flex items-center gap-4 text-gray-600 transition-transform duration-300 ease-in-out hover:text-gray-800 hover:scale-105">
          <FaAngleDoubleRight className="text-secondary-foreground transform transition-transform duration-300 hover:text-primary" size={24} />
          <span>It plays a vital role in shaping the future generation and promoting.</span>
        </li>
        {/* List Item 2 */}
        <li className="flex items-center gap-4 text-gray-600 transition-transform duration-300 ease-in-out hover:text-gray-800 hover:scale-105">
          <FaAngleDoubleRight className="text-secondary-foreground transform transition-transform duration-300 hover:text-primary" size={24} />
          <span>Education encompasses formal learning in schools, colleges, and universities.</span>
        </li>
        {/* List Item 3 */}
        <li className="flex items-center gap-4 text-gray-600 transition-transform duration-300 ease-in-out hover:text-gray-800 hover:scale-105">
          <FaAngleDoubleRight className="text-secondary-foreground transform transition-transform duration-300 hover:text-primary" size={24} />
          <span>Education opens doors to opportunities, fosters critical thinking, and promotes growth.</span>
        </li>
        {/* List Item 4 */}
        <li className="flex items-center gap-4 text-gray-600 transition-transform duration-300 ease-in-out hover:text-gray-800 hover:scale-105">
          <FaAngleDoubleRight className="text-secondary-foreground transform transition-transform duration-300 hover:text-primary" size={24} />
          <span>Man encompasses formal learning in schools, colleges, and universities.</span>
        </li>
      </ul>

      {/* Image Section */}
      <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          src="assets/images/services/service-details-5.png"
          alt="Service Details - Shaping the Future of Education"
          className="w-full h-auto object-cover"
        />
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
                        <p className="text-muted-foreground font-bubblegum-sans text-[19px] wow fadeInUp" >Stay With Us</p>
                        <h2 className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] mt-2.5 max-w-[410px] wow fadeInUp" data-wow-delay=".3s">The path to success starts with education</h2>
                        <p className="mt-5 wow fadeInUp" data-wow-delay=".4s">At Stay With Us, success begins with quality education led by expert teachers online. Our personalized online teaching connects students with experienced online tutors for tailored learning experiences. With flexible tutors online, we help students unlock their potential and achieve academic success from anywhere.</p>
                        <div className="mt-9">
                            <a href="#" className="btn-rounded-full">Read More</a>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="assets/images/newsletter/stay-thumb.png" alt="tree-img" />
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 z-[-1]">
                <img src="assets/images/newsletter/stay-shape.png" alt="stay-shape" />
            </div>
        </div>
    </section>
    </>
  );
};

export default Servicedetails;
