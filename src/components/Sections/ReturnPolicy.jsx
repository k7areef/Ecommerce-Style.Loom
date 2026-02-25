import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionLayout from "./common/SectionLayout";
import Button from "@components/UI/Button";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ReturnPolicy() {
    return (
        <section className="return-policy-section py-5 md:py-10" id="returnPolicy">
            <div className="container">
                <SectionLayout
                    disabledHeader
                >
                    <div className="header p-5 border-b-2 border-dashed border-b-dark-15 flex items-center justify-between">
                        <h2 className="uppercase font-medium text-lg sm:text-xl md:text-2xl">Return Policy</h2>
                        <Button
                            to={'/'}
                            variant="dark"
                            className="flex items-center gap-2 border-2 border-dashed border-dark-25"
                        >
                            <span>Read Return Policy</span>
                            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
                        </Button>
                    </div>
                    <div className="cards-grid grid grid-cols-1 lg:grid-cols-3">
                        Return Policy
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default ReturnPolicy;