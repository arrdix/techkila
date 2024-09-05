import { FaBolt } from 'react-icons/fa6'
import { motion, useAnimate, useInView, stagger } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function Solution() {
    const brandsRef = useRef(null)
    const inView = useInView(brandsRef, {
        once: true,
    })
    const [scope, animate] = useAnimate()
    const stagged = stagger(0.3, { startDelay: 0.15, from: 'center' })

    const animation = {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            type: 'spring',
            stiffness: 50,
            duration: 1,
            delay: 0.5,
        },
    }

    useEffect(() => {
        if (inView) {
            animate('p', { opacity: 1 }, { ease: 'easeInOut', duration: 1, delay: stagged })
        }
    }, [animate, stagged, inView])

    return (
        <div className="flex flex-col items-center gap-20 xl:gap-40 p-8 xl:p-32">
            <div ref={brandsRef} className="flex flex-col items-center gap-4 w-full">
                <h3 className="font-bold">Brand Partnerships</h3>
                <div ref={scope} className="flex flex-row justify-evenly gap-4 w-full xl:w-5/6">
                    <p className="opacity-0 text-4xl font-black">BRAND</p>
                    <p className="opacity-0 text-4xl font-black">BRAND</p>
                    <p className="opacity-0 text-4xl font-black">BRAND</p>
                    <p className="opacity-0 text-4xl font-black">BRAND</p>
                    <p className="opacity-0 text-4xl font-black">BRAND</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 w-full sm:w-4/6">
                <motion.h2
                    className="text-5xl leading-less sm:text-6xl md:text-7xl font-black text-center px-4 sm:px-0"
                    {...animation}
                >
                    WE SEE <br /> PROBLEM AS A <span className="text-accent">CHALLENGE</span>
                </motion.h2>
                <motion.p className="text-lg text-center" {...animation}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eum labore
                    provident, quae earum beatae sapiente consequuntur laboriosam tenetur vero
                    praesentium eos minima unde nam vitae debitis possimus magnam molestias culpa
                    dolores repellendus similique magni natus? Impedit ipsa autem eaque dolorum
                    accusamus.
                </motion.p>
                <motion.div
                    className="flex flex-col md:flex-row justify-center mt-8"
                    {...animation}
                >
                    <div className="hidden md:flex flex-col justify-between items-center h-80 px-8 py-20">
                        <p className="text-5xl font-black">100%</p>
                        <p className="text-lg text-center">Absolute Satisfaction Guarantee</p>
                        <FaBolt />
                    </div>
                    <div className="hidden md:flex flex-col justify-between items-center h-80 px-8 py-20 rounded-lg shadow-lg">
                        <p className="text-accent text-5xl font-black">100%</p>
                        <p className="text-accent text-lg text-center">
                            Absolute Satisfaction Guarantee
                        </p>
                        <FaBolt className="text-accent" />
                    </div>
                    <div className="hidden md:flex flex-col justify-between items-center h-80 px-8 py-20">
                        <p className="text-5xl font-black">100%</p>
                        <p className="text-lg text-center">Absolute Satisfaction Guarantee</p>
                        <FaBolt />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
