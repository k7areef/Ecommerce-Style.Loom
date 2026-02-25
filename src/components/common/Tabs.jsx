import Button from "@components/UI/Button";
import React from "react";

/**
 * @typedef {Object} TabsProps
 * @prop {Array} tabs
 * @prop {string} [className]
 * @prop {string} [to]
 */

/**
 * @param {TabsProps} props
 */

function Tabs({ tabs, className, to }) {
    const [activeTab, setActiveTab] = React.useState("all");
    return (
        <div className={`tabs flex sm:items-center gap-2 flex-wrap max-sm:flex-col${className ? " " + className : ""}`}>
            {
                tabs.map((tab, index) => {
                    const normalTitle = String(tab.title).toLowerCase();
                    return (
                        <Button
                            {...(to && { to: `${to}${normalTitle}` })}
                            variant={(!to && normalTitle === activeTab) ? "primary" : "dashed"}
                            key={index}
                            title={tab.title}
                            aria-label={tab.title}
                            onClick={() => setActiveTab(normalTitle)}
                            className={`tab sm:min-w-16 text-center border-2 border-dashed max-sm:w-full${(!to && normalTitle === activeTab) ? " border-transparent" : ""}`}
                        >
                            {tab.title}
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default Tabs;