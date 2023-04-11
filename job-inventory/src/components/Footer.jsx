import React from "react";

const Footer = () => {
    return(
        <div className="footer-container flex flex-wrap flex-col items-center justify-between sm:flex-row">
            <div className="flex-basis-40">
                <div className="site-name">JobInventory</div>
                <div className="site-des">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</div>

                <div className="social-links">
                    <ul>
                        <li><a href="#"><i></i></a></li>
                        <li><a href="#"><i></i></a></li>
                        <li><a href="#"><i></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="flex-basis-15"></div>
            <div className="flex-basis-15"></div>
            <div className="flex-basis-15"></div>
            <div className="flex-basis-15"></div>
        </div>
    )
};

export default Footer;