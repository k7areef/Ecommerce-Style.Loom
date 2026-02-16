import Faqs from "@components/Layout/Faqs";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function ProductDetailsPage() {
    useChangeTitle("Product Details");
    return (
        <div className="product-details-page">
            <ProductDetailsPage />
            <Testimonials />
        </div>
    )
}

export default ProductDetailsPage;