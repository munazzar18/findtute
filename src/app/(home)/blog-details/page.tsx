import React from 'react';

const Blogdetails = () => {
  return (
    <>
    <div className="lg:pb-15 pb-10">
        <div className="bg-warm lg:py-15 py-10">
            <div className="container">
                <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
                    <div className="">
                        <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">Blog Details</h2>
                        <ul className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2">
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Home</a></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li><a href="#" className="lg:text-[28px] text-xl font-bold">Blog Details</a></li>
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

    <section className="pt-15">
        <div className=" container">
            <div className=" grid xl:grid-cols-[850px_auto] lg:grid-cols-[670px_auto] grid-cols-1 gap-7.5">

                <div>
                    <div className="wow fadeInUp" data-wow-delay=".2s">
                        <img src="assets/images/blog/blog-details-1.png" alt="blog-details-1" />
                        <div className="pt-7.5">
                            <ul className="flex gap-7.5 pb-5 flex-wrap">
                                <li > <i className="fa-regular fa-calendar-days"></i> <span className="text-[#686868] ml-2.5">January 19, 2024</span> </li>
                                <li> <i className="fa-regular fa-user"></i> <span className="text-[#686868] ml-2.5">By admin</span> </li>
                                <li> <i className="fa-regular fa-comments"></i> <span className="text-[#686868] ml-2.5">Comments (05)</span> </li>
                            </ul>
                            <h4 className="lg:text-[32px] md:text-[28px] text-xl lg:leading-[130%] md:leading-[120%] leading-[110%] font-bold pb-5">Unlock your potential with education ower yourself the na through learning.</h4>
                            <p>IT Technology is a rapidly evolving field that encompasses a wide range of computer-rela Technology is a rapidly ya evolving field that encompasses a wide range of computer-related technologies and the services. From software thr development to network administrationtechnologies most of a man</p>
                        </div>
                    </div>
                    <blockquote className="shadow-3xl xl:px-15 px-8 xl:py-[38px] py-5 my-10 rounded-[10px]">
                        <img src="assets/images/blog/blog-qute.png" alt="blog-qute" />
                    <i className="fa-solid fa-quote-right text-green-foreground text-5xl"></i> 
                        <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled loren ipsum</p>
                        <h4 className="text-xl font-bold leading-[130%] mt-[28px]">Fahad Hossain<span className="text-green-foreground">_</span> </h4>
                    </blockquote>
                    <div>
                        <div className="flex justify-between gap-7.5">
                            <div>
                                <img src="assets/images/blog/blog-details-2.png" alt="blog-details-2" />
                            </div>
                            <div>
                                <img src="assets/images/blog/blog-details-3.png" alt="blog-details-3" />
                            </div>
                        </div>
                        <div className="mt-7.5">
                            <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosjust posuer lobortis viverra laoreet augue mattis fermentum ullamcAliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosjust posuer lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreetAliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosjust posuer lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreetorper viverra laoreet</p>
                            <ul className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                                <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><i className="fa-solid fa-check text-[10px]"></i></span> Knowledge is the key education is the door</li>
                                <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><i className="fa-solid fa-check text-[10px]"></i></span> Discover the power of education.</li>
                            </ul>
                            <ul className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                                <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><i className="fa-solid fa-check text-[10px]"></i></span> Education opens doors to opportunities, fosters </li>
                                <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><i className="fa-solid fa-check text-[10px]"></i></span> Expand your horizons with education.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12">

                        <div>
                            <h3 className="text-2xl font-semibold leading-[140%]">Tags:</h3>
                            <ul className="pt-7 flex gap-5 flex-wrap">
                                <li> 
                                    <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">All Project</a> 
                                </li>
                                <li> 
                                    <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">Edu Connect</a> 
                                </li>
                                <li> 
                                    <a href="#" className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">Smart Academy</a> 
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <span className="w-full h-0.5 bg-[#F2F2F2] block"></span>
                            <div className="flex sm:flex-row flex-col gap-5 justify-between items-center pt-6 pb-7">
                                <a href="#" className="text-xl font-bold leading-[130%] flex gap-2.5 items-center font-jost group"> <span className="group-hover:text-destructive-foreground transition-all duration-500"><i className="fa-solid fa-angle-left"></i></span> Previous post</a>
                                <ul className="flex items-center gap-2.5">
                                    <li><a href="#" className="rounded-full w-10 h-10 flex items-center justify-center border border-destructive hover:text-cream-foreground hover:bg-destructive transition-all duration-500"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="rounded-full w-10 h-10 flex items-center justify-center border border-destructive hover:text-cream-foreground hover:bg-destructive transition-all duration-500"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#" className="rounded-full w-10 h-10 flex items-center justify-center border border-destructive hover:text-cream-foreground hover:bg-destructive transition-all duration-500"><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="#" className="rounded-full w-10 h-10 flex items-center justify-center border border-destructive hover:text-cream-foreground hover:bg-destructive transition-all duration-500"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                                <a href="#" className="text-xl font-bold leading-[130%] flex gap-2.5 items-center font-jost group">Next post <span className="group-hover:text-destructive-foreground transition-all duration-500"><i className="fa-solid fa-angle-right"></i></span></a>
                            </div>
                            <span className="w-full h-0.5 bg-[#F2F2F2] block"></span>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-[28px] font-bold leading-[148%] font-nunito">Write your comment</h3>
                            <form action="#" className="mt-7">
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                    <div className="relative">
                                        <input type="text" placeholder="Your Name" id="name" className="w-full rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none" />
                                        <label for="name" className="absolute right-5 top-1/2 -translate-y-1/2 text-primary-foreground"><i className="fa-solid fa-phone"></i></label>
                                    </div>
                                    <div className="relative">
                                        <input type="email" placeholder="Your Email" id="email" className="w-full rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none" />
                                     <label for="email" className="absolute right-5 top-1/2 -translate-y-1/2 text-primary-foreground"><i className="fa-solid fa-paper-plane"></i></label>
                                    </div>
                                </div>
                                <div className="pt-7.5">
                                    <textarea name="message" id="message" placeholder="Write your Message here" className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"></textarea>
                                </div>
                                <button className="lg:max-w-[186px] max-w-[140px] w-full lg:mt-10 mt-5 btn-rounded-full">Send Now</button>
                            </form>
                        </div>

                    </div>
                </div>
                

                <div>
                  
                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md wow fadeInUp" data-wow-delay=".4s">
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

                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10 wow fadeInUp" data-wow-delay=".5s">
                        <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Search<span className="text-green-foreground">_</span> </h4>
                        <form action="#" className="xl:mt-7.5 mt-4">
                            <div className="relative">
                                <input type="text" placeholder="Search.." className="w-full rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none" />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2"><i className="fa-solid fa-magnifying-glass text-secondary-foreground"></i></div>
                            </div>
                        </form>
                    </div>

                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10 wow fadeInUp" data-wow-delay=".6s">
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

                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10 wow fadeInUp" data-wow-delay=".7s">
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

                    <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10 wow fadeInUp" data-wow-delay=".8s">
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
};

export default Blogdetails;
