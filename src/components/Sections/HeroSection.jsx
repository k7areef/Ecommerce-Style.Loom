import Hero from "@assets/images/hero.png";
import Tabs from "@components/common/Tabs";
import data from "@data/products.json";

function HeroSection() {
    const { types } = data;
    return (
        <section className="hero-section py-5 md:py-10" id="heroSection">
            <div className="container">
                <div className="section-content rounded-lg border border-dashed border-dark-15 overflow-hidden">
                    <div className="hero-warpper aspect-video rounded-t-lg overflow-hidden rounded-b-sm">
                        <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
                    </div>
                    <div className="content-wrappr grid md:grid-cols-2">
                        <div className="text-area p-3 sm:p-5 md:p-10">
                            <Tabs tabs={types} className="mb-5" to="products?type=" />
                            <div className="text-wrapper">
                                <h1 className="font-semibold uppercase font-roboto text-lg sm:text-xl md:text-2xl mb-2">Elevate Your Style with StyleLoom</h1>
                                <p className="text-grey-50!">
                                    Explore a world of fashion at StyleLoom, where trends meet affordability.
                                    Immerse yourself in the latest styles and seize exclusive promotions.
                                </p>
                            </div>
                        </div>
                        <div className="statistics-area md:border-s max-md:border-t border-dark-15 border-dashed flex flex-col">
                            <div className="statistics-wrapper flex items-center flex-1">
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7">
                                    <h2 className="font-medium text-lg sm:text-xl md:text-2xl">1500+</h2>
                                    <p className="text-grey-50!">Fashion Products</p>
                                </div>
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7 border-s border-dashed border-dark-15">
                                    <h2 className="font-medium text-lg sm:text-xl md:text-2xl">50 +</h2>
                                    <p className="text-grey-50!">New arrivals every month.</p>
                                </div>
                            </div>
                            <div className="statistics-wrapper flex items-center flex-1 border-t border-dashed border-dark-15">
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7">
                                    <h2 className="font-medium text-lg sm:text-xl md:text-2xl">30%</h2>
                                    <p className="text-grey-50!">OFF on select items.</p>
                                </div>
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7 border-s border-dashed border-dark-15">
                                    <h2 className="font-medium text-lg sm:text-xl md:text-2xl">95%</h2>
                                    <p className="text-grey-50!">Customer Satisfaction Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;