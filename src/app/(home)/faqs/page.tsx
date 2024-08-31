import React from 'react';

const Faqs = () => {
  return (
    <>
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
