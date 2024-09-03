import { FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6'

export function Footer() {
    return (
        <>
            <div className="flex flex-row w-full gap-20 py-16 px-32 border-t border-foreground border-opacity-20">
                <div className="flex flex-col gap-4">
                    <p className="text-4xl text-accent font-black">Techkila</p>
                    <p className="text-sm w-full">
                        Jl. Jalan no. 666 Kec. Kecamatan, Kota Kota, <br /> Jawa Jawa 60921
                    </p>
                    <div className="flex flex-row gap-4 w-full">
                        <FaLinkedin size={24} />
                        <FaInstagram size={24} />
                        <FaXTwitter size={24} />
                    </div>
                </div>
                <div className="flex flex-col ml-auto">
                    <p className="text-xl font-black mb-2">Navigation</p>
                    <p className="font-base">Home</p>
                    <p className="font-base">Solution</p>
                    <p className="font-base">Services</p>
                    <p className="font-base">People</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-black mb-2">Contact</p>
                    <p className="font-base">hi@techkila.com</p>
                    <p className="font-base">+62 812 1234 1234</p>
                    <p className="font-base">+62 812 1234 1234</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-black mb-2">About</p>
                    <p className="font-base">FAQ</p>
                    <p className="font-base">Contact</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border-t border-foreground border-opacity-10">
                <p className="text-sm">
                    Made with &hearts; by <span className="font-bold">Techkila Dev</span>
                </p>
                <p className="text-sm">&copy; 2024 Techkila. All rights reserved. </p>
            </div>
        </>
    )
}
