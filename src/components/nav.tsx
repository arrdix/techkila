export function Nav() {
    return (
        <div className="flex justify-between items-center gap-4 px-16 py-4 absolute top-0 left-0 w-screen shadow-sm">
            <p className="text-accent text-2xl font-black">Techkila</p>
            <div className="flex gap-8">
                <p className="text-base font-semibold">Solution</p>
                <p className="text-base font-semibold">Services</p>
                <p className="text-base font-semibold">People</p>
            </div>
            <button className="text-foreground text-lg font-bold border border-foreground px-4 py-2 rounded-lg">
                Get Started
            </button>
        </div>
    )
}
