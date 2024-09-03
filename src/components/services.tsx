export function Services() {
    return (
        <div className="flex flex-col gap-40 p-32">
            <div className="flex flex-row items-center gap-16 w-full h-[500px]">
                <div className="w-full h-full relative">
                    <div className="w-96 h-96 shadow-xl bg-background"></div>
                    <div className="w-80 h-80 shadow-xl bg-background absolute bottom-0 right-0"></div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-7xl font-black">
                        Trusted by <br /> over <span className="text-accent">10000</span> companies
                        in Indonesia.
                    </h2>
                    <p className="text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum natus
                        accusantium similique minima sed consequatur non et voluptates eum minus!
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-16 w-full h-[500px]">
                <div className="flex flex-col gap-8">
                    <h2 className="w-full text-7xl font-black text-end">
                        Driving <br /> <span className="text-accent">innovation</span> for <br />
                        well-known <br /> brands.
                    </h2>
                    <p className="text-lg text-end">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum natus
                        accusantium similique minima sed consequatur non et voluptates eum minus!
                    </p>
                </div>
                <div className="flex gap-8 w-full h-full">
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
                </div>
            </div>
        </div>
    )
}
