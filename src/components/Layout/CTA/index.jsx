import Button from "@components/UI/Button";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import abstract from "@assets/images/cta-abstract.svg";

function CTA() {
    return (
        <section className="cta py-5 md:py-10" id="cta-section">
            <div className="container">
                <div className="content-wrapper bg-brown-70 p-5 md:p-10 lg:p-15 xl:p-20 rounded-lg flex md:items-center gap-5 md:gap-10 lg:gap-15 xl:gap-20 max-md:flex-col relative overflow-hidden z-1">
                    <img src={abstract} alt="Abstract" className="max-xs:w-25 max-sm:w-50 max-md:w-100 absolute right-0 top-0 -translate-y-20 translate-x-20 sm:-translate-y-65 sm:translate-x-40 -z-1 pointer-events-none" />
                    <div className="text-wrapper w-full">
                        <h2 className="uppercase font-medium text-dark-06 mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">elevate your wardrobe</h2>
                        <p className="text-dark-12">Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</p>
                    </div>
                    <Button
                        variant="dark"
                        to={'/products'}
                        className="shrink-0 flex items-center justify-center gap-2"
                    >
                        <span>Shop Now</span>
                        <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CTA;