import Image from "next/image";
import ValoresSection from "@/components/valores-section";
import TeamSection, { type TeamMember } from "@/components/team-section";

// TODO: Replace with Convex query when ready
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "JOSE CASTRO CASTRO",
    role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80"
  },
  {
    id: "2",
    name: "REBECA SALAS ROBLES",
    role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80"
  },
  {
    id: "3",
    name: "ERNESTO LEÓN SUAREZ",
    role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80"
  },
  {
    id: "4",
    name: "SOFIA ELE ROMERO",
    role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80"
  }
];

export default function AcercaDePage() {
  return (
    <>
      <section className="relative w-full min-h-screen">
        {/* Image - full width, partial height */}
        <div className="relative w-full h-[65vh]">
          <Image
            src="/images/about_image.jpg"
            alt="Acerca de nosotros"
            fill
            className="object-cover"
            priority
          />

          {/* Vertical text overlay - positioned absolutely from left edge */}
          <div className="absolute top-[20vh] left-4 md:left-8 lg:left-[10vw] h-full flex items-end gap-1 md:gap-2">
            <h1
              className="text-[32px] md:text-[42px] lg:text-[96px] font-bold leading-none [writing-mode:vertical-lr] rotate-180 tracking-tight text-white z-50 whitespace-nowrap"
              style={{
                textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black, -2px 0 0 black, 2px 0 0 black, 0 -2px 0 black, 0 2px 0 black"
              }}
            >
              ACERCA DE
            </h1>
            <h2
              className="text-[24px] md:text-[32px] lg:text-[72px] font-bold leading-none [writing-mode:vertical-lr] rotate-180 tracking-tight text-black z-50 whitespace-nowrap"
              style={{
                textShadow: "-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white, -2px 0 0 white, 2px 0 0 white, 0 -2px 0 white, 0 2px 0 white"
              }}
            >
              NOSOTROS
            </h2>
          </div>
        </div>

        {/* White content section */}
        <div className="w-full px-4 md:px-8 mt-12">
          <div className="max-w-5xl ml-auto mr-auto">
            <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
              Somos tu equipo extendido, listos para construir estrategias, diseñar experiencias y materializar ideas que eleven tu marca.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Con más de 3000 proyectos completados en 8 años, sabemos que la clave del éxito está en la mezcla de creatividad, ejecución impecable y la actitud para ir más allá.
            </p>
          </div>
        </div>
      </section>


      <ValoresSection />
      <TeamSection members={teamMembers} />
    </>
  );
}
