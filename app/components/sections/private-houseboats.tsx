import Link from "next/link";
import HouseboatCardCarousel from "../houseboat-card-carousel";
import { privateBoats } from "../../data/home";
import { houseboatSlug } from "../../data/private-houseboats";

export default function PrivateHouseboats() {
  return (
    <section id="private" className="pb-10 sm:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Private Houseboats
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
            Book the entire boat for your group — choose by number of bedrooms
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {privateBoats.map((boat) => (
            <Link key={boat.beds} href={`/houseboats/${houseboatSlug(boat.beds)}`} className="group">
              <HouseboatCardCarousel images={boat.images} alt={`${boat.beds} bedroom houseboat`} />
              <div className="mt-2">
                <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">{boat.beds} Bedroom</h3>
                <p className="text-[11px] text-gray-400">{boat.guests} guests</p>
                <p className="mt-0.5 text-xs font-bold text-gray-900 sm:text-sm">From {boat.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
