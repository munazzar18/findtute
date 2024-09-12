import React from 'react'
import Head from 'next/head';

const Blog = () => {
  return (
    <>
    <Head>
        <title>Our Blog | Best Online Teachers</title>
        <meta name="description" content="Read the latest articles and insights from our experts on online teaching and tutoring." />
        <meta name="keywords" content="Online Teaching Blog, Online Tutors Articles, Education Insights, Tutoring Tips" />
        <meta property="og:title" content="Our Blog | Best Online Teachers" />
        <meta property="og:description" content="Explore our blog for the latest updates and expert advice on online teaching and tutoring." />
        <meta property="og:image" content="https://i.imgur.com/WbQnbas.png" />
        <meta property="og:url" content="https://findtute.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Blog | Best Online Teachers" />
        <meta name="twitter:description" content="Read our blog for the latest in online teaching and tutoring." />
        <meta name="twitter:image" content="https://i.imgur.com/WbQnbas.png" />
      </Head>

   



       <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
            <div className="container">
                <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
                    <div className="">
                        <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">Blog</h2>
                        <ul className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2">
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Home</a></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Blog</a></li>
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
            <div className=" grid xl:grid-cols-[850px_auto] lg:grid-cols-[700px_auto] grid-cols-1 gap-7.5">
                <div className="flex flex-col lg:gap-[60px] gap-10">
                
                    <div className="shadow-4xl bg-background rounded-[10px] group wow fadeInUp" data-wow-delay="0.2s">
                        <img src="assets/images/blog/blog-details-1.png" alt="blog-img-1" />
                        <div className="pt-7.5 pb-10 lg:px-10 px-5">
                            <h4><a href="#" className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500">Unlock your potential with education ower yourself the na through learning.</a></h4>
                             <div className="lg:mt-10 mt-7">
                                <a href="#" className="border-2 border-[#F2F2F2] rounded-md btn">Read More</a>
                             </div>
                             <ul className="flex gap-7.5 pt-5 flex-wrap">
                                <li> <i className="fa-regular fa-calendar-days"></i> <span className="text-[#686868] ml-1">January 19, 2024</span> </li>
                                <li> <i className="fa-regular fa-user"></i> <span className="text-[#686868] ml-1">By admin</span> </li>
                                <li> <i className="fa-regular fa-comments"></i> <span className="text-[#686868] ml-1">Comments (05)</span> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="shadow-4xl bg-background rounded-[10px] group wow fadeInUp" data-wow-delay="0.3s">
                        <img src="assets/images/blog/blog-3-2.png" alt="blog-img-1" />
                        <div className="pt-7.5 pb-10 lg:px-10 px-5">
                            <h4><a href="#" className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500">Invest In Education, Invest In Yourself Education The Na Through Learning.</a></h4>
                             <div className="lg:mt-10 mt-7">
                                <a href="#" className="border-2 border-[#F2F2F2] rounded-md btn">Read More</a>
                             </div>
                             <ul className="flex gap-7.5 pt-5 flex-wrap">
                                <li> <i className="fa-regular fa-calendar-days"></i> <span className="text-[#686868] ml-1">January 19, 2024</span> </li>
                                <li> <i className="fa-regular fa-user"></i> <span className="text-[#686868] ml-1">By admin</span> </li>
                                <li> <i className="fa-regular fa-comments"></i> <span className="text-[#686868] ml-1">Comments (05)</span> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="shadow-4xl bg-background rounded-[10px] group wow fadeInUp" data-wow-delay="0.4s">
                        <img src="assets/images/blog/blog-3-3.png" alt="blog-img-1" />
                        <div className="pt-7.5 pb-10 lg:px-10 px-5">
                             <h4><a href="#" className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500">It Plays A Vital Role In Shaping The Future Generation And Promoting Personal And Professional Growth</a></h4>
                             <div className="lg:mt-10 mt-7">
                                <a href="#" className="border-2 border-[#F2F2F2] rounded-md btn">Read More</a>
                             </div>
                             <ul className="flex gap-7.5 pt-5 flex-wrap">
                                <li> <i className="fa-regular fa-calendar-days"></i> <span className="text-[#686868] ml-1">January 19, 2024</span> </li>
                                <li> <i className="fa-regular fa-user"></i> <span className="text-[#686868] ml-1">By admin</span> </li>
                                <li> <i className="fa-regular fa-comments"></i> <span className="text-[#686868] ml-1">Comments (05)</span> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="shadow-4xl bg-background rounded-[10px] group wow fadeInUp" data-wow-delay="0.5s">
                        <img src="assets/images/blog/blog-3-4.png" alt="blog-img-1" />
                        <div className="pt-7.5 pb-10 lg:px-10 px-5">
                             <h4><a href="#" className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500">Invest In Education, Invest In Yourself Education The Na Through Learning.</a></h4>
                             <div className="lg:mt-10 mt-7">
                                <a href="#" className="border-2 border-[#F2F2F2] rounded-md btn">Read More</a>
                             </div>
                             <ul className="flex gap-7.5 pt-5 flex-wrap">
                                <li> <i className="fa-regular fa-calendar-days"></i> <span className="text-[#686868] ml-1">January 19, 2024</span> </li>
                                <li> <i className="fa-regular fa-user"></i> <span className="text-[#686868] ml-1">By admin</span> </li>
                                <li> <i className="fa-regular fa-comments"></i> <span className="text-[#686868] ml-1">Comments (05)</span> </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="flex items-center justify-center gap-[15px]">
                        <li className="w-15 h-15 rounded-[10px] bg-secondary flex justify-center items-center text-cream-foreground border border-[#CCCCCC]">
                            <a href="#" className="text-2xl font-semibold leading-[140%]">01</a>
                        </li>
                        <li className="w-15 h-15 rounded-[10px] transition-all duration-500 hover:bg-secondary flex justify-center items-center text-muted-foreground hover:text-cream-foreground border border-[#CCCCCC]">
                            <a href="#" className="text-2xl font-semibold leading-[140%]">02</a>
                        </li>
                        <li className="w-15 h-15 rounded-[10px] transition-all duration-500 hover:bg-secondary flex justify-center items-center text-muted-foreground hover:text-cream-foreground border border-[#CCCCCC]">
                            <a href="#" className="text-2xl font-semibold leading-[140%]">03</a>
                        </li>
                        <li className="w-15 h-15 rounded-[10px] transition-all duration-500 hover:bg-secondary flex justify-center items-center text-muted-foreground hover:text-cream-foreground border border-[#CCCCCC]">
                            <a href="#" className="text-2xl font-semibold leading-[140%]"><i className="fa-solid fa-angle-right"></i></a>
                        </li>
                    </ul>
                   
                </div>
               
                 <div>
                  
                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md">
                        <img src="assets/images/blog/user.png" alt="user img" />
                        <div className="pt-5">
                            <h4 className="lg:text-2xl text-xl font-semibold lg:leading-[140%]">Nafiz Bhuiyan</h4>
                            <p className="lg:mt-[18px] mt-2.5">It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout</p>
                            <ul className="flex items-center gap-5 lg:pt-7.5 pt-5">
                                <li><a href="#" className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#" className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#" className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="#" className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"><i className="fa-brands fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
                        <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Search<span className="text-green-foreground">_</span> </h4>
                        <form action="#" className="xl:mt-7.5 mt-4">
                            <div className="relative">
                                <input type="text" placeholder="Search.." className="w-full rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none" />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2"><i className="fa-solid fa-magnifying-glass text-secondary-foreground"></i></div>
                            </div>
                        </form>
                    </div>
                    
                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
                        <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Category<span className="text-green-foreground">_</span> </h4>
                        <ul className="xl:pt-7.5 pt-4 flex flex-col gap-5">
                            <li> 
                                <a href="#" className="w-full rounded-[10px] border-2 text-[#686868] border-[#F2F2F2] px-5 py-2.5 flex justify-between items-center"><span> EduTech Solutions</span> <span>01</span> </a> 
                            </li>
                            <li> 
                                <a href="#" className="w-full rounded-[10px] border-2 text-[#686868] border-[#F2F2F2] px-5 py-2.5 flex justify-between items-center"><span>SmartAcademy</span> <span>07</span> </a> 
                            </li>
                            <li> 
                                <a href="#" className="w-full rounded-[10px] border-2 text-[#686868] border-[#F2F2F2] px-5 py-2.5 flex justify-between items-center"><span>KnowledgeHub</span> <span>02</span> </a> 
                            </li>
                            <li> 
                                <a href="#" className="w-full rounded-[10px] border-2 text-[#686868] border-[#F2F2F2] px-5 py-2.5 flex justify-between items-center"><span>Specialist</span> <span>04</span> </a> 
                            </li>
                            <li> 
                                <a href="#" className="w-full rounded-[10px] border-2 text-[#686868] border-[#F2F2F2] px-5 py-2.5 flex justify-between items-center"><span>Education is the door</span> <span>03</span> </a> 
                            </li>
                        </ul>
                    </div>

                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
                        <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Recent post<span className="text-green-foreground">_</span> </h4>
                        <ul className="xl:pt-7.5 pt-4 flex flex-col gap-5">
                            <li className="xl:pl-7.5 pl-5 xl:py-5 py-3 rounded-[10px] border-2 border-[#F2F2F2]"> 
                                <p className="flex items-center gap-2.5 pb-1.5"><small>Category</small> <span className="w-1.5 h-1.5 bg-green inline-block rounded-full"></span> <small>Comments 0</small> </p>
                                <a href="#" className="font-bold lg:text-xl text-lg xl:leading-[130%] leading-[120%] font-jost">Expand your horizons with Most Of education </a> 
                            </li>
                            <li className="xl:pl-7.5 pl-5 xl:py-5 py-3 rounded-[10px] border-2 border-[#F2F2F2]"> 
                                <p className="flex items-center gap-2.5 pb-1.5"><small>Category</small> <span className="w-1.5 h-1.5 bg-green inline-block rounded-full"></span> <small>Comments 0</small> </p>
                                <a href="#" className="font-bold lg:text-xl text-lg xl:leading-[130%] leading-[120%] font-jost">Invest in education invest in yourself Best</a> 
                            </li>
                            <li className="xl:pl-7.5 pl-5 xl:py-5 py-3 rounded-[10px] border-2 border-[#F2F2F2]"> 
                                <p className="flex items-center gap-2.5 pb-1.5"><small>Category</small> <span className="w-1.5 h-1.5 bg-green inline-block rounded-full"></span> <small>Comments 0</small> </p>
                                <a href="#" className="font-bold lg:text-xl text-lg xl:leading-[130%] leading-[120%] font-jost">Empower yourself through an learning</a> 
                            </li>
                        </ul>
                    </div>

                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
                        <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Tags<span className="text-green-foreground">_</span> </h4>
                        <ul className="xl:pt-7.5 pt-4 flex gap-5 flex-wrap">
                            <li> 
                                <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">LearnWell</a> 
                            </li>
                            <li> 
                                <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">Edu Pro</a> 
                            </li>
                            <li> 
                                <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">Study Boost</a> 
                            </li>
                            <li> 
                                <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">Academy</a> 
                            </li>
                            <li> 
                                <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">LearnEase</a> 
                            </li>
                            <li> 
                                <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">BrainWave</a> 
                            </li>
                        </ul>
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
  )
}

export default Blog