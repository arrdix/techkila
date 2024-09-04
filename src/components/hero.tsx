export function Hero() {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 h-screen p-8 md:p-28 xl:p-32 2xl:p-40 relative">
            <div className="flex flex-col items-center lg:items-start gap-8 w-full">
                <h1 className="text-7xl leading-less sm:text-8xl font-black mt-24 text-center lg:text-start">
                    THE <br /> FUTURE <br /> BEGINS <br /> WITH
                    <span className="text-accent"> US</span>
                </h1>
                <button className="text-foreground text-lg font-bold border w-56 border-foreground px-4 py-2 rounded-lg">
                    Learn More
                </button>
            </div>
            <div className="hidden lg:flex justify-center items-center w-2/5 h-2/5 xl:w-full xl:h-full relative">
                <div className="w-[500px] h-96 bg-background rounded-lg shadow-lg mb-24"></div>
            </div>
        </div>
    )
}
