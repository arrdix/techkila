import { FaBars } from 'react-icons/fa6'
import { motion, useAnimate, stagger } from 'framer-motion'
import { useEffect } from 'react'

export function Nav() {
    const [scope, animate] = useAnimate()
    const stagged = stagger(0.3, { startDelay: 1 })

    useEffect(() => {
        animate('p', { opacity: 1 }, { duration: 1, delay: stagged })
    }, [animate, stagged])

    return (
        <div className="flex justify-between items-center gap-4 px-8 md:px-16 py-4 absolute top-0 left-0 w-screen shadow-sm">
            <motion.p
                className="text-accent text-2xl font-black"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    type: 'spring',
                    stiffness: 50,
                    duration: 1,
                    delay: 0.5,
                }}
            >
                Techkila
            </motion.p>
            {/* <p className="text-accent text-2xl font-black">Techkila</p> */}
            <div ref={scope} className="hidden md:flex gap-8">
                <p className="opacity-0 text-base font-semibold">Solution</p>
                <p className="opacity-0 text-base font-semibold">Services</p>
                <p className="opacity-0 text-base font-semibold">About</p>
                <button></button>
            </div>
            <motion.button
                className="hidden md:block text-foreground text-md font-bold border border-foreground px-4 py-2 rounded-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
            >
                Get Started
            </motion.button>
            {/* <button>Get Started</button> */}
            <FaBars className="md:hidden" size={24} />
        </div>
    )
}
