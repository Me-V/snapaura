// import Footer from '@/components/shared/Footer'
import MobileNav from '@/components/shared/MobileNav'
// import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root bg-black">
      
      {/* <Sidebar /> */}
      <MobileNav />

      

      <div className="min-h-[screen] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
        {/* <Footer/> */}
      </div>
      
      </div>

      <Toaster />

    </main>
  )
}

export default Layout