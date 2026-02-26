import Button from "@components/UI/Button";
import SectionLayout from "./common/SectionLayout";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "@data/cancellationPolicy.json";
import icon1 from "@assets/icons/cancellation-policy/1.svg";
import icon2 from "@assets/icons/cancellation-policy/2.svg";
import icon3 from "@assets/icons/cancellation-policy/3.svg";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3
}

function CancellationPolicy() {
    return (
        <section className="cancellation-policy-section" id="cancellationPolicy">
            <div className="container">
                <SectionLayout
                    disabledHeader
                >
                    <div className="header p-5 border-b-2 border-dashed border-b-dark-15 flex items-center justify-between">
                        <h2 className="uppercase font-medium text-lg sm:text-xl md:text-2xl">Cancellation Policy</h2>
                        <Button
                            to={'/'}
                            variant="dark"
                            className="flex items-center gap-2 border-2 border-dashed border-dark-25"
                        >
                            <span>Read Cancellation Policy</span>
                            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
                        </Button>
                    </div>
                    <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            data.map((item, index) => (<div className="item-card p-5 md:p-10 flex items-center gap-3 relative border-dashed border-dark-15 border-s-2 max-md:nth-last-of-type-[1]:border-s-0 max-md:nth-last-of-type-[3]:border-s-0 max-md:nth-of-type-[2]:border-s-0 nth-of-type-[1]:border-s-0 max-lg:nth-last-of-type-[2]:border-s-0 max-lg:nth-last-of-type-[4]:border-s-0 lg:nth-of-type-[4]:border-s-0 border-b-2 nth-last-of-type-[1]:border-b-0 md:nth-last-of-type-[2]:border-b-0 lg:nth-last-of-type-[3]:border-b-0" key={index}>
                                <div className="icon-wrapper w-17 h-17 rounded-full border-2 border-dashed border-dark-15 flex items-center justify-center relative before:absolute before:h-full before:w-0.5 before:bg-dark-15 before:left-1/2 before:-translate-x-1/2 before:top-0 after:absolute after:h-0.5 after:w-full after:bg-dark-15 after:top-1/2 after:-translate-y-1/2 after:left-0 mx-auto mb-5 shrink-0">
                                    <div className="icon-container relative z-1 w-3/4 h-3/4 rounded-full bg-dark-15 flex items-center justify-center">
                                        <img src={iconsMaper[item.id]} alt={item.title} width={25} />
                                    </div>
                                </div>
                                <div className="text-wrapper w-full">
                                    <h3 className="font-medium mb-2 text-lg sm:text-xl md:text-2xl">{item.title}</h3>
                                    <p className="text-grey-50">{item.description}</p>
                                </div>
                            </div>))
                        }
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default CancellationPolicy;