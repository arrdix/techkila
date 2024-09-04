import { FaBars } from 'react-icons/fa6'

export function Nav() {
    return (
        <div className="flex justify-between items-center gap-4 px-8 md:px-16 py-4 absolute top-0 left-0 w-screen shadow-sm">
            <p className="text-accent text-2xl font-black">Techkila</p>
            <div className="hidden md:flex gap-8">
                <p className="text-base font-semibold">Solution</p>
                <p className="text-base font-semibold">Services</p>
                <p className="text-base font-semibold">About</p>
            </div>
            <button className="hidden md:block text-foreground text-md font-bold border border-foreground px-4 py-2 rounded-md">
                Get Started
            </button>
            <FaBars className="md:hidden" size={24} />
        </div>
    )
}
