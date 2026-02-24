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
            <main>
                <HeroSection />
                <Features />
                <Process />
                <Products />
                <Testimonials />
            </main>
        </div>
    )
}

export default HomePage;