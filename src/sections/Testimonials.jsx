import ReviewCard from "../components/ReviewCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="What People Say About Me?" sub="⭐ Client Feedback Highlights" />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map(({ imgPath, name, company, review }) => (
                        <ReviewCard card={{ review }}>
                            <div className="flex items-center gap-3">
                                <div>
                                    <img src={imgPath} width="46" height="46" className="rounded-full" alt={name} />
                                </div>

                                <div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-white-50">{company}</p>
                                </div>
                            </div>
                        </ReviewCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials