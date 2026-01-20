import Image from "next/image";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

type TeamSectionProps = {
  members: TeamMember[];
  title?: string;
};

export default function TeamSection({ members, title = "NUESTRO EQUIPO" }: TeamSectionProps) {
  return (
    <section className="flex flex-col items-left justify-left gap-12 container mx-auto px-8 py-16">
      <h2 className="text-4xl font-extrabold text-black uppercase tracking-tight text-center">
        {title}
      </h2>

      {/* Team Cards - Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {members.map((member) => (
          <div
            key={member.id}
            className="shrink-0 w-[280px] md:w-[320px] lg:w-[360px] relative group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full aspect-3/4 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              />

              {/* Dark overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-linear-to-t from-black/80 to-transparent" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg md:text-xl font-bold uppercase mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-white/90">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
