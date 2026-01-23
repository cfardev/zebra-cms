import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Logo Column */}
          <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
            <Image
              src="/footer/logo_footer.svg"
              alt="Zebra Producciones - Logo"
              width={160}
              height={100}
              className="w-32 md:w-auto"
            />
          </div>

          {/* Servicio al cliente Column */}
          <div className="flex flex-col gap-3 md:gap-4 text-left items-center md:items-start">
            <h3 className="text-white font-semibold text-sm md:text-base">Servicio al cliente:</h3>
            <p className="text-white/70 text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-col gap-2 text-xs md:text-sm">
              <a
                href="mailto:manada@zebracr.com"
                className="text-white hover:text-white/80 underline break-all"
              >
                manada@zebracr.com
              </a>
              <a href="tel:+506XXXXXXXX" className="text-white hover:text-white/80">
                (506) XXX-XXXX
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div className="flex flex-col gap-3 md:gap-4 text-left items-center md:items-start">
            <h3 className="text-white font-semibold text-sm md:text-base">Explore:</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/acerca-de" className="text-white/70 hover:text-white text-xs md:text-sm">
                About
              </Link>
              <Link href="/servicios" className="text-white/70 hover:text-white text-xs md:text-sm">
                Service
              </Link>
              <Link href="/portfolio" className="text-white/70 hover:text-white text-xs md:text-sm">
                Portfolio
              </Link>
              <Link href="/contacto" className="text-white/70 hover:text-white text-xs md:text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media Column */}
          <div className="flex flex-col gap-3 md:gap-4 items-center md:items-end text-left md:text-right w-full md:w-auto">
            <h3 className="text-white font-semibold text-sm md:text-base">Social Media:</h3>
            <div className="flex gap-4 justify-start md:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <Image
                  src="/footer/facebook_svg.svg"
                  alt="Facebook"
                  width={35}
                  height={35}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <Image
                  src="/footer/instagram_svg.svg"
                  alt="Instagram"
                  width={35}
                  height={35}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
