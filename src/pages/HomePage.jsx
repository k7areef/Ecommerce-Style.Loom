import Faqs from "@components/Layout/Faqs";
import Features from "@components/Sections/Features";
import HeroSection from "@components/Sections/HeroSection";
import Process from "@components/Sections/Process";
import Products from "@components/Sections/Products";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            <HeroSection />
            <Features />
            <Process />
            <Products />
            <Testimonials />
        </div>
    )
}

export default HomePage;