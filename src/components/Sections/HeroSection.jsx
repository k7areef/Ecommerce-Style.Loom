import Hero from "@assets/images/hero.png";
import Button from "@components/UI/Button";

const filterTypes = [
    { value: "all", label: "All" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "kids", label: "Kids" },
]

function HeroSection() {
    return (
        <section className="hero-section py-5 md:py-10" id="heroSection">
            <div className="container">
                <div className="section-content rounded-lg border border-dashed border-dark-15 overflow-hidden">
                    <div className="hero-warpper aspect-video rounded-t-lg overflow-hidden rounded-b-sm">
                        <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
                    </div>
                    <div className="content-wrappr grid md:grid-cols-2">
                        <div className="text-area p-3 sm:p-5 md:p-10">
                            <div className="fast-filter flex items-center gap-2 mb-5">
                                {
                                    filterTypes.map((filterType, index) => (<Button
                                        to={'/products?type=' + filterType.value}
                                        variant="dashed"
                                        key={index}
                                        title={filterType.label}
                                        aria-label={filterType.label}
                                        className="sm:min-w-16 text-center"
                                    >
                                        {filterType.label}
                                    </Button>))
                                }
                            </div>
                            <div className="text-wrapper">
                                <h1 className="font-semibold uppercase font-roboto text-lg sm:text-xl md:text-2xl mb-2">Elevate Your Style with StyleLoom</h1>
                                <p className="text-grey-40!">
                                    Explore a world of fashion at StyleLoom, where trends meet affordability.
                                    Immerse yourself in the latest styles and seize exclusive promotions.
                                </p>
                            </div>
                        </div>
                        <div className="statistics-area md:border-s max-md:border-t border-dark-15 border-dashed flex flex-col">
                            <div className="statistics-wrapper flex items-center flex-1">
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl">1500+</h3>
                                    <p className="text-grey-50!">Fashion Products</p>
                                </div>
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7 border-s border-dashed border-dark-15">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl">50 +</h3>
                                    <p className="text-grey-50!">New arrivals every month.</p>
                                </div>
                            </div>
                            <div className="statistics-wrapper flex items-center flex-1 border-t border-dashed border-dark-15">
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl">30%</h3>
                                    <p className="text-grey-50!">OFF on select items.</p>
                                </div>
                                <div className="statistics-card flex flex-col gap-1 md:items-center justify-center flex-1 h-full p-7 border-s border-dashed border-dark-15">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl">95%</h3>
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