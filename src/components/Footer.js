import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="p-10 footer bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span> 
                    <Link href={'/'} className="link link-hover">Carpet Cleaning</Link> 
                    <Link href={'/'} className="link link-hover">Deep Cleaning</Link> 
                    <Link href={'/'} className="link link-hover">Rug Cleaning</Link> 
                    <Link href={'/'} className="link link-hover">Carpe Wash</Link>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <Link href={"/about"} className="link link-hover">About us</Link> 
                    <Link href={"/contact"} className="link link-hover">Contact</Link> 
                    <Link href={"/service"} className="link link-hover">Services</Link> 
                    <Link href={"/"} className="link link-hover">Home</Link>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <Link href={'/'} className="link link-hover">Terms of use</Link> 
                    <Link href={'/'} className="link link-hover">Privacy policy</Link> 
                    <Link href={'/'} className="link link-hover">Cookie policy</Link>
                </div>
                </footer> 
                <footer className="px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <p>ACME Industries Ltd. 
                    <br/> Copyright © {new Date().getFullYear()} All right reserved by Carpet Cleaning SD 
                    <br/> Develop by Mollika Computer 
                    
                    </p>
                </div> 
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <Link href={'/'}>
                        Twitter
                    </Link> 
                    <Link href={'/'}>
                    Facebook
                    </Link> 
                    <Link href={'/'}>
                        Youtube
                    </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;