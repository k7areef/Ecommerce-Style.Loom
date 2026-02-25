import Button from "@components/UI/Button";
import SectionLayout from "./common/SectionLayout";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CancellationPolicy() {
    return (
        <section className="cancellation-policy-section" id="cancellationPolicy">
            <div className="container">
                <SectionLayout
                    disabledHeader
                >
                    <div className="header p-5 border-b-2 border-dashed border-b-dark-15 flex items-center justify-between">
                        <h2 className="uppercase font-medium text-lg sm:text-xl md:text-2xl">Cancellation Policy</h2>
                        <Button
                            to={'/'}
                            variant="dark"
                            className="flex items-center gap-2 border-2 border-dashed border-dark-25"
                        >
                            <span>Read Cancellation Policy</span>
                            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
                        </Button>
                    </div>
                    <div className="cards-grid grid grid-cols-1 lg:grid-cols-3">
                        Cancellation Policy
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default CancellationPolicy;