import LandingGUI from '@/app/components/LandingGUI'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const page = () => {
  return (
    <>
      <div>
        <section className="lg:pt-10 pt-5 lg:pb-10 pb-5">
          <div className="container">
            <div className="lg:pt-15 pt-10">
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-7.5 gap-x-7.5 lg:gap-x-0">
                <div
                  className="rounded-[10px] shadow-[-20px_4.8px_24.4px_-6px_rgba(19,16,34,0.10)] bg-background wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="bg-warm py-[15px] rounded-tr-[10px] rounded-tl-[10px]">
                    <p className="lg:text-[28px] text-2xl font-bold text-center text-muted-foreground">
                      Monthly Plan
                    </p>
                  </div>
                  <div className="lg:pt-7.5 pt-6 lg:pb-10 pb-7 lg:px-10 px-5">
                    <h2 className="lg:text-[70px] md:text-[50px] text-4xl lg:leading-[117%] md:leading-[110%] leading-[100%] font-bold text-green">
                      Rs.499
                      <span className="md:text-2xl text-lg font-semibold text-muted-foreground md:leading-[140%] leading-[130%]">
                        /mo
                      </span>{' '}
                    </h2>
                    <ul className="lg:pt-7.5 pt-5 flex gap-3 flex-col">
                      <li className="flex items-center gap-5">
                        <i className="fa-solid fa-angles-right text-secondary-foreground text-sm"></i>{' '}
                        <span>Monthly Subscription</span>{' '}
                      </li>
                      <li className="flex items-center gap-5">
                        <FaAngleRight className="text-secondary-foreground text-sm" />
                        <span>Get started with montly plan</span>{' '}
                      </li>
                      <li className="flex items-center gap-5">
                        <FaAngleRight className="text-secondary-foreground text-sm" />
                        <span>Inclusive of all taxes</span>{' '}
                      </li>
                      <li className="flex items-center gap-5">
                        <FaAngleRight className="text-secondary-foreground text-sm" />
                        <span>No hidden charges</span>{' '}
                      </li>
                    </ul>
                    <div className="mt-10 flex justify-center">
                      {/* <Link
                        href="/dashboard/payment-request?plan=monthly"
                        className="border border-primary rounded-[10px] btn "
                      >
                        Buy Now
                      </Link> */}
                      <LandingGUI
                        btnClass="border border-primary rounded-[10px] btn"
                        amount={499}
                        description="monthly"
                        ApplicationPackage="monthly"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-[10px] shadow-[-20px_4.8px_24.4px_-6px_rgba(19,16,34,0.10)] bg-background wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="bg-primary py-[15px] rounded-tr-[10px] rounded-tl-[10px]">
                    <p className="lg:text-[28px] text-2xl font-bold text-center text-cream-foreground">
                      Yearly Plan
                    </p>
                  </div>
                  <div className="lg:pt-7.5 pt-6 lg:pb-10 pb-7 lg:px-10 px-5">
                    <h2 className="lg:text-[70px] md:text-[50px] text-4xl lg:leading-[117%] md:leading-[110%] leading-[100%] font-bold text-green">
                      Rs.3999
                      <span className="md:text-2xl text-lg font-semibold text-muted-foreground md:leading-[140%] leading-[130%]">
                        /yr
                      </span>{' '}
                    </h2>
                    <ul className="lg:pt-7.5 pt-5 flex gap-3 flex-col">
                      <li className="flex items-center gap-5">
                        <i className="fa-solid fa-angles-right text-secondary-foreground text-sm"></i>{' '}
                        <span>Yearly Subscription</span>{' '}
                      </li>
                      <li className="flex items-center gap-5">
                        <FaAngleRight className="text-secondary-foreground text-sm" />
                        <span>Get started with yearly plan</span>{' '}
                      </li>
                      <li className="flex items-center gap-5">
                        <FaAngleRight className="text-secondary-foreground text-sm" />
                        <span>Inclusive of all taxes</span>{' '}
                      </li>
                      <li className="flex items-center gap-5">
                        <FaAngleRight className="text-secondary-foreground text-sm" />
                        <span>No hidden charges</span>{' '}
                      </li>
                    </ul>
                    <div className="mt-10 flex justify-center">
                      {/* <Link
                        href="/dashboard/payment-request?plan=yearly"
                        className="bg-primary text-cream-foreground rounded-[10px] btn "
                      >
                        Buy Now
                      </Link> */}
                      <LandingGUI
                        btnClass="bg-primary text-cream-foreground rounded-[10px] btn"
                        amount={3999}
                        description="yearly"
                        ApplicationPackage="yearly"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page
