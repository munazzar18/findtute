import React from 'react';
import Head from 'next/head';
const Portfolio = () => {
  return (
    <>

<Head>
        <title>Our Portfolio | Best Online Teachers</title>
        <meta name="description" content="Explore our portfolio showcasing successful online teaching and tutoring projects." />
        <meta name="keywords" content="Portfolio, Online Teaching Success, Tutor Projects, Education Portfolio" />
        <meta property="og:title" content="Our Portfolio | Best Online Teachers" />
        <meta property="og:description" content="Browse through our portfolio to see examples of our successful online teaching and tutoring projects." />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Portfolio | Best Online Teachers" />
        <meta name="twitter:description" content="View our portfolio of successful online teaching and tutoring projects." />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>


      <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
            <div className="container">
                <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
                    <div className="">
                        <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">Portfolio</h2>
                        <ul className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2">
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Home</a></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Portfolio</a></li>
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

    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
        <div className="container">
            <div className="text-center flex flex-col items-center">
                <p className="text-secondary-foreground font-bubblegum-sans text-[19px] wow fadeInUp">Latest Portfolio</p>
                <h2 className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] lg:max-w-[630px] wow fadeInUp" data-wow-delay=".3s">Exploring Minds Elementary School Education the only school</h2>
            </div>
            <div className="pt-10">
                <ul className="flex items-center justify-center flex-wrap md:gap-7.5 gap-5">
                    <li className="px-5 py-2.5 text-xl font-700 text-cream-foreground bg-primary border border-[#F2F2F2] rounded-[10px] font-jost cursor-pointer hover:bg-primary hover:text-cream-foreground transition-all duration-500 target-item" data-target="education">Education</li>
                    <li className="px-5 py-2.5 text-xl font-700 text-[#686868] border border-[#F2F2F2] rounded-[10px] cursor-pointer hover:bg-primary hover:text-cream-foreground transition-all duration-500 target-item" data-target="school">School</li>
                    <li className="px-5 py-2.5 text-xl font-700 text-[#686868] border border-[#F2F2F2] rounded-[10px] cursor-pointer hover:bg-primary hover:text-cream-foreground transition-all duration-500 target-item" data-target="learn">Learn</li>
                    <li className="px-5 py-2.5 text-xl font-700 text-[#686868] border border-[#F2F2F2] rounded-[10px] cursor-pointer hover:bg-primary hover:text-cream-foreground transition-all duration-500 target-item" data-target="child">Child</li>
                    <li className="px-5 py-2.5 text-xl font-700 text-[#686868] border border-[#F2F2F2] rounded-[10px] cursor-pointer hover:bg-primary hover:text-cream-foreground transition-all duration-500 target-item" data-target="coaching">Coaching</li>
                </ul>
                <div className="mt-[64px] overflow-hidden relative wow fadeInUp" data-wow-delay=".3s">
              
                    <div data-target="education" className="grid lg:gap-7.5 gap-4 grid-cols-12 grid-rows-[277px] relative top-0 left-0 transition-all duration-500 translate-y-0 target-card">
                     
                        <div className="sm:col-start-1 md:col-end-5 sm:col-end-7 col-span-full sm:row-span-2 relative group/card">
                            <img src="assets/images/portfolio/portfolio-1.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>

                        <div className="md:col-start-5 md:col-end-10 sm:col-start-7 sm:col-end-13 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-2.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="md:col-start-10 sm:col-start-7 sm:col-end-13 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-3.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="md:col-start-5 md:col-end-9 sm:col-start-1 sm:col-end-7 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-5.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="md:col-start-9 sm:col-span-6 sm:col-end-13 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-6.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div data-target="school" className="grid lg:gap-7.5 gap-4 grid-cols-12 sm:grid-rows-[453px] absolute top-0 left-0 transition-all duration-500 translate-y-10 invisible opacity-0 target-card">
                        
                        <div className="sm:col-start-1 sm:col-end-8 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-1.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="sm:col-start-8 sm:col-end-13 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-2.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="sm:col-start-1 sm:col-end-7 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-3.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="sm:col-start-7 sm:col-end-13 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-5.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                    
                    
                    </div>
                    
                    <div data-target="learn" className="grid lg:gap-7.5 gap-4 grid-cols-12 sm:grid-rows-[453px] absolute top-0 left-0 transition-all duration-500 translate-y-10 invisible opacity-0 target-card">
                        
                        <div className="sm:col-start-1 sm:col-end-7 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-3.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="sm:col-start-7 sm:col-end-13 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-5.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div data-target="child" className="grid lg:gap-7.5 gap-4 grid-cols-12 sm:grid-rows-[453px] absolute top-0 left-0 transition-all duration-500 translate-y-10 invisible opacity-0 target-card">
                        <div className="sm:col-start-1 sm:col-end-8 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-1.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="sm:col-start-8 sm:col-end-13 col-span-full relative group/card max-h-[453px]">
                            <img src="assets/images/portfolio/portfolio-2.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div data-target="coaching" className="grid lg:gap-7.5 gap-4 grid-cols-12 grid-rows-[277px] absolute top-0 left-0 transition-all duration-500 translate-y-10 invisible opacity-0 target-card">
                       
                        <div className="sm:col-start-1 md:col-end-5 sm:col-end-7 col-span-full sm:row-span-2 relative group/card">
                            <img src="assets/images/portfolio/portfolio-1.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>

                        <div className="md:col-start-5 md:col-end-10 sm:col-start-7 sm:col-end-13 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-2.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>

                        <div className="md:col-start-10 sm:col-start-7 sm:col-end-13 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-3.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>

                        <div className="md:col-start-5 md:col-end-9 sm:col-start-1 sm:col-end-7 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-5.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>

                        <div className="md:col-start-9 sm:col-span-6 sm:col-end-13 col-span-full relative group/card">
                            <img src="assets/images/portfolio/portfolio-6.png" alt="img" className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]" />
                            <div className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                                <h5 className="text-center"><a href="#" className="text-cream-foreground text-2xl font-medium">Exploring Minds Elementary  Best School</a></h5>
                                <p className="text-cream-foreground">Dreamland Elementary</p>
                                <a href="#" className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                                    <span className="group-hover:ml-20 transition-all duration-500"><i className="fa-solid fa-arrow-right text-primary-foreground"></i></span>
                                </a>
                            </div>
                        </div>
                       
                    </div>
              
                </div>
            </div>
        </div>
    </section>

    <section className="bg-[linear-gradient(180deg,_rgba(238,255,200,0.00)_0%,_#E9FFB6_100%)] lg:mt-15 mt-10 overflow-x-hidden">
        <div className="bg-bottom bg-no-repeat bg-contain bg-newsletter-banner">
            <div className="container">
                <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-7.5">
                    <div className="max-w-[598px] w-full order-1 lg:order-0">
                        <div className="bg-[url('/assets/images/shapes/egg-shap.png')] bg-no-repeat bg-bottom bg-contain">
                            <img src="assets/images/newsletter/student.png" alt="student-img" className="mx-auto" />
                        </div>
                    </div>
                    <div className="lg:max-w-[530px] order-0 lg:order-1">
                        <p className="font-bubblegum-sans text-[19px] text-muted-foreground wow fadeInUp">Get Connected</p>
                        <h2 className="font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%] wow fadeInUp" data-wow-delay=".3s">Education That Sparks Imaginat Nurturing Curiosity Inspire</h2>
                        <div className="relative lg:mt-10 mt-5">
                            <input type="text" placeholder="Enter Your Email" className="rounded-[10px] border border-black pl-6 lg:py-7 py-4 max-h-20 w-full outline-none" />
                            <button className="bg-primary text-cream-foreground rounded-[10px] absolute right-[10px] top-1/2 -translate-y-1/2 btn"><span>Submit</span> <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
};

export default Portfolio;
