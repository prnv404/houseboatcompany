import FloatingButtons from "./components/floating-buttons";
import Hero from "./components/sections/hero";
import SharedHouseboat from "./components/sections/shared-houseboat";
import PrivateHouseboats from "./components/sections/private-houseboats";
import OvernightPackages from "./components/sections/overnight-packages";
import Vessels from "./components/sections/vessels";
import HowItWorks from "./components/sections/how-it-works";
import Gallery from "./components/sections/gallery";
import Reviews from "./components/sections/reviews";
import BookingCta from "./components/sections/booking-cta";
import SiteFooter from "./components/sections/site-footer";

export default function Home() {
  return (
    <>
      <FloatingButtons />
      <Hero />
      <SharedHouseboat />
      <PrivateHouseboats />
      <OvernightPackages />
      <Vessels />
      <HowItWorks />
      <Gallery />
      <Reviews />
      <BookingCta />
      <SiteFooter />
    </>
  );
}
