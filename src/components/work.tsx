import { motion } from 'framer-motion'

export function Work() {
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

    return (
        <div className="flex flex-col items-center gap-10 lg:gap-20 xl:gap-30 p-8 xl:p-32 pb-40 min-h-screen">
            <motion.h2
                className="text-5xl leading-less sm:text-6xl md:text-7xl font-black text-center"
                {...animation}
            >
                LET'S <br /> <span className="text-accent">SOLVE</span> YOUR <br /> PROBLEM
            </motion.h2>
            <motion.div
                className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 w-full sm:w-4/5 md:w-full lg:w-5/6"
                {...animation}
            >
                <div className="flex flex-col gap-4 w-full bg-background shadow-lg rounded-xl px-8 py-16">
                    <p className="text-4xl text-accent font-black">Techkila</p>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            className="w-full border border-accent p-2 rounded-lg"
                            placeholder="Jesse Pinkman"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full border border-accent p-2 rounded-lg h-[150px]"
                            placeholder="I want to order.."
                            name="message"
                            id=""
                        ></textarea>
                    </div>
                    <button className="w-1/2 text-accent text-lg font-bold border border-accent px-4 py-2 ml-auto mt-2 rounded-lg">
                        Send
                    </button>
                </div>
                <motion.h3
                    className="w-full text-5xl leading-less md:text-6xl font-black text-center md:text-start"
                    {...animation}
                >
                    Make <br /> your first <br /> move and let <br /> us do the <br />{' '}
                    <span className="text-accent">miracle.</span>
                </motion.h3>
            </motion.div>
        </div>
    )
}
