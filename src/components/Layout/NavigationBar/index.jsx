import AppLogo from "@components/common/AppLogo";
import Button from "@components/UI/Button";
import { faBars, faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    { to: '/', label: "Home" },
    { to: '/products', label: "Products" }
];

function NavigraitonBar() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav>
            <div className="container">
                <div className="content-wrapper border-dashed border-b border-b-dark-15 py-4 flex items-center justify-between max-md:flex-wrap">
                    <AppLogo className={'max-md:-order-1 md:order-1'} />
                    <div className={`links-wrapper grid transition-all duration-200 ${isOpen ? "max-md:grid-rows-[1fr] max-md:opacity-100 max-md:mt-5" : "max-md:grid-rows-[0fr] max-md:opacity-0 max-md:mt-0"} max-md:w-full`}>
                        <div className="overflow-hidden">
                            <ul className="flex md:items-center gap-2 max-md:flex-col">
                                {
                                    links.map((link, index) => (<li key={index}>
                                        <NavLink
                                            to={link.to}
                                            className={({ isActive }) => `block transition duration-200 ease-in rounded-md py-2 px-4 border border-dashed ${isActive ? "bg-dark-10 border-transparent" : "border-dark-15 text-grey-70 sm:hover:bg-dark-10 sm:hover:border-transparent sm:hover:text-inherit"}`}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={`links-wrapper grid transition-all duration-200 ${isOpen ? "max-md:grid-rows-[1fr] max-md:opacity-100 max-md:mt-5" : "max-md:grid-rows-[0fr] max-md:opacity-0 max-md:mt-0"} max-md:w-full md:order-1`}>
                        <div className="overflow-hidden">
                            <div className="nav-utils flex items-center gap-3">
                                <Button
                                    to={'/cart'}
                                    variant="secondary"
                                >
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className="sr-only">Cart</span>
                                </Button>
                                <Button
                                    to={'/contact'}
                                >Contact</Button>
                            </div>
                        </div>
                    </div>
                    <Button
                        title="Open"
                        aria-label="Menu"
                        onClick={() => setIsOpen(prev => !prev)}
                        className="md:hidden -order-1 text-2xl p-0! w-12 h-12 flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                        <span className="sr-only">Menu</span>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default NavigraitonBar;