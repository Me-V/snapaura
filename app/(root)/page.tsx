import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FloatingDock } from "@/components/ui/floating-dock";



const Home = async ({ searchParams }: SearchParamProps) => {

  const links = [
    // {
    //   title: "Home",
    //   icon: (
    //     <Image
    //       src='/assets/icons/home.svg'
    //       alt="logo"
    //       width={24}
    //       height={24}
    //     />
    //   ),
    //   href: "#",
    // },

    {
      title: "Image Restore",
      icon: (
        <Image
          src='/assets/icons/image.svg'
          alt="logo"
          width={24}
          height={24}
        />
      ),
      href: "/transformations/add/restore",
    },
    {
      title: "Generative Fill",
      icon: (
        <Image
          src='/assets/icons/stars.svg'
          alt="logo"
          width={24}
          height={24}
        />
      ),
      href: "/transformations/add/fill",
    },
    {
      title: "Object Remove",
      icon: (
        <Image
          src='/assets/icons/scan.svg'
          alt="logo"
          width={24}
          height={24}
        />
      ),
      href: "/transformations/add/remove",
    },
    {
      title: "Object Recolor",
      icon: (
        <Image
          src='/assets/icons/filter.svg'
          alt="logo"
          width={24}
          height={24}
        />
      ),
      href: "/transformations/add/recolor",
    },

    {
      title: "Remove Background",
      icon: (
        <Image
          src='/assets/icons/camera.svg'
          alt="logo"
          width={24}
          height={24}
        />
      ),
      href: "/transformations/add/removeBackground",
    },
    {
      title: "Profile",
      icon: (
        <Image
          src='/assets/icons/profile.svg'
          alt="logo"
          width={24}
          height={24}
        />
      ),
      href: "/profile",
    },
    {
      title: "Buy Credits",
      icon: (
        <Image
          src='/assets/icons/bag.svg'
          alt="logo"
          width={24}
          height={24}
        />
      ),
      href: "/credits",
    },
  ];

  const words = [
    {
      text: "Create",
    },
    {
      text: "With",
    },
    // {
    //   text: "apps",
    // },
    // {
    //   text: "with",
    // },
    {
      text: "Snap Aura",
      className: "text-3xl sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600",
    },
  ];


  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery })

  return (
    <>

      <div className="rounded-3xl sm:overflow-hidden z-10 relative border-double flex items-center justify-center text-center">
        <BackgroundBeamsWithCollision className="bg-black overflow-hidden w-full max-h-[60vh] flex flex-col items-center justify-center">

          <div className="flex flex-col justify-center items-center relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <Image src="/assets/images/sa.png" alt="image" width={180} height={180} />

            <div className="flex flex-col items-center justify-center h-[2rem] mt-4 text-xl">
              <TypewriterEffectSmooth words={words} />
            </div>

            {/* <ul className="justify-center w-full gap-8 mt-6 hidden sm:flex">
              {navLinks.slice(1, 5).map((link) => (
                <Link
                  key={link.route}
                  href={link.route}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <li className="flex items-center justify-center w-12 h-12 rounded-full bg-white p-4">
                    <Image src={link.icon} alt="image" width={24} height={24} />
                  </li>
                  <p className="text-white">{link.label}</p>
                </Link>
              ))}
            </ul> */}

            <div className="hidden md:flex items-center justify-center h-[9rem] w-full">
              <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
              />
            </div>


            {/* <div className="md:hidden">
              <AnimatedModalDemo />
            </div> */}

          </div>
        </BackgroundBeamsWithCollision>
      </div>




      {/* <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Imaginify
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section> */}

      <section className="mt-20">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>

    </>
  )
}

export default Home