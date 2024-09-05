import { motion } from 'framer-motion'

export function Hero() {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 h-screen p-8 md:p-28 xl:p-32 2xl:p-40 relative">
            <div className="flex flex-col items-center lg:items-start gap-8 w-full">
                <motion.h1
                    className="text-7xl leading-less sm:text-8xl font-black mt-24 text-center lg:text-start"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                        duration: 1,
                        delay: 0.75,
                    }}
                >
                    THE <br /> FUTURE <br /> BEGINS <br /> WITH
                    <span className="text-accent"> US</span>
                </motion.h1>
                <motion.button
                    className="text-foreground text-lg font-bold border w-56 border-foreground px-4 py-2 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                    }}
                >
                    Learn More
                </motion.button>
            </div>
            <div className="hidden lg:flex justify-center items-center w-2/5 h-2/5 xl:w-full xl:h-full relative">
                <motion.div
                    className="w-[500px] h-96 bg-background rounded-lg shadow-lg mb-24"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        duration: 2,
                        delay: 0.5,
                    }}
                ></motion.div>
            </div>
        </div>
    )
}
