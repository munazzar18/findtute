import React from 'react';
import { FaQuestionCircle, FaUserGraduate, FaChalkboardTeacher, FaBook, FaClock, FaLaptop, FaGraduationCap, FaDollarSign, FaGlobe } from 'react-icons/fa';
import Head from 'next/head';


const Faqs = () => {
  return (
    <>

<Head>
        <title>FAQs | Best Online Teachers</title>
        <meta name="description" content="Find answers to frequently asked questions about our online teaching services." />
        <meta name="keywords" content="FAQs, Online Teaching Questions, Tutor Support, Education Help" />
        <meta property="og:title" content="FAQs | Best Online Teachers" />
        <meta property="og:description" content="Get answers to common questions about our online teaching services." />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/faqs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs | Best Online Teachers" />
        <meta name="twitter:description" content="Find answers to your questions about online teaching and tutoring." />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>


     <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
            <div className="container">
                <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
                    <div className="">
                        <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">Faq's</h2>
                        <ul className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2">
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Home</a></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Faq's</a></li>
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
    
    <section className="lg:pb-15 pb-10">
        <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5">
                <div className="max-w-[528px] lg:max-w-full mx-auto">
                    <img src="assets/images/faq/banner-1.png" alt="child with laptop" />
                </div>
                <div>
                    <div className="lg:max-w-[520px] pb-10">
                        <p className="text-secondary-foreground font-bubblegum-sans text-[19px] wow fadeInUp">Some Faq</p>
                        <h2 className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] wow fadeInUp" data-wow-delay=".3s">Empowering Children Through Education Playful Mind</h2>
                    </div>
                    
                    <div className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] according-item active-accor" data-open="true">
                        <div className="flex justify-between items-center cursor-pointer according-btn">
                            <h4 className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%]">Why do we have to go to school?</h4>
                            <span className="bg-primary rounded-md flex justify-center items-center px-[11px] py-2.5 lg:w-10 w-8 lg:h-10 h-8 transition-all duration-500 icon">
                                <i className="fa-solid fa-minus text-cream-foreground"></i>
                                <i className="fa-solid fa-plus text-cream-foreground"></i>
                            </span>
                        </div>
                        <div className="max-h-0 opacity-0 invisible transition-all duration-500 accordion-details">
                            <div className="pt-5">
                                <p>It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout. Many desktop publish packages and web page editors now use Loremdefault model</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mt-7.5 according-item active-accor" data-open="false">
                        <div className="flex justify-between items-center cursor-pointer according-btn">
                            <h4 className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%]">Why do we have to go to school?</h4>
                            <span className="bg-primary rounded-md flex justify-center items-center px-[11px] py-2.5 lg:w-10 w-8 lg:h-10 h-8 transition-all duration-500 icon">
                                <i className="fa-solid fa-minus text-cream-foreground"></i>
                                <i className="fa-solid fa-plus text-cream-foreground"></i>
                            </span>
                        </div>
                        <div className="max-h-0 opacity-0 invisible transition-all duration-500 accordion-details" >
                            <div className="pt-5">
                                <p>It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout. Many desktop publish packages and web page editors now use Loremdefault model</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mt-7.5 according-item active-accor" data-open="false">
                        <div className="flex justify-between items-center cursor-pointer according-btn">
                            <h4 className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%]">Why do we have to go to school?</h4>
                            <span className="bg-primary rounded-md flex justify-center items-center px-[11px] py-2.5 lg:w-10 w-8 lg:h-10 h-8 transition-all duration-500 icon">
                                <i className="fa-solid fa-minus text-cream-foreground"></i>
                                <i className="fa-solid fa-plus text-cream-foreground"></i>
                            </span>
                        </div>
                        <div className="max-h-0 opacity-0 invisible transition-all duration-500 accordion-details" >
                            <div className="pt-5">
                                <p>It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout. Many desktop publish packages and web page editors now use Loremdefault model</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    {/* Add new faqs */}
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaQuestionCircle className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">What are the best online teachers for personalized learning?</h3>
          <p>Discover top-rated online teachers who tailor their approach to your learning needs for a more effective educational experience.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaUserGraduate className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">What are affordable online teaching platforms?</h3>
          <p>Explore budget-friendly online teaching platforms that offer quality education without breaking the bank.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaChalkboardTeacher className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">How do I find experienced online tutors for all subjects?</h3>
          <p>Learn how to find qualified online tutors who are experts in various subjects to meet your educational goals.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaBook className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Where can I find top online tutors for high school students?</h3>
          <p>Find the best online tutors who specialize in helping high school students succeed academically.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaClock className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Are there online tutors available 24/7?</h3>
          <p>Yes, there are online tutors available around the clock to support your learning anytime, anywhere.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaLaptop className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">What are the benefits of online teaching for professionals?</h3>
          <p>Discover how online teaching can enhance professional development and skills acquisition for working individuals.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaGraduationCap className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">How does online teaching work for K-12 students?</h3>
          <p>Learn about the online teaching methods and tools used to support K-12 students in their educational journey.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaDollarSign className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Are there private online tutors for exam preparation?</h3>
          <p>Find private online tutors who can provide personalized support and strategies for effective exam preparation.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaGlobe className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">What are the best online education services?</h3>
          <p>Explore a range of top online education services that offer high-quality learning experiences for diverse needs.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaUserGraduate className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">What online tutors are available for college students?</h3>
          <p>Find online tutors who specialize in supporting college students with their academic challenges.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaChalkboardTeacher className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">How does online teaching work for corporate training?</h3>
          <p>Understand how online teaching can be utilized for effective corporate training and skill development.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaBook className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Are there online tutors for English language learners?</h3>
          <p>Find online tutors who specialize in helping English language learners improve their skills.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaUserGraduate className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Where can I find online tutors for kids?</h3>
          <p>Explore options for online tutors who offer engaging and educational support for younger students.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <FaClock className="text-2xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">What are the best online tutors for test preparation?</h3>
          <p>Get help from top online tutors who can assist with test preparation strategies and practice.</p>
        </div>
      </div>
      <blockquote className="mt-8 p-4 bg-white border-l-4 border-blue-500 text-gray-700 italic text-center">
        <p>Discover a comprehensive platform for online teaching and tutoring. Connect with experienced educators and enhance your learning experience today.</p>
      </blockquote>
    </section>
 {/* end new faqs */}

    <section className="lg:pt-15 pt-10 ">
        <div className="bg-warm py-12.5 relative z-[1]">
            <div className="container">
                <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                    <div className="lg:max-w-[573px] max-w-[400px]">
                        <p className="text-muted-foreground font-bubblegum-sans text-[19px] wow fadeInUp" >Stay With Us</p>
                        <h2 className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] mt-2.5 max-w-[410px] wow fadeInUp" data-wow-delay=".3s">The path to success starts with education</h2>
                        <p className="mt-5 wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat.</p>
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

export default Faqs;
