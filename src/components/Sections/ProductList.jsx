import Tabs from "@components/common/Tabs";
import SectionLayout from "./common/SectionLayout";
import data from "@data/products.json";
import image1 from "@assets/images/products/1.png";
import image2 from "@assets/images/products/2.png";
import image3 from "@assets/images/products/3.png";
import image4 from "@assets/images/products/4.png";
import image5 from "@assets/images/products/5.png";
import image6 from "@assets/images/products/6.png";
import image7 from "@assets/images/products/7.png";
import image8 from "@assets/images/products/8.png";
import image9 from "@assets/images/products/9.png";
import image10 from "@assets/images/products/10.png";
import Button from "@components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const imagesMaper = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
    9: image9,
    10: image10
}

function ProductList() {
    const { title, description, types, parentCategories, products } = data;
    return (
        <section className="product-list-section py-5 md:py-10" id="productList">
            <div className="container">
                <SectionLayout
                    title={title}
                    abstractNumber={2}
                    description={description}
                    headerChildren={<Tabs tabs={types} />}
                >
                    <div className="cards-wrapper">
                        {
                            parentCategories.map((parentCategory, index) => (<div className="parent-category not-last-of-type:border-b-2 border-dashed border-b-dark-15" key={index}>
                                <div className="header p-5 border-b-2 border-dashed border-b-dark-15 flex items-center justify-between">
                                    <h2 className="uppercase font-medium text-lg sm:text-xl md:text-2xl">{parentCategory}</h2>
                                    <Button
                                        to={'/'}
                                        variant="dark"
                                        className="flex items-center gap-2 border-2 border-dashed border-dark-25"
                                    >
                                        <span>View All</span>
                                        <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
                                    </Button>
                                </div>
                                <div className="cards-grid grid grid-cols-1 lg:grid-cols-3">
                                    {
                                        products.filter(p => p.parentCategory === parentCategory).slice(0, 3).map((product, index) => (<div className="pro-card flex items-center flex-wrap gap-5 p-5 lg:p-10 relative border-dashed border-dark-15 border-s-2 max-lg:nth-last-of-type-[1]:border-s-0 max-lg:nth-last-of-type-[3]:border-s-0 max-lg:nth-of-type-[2]:border-s-0 nth-of-type-[1]:border-s-0 max-xl:nth-last-of-type-[2]:border-s-0 max-xl:nth-last-of-type-[4]:border-s-0 xl:nth-of-type-[4]:border-s-0 border-b-2 nth-last-of-type-[1]:border-b-0 lg:nth-last-of-type-[2]:border-b-0 xl:nth-last-of-type-[3]:border-b-0" key={index}>
                                            <Link to={`/products/${product.id}?category=${product.category}`} className="block pro-image w-full aspect-[1/0.8] rounded-t-xl overflow-hidden">
                                                <img src={imagesMaper[product.id]} alt={product.title} className="w-full h-full object-cover" />
                                            </Link>
                                            <div className="pro-category py-2 px-4 bg-dark-10 rounded-full">{product.category}</div>
                                            <Button
                                                to={'/'}
                                                variant="dark"
                                                className="flex items-center justify-center gap-2 border-2 border-dashed border-dark-25 sm:ms-auto max-lg:w-full max-lg:order-1">
                                                <span>Shop Now</span>
                                                <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
                                            </Button>
                                            <div className="pro-info font-roboto-mono w-full">
                                                <h3 className="font-medium mb-1 text-xl">{product.title}</h3>
                                                <div className="pro-sub-info flex items-center gap-2 flex-wrap">
                                                    <div className="pro-fit flex items-center gap-1 text-nowrap">
                                                        <span className="text-grey-50">Fit</span>
                                                        <span className="text-grey-50">.</span>
                                                        <span>{product.fit}</span>
                                                    </div>
                                                    <div className="pro-price flex items-center gap-1 text-nowrap">
                                                        <span className="text-grey-50">Price</span>
                                                        <span className="text-grey-50">.</span>
                                                        <span>{product.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>))
                                    }
                                </div>
                            </div>))
                        }
                        {/* <div className="cards-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                            {
                                Array.from({ length: 6 }).map((product, index) => (<div className="pro-card flex items-center flex-wrap gap-5 p-5 lg:p-10 relative border-dashed border-dark-15 border-s-2 max-lg:nth-last-of-type-[1]:border-s-0 max-lg:nth-last-of-type-[3]:border-s-0 max-lg:nth-of-type-[2]:border-s-0 nth-of-type-[1]:border-s-0 max-xl:nth-last-of-type-[2]:border-s-0 max-xl:nth-last-of-type-[4]:border-s-0 xl:nth-of-type-[4]:border-s-0 border-b-2 nth-last-of-type-[1]:border-b-0 lg:nth-last-of-type-[2]:border-b-0 xl:nth-last-of-type-[3]:border-b-0" key={index}>
                                    {index + 1}
                                </div>))
                            }
                        </div> */}
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default ProductList;