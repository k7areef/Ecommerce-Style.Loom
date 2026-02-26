import Button from "@components/UI/Button";
import SectionLayout from "./common/SectionLayout";
import data from "@data/contactDetails.json";
import emailIcon from "@assets/icons/contact-details/email.svg";
import phoneIcon from "@assets/icons/contact-details/phone.svg";
import locationDotIcon from "@assets/icons/contact-details/location-dot.svg";

const iconsMaper = {
    email: emailIcon,
    phone: phoneIcon,
    locationDot: locationDotIcon
}

function ContactDetails() {
    const { title, description, details } = data;
    return (
        <section className="contact-details-section py-5 md:py-10" id="contactDetails">
            <div className="container">
                <SectionLayout
                    title={title}
                    abstractNumber={4}
                    description={description}
                >
                    <div className="cards-wrapper">
                        <div className="header p-5 border-b-2 border-dashed border-b-dark-15 flex items-center justify-between">
                            <h2 className="uppercase font-medium text-lg sm:text-xl md:text-2xl">Contact Information</h2>
                        </div>
                        <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                details.map((contact, index) => (<div className="contact-card p-5 md:p-10 relative border-dashed border-dark-15 border-s-2 max-md:nth-last-of-type-[1]:border-s-0 max-md:nth-last-of-type-[3]:border-s-0 max-md:nth-of-type-[2]:border-s-0 nth-of-type-[1]:border-s-0 max-lg:nth-last-of-type-[2]:border-s-0 max-lg:nth-last-of-type-[4]:border-s-0 lg:nth-of-type-[4]:border-s-0 border-b-2 nth-last-of-type-[1]:border-b-0 md:nth-last-of-type-[2]:border-b-0 lg:nth-last-of-type-[3]:border-b-0" key={index}>
                                    <div className="icon-wrapper w-17 h-17 rounded-full border-2 border-dashed border-dark-15 flex items-center justify-center relative before:absolute before:h-full before:w-0.5 before:bg-dark-15 before:left-1/2 before:-translate-x-1/2 before:top-0 after:absolute after:h-0.5 after:w-full after:bg-dark-15 after:top-1/2 after:-translate-y-1/2 after:left-0 mx-auto mb-5">
                                        <div className="icon-container relative z-1 w-3/4 h-3/4 rounded-full bg-dark-15 flex items-center justify-center">
                                            <img src={iconsMaper[contact.icon]} alt={contact.title} width={25} />
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-center mb-2">{contact.name}</h3>
                                    <Button
                                        href={contact.href}
                                        variant="dark"
                                        title={contact.name}
                                        aria-label={contact.name}
                                        className="text-center block border-2 border-dashed border-dark-25"
                                    >
                                        {contact.name}
                                    </Button>
                                </div>))
                            }
                        </div>
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default ContactDetails;