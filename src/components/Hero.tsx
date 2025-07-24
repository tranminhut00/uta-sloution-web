import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Smartphone } from "lucide-react";
const heroImage = "/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-blue rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-tech-green rounded-full animate-bounce" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-tech-purple rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-start mb-6">
              <span className="px-6 py-2 mt-48 rounded-full border border-[#19c37d] text-[#19c37d] text-lg font-medium bg-transparent inline-block">
                Đối tác tin cậy cho doanh nghiệp
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              <style>
                {`
                  @keyframes color-blink {
                    0% { color: #fb923c; }
                    20% { color: #facc15; }
                    40% { color: #22d3ee; }
                    60% { color: #22c55e; }
                    80% { color: #a78bfa; }
                    100% { color: #fb923c; }
                  }
                  .blinking-text {
                    animation: color-blink 1.5s linear infinite;
                  }
                `}
              </style>
              <span className="font-bold blinking-text inline-block">
                UTA <span className="font-semibold">Solution</span>
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-normal">
                Giải pháp IT toàn diện
              </span>
            </h1>

            <p className="text-xl mb-8 max-w-2xl" style={{ color: "#a1a1aa" }}>
              Chúng tôi chuyên xây dựng website chuyên nghiệp, ứng dụng di động và các giải pháp 
              công nghệ hiện đại giúp doanh nghiệp phát triển trong kỷ nguyên số.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#services" className="inline-block">
                <button
                  className="flex items-center justify-center px-8 py-3 rounded-xl font-bold text-white text-xl
                  bg-gradient-to-r from-[#3494E6] to-[#45E994] shadow-md transition-opacity duration-200
                  hover:opacity-90 focus:outline-none"
                  style={{ minWidth: 220 }}
                >
                  Khám phá dịch vụ
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
              </a>
              <a
                href="#portfolio"
                className="inline-block border border-primary text-primary font-bold text-xl rounded-xl px-8 py-3 transition-colors duration-200 hover:bg-primary hover:text-white focus:outline-none"
                style={{ minWidth: 220 }}
              >
                Xem portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 bg-transparent py-2">
              <div className="text-center">
                <div className="text-[2rem] font-bold text-[#19c37d] mb-1 leading-none">100+</div>
                <div className="text-sm text-white/80 mt-2">Dự án thành công</div>
              </div>
              <div className="text-center">
                <div className="text-[2rem] font-bold text-[#19c37d] mb-1 leading-none">5+</div>
                <div className="text-sm text-white/80 mt-2">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-[2rem] font-bold text-[#19c37d] mb-1 leading-none">24/7</div>
                <div className="text-sm text-white/80 mt-2">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {/* Hiệu ứng xoay vòng tròn cho từng card */}
              <style>
                {`
                  @keyframes rotate-card {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                  }
                  .card-rotate-effect:hover .icon-rotate {
                    animation: rotate-card 1s linear infinite;
                  }
                `}
              </style>
              <div className="flex flex-col gap-8">
                {/* Website Development Card */}
                <div className="bg-[#11131a] rounded-xl p-6 shadow-lg border-none card-rotate-effect transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="icon-rotate inline-flex">
                      <Globe className="h-7 w-7 text-[#3494E6]" />
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-base">Website Development</h3>
                  <p className="text-sm text-[#b3b3b3]">Tạo website chuyên nghiệp, tối ưu SEO</p>
                </div>
                  {/* Mobile Apps Card */}
                <div className="bg-[#11131a] rounded-xl p-6 shadow-lg border-none card-rotate-effect transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="icon-rotate inline-flex">
                      <Smartphone className="h-7 w-7 text-[#45E994]" />
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-base">Mobile Apps</h3>
                  <p className="text-sm text-[#b3b3b3]">Ứng dụng di động đa nền tảng</p>
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center">
                {/* Custom Solutions Card */}
                <div className="bg-[#11131a] rounded-xl p-6 shadow-lg border-none card-rotate-effect transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="icon-rotate inline-flex">
                      <Code className="h-7 w-7 text-[#8f5fff]" />
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-base">Custom Solutions</h3>
                  <p className="text-sm text-[#b3b3b3]">Giải pháp phần mềm tùy chỉnh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;