export function Hero() {
    return (
        <div className="flex flex-row justify-between items-center gap-20 h-screen p-40 relative">
            <h1 className="flex flex-col gap-8 w-full text-8xl font-black mt-24">
                THE <br /> FUTURE <br /> BEGINS <br /> WITH US.
                <button className="text-accent text-lg font-bold border w-56 border-accent px-4 py-2 rounded-lg">
                    Get Started
                </button>
            </h1>
            <div className="flex justify-center items-center w-full h-full relative">
                <div className="w-[500px] h-96 bg-background rounded-lg shadow-lg mb-24"></div>
            </div>
        </div>
    )
}
