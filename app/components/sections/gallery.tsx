import Image from "next/image";
import { queenGallery } from "../../data/home";

export default function Gallery() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Life Aboard
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            A glimpse of what awaits you on the water
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 lg:grid-cols-6">
          {queenGallery.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
