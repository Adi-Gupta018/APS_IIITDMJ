"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navber-menu";
import { cn } from "../utils/cn";
// import Video from "next-video"
import styles from './page.module.css';
import Image from 'next/image';
// import moonVideo from '../../public/moon.mp4';
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";
import NavbarMobile from "src/components/ui/navber-mobile";
import InfiniteMarquee from "src/components/ui/marquee";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowAutofitContent,
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


const imageUrls = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
];

function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

//body
export default function Home() {

  const [backgroundImage, setBackgroundImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720); // Set isMobile based on viewport width
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to render Navbar or NavbarMobile based on viewport width
  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };
  useEffect(() => {
    const shuffledImages = shuffleArray(imageUrls);
    setBackgroundImage(shuffledImages[0]);
  }, []);
  return (
    <main className={styles.main}>


      <div className="landing mb-0">
        <div className="relative w-full flex items-center justify-end top-2">
          {/* <Navbar className="top-2" /> */}
          {renderNavbar()}
        </div>
        {/* <NavbarMobile /> */}


        {/* backgroumd image */}
        <Image src={backgroundImage} alt="" className={styles.background} width={3000} height={3000} />

        {/* landing text group */}
        <div className={styles.landinggroup} style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <div className="headingtext flex flex-col place-items-start">
            <h1 className="font-jetbrains-mono text-4xl text-white">
              ASTRONOMY AND <br />PHYSICS SOCIETY
            </h1>
            <p className="text-xl text-teal-400 font-sans my-4">Indian Institute of Information Technology, <br />Design and Manufacturing Jabalpur</p>
            <TailwindcssButtons />
          </div>
          <div className="logo ">
            <Image src="/logo1.png" alt="logo" width={300} height={300} />
          </div>
        </div>
      </div>

      <div className="section1 pt-20 pb-10 pl-20 pr-20 mt-0" style={{
        backgroundImage: `url("8.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <h1 className="font-jetbrains-mono text-4xl text-white text-center">
          RECENT EVENTS
        </h1>
        <BentoGridDemo />
      </div>

      <div className="marquee pt-6 pb-6 font-bold font-jetbrains-mono text-4xl text-teal-400 bg-gray-900">
        <InfiniteMarquee />
      </div>

      <div className="about">
        <div className="aboutgroup bg-gray-900 mb-16">
          <div className={styles.aboutgroup}>
            <div className="abouttext  pt-20 pb-10 pl-10 pr-20">
                <h1 className="font-jetbrains-mono text-4xl text-white">
                ABOUT US
                </h1>
              <p className="text-gray-400  font-normal mt-7">The Astronomy and Physics Society is a student-run society under the Gymkhana of the IIITDM Jabalpur. The society aims to promote the knowledge of Astronomy and Physics among students and to provide a platform for students to showcase their talents and skills in these fields. The society organizes various events, workshops, and sessions throughout the year to help students learn and explore the wonders of the universe. The society also participates in various inter-college competitions and fests to represent the institute and showcase the talent of its members. The society is open to all students who have an interest in Astronomy and Physics and is a great place to meet like-minded individuals and learn new things.</p>
            </div>
            <div className={styles.aboutimage}>

              <Image className="rounded-md  mt-5 mb-5 mr-20" src="/team.jpg" alt="about" width={4000} height={4000} />

            </div>
          </div>

        </div>
      </div>

      <footer className="bg-teal-900">
        <div className="max-w-8xl  py-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 ml-10  md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Contact Us</h3>
              <p className="mt-4 font-normal text-teal-400" >52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, <br />
                Khamaria, Jabalpur, Chakdehi, Madhya Pradesh 482005</p>
              {/*UNDER DEVELOPMENT PHASE <p className="mt-2 font-normal gray-400">Phone: 123-456-7890</p> */}
              <p>Email: astronomy@iiitdmj.ac.in</p>
            </div>
            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Links</h3>
              <ul className="mt-4 grid grid-cols-2 space-y-2 text-teal-400 font-normal">
              
                <li><a href="/about">About Us</a></li>
                <li><a href="/sessions">Sessions</a></li>
                <li><a href="/form">Form</a></li> 
                <li><a href="/members">Members</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/forms">Forms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Social Media</h3>
              <ul className="mt-4 space-y-2  text-teal-400 font-normal">
                <li><a href="https://instagram.com/aps_iiitdmj">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/astronomy-and-physics-society/">LinkedIn</a></li>
                <li><a href="https://www.youtube.com/@AstronomyandPhysicsSociety">YouTube</a></li>
              </ul>
            </div>

            <div className="logo  ">
              <Image src="/footsticker.png" alt="logo" width={300} height={300} className={styles.rotate} />
            </div>
            {/* <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Newsletter</h3>
                <p className="mt-4">Subscribe to our newsletter to receive updates and news.</p>
                <form className="mt-2">
                  <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 rounded-md bg-gray-800 text-white" />
                  <button type="submit" className="mt-2 py-2 px-4 bg-teal-400 text-white rounded-md">Subscribe</button>
                </form>
              </div> */
            }

          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 APS | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main >
  );
}
//body



//navbar starts here
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30", className)}
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
// navbar ends here


//landing button component starts here
export function TailwindcssButtons() {

  return (
    <div >
      {buttons.map((button, idx) => (
        <ButtonsCard key={idx}>
          {button.component}
        </ButtonsCard>
      ))}
    </div>
  );
}
export const buttons = [
  {
    component: (
      <button className="shadow-[0_0_0_3px_teal-400_inset] px-6 py-2 bg-transparent border border-teal-400 dark:border-teal-400 dark:text-teal-400 text-teal-400 font-bold transform hover:-translate-y-1 transition duration-400 hover:border-white hover:text-white">
        Be A Member
      </button>
    ),
  },
]
//landing button component ends here

//bento grid component starts here
export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto mt-8 mb-8 ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          
          // icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}



const Skeletonone = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/1.jpg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletontwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/2.jpg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletonthree = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/3.jpg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletonfour = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/4.jpg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletonfive = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/5.jpg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const items = [
  {
    title: "Astro Trivia",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeletonone />,
  },
  {
    title: "Telescope Sessions",
    description: "Dive into the transformative power of technology.",
    header: <Skeletontwo />,
  },
  {
    title: "Astrophotoraphy Workshop",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeletonthree />,
  },
  {
    title: "The Astro Treasure Hunt",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeletonfour />,
  },
  {
    title: "JWST Workshop",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeletonfive />,
  },
];
