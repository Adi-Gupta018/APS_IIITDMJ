"use client";

import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from "next/image";
import styles from "./page.module.css";
// import {calsans} from "../../../fonts/calsans";
// import calsans from "../../../fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";

const Events = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720); // Set isMobile based on viewport width
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to render Navbar or NavbarMobile based on viewport width
  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  const members = [
    {
      name: "Abhay Singh",
      description: "Overall Project Lead",
      linkedin: "https://www.linkedin.com/in/singhabhay1/",
      // twitter: "https://x.com/THEBLACKEYES09",
      instagram: "http://instagram.com/mostlyastro",
      gmail: "mailto:21bec003@iiitdmj.ac.in",
      // image: "/coordinator.jpg"
    },
    {
      name: "Shuvam Patra",
      description: "UI/UX and Fronted Developer",
      linkedin: "https://www.linkedin.com/in/shuvam-patra-157b50229/",
      twitter: "https://x.com/THEBLACKEYES09",
      instagram: "https://www.instagram.com/blackeyesandblue09/",
      gmail: "mailto:shuvampatra2003@gmail.com",
      // image: "/shuvam.jpg"
    },
    {
      name: "Abhinav Kumar",
      description: "Backend and Optimisation",
      linkedin:
        "https://www.linkedin.com/in/abhinav-kumar-8b6008247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/i.g_abhinav?igsh=OGt2cnJ4cGluZnFs",
      gmail: "mailto:igabhinav.2003@gmail.com",
      // image: "/abhinav.jpg"
    },
    // {
    //   name: "John Doe",
    //   description: "Software Engineer",
    //   linkedin: "https://linkedin.com/in/johndoe",
    //   twitter: "https://twitter.com/johndoe",
    //   instagram: "https://instagram.com/johndoe",
    //   gmail: "mailto:johndoe@gmail.com",
    //   image: "/path/to/image9.jpg"
    // },
  ];

  return (
    <div className={styles.main}>
      {/* <div className="relative w-full flex items-center justify-end top-2"> */}
      <div className="relative w-full flex items-center justify-end">
        {renderNavbar()}
      </div>
      {/* <div className="logo"> */}
      <div className="logo relative -mt-5 z-10">
        {/* <Image src="/aboutbanner.jpg" alt="banner" width={1000} height={1000} layout="responsive" /> */}
        <Image
          src="/aboutbanner.jpg"
          alt="banner"
          width={1000}
          height={1000}
          layout="responsive"
          className="relative"
        />
      </div>

      <div className="mainsection">
      <div className="abouttext bg-teal-900 flex flex-col md:flex-row justify-center"> 
      <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              Telescope Session
            </h1>

            <p className="mt-6 text-teal-400">
              We are the Astronomy and Physics Society of IIITDM Jabalpur. We
              are a group of many astro-enthusiasts under the Gymkhana of the
              IIITDM Jabalpur. Here, we attempt to bring about an interest and
              awareness in the field of Astronomy and Space Research. All along
              the we have been promoting amateur astronomy through talks,
              competetions and shows.
            </p>
          </div>
          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/aboutimg.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="abouttext bg-teal-900 flex flex-col md:flex-row justify-center">


        <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/aboutimg.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              JWST Workshop
            </h1>

            <p className="mt-6 text-teal-400">
              We are the Astronomy and Physics Society of IIITDM Jabalpur. We
              are a group of many astro-enthusiasts under the Gymkhana of the
              IIITDM Jabalpur. Here, we attempt to bring about an interest and
              awareness in the field of Astronomy and Space Research. All along
              the we have been promoting amateur astronomy through talks,
              competetions and shows.
            </p>
          </div>
        </div>

        <div className="abouttext bg-teal-900 flex flex-col md:flex-row justify-center"> 
      <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              Astrophotography
            </h1>

            <p className="mt-6 text-teal-400">
              We are the Astronomy and Physics Society of IIITDM Jabalpur. We
              are a group of many astro-enthusiasts under the Gymkhana of the
              IIITDM Jabalpur. Here, we attempt to bring about an interest and
              awareness in the field of Astronomy and Space Research. All along
              the we have been promoting amateur astronomy through talks,
              competetions and shows.
            </p>
          </div>

          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/aboutimg.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>




        <footer className="">
          <div className="max-w-8xl  py-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

              <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">
                  Contact Us
                </h3>
                <p className="mt-4 font-normal text-teal-400">
                  52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, <br />
                  Khamaria, Jabalpur, Chakdehi, Madhya Pradesh 482005
                </p>
                {/*UNDER DEVELOPMENT PHASE <p className="mt-2 font-normal gray-400">Phone: 123-456-7890</p> */}
                <p>Email: astronomy@iiitdmj.ac.in</p>
              </div>
              <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">
                  Links
                </h3>
                <ul className="mt-4 grid grid-cols-2 space-y-2 text-teal-400 font-normal">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/sessions">Sessions</a>
                  </li>
                  <li>
                    <a href="/form">Form</a>
                  </li>
                  <li>
                    <a href="/members">Members</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/forms">Forms</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">
                  Social Media
                </h3>
                <ul className="mt-4 space-y-2  text-teal-400 font-normal">
                  <li>
                    <a href="https://instagram.com/aps_iiitdmj">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/astronomy-and-physics-society/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@AstronomyandPhysicsSociety">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>

              <div className="logo  ">
                <Image
                  src="/footsticker.png"
                  alt="logo"
                  width={300}
                  height={300}
                  className={styles.rotate}
                />
              </div>
              {/* <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Newsletter</h3>
                <p className="mt-4">Subscribe to our newsletter to receive updates and news.</p>
                <form className="mt-2">
                  <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 rounded-md bg-gray-800 text-white" />
                  <button type="submit" className="mt-2 py-2 px-4 bg-teal-400 text-white rounded-md">Subscribe</button>
                </form>
              </div> */}
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 APS | All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

//navbar here

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-20 max-w-2xl mx-auto z-30 mb-10",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        {/* <HoveredLink href="/contact">Contact Us</HoveredLink> */}
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/sessions">Sessions</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/form">Form</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-6 text-s">
            <HoveredLink href="/events">Events</HoveredLink>
            <HoveredLink href="/form">Form</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

//tracing beam section

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-20">
      <div className="max-w-2xl mx-auto antialiased pt-5 pb-5 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-15 flex">
            <div className="flex-1">
              <h2 className="bg-teal-900 text-white rounded-full text-sm w-fit px-6 py-1 mb-4">
                {item.badge}
              </h2>
              <p className="text-xl mb-4 font-bold text-teal-400">
                {item.title}
              </p>
              {item.description}
            </div>

            <div className="flex-1 text-sm prose prose-sm dark:prose-invert">
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Dr. Amit Vishwakarma",
    description: (
      <>
        <p>
          FIC/S&T Counsellor
          <br />
        </p>
        <p>Email: amitv@iiitdmj.ac.in</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:amitv@iiitdmj.ac.in">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/fic.jpg",
      alt: "Coordinator",
    },
    badge: "Faculty In-Charge",
  },
  {
    title: "Abhay Singh",
    description: (
      <>
        <p>
          Coordinator
          <br />
        </p>
        <p>Email: 21bec003@iiitdmj.ac.in</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:21bec003@iiitdmj.ac.in">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="https://www.linkedin.com/in/singhabhay1/">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/coordinator.jpg",
      alt: "Coordinator",
    },
    badge: "Coordinator",
  },
  {
    title: "Alok Rai",
    description: (
      <>
        {/* <p>Name: John Doe</p> */}
        <p>Role: Co-Coordinator</p>
        <p>Email: 22bec010@iiitdmj.ac.in</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:22bec010@iiitdmj.ac.in">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/cocoordinator.jpg",
      alt: "Co-Coordinator",
    },
    badge: "Co-Coordinator",
  },
];

export default Events;
