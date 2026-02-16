import CancellationPolicy from "@components/Sections/CancellationPolicy";
import ContactDetails from "@components/Sections/ContactDetails";
import Faqs from "@components/Layout/Faqs";
import ReturnPolicy from "@components/Sections/ReturnPolicy";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle("Contact");
    return (
        <div className="contact-page">
            <ContactDetails />
            <ReturnPolicy />
            <CancellationPolicy />
            <Testimonials />
        </div>
    )
}

export default ContactPage;