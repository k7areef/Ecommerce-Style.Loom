import { Link } from "react-router-dom";

/**
 * @typedef {Object} CustomButtonProps
 * @property {string} [to]
 * @property {string} [href]
 * @property {string} [type]
 * @property {string} [className]
 * @property {React.ReactNode} children
 * @property {'primary' | 'primaryLight' | 'secondary' | 'dark' | 'dashed'} [variant]
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement> | import("react-router-dom").LinkProps} [props]
 */

/**
 * @param {ButtonProps & React.HTMLAttributes<HTMLElement>} props
 * @typedef {CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} ButtonProps
 */

function Button({ variant = "primary", to, href, type, className, children, ...props }) {

    const variants = {
        primary: "bg-brown-70 text-dark-06 sm:hover:bg-brown-80",
        primaryLight: "bg-brown-80 text-dark-06 sm:hover:bg-brown-90",
        secondary: "bg-dark-10 text-white sm:hover:bg-dark-12",
        dark: "bg-dark-12 text-white sm:hover:bg-dark-15",
        dashed: "bg-transparent text-grey-70 border border-dashed border-dark-20"
    }

    const classNames = `px-4 py-2 sm:py-3 rounded-md transition duration-300 ease-in-out ${variants[variant]}${className ? ` ${className}` : ""}`;

    if (href) {
        return (
            <a
                href={href}
                {...props}
                className={classNames}
            >
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <Link
                to={to}
                {...props}
                className={classNames}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            {...props}
            className={classNames}
            type={type || "button"}
        >
            {children}
        </button>
    )
}

export default Button;