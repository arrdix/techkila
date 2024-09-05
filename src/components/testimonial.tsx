import { MdFormatQuote } from 'react-icons/md'
import { motion } from 'framer-motion'

export function Testimonial() {
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
        <div className="flex flex-col items-center gap-10 lg:gap-20 xl:gap-30 p-8 xl:p-32 min-h-screen">
            <motion.h2
                className="text-5xl leading-less sm:text-6xl md:text-7xl font-black text-center"
                {...textAnimation}
            >
                WHAT <br /> PEOPLE <span className="text-accent">SAYS</span>
                <br /> ABOUT US
            </motion.h2>
            <div className="flex flex-row justify-center w-full xl:w-9/12">
                <motion.div className="flex flex-col items-center gap-4 w-full" {...textAnimation}>
                    <MdFormatQuote size={72} />
                    <p className="text-lg text-center w-full md:w-4/5 lg:w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                        voluptatibus dignissimos est animi soluta facere totam placeat tenetur, quam
                        labore, accusamus expedita. Sunt cumque rem totam.
                    </p>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold mt-4">Jesse Pinkman Jr.</p>
                        <p className="text-lg">PT. Breaking Bad</p>
                    </div>
                </motion.div>
                <motion.div
                    className="hidden lg:flex justify-center items-center w-full"
                    {...imageAnimation}
                >
                    <div className="w-72 h-72 border-4 border-foreground rounded-full overflow-hidden">
                        <img
                            className="object-cover"
                            src="https://api.dicebear.com/9.x/thumbs/svg?seed=Boots&backgroundColor[]&eyesColor=FFFFFF&mouthColor=FFFFFF&shapeColor=00425c"
                            alt="avatar"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
