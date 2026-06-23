import Image from "next/image";
import Link from "next/link";
import { vessels } from "../../data/home";

export default function Vessels() {
  return (
    <section id="vessels" className="bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            More Ways to Explore
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Beyond houseboats — explore the backwaters your way
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 gap-3 sm:mt-8 sm:gap-4">
          {vessels.map((v) => (
            <Link key={v.name} href={`/experiences/${v.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-square">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4">
                  <h3 className="text-xs font-semibold text-white sm:text-base">{v.name}</h3>
                  <p className="mt-0.5 hidden text-[11px] text-white/60 sm:block">{v.capacity} · {v.duration}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
