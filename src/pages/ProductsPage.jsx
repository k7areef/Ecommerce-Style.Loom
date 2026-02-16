import Faqs from "@components/Layout/Faqs";
import ProductList from "@components/Sections/ProductList";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function ProductsPage() {
    useChangeTitle("Products");
    return (
        <div className="products-page">
            <ProductList />
            <Testimonials />
        </div>
    )
}

export default ProductsPage;