import abstract1 from "@assets/images/section-layout-abstracts/1.svg";
import abstract2 from "@assets/images/section-layout-abstracts/2.svg";
import abstract3 from "@assets/images/section-layout-abstracts/3.svg";
import abstract4 from "@assets/images/section-layout-abstracts/4.svg";

const abstractsMaper = {
    1: abstract1,
    2: abstract2,
    3: abstract3,
    4: abstract4
}

/**
 * @typedef {Object} SectionLayoutProps
 * @prop {string} title
 * @prop {string} description
 * @prop {string} [className]
 * @prop {boolean} [disabledHeader]
 * @prop {React.ReactNode} [headerChildren]
 * @prop {number} [abstractNumber]
 */

/**
 * @param {SectionLayoutProps} props
 */

function SectionLayout({ title, description, className, disabledHeader = false, headerChildren, children, abstractNumber }) {
    return (
        <div className={`section-layout border-2 border-dashed border-dark-15 rounded-lg relative overflow-hidden${className ? ` ${className}` : ""}`}>
            {
                !disabledHeader &&
                <div className="header p-5 md:p-10 lg:p-15 xl:p-20 border-b-2 border-dashed border-b-dark-15 relative overflow-hidden">
                    {
                        abstractNumber &&
                        <img
                            src={abstractsMaper[abstractNumber]}
                            alt="Abstract"
                            className="hidden md:block absolute z-1 right-0 top-0 translate-x-50 -translate-y-20 pointer-events-none max-w-112.5"
                        />
                    }
                    <div className="text-wrapper">
                        <h2 className="font-medium text-xl md:text-2xl lg:text-3xl mb-3 uppercase">{title}</h2>
                        <p className="text-grey-40!">{description}</p>
                    </div>
                    {
                        headerChildren && <div className="children-wrapper mt-5">
                            {headerChildren}
                        </div>
                    }
                </div>
            }
            <div className="body">
                {children}
            </div>
        </div>
    )
}

export default SectionLayout;