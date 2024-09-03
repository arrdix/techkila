import { Hero } from '../components/hero'
import { Services } from '../components/services'
import { Solution } from '../components/solution'
import { Testimonial } from '../components/testimonial'
import { Work } from '../components/work'

export function Page() {
    return (
        <>
            <Hero />
            <Solution />
            <Services />
            <Testimonial />
            <Work />
        </>
    )
}
