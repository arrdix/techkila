export function Work() {
    return (
        <div className="flex flex-col items-center gap-20 p-32 min-h-screen">
            <h2 className="text-7xl font-black text-center">
                LET'S SOLVE YOUR <br /> PROBLEM
            </h2>
            <div className="flex flex-row items-center gap-16 w-5/6">
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
                <h3 className="w-full text-6xl font-black">
                    Make <br /> your first <br /> move and let <br /> us do the <br />{' '}
                    <span className="text-accent">miracle.</span>
                </h3>
            </div>
        </div>
    )
}
