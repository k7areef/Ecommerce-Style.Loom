import SectionLayout from "./common/SectionLayout";
import data from "@data/features.json";
import icon1 from "@assets/icons/features/1.svg";
import icon2 from "@assets/icons/features/2.svg";
import icon3 from "@assets/icons/features/3.svg";
import icon4 from "@assets/icons/features/4.svg";
import icon5 from "@assets/icons/features/5.svg";
import icon6 from "@assets/icons/features/6.svg";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4,
    5: icon5,
    6: icon6
}

function Features() {
    const { title, description, features } = data;
    return (
        <section className="features-section py-5 md:py-10" id="features">
            <div className="container">
                <SectionLayout
                    title={title}
                    description={description}
                >
                    <div className="cards-wrapper">
                        <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                features.map((feature, index) => (<div className="feature-card p-5 md:p-10 relative border-dashed border-dark-15 border-s-2 max-md:nth-last-of-type-[1]:border-s-0 max-md:nth-last-of-type-[3]:border-s-0 max-md:nth-of-type-[2]:border-s-0 nth-of-type-[1]:border-s-0 max-lg:nth-last-of-type-[2]:border-s-0 max-lg:nth-last-of-type-[4]:border-s-0 lg:nth-of-type-[4]:border-s-0 border-b-2 nth-last-of-type-[1]:border-b-0 md:nth-last-of-type-[2]:border-b-0 lg:nth-last-of-type-[3]:border-b-0" key={index}>
                                    <div className="icon-wrapper w-17 h-17 rounded-full border-2 border-dashed border-dark-15 flex items-center justify-center relative before:absolute before:h-full before:w-0.5 before:bg-dark-15 before:left-1/2 before:-translate-x-1/2 before:top-0 after:absolute after:h-0.5 after:w-full after:bg-dark-15 after:top-1/2 after:-translate-y-1/2 after:left-0">
                                        <div className="icon-container relative z-1 w-3/4 h-3/4 rounded-full bg-dark-15 flex items-center justify-center">
                                            <img src={iconsMaper[feature.id]} alt={feature.title} width={25} className="" />
                                        </div>
                                    </div>
                                    <div className="text-wrapper mt-5">
                                        <h3 className="uppercase font-medium text-lg sm:text-xl mb-2">{feature.title}</h3>
                                        <p className="text-grey-50">{feature.description}</p>
                                    </div>
                                </div>))
                            }
                        </div>
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Features;