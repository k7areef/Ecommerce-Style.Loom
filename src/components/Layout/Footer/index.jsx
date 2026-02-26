import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import scalingLogo from "@assets/images/scaling-logo.svg";
import socialProfiles from "@data/socialProfiles.json";
import Button from "@components/UI/Button";

function Footer() {
    return (
        <footer className="border-t border-dashed border-t-dark-15">
            <div className="footer-content border-b-2 border-dashed border-b-dark-15 py-5 md:py-10">
                <div className="container flex items-center justify-between max-md:flex-col gap-5 md:gap-10">
                    <img src={scalingLogo} alt="Logo" className="max-w-3/4" />
                    <div className="social-links flex items-center gap-3">
                        {
                            socialProfiles.map((profile, index) => (<Button
                                key={index}
                                href={profile.href}
                                title={profile.title}
                                className="text-2xl p-0! w-12 h-12 flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={{ prefix: "fab", iconName: profile.icon }} />
                                <span className="sr-only">{profile.title}</span>
                            </Button>))
                        }
                    </div>
                </div>
            </div>
            <div className="footer-subscribe border-b-2 border-dashed border-b-dark-15 py-5 md:py-10">
                <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
                    <div className="links">
                        <h3 className="mb-3 font-medium text-lg sm:text-xl">Products</h3>
                        <ul className="flex items-center text-grey-40 font-roboto-mono gap-2 *:[&>a]:hover:text-white">
                            <li>
                                <Link to={'/'} className="transition duration-200 ease-in">Why Us</Link>
                            </li>
                            <li>•</li>
                            <li>
                                <Link to={'/'} className="transition duration-200 ease-in">About Us</Link>
                            </li>
                            <li>•</li>
                            <li>
                                <Link to={'/'} className="transition duration-200 ease-in">Testimonials</Link>
                            </li>
                            <li>•</li>
                            <li>
                                <Link to={'/'} className="transition duration-200 ease-in">FAQ’s</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3 className="mb-3 font-medium text-lg sm:text-xl">Products</h3>
                        <ul className="flex items-center text-grey-40 font-roboto-mono gap-2 *:[&>a]:hover:text-white">
                            <li>
                                <Link to={'/products?type=menswear'} className="transition duration-200 ease-in">Menswear</Link>
                            </li>
                            <li>.</li>
                            <li>
                                <Link to={'/products?type=womenswear'} className="transition duration-200 ease-in">Womenswear</Link>
                            </li>
                            <li>.</li>
                            <li>
                                <Link to={'/products?type=kidswear'} className="transition duration-200 ease-in">Kidswear</Link>
                            </li>
                        </ul>
                    </div>
                    <form onSubmit={e => e.preventDefault()} className="subscribe max-lg:md:col-span-2">
                        <h3 className="mb-3 font-medium text-lg sm:text-xl">Subscribe to Newsletter</h3>
                        <div className="input-wrapper relative">
                            <input
                                required
                                name="email"
                                type="email"
                                autoComplete="on"
                                placeholder="Your Email"
                                className="w-full p-3 rounded-md bg-dark-10 border border-transparent transition ease-in duration-200 focus:border-brown-70"
                            />
                            <button
                                type="submit"
                                title="Submit"
                                aria-label="Submit"
                                className="text-brown-70 absolute right-3 top-1/2 -translate-y-1/2 z-1"
                            >
                                <FontAwesomeIcon icon={{ prefix: "fas", iconName: "arrow-right" }} />
                                <span className="sr-only">Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-copyright border-b-2 border-dashed border-b-dark-15 py-5 md:py-10">
                <div className="container flex items-center flex-wrap gap-1.5 sm:gap-3 text-grey-50 font-roboto-mono">
                    <p className="max-md:w-full">© {new Date().getFullYear()} StyleLoom. All rights reserved.</p>
                    <p className="md:ms-auto">Terms & Conditions</p>
                    <span>|</span>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;