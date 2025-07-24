import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Shield, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Thiết kế Website",
      description: "Xây dựng website responsive, hiện đại với giao diện UX/UI tối ưu",
      features: ["Responsive Design", "SEO Optimization", "Loading Speed Tối ưu", "CMS Quản lý"],
      price: "Từ 10.000.000đ",
      color: "tech-blue"
    },
    {
      icon: ShoppingCart,
      title: "Website Thương mại điện tử",
      description: "Giải pháp bán hàng online với đầy đủ tính năng quản lý",
      features: ["Giỏ hàng thông minh", "Thanh toán đa kênh", "Quản lý kho", "Báo cáo doanh thu"],
      price: "Từ 25.000.000đ",
      color: "tech-green"
    },
    {
      icon: Smartphone,
      title: "Ứng dụng Mobile",
      description: "Phát triển app iOS & Android với công nghệ hiện đại",
      features: ["Cross Platform", "Push Notification", "Offline Support", "App Store Deploy"],
      price: "Từ 50.000.000đ",
      color: "tech-purple"
    },
    {
      icon: Database,
      title: "Hệ thống ERP",
      description: "Phần mềm quản lý doanh nghiệp tích hợp toàn diện",
      features: ["Quản lý nhân sự", "Kế toán tự động", "Báo cáo thống kê", "Tích hợp API"],
      price: "Từ 100.000.000đ",
      color: "tech-orange"
    },
    {
      icon: Shield,
      title: "Bảo mật & Hosting",
      description: "Dịch vụ hosting an toàn với SSL và backup tự động",
      features: ["SSL Certificate", "Daily Backup", "99.9% Uptime", "24/7 Monitoring"],
      price: "Từ 2.000.000đ/năm",
      color: "tech-blue"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Tăng trưởng doanh số với chiến lược marketing online",
      features: ["SEO Strategy", "Google Ads", "Social Media", "Analytics"],
      price: "Từ 5.000.000đ/tháng",
      color: "tech-green"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-2 rounded-full border border-green-800 mb-6">
            <span className="text-lg font-medium text-green-500">Dịch vụ chuyên nghiệp</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Giải pháp IT</span>{" "}
            <span className="text-[#2196f3] font-bold">toàn</span>{" "}
            <span className="text-[#26a69a] font-bold">diện</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#a1a1aa]">
            Chúng tôi cung cấp đầy đủ các dịch vụ công nghệ thông tin từ thiết kế website, 
            phát triển ứng dụng đến tư vấn chuyển đổi số cho doanh nghiệp.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group cursor-pointer border border-border transition-colors duration-300
                hover:border-green-500
                bg-[#18181b] 
                shadow-none
                rounded-xl
                flex-1 min-w-[320px] max-w-[400px]
                flex flex-col
                `}
              style={{ flexBasis: "calc(33.333% - 2rem)" }}
            >
              <CardHeader>
                <div
                  className={`
                    w-10 h-10 rounded-md flex items-center justify-center mb-4
                    transition-transform duration-300 group-hover:scale-110
                    ${
                      service.color === "tech-blue"
                        ? "bg-[#1e293b]/20"
                        : service.color === "tech-green"
                        ? "bg-[#22c55e]/10"
                        : service.color === "tech-orange"
                        ? "bg-[#f59e42]/10"
                        : service.color === "tech-purple"
                        ? "bg-[#a78bfa]/10"
                        : service.color === "tech-pink"
                        ? "bg-[#ec4899]/10"
                        : "bg-[#27272a]/10"
                    }
                  `}
                >
                  <service.icon
                    className={`
                      h-6 w-6
                      ${
                        service.color === "tech-blue"
                          ? "text-[#1e90ff]"
                          : service.color === "tech-green"
                          ? "text-[#22c55e]"
                          : service.color === "tech-orange"
                          ? "text-[#f59e42]"
                          : service.color === "tech-purple"
                          ? "text-[#a78bfa]"
                          : service.color === "tech-pink"
                          ? "text-[#ec4899]"
                          : "text-primary"
                      }
                    `}
                  />
                </div>
                <CardTitle
                  className={`
                    text-base font-semibold
                    text-white
                    group-hover:text-green-500
                    transition-colors
                  `}
                >
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-[#a1a1aa] text-sm">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-[#a1a1aa]">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#27272a] mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-green-500">{service.price}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn text-[#a1a1aa] hover:text-green-500"
                    >
                      Chi tiết
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-gradient-to-r from-[#3b82f6] to-[#22c55e] rounded-2xl px-4 py-8 sm:px-8 sm:py-10 lg:py-12 text-center shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              Cần tư vấn về dự án của bạn?
            </h3>
            <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                className="bg-white text-black font-semibold px-6 py-2 rounded-xl shadow-none border-none outline-none transition-colors duration-200 hover:bg-green-500 hover:text-white hover:shadow-lg"
                type="button"
              >
                Tư vấn miễn phí
              </button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-6 py-2"
              >
                Xem báo giá
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;