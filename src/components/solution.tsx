import { FaBolt } from 'react-icons/fa6'

export function Solution() {
    return (
        <div className="flex flex-col items-center gap-40 p-32">
            <div className="flex flex-col items-center gap-4 w-full">
                <h3 className="font-bold">Brand Partnerships</h3>
                <div className="flex flex-row justify-evenly gap-4 w-5/6">
                    <p className="text-4xl font-black">BRAND</p>
                    <p className="text-4xl font-black">BRAND</p>
                    <p className="text-4xl font-black">BRAND</p>
                    <p className="text-4xl font-black">BRAND</p>
                    <p className="text-4xl font-black">BRAND</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 w-4/6">
                <h2 className="text-7xl font-black text-center">
                    WE SEE <br /> PROBLEM AS A <span className="text-accent">CHALLENGE</span>
                </h2>
                <p className="text-lg text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eum labore
                    provident, quae earum beatae sapiente consequuntur laboriosam tenetur vero
                    praesentium eos minima unde nam vitae debitis possimus magnam molestias culpa
                    dolores repellendus similique magni natus? Impedit ipsa autem eaque dolorum
                    accusamus.
                </p>
                <div className="flex flex-row justify-center mt-8">
                    <div className="flex flex-col justify-between items-center h-80 px-8 py-20">
                        <p className="text-5xl font-black">100%</p>
                        <p className="text-lg text-center">Absolute Satisfaction Guarantee</p>
                        <FaBolt />
                    </div>
                    <div className="flex flex-col justify-between items-center h-80 px-8 py-20 shadow-lg">
                        <p className="text-accent text-5xl font-black">100%</p>
                        <p className="text-accent text-lg text-center">
                            Absolute Satisfaction Guarantee
                        </p>
                        <FaBolt className="text-accent" />
                    </div>
                    <div className="flex flex-col justify-between items-center h-80 px-8 py-20">
                        <p className="text-5xl font-black">100%</p>
                        <p className="text-lg text-center">Absolute Satisfaction Guarantee</p>
                        <FaBolt />
                    </div>
                </div>
            </div>
        </div>
    )
}
