export function Statistics() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 md:gap-[-20px] mx-auto">
        {/* Circle 1 - Black */}
        <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full bg-black border-4 border-black flex flex-col items-center justify-center text-white z-10 md:-mr-12">
          <div className="text-3xl md:text-6xl font-bold">82k</div>
          <div className="text-xs md:text-base mt-1 md:mt-2 text-center px-2">Projects completed</div>
        </div>

        {/* Circle 2 - White */}
        <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full bg-white border-4 border-black flex flex-col items-center justify-center text-black z-20 md:-mr-12">
          <div className="text-3xl md:text-6xl font-bold">100</div>
          <div className="text-xs md:text-base mt-1 md:mt-2 text-center px-2 text-[#4A4A4A]">Honorable awards</div>
        </div>

        {/* Circle 3 - Black */}
        <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full bg-black border-4 border-black flex flex-col items-center justify-center text-white z-30 md:-mr-12">
          <div className="text-3xl md:text-6xl font-bold">80k</div>
          <div className="text-xs md:text-base mt-1 md:mt-2 text-center px-2">Satisfied customers</div>
        </div>

        {/* Circle 4 - White */}
        <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full bg-white border-4 border-black flex flex-col items-center justify-center text-black z-40">
          <div className="text-3xl md:text-6xl font-bold">680</div>
          <div className="text-xs md:text-base mt-1 md:mt-2 text-center px-2 text-[#4A4A4A]">Professional team</div>
        </div>
      </div>
    </section>
  )
}
