import { Link } from "react-router-dom";
import logoDesktop from "@assets/images/logo/desktop.png";
import logoLaptop from "@assets/images/logo/laptop.png";
import logoMobile from "@assets/images/logo/mobile.png";

/**
 * @typedef {Object} AppLogoProps
 * @prop {string} [className]
 */

/**
 * @param {AppLogoProps} props
 */

function AppLogo({ className }) {
    return (
        <Link
            to={'/'}
            className={`app-logo${className ? ` ${className}` : ''}`}
        >
            <picture>
                <source media="(min-width: 1024px)" srcSet={logoDesktop} />
                <source media="(min-width: 768px)" srcSet={logoLaptop} />
                <img src={logoMobile} alt="logo" />
            </picture>
        </Link>
    )
}

export default AppLogo;