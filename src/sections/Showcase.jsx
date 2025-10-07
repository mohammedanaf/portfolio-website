import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: { trigger: card, start: 'top bottom-=100', } })
        });

        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase pb-0">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" loading="lazy" alt="Vinyasa India" />
                        </div>
                        <div className="text-content">
                            <a href="https://vinyasaindia.in" className="hover:text-[#D9ECFF]">
                                <h2>Indian Wedding & Event Planner &mdash; Vinyasa India</h2>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-gradient-to-r from-[#1f352a] via-[#264032] to-[#1f352a]">
                                <img src="/images/project2.png" loading="lazy" alt="Nuwaira" />
                            </div>
                            <a href="https://nuwaira.in" className="hover:text-[#D9ECFF]">
                                <h2>Premium Agriculture Export &mdash; Nuwaira</h2>
                            </a>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-gradient-to-r from-[#252525] via-[#2b2b2b] to-[#252525]">
                                <img src="/images/project3.png" loading="lazy" alt="The FlexFlow" />
                            </div>
                            <a href="https://theflexflow.in" className="hover:text-[#D9ECFF]">
                                <h2>Digital Marketing Agency &mdash; The FlexFlow</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase