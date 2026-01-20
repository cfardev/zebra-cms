"use client";

import Image from "next/image";

// TODO: Replace with Convex query when ready
// const services = useQuery(api.services.list);
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "EVENTOS",
    description: "Desde lanzamientos hasta convenciones, hacemos que cada evento sea único.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "ACTIVACIONES",
    description: "Ejecutamos experiencias en vivo que hacen que tu público hable (y comparta).",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "DESARROLLO DE MARCA",
    description: "Creamos identidades de marca que además de verse bien generan conexión y reconocimiento.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "PROMOCIONES",
    description: "Estrategias creativas que aumentan tus ventas y maximizan la presencia de tu marca.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "MOBILIARIO PUBLICITARIO",
    description: "Diseñamos y producimos elementos visuales que potencian tu presencia en puntos de venta.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "DECORACIONES",
    description: "Le damos vida a los espacios con diseños que cuentan historias.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md border border-gray-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
          >
            <div className="relative w-full aspect-square rounded-t-xl overflow-hidden bg-gray-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-8 flex flex-col flex-1 border-t border-gray-100/50">
              <h3 className="text-xl font-bold uppercase text-center mb-3 tracking-tight text-black group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
