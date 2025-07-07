"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, ShoppingCart, LogOut, Info } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium",
    subtitle: "(Item do Survival)",
    price: "R$ 00,00",
    icon: "/premium-icon.svg",
    category: "survival",
    gradient: "bg-gradient-to-b from-gray-600 to-blue-600",
  },
  {
    id: 2,
    name: "500 Cash",
    subtitle: "(Item Global)",
    price: "R$ 00,00",
    icon: "/cash-500-new.svg",
    category: "global",
    gradient: "bg-gradient-to-b from-gray-600 to-green-600",
  },
  {
    id: 3,
    name: "1.100 Cash",
    subtitle: "(Item Global)",
    price: "R$ 00,00",
    icon: "/cash-1100-new.svg",
    category: "global",
    gradient: "bg-gradient-to-b from-gray-600 to-green-600",
  },
  {
    id: 4,
    name: "2.300 Cash",
    subtitle: "(Item Global)",
    price: "R$ 00,00",
    icon: "/cash-2300-new.svg",
    category: "global",
    gradient: "bg-gradient-to-b from-gray-600 to-green-600",
  },
  {
    id: 5,
    name: "6.000 Cash",
    subtitle: "(Item Global)",
    price: "R$ 00,00",
    icon: "/cash-6000-new.svg",
    category: "global",
    gradient: "bg-gradient-to-b from-gray-600 to-green-600",
  },
  {
    id: 6,
    name: "13.000 Cash",
    subtitle: "(Item Global)",
    price: "R$ 00,00",
    icon: "/cash-13000-new.svg",
    category: "global",
    gradient: "bg-gradient-to-b from-gray-600 to-green-600",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNavClick = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "global") return product.category === "global";
    if (activeFilter === "survival") return product.category === "survival";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="bg-[#1B1B1F] text-[#A1A1AA] py-[7.5px] px-4">
        <div className="w-[80%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/sn-logo.png"
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
              <button className="flex items-center gap-1 text-[#A1A1AA] hover:text-white transition-colors text-sm">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Redirecionando...
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-character.svg"
            alt="Minecraft Character Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-[80%] mx-auto py-16 px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-4xl min-w-sm">
              <span className="text-white text-[40px] sm:text-[48px] md:text-[56px] leading-tight italic -skew-x-6 mb-4 sm:mb-6 font-black pl-10">
                DESBLOQUEIE O PODER DO PREMIUM!
              </span>
              <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-lg mx-auto lg:mx-0 pl-10">
                Tenha acesso a comandos exclusivos como /ec, /craft, /kit, /hat
                e muito mais. Ganhe +25% de XP no McMMO, aumente seu limite de
                homes para 30, ore blocos com cores RGB e anuncie até 50 itens
                no /market com validade estendida. Desbloqueie kits exclusivos,
                acesse o /warp vip, tenha prioridade no servidor kickado por
                AFK, e diga adeus aos cooldowns de teletransporte e casamento...
              </p>
              <div className="relative inline-block w-[260px] h-[65px]">
                <Image
                  src="/buy-button-icon.svg"
                  alt="COMPRAR PREMIUM!"
                  fill
                  className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2">
                  <span
                    className="text-[18px] sm:text-[20px] font-black uppercase text-white text-center w-full"
                    style={{
                      WebkitTextStroke: "0.5px #ffffff",
                      WebkitTextFillColor: "white",
                    }}
                  >
                    COMPRAR PREMIUM!
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <button className="hover:opacity-80 transition-opacity">
                <Image
                  src="/social-icons.svg"
                  alt="Discord"
                  width={63}
                  height={46}
                  className="object-contain"
                  style={{ clipPath: "inset(0 0 0 69px)" }}
                />
              </button>
              <button className="hover:opacity-80 transition-opacity">
                <Image
                  src="/social-icons.svg"
                  alt="Instagram"
                  width={49}
                  height={49}
                  className="object-contain"
                  style={{ clipPath: "inset(0 173px 0 0)" }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-12 px-4">
        <div className="w-[80%] mx-auto">
          {/* Section Title */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">LOJA</h2>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Filtrar por:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeFilter === "all"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  Todas os Itens
                </button>
                <button
                  onClick={() => setActiveFilter("global")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeFilter === "global"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  Itens Globais
                </button>
                <button
                  onClick={() => setActiveFilter("survival")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeFilter === "survival"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  Itens do Survival
                </button>
              </div>
            </div>
          </div>

            {/* Products Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-2 justify-center"
              style={{ justifyItems: "center" }}
            >
              {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`relative ${product.gradient} border border-gray-700 rounded-lg p-3 md:p-4 hover:border-purple-500 transition-colors w-full max-w-[160px] mx-auto`}
              >
                {/* Info Button */}
                <button className="absolute top-2 right-2 w-6 h-6 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors">
                <Info size={12} className="text-white" />
                </button>

                <div className="text-center mb-2">
                <h3 className="text-base font-bold text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-purple-400">{product.subtitle}</p>
                </div>

                <div className="flex justify-center mb-2 h-14 w-14 mx-auto">
                <Image
                  src={product.icon || "/placeholder.svg"}
                  alt={product.name}
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
                </div>

                <div className="w-full flex justify-center relative">
                <Image
                  src="/buy-button-icon.svg"
                  alt={product.price}
                  width={90}
                  height={30}
                  className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white font-bold text-xs">
                  {product.price}
                  </span>
                </div>
                </div>
              </div>
              ))}
            </div>
        </div>
      </section>

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
