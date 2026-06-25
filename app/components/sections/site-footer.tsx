import Image from "next/image";
import { LocationIcon, MailIcon, PhoneIcon } from "../icons";
import { PHONE_DISPLAY } from "../../lib/contact";

const companyLinks = [
  { label: "Experiences", href: "/#sharing" },
  { label: "Vessels", href: "/#vessels" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#stories" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Cancellation", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="px-4 pb-24 sm:pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gray-950 px-8 py-12 sm:px-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="Alleppey House Boat Company"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-white">
                Alleppey HouseBoat Company
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Curated houseboat experiences designed for modern explorers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <LocationIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                Alleppey, Kerala, India
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-white/30" />
                {PHONE_DISPLAY}
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-white/30" />
                hello@houseboatcompany.in
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; 2026 HouseBoatCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
