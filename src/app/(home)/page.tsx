import React from 'react'
import Counter from '../helper/Counter'

export default function page() {
  return (
    <>
      <section className="bg-warm pt-[78px] lg:mb-15 mb-10 relative">
        <div className="container relative">
          <div className="flex flex-col items-center text-center relative z-10">
            <h1 className="font-normal xl:text-[70px] lg:text-6xl md:text-5xl text-4xl xl:leading-[128%] lg:leading-[125%] md:leading-[120%] max-w-[776px]">
              <span className="relative">
                Level Up Your Skills{' '}
                <span className="absolute -left-6 top-1 text-3xl">
                  <i className="icon-three-line"></i>
                </span>
              </span>
              <span className="font-bold">Find Your Perfect Tutor </span>{' '}
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

            <p className="pt-5 max-w-[431px]">
              Unleash your learning potential with TeachU, the only platform
              that connects you with expert tutors - both online and in your
              area.
            </p>

            <p className="pt-5 max-w-[431px]">
              Stop searching, start learning! We make finding the perfect tutor
              a breeze. Browse profiles of highly qualified teachers across a
              wide range of subjects.
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
              <p className="wow fadeInUp" data-wow-delay=".3s">
                Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies
                dictum facilisis sem. Imperdiet massa turpis sit proin metus
                volutpat loren ipsum Lorem ipsum dolor sit amet consectetur.
                Amet lectus mi ultricies dictum
              </p>
              <button className="border border-gray-200 rounded-md lg:mt-10 mt-7 btn">
                Get a quote
              </button>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
              <div
                className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-full bg-primary lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
                  <i className="icon-kindergarden lg:text-[40px] text-3xl text-cream-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    20K
                  </h4>
                  <p>Running Students</p>
                </div>
              </div>

              <div
                className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-full bg-destructive lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
                  <i className="icon-book lg:text-[40px] text-3xl text-cream-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    <Counter start={1000} end={13000} />
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
                  <i className="icon-blocks lg:text-[40px] text-3xl text-cream-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    3K
                  </h4>
                  <p>Award Winning</p>
                </div>
              </div>
              <div
                className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-full bg-secondary lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
                  <i className="icon-book lg:text-[40px] text-3xl text-cream-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">
                    13K
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
              Strong Foundation for Success For Nurturing Curiosityl
            </h2>
          </div>
          <div className="lg:pl-11">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-car-toy md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Online Class
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    platea the ,osr of a proin mollis pretium facilisi in,
                    ligula volutpat{' '}
                  </p>
                  <a
                    href="service-details.html"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-toys md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Formal Tuition
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    platea the ,osr of a proin mollis pretium facilisi in,
                    ligula volutpat{' '}
                  </p>
                  <a
                    href="service-details.html"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-feeder md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Preschool
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    platea the ,osr of a proin mollis pretium facilisi in,
                    ligula volutpat{' '}
                  </p>
                  <a
                    href="service-details.html"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">
                  <i className="icon-book md:text-6xl text-[40px]"></i>
                </div>
                <div className="lg:pl-11 mt-4 lg:mt-0">
                  <h4>
                    <a
                      href="service-details.html"
                      className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
                    >
                      Special Tuition
                    </a>
                  </h4>
                  <p className="lg:mt-4 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    platea the ,osr of a proin mollis pretium facilisi in,
                    ligula volutpat{' '}
                  </p>
                  <a
                    href="service-details.html"
                    className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                  >
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">
                      Read More
                    </span>
                    <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
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
    </>
  )
}
