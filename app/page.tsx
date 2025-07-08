import Image from "next/image";
import Link from "next/link";
import { Home, ShoppingCart, LogOut } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#18181C] text-white flex flex-col font-sans">
      {/* Header */}
      <header className="bg-[#1B1B1F] text-[#A1A1AA] py-[7.5px] px-4">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/sn-logo-new.png"
            alt="Spirit Network Logo"
            width={40}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors text-sm"
          >
            <Home size={16} />
            <span>Início</span>
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
          >
            <ShoppingCart size={16} />
            <span>Loja</span>
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <div className="w-8 h-8 bg-gray-600 rounded border border-gray-500 flex items-center justify-center">
              <span className="text-xs font-bold text-white">U</span>
            </div>
            {/* User Info */}
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Entrou como</span>
              <span className="text-sm text-white font-medium">
                Usuario123
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors text-sm">
              <LogOut size={16} />
              <span>Sair</span>
            </button>
            <Link href="/cart" className="flex items-center gap-1 text-[#A1A1AA] hover:text-white transition-colors text-sm">
              <ShoppingCart size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>

      {/* Hero Section */}
      <main className="flex-1 w-full bg-[#18181C] relative overflow-hidden min-h-[600px]">
        {/* CORREÇÃO: Removido z-index negativo e ajustado posicionamento */}
        <div className="absolute inset-0">
          <Image
            src="/1024.png"
            alt="Background"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          {/* Overlay para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div
          className="relative w-full max-w-[1400px] mx-auto flex flex-row items-stretch min-h-[600px] z-10"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          {/* Left - Text and Buttons */}
          <div className="flex flex-col justify-center w-1/2 pl-16 pt-10">
            <h1 className="text-white text-[44px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px] leading-[0.95] italic -skew-x-6 font-black mb-6 drop-shadow-lg">
              TURBINE SUA JORNADA
              <br /> NO SPIRIT NETWORK!
            </h1>
            <p className="font-[Silkscreen] text-[#E8A3FF] text-base sm:text-lg mb-8 max-w-lg tracking-widest uppercase">
              Aproveite vantagens exclusivas com o Premium e use seu Cash para
              deixar sua gameplay ainda mais completa!
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-lg bg-[#A16CF4] text-white font-bold text-base shadow-lg border-b-4 border-[#7B3DF4] transition-all hover:brightness-110">
                Survival
              </button>
              <button className="px-8 py-3 rounded-lg bg-[#3DE9C9] text-white font-bold text-base shadow-lg border-b-4 border-[#1FC9A0] transition-all hover:brightness-110">
                Loja de Cash
              </button>
            </div>
          </div>
          
          {/* Right - Character and Info */}
          <div className="relative flex-1 flex items-end justify-end min-h-[600px]">
            {/* Floating Info */}
            <div className="absolute top-10 right-16 flex flex-col items-end gap-2 z-20">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold tracking-widest">
                  PLAYERS ON:
                </span>
                <span className="text-purple-300 text-lg font-black">1000</span>
              </div>
              <button className="bg-gradient-to-r from-[#A16CF4] to-[#E8A3FF] text-white font-bold px-6 py-2 rounded-lg text-xs shadow-lg border-b-4 border-[#7B3DF4] tracking-widest hover:brightness-110 transition-all">
                COPIAR IP
              </button>
            </div>
          </div>
          
          {/* Floating Social Icons */}
          <div className="absolute top-8 right-8 flex flex-col gap-3 z-30">
            <button className="hover:opacity-80 transition-opacity">
              <Image
                src="/social-icons.svg"
                alt="Discord"
                width={63}
                height={46}
                style={{ clipPath: "inset(0 0 0 69px)" }}
              />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <Image
                src="/social-icons.svg"
                alt="Instagram"
                width={49}
                height={49}
                style={{ clipPath: "inset(0 173px 0 0)" }}
              />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-3 px-4 mt-auto">
              <div className="w-[80%] mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src="/footer-logo.svg"
                    alt="Spirit Network Logo"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
      
                {/* Center Text */}
                <div className="flex-1 px-8 text-left text-sm text-gray-300">
                  <p className="mb-2">
                    All products are sold by PlayNetwork, our authorized reseller and
                    official Merchant of Record. They handle all sales, payments, and
                    order fulfillment.
                  </p>
                  <p>© Spirit Network 2025. Todos os Direitos Reservados.</p>
                </div>
      
                {/* Right Links */}
                <div className="flex-shrink-0">
                  <div className="text-right text-sm">
                    <p className="font-semibold mb-2">Sobre Nós</p>
                    <div className="space-y-1 text-blue-400">
                      <p className="hover:text-blue-300 cursor-pointer">
                        Política de Privacidade
                      </p>
                      <p className="hover:text-blue-300 cursor-pointer">
                        Termos de Serviço
                      </p>
                      <p className="hover:text-blue-300 cursor-pointer">Ajuda</p>
                    </div>
                  </div>
                </div>
              </div>
        </footer>
    </div>
  );
}