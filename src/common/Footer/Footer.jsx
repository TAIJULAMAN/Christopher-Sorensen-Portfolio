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
                    <p className="mt-5 text-[10px] md:text-xs lg:text-sm text-gray-300/90 leading-snug text-center md:text-right max-w-[90%] sm:max-w-[420px]">
                        Trusted chef delivering flavors you’ll never forget.
                    </p>
                </div>
                <div className="mt-5 text-center text-gray-400 text-[10px] sm:text-xs md:text-sm">
                    Copyright © {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
