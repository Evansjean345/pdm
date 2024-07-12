import React from "react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "images/cat2.avif",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: "images/cat3.avif",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: "images/cat4.avif",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical",
    href: "#",
    price: "$35",
    imageSrc: "images/cat5.avif",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical",
    href: "#",
    price: "$35",
    imageSrc: "images/cat5.avif",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical",
    href: "#",
    price: "$35",
    imageSrc: "images/cat5.avif",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Library() {
  return (
    <div className="sm:pt-56 pt-44">
      <div className="w-full h-[10vh] bg-white text-gray-700 flex items-center justify-center flex-col">
        <h2 className="font-bold text-4xl">Explore all category</h2>
        <h3 className="text-lg mt-8">Browse all categories</h3>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group relative"
              >
                <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-[400px] w-full object-cover object-center group-hover:opacity-75"
                  />
                  <div className="absolute bottom-4 left-10 sm:left-24">
                    <h3 className="mt-4 text-lg sm:text-sm font-medium text-gray-200">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-200">
                      {product.price}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
