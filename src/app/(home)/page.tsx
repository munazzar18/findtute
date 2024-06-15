import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-24 items-center justify-between mt-4 sm:mt-4 md:mt-8 lg:mt-16 mb-8 sm:mb-8 md:mb-16 lg:mb-24">
        <div>
          <Image
            src="/homepage1.svg"
            height={1680}
            width={1680}
            alt="homepage"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold sm:text-xl md:text-2xl lg:text-4xl mb-4 sm:mb-4 md:mb-6 lg:mb-8">
            Welcome!
          </h1>
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-2 md:mb-4 lg:mb-6">
            Level Up Your Skills: Find Your Perfect Tutor - Online or Nearby!
          </p>
          <p className="text-md sm:text-md md:text-lg lg:text-xl mb-2 sm:mb-2 md:mb-2 lg:mb-4">
            Unleash your learning potential with TeachU, the only platform that
            connects you with{" "}
            <strong>expert tutors - both online and in your area.</strong>
          </p>
          <p className="text-md sm:text-md md:text-lg lg:text-xl">
            <strong>Stop searching, start learning!</strong> We make finding the
            perfect tutor a breeze. Browse profiles of highly qualified teachers
            across a wide range of subjects.
          </p>
        </div>
      </div>

      <div className="bg-lavender-web">
        <div className="p-2 sm:p-2 md:p-6 lg:p-8">
          <div className="mb-6 sm:mb-2 md:mb-3 lg:mb-6 xl:mb-6">
            <h1 className="text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl">
              Find teachers nearby
            </h1>
          </div>

          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="">
              <Image
                src="/getStarted.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Get Started in Seconds: Unwind the Red Tape of Learning:
                </h1>
                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Finding the perfect tutor shouldn't feel like a chore. Our
                  platform streamlines the process with a{" "}
                  <strong>quick and easy signup </strong>
                  that takes just seconds. No more sifting through endless
                  applications or complicated registration forms. Get ready to
                  focus on what truly matters: unlocking your learning
                  potential.
                </p>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="md:hidden">
              <Image
                src="/getProfile.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Craft Your Personalized Learning Profile:
                </h1>
                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Dive deeper into your educational journey by creating a{" "}
                  <strong>personalized profile</strong>. This allows you to
                  specify your learning goals, preferred subjects, and desired
                  learning style. Having a clear profile helps connect you with
                  the ideal nearby teachers who can cater to your specific needs
                  and interests.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/getProfile.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
          </div>

          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="">
              <Image
                src="/vastNetwork.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Discover a Network of Expert Tutors at Your Fingertips:
                </h1>

                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Gone are the days of limited learning options. Our platform
                  boasts a vast network of{" "}
                  <strong>highly qualified tutors</strong> across diverse
                  subjects. With a few clicks, you can browse profiles of{" "}
                  <strong>teachers conveniently located near you</strong> -
                  perfect for those seeking a more personalized touch or a
                  flexible learning schedule.
                </p>
              </div>
            </div>
          </div>

          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="md:hidden">
              <Image
                src="/chatBubbles.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Seamless Communication: Connect and Chat with Confidence:
                </h1>

                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Break the ice and initiate a conversation with your chosen
                  tutor through our <strong>integrated chat interface</strong>.
                  Ask questions, discuss your learning objectives, and ensure a
                  perfect fit before committing to lessons. This{" "}
                  <strong>transparent communication</strong> paves the way for a
                  successful and enriching learning experience
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/chatBubbles.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
          </div>

          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="">
              <Image
                src="/igniteLearning.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Ignite Your Learning Journey: Start Lessons and Achieve
                  Greatness:
                </h1>

                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Empower yourself with knowledge! Once you've connected with
                  the perfect teacher, it's time to embark on your learning
                  adventure. Our platform facilitates <strong>seamless</strong>{" "}
                  online lessons, allowing you to learn from the comfort of your
                  own home. Embrace the flexibility and convenience of learning
                  while receiving expert guidance from qualified tutors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pistachlo">
        <div className="p-2 sm:p-2 md:p-6 lg:p-8">
          <div className="mb-6 sm:mb-2 md:mb-3 lg:mb-6 xl:mb-6">
            <h1 className="text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl">
              Find teachers online
            </h1>
          </div>

          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="">
              <Image
                src="/signup.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Sign Up & Simplify: Ditch the Search, Embrace the Find:
                </h1>
                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Tired of endlessly searching for qualified tutors?
                  <strong> TeachU streamlines the process</strong> with a{" "}
                  <strong> quick and easy signup</strong>. No mountains of
                  paperwork, just a few clicks to unlock a world of learning
                  possibilities.
                </p>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="md:hidden">
              <Image
                src="/learningCompass.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Craft Your Learning Compass: Define Your Educational Voyage:
                </h1>
                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  <strong>Personalize your learning experience</strong> by
                  creating a detailed profile. Specify your{" "}
                  <strong>
                    {" "}
                    learning goals, desired subjects, and preferred teaching
                    style
                  </strong>
                  . This helps TeachU connect you with the{" "}
                  <strong>ideal online tutor</strong> who aligns perfectly with
                  your aspirations.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/learningCompass.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
          </div>

          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="">
              <Image
                src="/bestMatch.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Explore a World of Expertise: Discover Your Perfect Learning
                  Match:
                </h1>

                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  <strong>Expand your educational horizons</strong> with
                  TeachU's vast network of{" "}
                  <strong>highly qualified online tutors</strong>. Browse
                  profiles across diverse subjects, filtering by location or
                  expertise. Find a teacher who sparks your curiosity and
                  ignites your passion for learning.
                </p>
              </div>
            </div>
          </div>

          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="md:hidden">
              <Image
                src="/seamlessChat.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Break the Ice: Initiate a Seamless Conversation:
                </h1>

                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  <strong>Connect with confidence</strong> through our{" "}
                  <strong>user-friendly chat interface</strong>. Ask questions,
                  discuss learning objectives, and ensure a perfect fit before
                  starting lessons. <strong>Transparent communication</strong>{" "}
                  paves the way for a successful and enriching learning
                  experience.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/seamlessChat.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
          </div>

          {/* row */}
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-48 justify-center items-center gap-2 mb-4 sm:mb-4 md:mb-6 lg:mb-8 ">
            <div className="">
              <Image
                src="/onlineLearning.png"
                width={1080}
                height={1080}
                alt="get started"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  Ignite Your Learning Spark: Take the First Step Towards
                  Greatness:
                </h1>

                <p className="text-justify text-lg sm:text-lg md:text-xl lg:text-2xl">
                  <strong>Empower yourself with knowledge!</strong> Once you've
                  connected with the ideal tutor,{" "}
                  <strong>embark on your online learning adventure</strong>. Our
                  platform facilitates{" "}
                  <strong>interactive online lessons</strong> allowing you to
                  learn from the comfort of your home.{" "}
                  <strong>Embrace the flexibility and convenience</strong> of
                  online learning while receiving expert guidance from qualified
                  tutors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* teachers section */}
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-24 items-center justify-between mt-4 sm:mt-4 md:mt-8 lg:mt-16 mb-8 sm:mb-8 md:mb-16 lg:mb-24">
        <div>
          <h1 className="text-xl font-bold sm:text-xl md:text-2xl lg:text-4xl mb-4 sm:mb-4 md:mb-6 lg:mb-8">
            What we bring for teachers?
          </h1>
          <p className="font-bold text-lg sm:text-lg md:text-xl lg:text-3xl mb-2 sm:mb-2 md:mb-4 lg:mb-6">
            Unleash Your Teaching Power: 7 Easy Steps to Join TeachU's Thriving
            Tutor Community!
          </p>
          <p className="font-semibold text-md sm:text-md md:text-xl lg:text-2xl mb-2 sm:mb-2 md:mb-2 lg:mb-4">
            Tired of juggling endless paperwork and limited opportunities?
            TeachU offers a seamless platform for qualified tutors to connect
            with eager students and build a flourishing online teaching career.
            Here's why TeachU is the perfect fit for you:
          </p>
        </div>
        <div>
          <Image src="/teacher1.png" height={1080} width={1080} alt="teacher" />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-col md:flex-col lg:flex-col px-4 sm:px-4 md:px-16 lg:px-24 items-center justify-between mt-4 sm:mt-4 md:mt-8 lg:mt-16 mb-8 sm:mb-8 md:mb-16 lg:mb-24 sm:gap-4 md:gap-8 lg:gap-14">
        <div>
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            <span className="bg-verdigris rounded-full text-white me-2">
              <FontAwesomeIcon icon={fa1} fixedWidth size="xs" />
            </span>
            Effortless Onboarding: Sign Up and Start Teaching in Minutes
          </h1>
          <p className="text-justify text-lg ms-1 sm:text-lg md:text-xl lg:text-2xl sm:ms-2 md:ms-6 lg:ms-9">
            <strong>Ditch the complex registration processes!</strong> TeachU
            prioritizes your time. Our <strong>easy signup</strong> gets you set
            up quickly, allowing you to focus on what you do best -{" "}
            <strong>inspiring young minds.</strong>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            <span className="bg-verdigris rounded-full text-white me-2">
              <FontAwesomeIcon icon={fa2} fixedWidth size="xs" />
            </span>
            Craft Your Teaching Identity: Complete Your Profile and Showcase
            Your Expertise
          </h1>
          <p className="text-justify text-lg ms-1 sm:text-lg md:text-xl lg:text-2xl sm:ms-2 md:ms-6 lg:ms-9">
            <strong>Tell your teaching story!</strong> Complete your profile to
            showcase your{" "}
            <strong> qualifications, experience, and teaching style. </strong>{" "}
            This allows students to find the perfect match for their learning
            needs, increasing your visibility and
            <strong> boosting your profile's SEO ranking.</strong>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            <span className="bg-verdigris rounded-full text-white me-2">
              <FontAwesomeIcon icon={fa3} fixedWidth size="xs" />
            </span>
            Command Center at Your Fingertips: Access Your Personalized
            Dashboard
          </h1>
          <p className="text-justify text-lg ms-1 sm:text-lg md:text-xl lg:text-2xl sm:ms-2 md:ms-6 lg:ms-9">
            <strong>Stay organized and in control! </strong>Your dedicated
            dashboard provides a centralized hub for managing your teaching
            experience. Track student progress, schedule lessons, access
            teaching resources, and
            <strong> maximize your teaching efficiency.</strong>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            <span className="bg-verdigris rounded-full text-white me-2">
              <FontAwesomeIcon icon={fa4} fixedWidth size="xs" />
            </span>
            A World of Opportunity Awaits: View Student Profiles and Connect
            with Eager Learners
          </h1>
          <p className="text-justify text-lg ms-1 sm:text-lg md:text-xl lg:text-2xl sm:ms-2 md:ms-6 lg:ms-9">
            <strong>Empower the next generation! </strong>TeachU connects you
            with a diverse pool of
            <strong> motivated students </strong>seeking your expertise. Browse
            student profiles, understand their learning goals, and{" "}
            <strong>find students </strong>to ignite their academic journey.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            <span className="bg-verdigris rounded-full text-white me-2">
              <FontAwesomeIcon icon={fa5} fixedWidth size="xs" />
            </span>
            Competitive Compensation: Enjoy Flexible Earnings with a Minimum
            Monthly Fee
          </h1>
          <p className="text-justify text-lg ms-1 sm:text-lg md:text-xl lg:text-2xl sm:ms-2 md:ms-6 lg:ms-9">
            <strong>Focus on teaching, not finances! </strong>TeachU offers a
            <strong> competitive minimum monthly subscription fee, </strong>
            ensuring you receive fair compensation for your valuable expertise.{" "}
            <strong>
              Benefit from the flexibility of setting your own rates{" "}
            </strong>
            on top of the base fee, allowing you to tailor your earnings to your
            teaching schedule.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            <span className="bg-verdigris rounded-full text-white me-2">
              <FontAwesomeIcon icon={fa6} fixedWidth size="xs" />
            </span>
            Seamless Student Discovery: Find Students Right from Your Dashboard
          </h1>
          <p className="text-justify text-lg ms-1 sm:text-lg md:text-xl lg:text-2xl sm:ms-2 md:ms-6 lg:ms-9">
            <strong>
              No more waiting for opportunities to come your way!{" "}
            </strong>
            Our
            <strong> intuitive search filters </strong>
            within the dashboard allow you to
            <strong> find students </strong>
            based on location, subject, and learning needs. Proactively connect
            with students seeking your specific skillset and{" "}
            <strong>build a thriving online teaching practice.</strong>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            <span className="bg-verdigris rounded-full text-white me-2">
              <FontAwesomeIcon icon={fa7} fixedWidth size="xs" />
            </span>
            Connect, Collaborate, and Ignite Learning: Initiate Conversations
            and Start Teaching
          </h1>
          <p className="text-justify text-lg ms-1 sm:text-lg md:text-xl lg:text-2xl sm:ms-2 md:ms-6 lg:ms-9">
            <strong>Build meaningful connections! </strong>
            Our integrated communication tools facilitate
            <strong> seamless communication </strong>
            with students. Discuss learning goals, answer questions, and build a
            rapport before starting lessons.
            <strong>
              {" "}
              Transform your passion for teaching into impactful learning
              experiences.{" "}
            </strong>
          </p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-verdigris">
            Ready to join a vibrant community of educators and make a
            difference? Sign up on TeachU today and embark on your rewarding
            online teaching journey!
          </h1>
          <div className="mt-2 sm:mt-2 md:mt-3 lg:mt-4">
            <Button
              as={Link}
              className="bg-pistachlo font-bold"
              href="/auth/register"
              variant="flat"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      {/* teachers section */}
    </main>
  );
}
