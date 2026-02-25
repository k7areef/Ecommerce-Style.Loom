import SectionLayout from "./common/SectionLayout";
import data from "@data/process.json";

function Process() {
    const { title, description, steps } = data;
    return (
        <section className="process-section py-5 md:py-10" id="process">
            <div className="container">
                <SectionLayout
                    title={title}
                    abstractNumber={1}
                    description={description}
                >
                    <div className="cards-wrapper">
                        <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {
                                steps.map((step, index) => (<div className="step-card p-5 md:p-10 relative border-dashed lg:not-first-of-type:border-s-2 max-lg:md:nth-of-type-[2]:border-s-2 max-lg:md:nth-of-type-[4]:border-s-2 max-lg:not-last-of-type:border-b-2 md:nth-[3]:border-b-0 md:nth-[4]:border-b-0 border-dark-15" key={index}>
                                    <div className="step-num font-roboto-mono text-grey-40">
                                        Step {String(step.id).padStart(2, '0')}
                                    </div>
                                    <div className="text-wrapper mt-5">
                                        <h3 className="uppercase font-medium text-lg sm:text-xl mb-2">{step.title}</h3>
                                        <p className="text-grey-50">{step.description}</p>
                                    </div>
                                </div>))
                            }
                        </div>
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Process;