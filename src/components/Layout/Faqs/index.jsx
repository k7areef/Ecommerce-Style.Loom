import Tabs from "@components/common/Tabs";
import SectionLayout from "@components/Sections/common/SectionLayout";
import data from "@data/faqs.json";

function Faqs() {
    const { title, description, faqs, categories } = data;
    return (
        <section className="faqs-section py-5 md:py-10" id="faqs">
            <div className="container">
                <SectionLayout
                    title={title}
                    abstractNumber={1}
                    description={description}
                    headerChildren={<Tabs tabs={categories} />}
                >
                    <div className="cards-wrapper">
                        <div className="cards-grid grid grid-cols-1 md:grid-cols-2">
                            {
                                faqs.map((faq, index) => (<div className="faq-card p-5 md:p-10 relative border-dashed border-dark-15 border-b-2 md:even:border-s-2 md:nth-last-of-type-[2]:border-b-0 nth-last-of-type-[1]:border-b-0" key={index}>
                                    <h3 className="uppercase font-medium text-lg sm:text-xl mb-2">{faq.question}</h3>
                                    <p className="text-grey-50">{faq.answer}</p>
                                </div>))
                            }
                        </div>
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Faqs;