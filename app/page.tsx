export default function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen flex items-center pt-14 sm:pt-16 bg-slate-900 overflow-hidden
        bg-[url('/heroBanner/hero-section-xs.png')]
        sm:bg-[url('/heroBanner/hero-section-sm.png')]
        md:bg-[url('/heroBanner/hero-section-md.png')]
        lg:bg-[url('/heroBanner/hero-section-lg.png')]
        xl:bg-[url('/heroBanner/hero-section-xl.png')]
        2xl:bg-[url('/heroBanner/hero-section-2xl.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20 z-10"></div>

      {/* Hero Content */}
      <div className="relative left-10 md:left-20 lg:left-30 xl:left-40 2xl:left-50 z-30 w-full text-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1
          className="
            relative font-black font-[Anton] text-white 
            text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]
            leading-[0.9] italic transform -skew-x-6
            [text-shadow:1px_1px_0_#ff4cf0,2px_2px_0_#ff4cf0,3px_3px_0_#ff4cf0] 
            sm:[text-shadow:2px_2px_0_#ff4cf0,4px_4px_0_#ff4cf0,6px_6px_0_#ff4cf0]
            mb-4 sm:mb-6
          "
          style={{ fontFamily: 'Anton, sans-serif', lineHeight: '0.9' }}
        >
          <span className="block sm:inline">TURBINE SUA</span>
          <span className="block sm:inline"> JORNADA</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text block">
            NO SPIRIT NETWORK!
          </span>
        </h1>

        <p className="font-[Silkscreen] text-md mb-6 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto opacity-90 text-[#e8a3ff] leading-relaxed px-2">
          Aproveite vantagens exclusivas com o
          Premium e use seu Cash para deixar sua
          gameplay ainda mais COMPLETA!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button className="
            w-full sm:w-auto 
            bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800
            hover:from-purple-400 hover:via-purple-500 hover:to-purple-700
            border-2 border-purple-400
            text-white font-bold text-base sm:text-lg
            px-8 sm:px-12 py-3 sm:py-4
            uppercase tracking-wider
            transition-all duration-200 
            hover:scale-105 hover:brightness-110
            shadow-lg shadow-purple-500/30
            relative overflow-hidden
            before:absolute before:inset-0 
            before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-500
          "
            style={{
              fontFamily: 'Anton, sans-serif',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
            }}>
            SURVIVAL →
          </button>
          <button className="
            w-full sm:w-auto 
            bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-800
            hover:from-emerald-400 hover:via-emerald-500 hover:to-emerald-700
            border-2 border-emerald-400
            text-white font-bold text-base sm:text-lg
            px-8 sm:px-12 py-3 sm:py-4
            uppercase tracking-wider
            transition-all duration-200 
            hover:scale-105 hover:brightness-110
            shadow-lg shadow-emerald-500/30
            relative overflow-hidden
            before:absolute before:inset-0 
            before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-500
          "
            style={{
              fontFamily: 'Anton, sans-serif',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
            }}>
            LOJA DE CASH →
          </button>
        </div>
      </div>
    </section>
  );
}