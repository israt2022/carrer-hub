import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="footer-container flex flex-wrap mx-auto lg:max-w-screen-xl lg:px-8 md:px-24 px-24">
            <div className="basis-full sm:basis-1/2 lg:basis-1/4 mb-8 text-center lg:text-left">
                <div className="site-name">JobInventory</div>
                <div className="site-des my-5">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</div>

                <div className="social-links flex justify-center lg:block">
                    <img src="/assets/Icons/Group 9969.png" alt="" />
                </div>
            </div>
            <div className="basis-full sm:basis-1/2 lg:basis-1/6 mb-8 text-center lg:text-left">
                <div className="footer-link-category">Company</div>
                <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Latest News</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="basis-full sm:basis-1/2 lg:basis-1/6 mb-8 text-center lg:text-left">
            <div className="footer-link-category">Product</div>
                <ul className="footer-links">
                    <li><a href="#">Prototype</a></li>
                    <li><a href="#">Plans & Pricing</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Integration</a></li>
                </ul>
            </div>
            <div className="basis-full sm:basis-1/2 lg:basis-1/6 mb-8 text-center lg:text-left">
            <div className="footer-link-category">Support</div>
                <ul className="footer-links">
                    <li><a href="#">Help Desk</a></li>
                    <li><a href="#">Sales</a></li>
                    <li><a href="#">Become a Partner</a></li>
                    <li><a href="#">Developers</a></li>
                </ul>
            </div>
            <div className="basis-full sm:basis-1/2 lg:basis-1/4 mb-8 text-center lg:text-left">
            <div className="footer-link-category">Contact</div>
                <p className="contact-info">524 Broadway , NYC <br />
+1 777 - 978 - 5570</p>
            </div>
        </div>
        <hr className="separetor lg:max-w-screen-xl mx-auto lg:px-8 md:px-24" />

        <div className="rights flex flex-wrap lg:max-w-screen-xl mx-auto lg:px-8 md:px-24 px-8">
            <div className="right basis-full text-center sm:text-left sm:basis-1/2">@2023 <b>JobInventory</b>. All Rights Reserved</div>
            <div className="powered-by basis-full text-center sm:text-right sm:basis-1/2">Powered by <b>JobInventory</b></div>
        </div>
        </footer>
    )
};

export default Footer;