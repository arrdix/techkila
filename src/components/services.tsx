import { motion } from 'framer-motion'

export function Services() {
    const textAnimation = {
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
    const imageAnimation = {
        initial: { opacity: 0, scale: 0.75 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: {
            type: 'spring',
            stiffness: 50,
            duration: 1,
        },
    }

    return (
        <div className="flex flex-col gap-40 px-8 py-32 xl:p-32">
            <div className="flex flex-col lg:flex-row items-center gap-16 w-full h-[800px] sm:h-[900px] lg:h-[500px]">
                <div className="w-11/12 md:w-3/5 lg:w-full h-full relative">
                    <motion.div
                        className="w-72 h-72 sm:w-96 sm:h-96 shadow-xl bg-background"
                        {...imageAnimation}
                    ></motion.div>
                    <motion.div
                        className="w-64 h-64 sm:w-80 sm:h-80 shadow-xl bg-background absolute bottom-0 right-0"
                        {...imageAnimation}
                    ></motion.div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <motion.h2
                        className="text-5xl leading-less sm:text-6xl md:text-7xl font-black text-center lg:text-start"
                        {...textAnimation}
                    >
                        Trusted by <br /> over <span className="text-accent">10000</span> <br />
                        companies in <br /> Indonesia.
                    </motion.h2>
                    <motion.p className="text-lg text-center lg:text-start" {...textAnimation}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum natus
                        accusantium similique minima sed consequatur non et voluptates eum minus!
                    </motion.p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-0 sm:gap-16 w-full h-[900px] md:h-[900px] lg:h-[500px]">
                <div className="flex flex-col gap-8">
                    <motion.h2
                        className="text-5xl leading-less sm:text-6xl md:text-7xl font-black text-center lg:text-end"
                        {...textAnimation}
                    >
                        Driving <br /> <span className="text-accent">innovation</span> for <br />
                        well-known <br /> brands.
                    </motion.h2>
                    <motion.p className="text-lg text-center lg:text-end" {...textAnimation}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum natus
                        accusantium similique minima sed consequatur non et voluptates eum minus!
                    </motion.p>
                </div>
                <motion.div className="flex justify-center gap-8 w-full h-full" {...imageAnimation}>
                    <div className="grid gap-8 content-center">
                        {Array.from([1, 2, 3]).map((i) => (
                            <div
                                key={i}
                                className="flex justify-center items-center w-24 h-24 bg-background shadow-lg"
                            />
                        ))}
                    </div>
                    <div className="grid gap-8 content-center">
                        {Array.from([1, 2, 3, 4]).map((i) => (
                            <div
                                key={i}
                                className="flex justify-center items-center w-24 h-24 bg-background shadow-lg"
                            />
                        ))}
                    </div>
                    <div className="grid gap-8 content-center">
                        {Array.from([1, 2, 3]).map((i) => (
                            <div
                                key={i}
                                className="flex justify-center items-center w-24 h-24 bg-background shadow-lg"
                            />
                        ))}
                    </div>
                    <div className="grid gap-8 content-center">
                        {Array.from([1, 2, 3, 4]).map((i) => (
                            <div
                                key={i}
                                className="flex justify-center items-center w-24 h-24 bg-background shadow-lg"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
