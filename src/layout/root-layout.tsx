import { FaWhatsapp } from 'react-icons/fa6'
import { TbChevronsUp } from 'react-icons/tb'
import { Outlet } from 'react-router-dom'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

export function RootLayout() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <Nav />
            <Outlet />
            <Footer />
            <div className="flex justify-center items-center w-16 h-16 bg-foreground bg-opacity-5 rounded-full fixed bottom-[100px] right-[25px]">
                <TbChevronsUp size={36} />
            </div>
            <div className="flex justify-center items-center w-16 h-16 bg-foreground bg-opacity-5 rounded-full fixed bottom-[25px] right-[25px]">
                <FaWhatsapp size={36} />
            </div>
            <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-300 from-40% via-cyan-100 via-60% to-pink-400 to-90% absolute top-[250px] right-0 translate-x-56 rounded-full blur-[185px] -z-40" />
            <div className="w-[1000px] h-[1500px] bg-gradient-to-r from-cyan-300 from-40% via-cyan-400 via-60% to-cyan-300 to-90% absolute bottom-[1250px] lg:bottom-[850px] left-0 -translate-x-56 rounded-full blur-[165px] -z-40" />
        </div>
    )
}
