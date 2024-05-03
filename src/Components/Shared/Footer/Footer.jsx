import { Link } from "react-router-dom";

const Footer = () => {
    const footLinks = [
        {
            path: "/",
            title: "Home",
        },
        {
            path: "/contact_us",
            title: "Contact us",
        },
        {
            path: "/term_and_policy",
            title: "Term and policy",
        },
        {
            path: "/warenty_policy",
            title: "Warenty policy",
        }
    ];
    return (
        <div>
            <footer className="dark:bg-[#84CC16] text-white  p-2">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
                    <div >
                        {/* Company name */}
                        <Link to='/' className="text-[32px] lg:text-[32px] font-bold text-white ">
                            Organic Food
                        </Link >
                       
                        <p className="text-[21px] lg:text-[16px] my-6">
                            World-class Products with <br /> many client reviews <br /> <br />
                            Be happy
                        </p>
                    </div>
                    <div>
                        {/* Address */}
                        <h1 className="text-[24px] font-bold mb-8">Lets Connect</h1>
                        <p className=" text-[21px] lg:text-[16px] mb-6 ">
                            74/A, Musa mansoon, Wirelessgate, <br /> Mohakhali, Dhaka-1212
                        </p>
                        <p className="text-[16px] lg:text-[16px] mb-6 ">
                            infokhaasfood@gmail.com
                        </p>
                        <p className="text-[21px] lg:text-[16px] mb-6 ">
                            013 1261 8459 <br />
                            013 1268 0858
                        </p>
                    </div>
                    <div>
                        {/* Links */}
                        <h1 className="text-[24px] font-bold mb-8">Links</h1>
                        {footLinks.map(({ path, title }) => (
                            <li className='list-none mb-3' key={path}>
                                <Link to={path}>{title}</Link>
                            </li>
                        ))}
                    </div>
                    <div>
                        {/* Social Links */}
                        <h1 className="text-[24px] font-bold mb-8">Follow us</h1>
                        <div className="flex gap-8">
                            
                        </div>
                    </div>
                </div>
                <hr />
                
            </footer>
        </div>
    );
};

export default Footer;