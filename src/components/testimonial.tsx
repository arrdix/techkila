import { MdFormatQuote } from 'react-icons/md'

export function Testimonial() {
    return (
        <div className="flex flex-col items-center gap-20 p-32 min-h-screen">
            <h2 className="text-7xl font-black text-center">
                WHAT <span></span> PEOPLE SAYS <br /> ABOUT US
            </h2>
            <div className="flex flex-row justify-center w-9/12">
                <div className="flex flex-col items-center gap-4 w-full">
                    <MdFormatQuote size={72} />
                    <p className="text-lg text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                        voluptatibus dignissimos est animi soluta facere totam placeat tenetur, quam
                        labore, accusamus expedita. Sunt cumque rem totam.
                    </p>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold mt-4">Jesse Pinkman Jr.</p>
                        <p className="text-lg">PT. Breaking Bad</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="w-72 h-72 border-4 border-foreground rounded-full overflow-hidden">
                        <img
                            className="object-cover"
                            src="https://api.dicebear.com/9.x/thumbs/svg?seed=Boots&backgroundColor[]&eyesColor=FFFFFF&mouthColor=FFFFFF&shapeColor=00425c"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
