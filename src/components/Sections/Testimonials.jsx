import SectionLayout from "./common/SectionLayout";
import data from "@data/testimonials.json";
import avatar1 from "@assets/images/testimonial-avatars/1.png";
import avatar2 from "@assets/images/testimonial-avatars/2.png";
import avatar3 from "@assets/images/testimonial-avatars/3.png";
import avatar4 from "@assets/images/testimonial-avatars/4.png";
import avatar5 from "@assets/images/testimonial-avatars/5.png";
import avatar6 from "@assets/images/testimonial-avatars/6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const avatarsMaper = {
    1: avatar1,
    2: avatar2,
    3: avatar3,
    4: avatar4,
    5: avatar5,
    6: avatar6
}

function Testimonials() {
    const { title, description, testimonials } = data;
    return (
        <section className="testimonials-section py-5 md:py-10" id="testimonials">
            <div className="container">
                <SectionLayout
                    title={title}
                    abstractNumber={3}
                    description={description}
                >
                    <div className="cards-wrapper">
                        <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((testimonial, index) => (<div className="testimonial-card p-5 md:p-10 relative border-dashed border-dark-15 border-s-2 max-md:nth-last-of-type-[1]:border-s-0 max-md:nth-last-of-type-[3]:border-s-0 max-md:nth-of-type-[2]:border-s-0 nth-of-type-[1]:border-s-0 max-lg:nth-last-of-type-[2]:border-s-0 max-lg:nth-last-of-type-[4]:border-s-0 lg:nth-of-type-[4]:border-s-0 border-b-2 nth-last-of-type-[1]:border-b-0 md:nth-last-of-type-[2]:border-b-0 lg:nth-last-of-type-[3]:border-b-0" key={index}>
                                    <div className="author-wrapper flex items-center gap-4 mb-5">
                                        <div className="author-avatar w-15 h-15 rounded-full shrink-0">
                                            <img src={avatarsMaper[testimonial.id]} alt={testimonial.name} className="rounded-full w-full h-full" />
                                        </div>
                                        <div className="author-text-info w-full">
                                            <div className="author-name font-medium mb-1 text-lg">{testimonial.author.name}</div>
                                            <p className="text-grey-40 font-roboto-mono">{testimonial.author.location}</p>
                                        </div>
                                        <FontAwesomeIcon icon={faXTwitter} className="shrink-0 text-xl text-brown-70" />
                                    </div>
                                    <div className="stars mb-5 flex items-center gap-2">
                                        {
                                            Array.from({ length: 5 }).map((_, index) => (<FontAwesomeIcon key={index} icon={faStar} className="text-[#facd00]" />))
                                        }
                                    </div>
                                    <p className="text-grey-50">{testimonial.comment}</p>
                                </div>))
                            }
                        </div>
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Testimonials;