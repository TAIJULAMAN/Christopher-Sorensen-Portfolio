import React from "react"
// import footerLogo from "../../assets/footer-logo.png"

export default function Footer() {
    // Dynamic QR code for Cristofer's portfolio (no external packages)
    return (
        <footer className="bg-[#0b141c] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-14 lg:py-16">
                {/* Top: Logo and tagline - stacks on mobile, aligned on md+ */}
                <div className="flex flex-col items-center gap-2">
                    <div className="hidden md:block w-24 md:w-32" />
                    <img
                        src={"/logo.png"}
                        alt="Brand Logo"
                        className="h-8 md:h-10"
                    />
                    <p className="mt-2 md:mt-0 text-[10px] md:text-xs lg:text-sm text-gray-300/90 leading-snug text-center md:text-right max-w-[90%] sm:max-w-[420px]">
                        Trusted chef delivering flavors you’ll never forget.
                    </p>
                </div>

                <div className="mt-8 sm:mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-14">

                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-gray-300 text-xs sm:text-sm md:text-base">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span className="hidden md:inline-block w-px h-5 bg-gray-600" aria-hidden="true" />
                        <span className="md:hidden text-gray-500" aria-hidden="true">|</span>
                        <a href="#" className="hover:text-white transition-colors">Terms and condition</a>
                    </div>
                </div>

                <div className="mt-8 sm:mt-10 md:mt-14 text-center text-gray-400 text-[10px] sm:text-xs md:text-sm">
                    Copyright © {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
