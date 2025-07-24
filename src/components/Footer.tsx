import { 
    Facebook, 
    Linkedin, 
    Twitter, 
    Mail, 
    Phone, 
    MapPin,
    ArrowRight
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  
  const Footer = () => {
    const services = [
      "Thiết kế Website",
      "E-commerce Platform",
      "Mobile App Development",
      "Hệ thống ERP",
      "Digital Marketing",
      "Tư vấn IT"
    ];
  
    const company = [
      "Về UTA Solution",
      "Đội ngũ",
      "Tuyển dụng",
      "Tin tức",
      "Khách hàng",
      "Đối tác"
    ];
  
    const support = [
      "Hỗ trợ kỹ thuật",
      "Tài liệu API",
      "Bảo mật",
      "Điều khoản sử dụng",
      "Chính sách bảo mật",
      "FAQ"
    ];
  
    return (
      <footer className="bg-card border-t border-border">
        {/* Newsletter */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div
              className="rounded-2xl p-8 lg:p-12"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(60, 131, 246), rgb(22, 162, 73))",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Đăng ký nhận tin tức mới nhất
                  </h3>
                  <p className="text-white/90">
                    Cập nhật các xu hướng công nghệ, tips phát triển và thông tin về các dịch vụ mới của UTA Solution
                  </p>
                </div>
                <form className="flex w-full max-w-xl mx-auto flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Nhập địa chỉ email của bạn"
                    className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/50 transition-all px-4 py-2"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="whitespace-nowrap px-6 bg-white text-black hover:bg-white/90 transition-colors"
                  >
                    Đăng ký
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
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
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="blinking-text font-bold">U</span>
                </div>
                <span className="text-2xl font-bold blinking-text">UTA Solution</span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                Đối tác tin cậy trong việc cung cấp giải pháp công nghệ toàn diện, 
                giúp doanh nghiệp phát triển bền vững trong kỷ nguyên số.
              </p>
  
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">123 Nguyễn Văn Cừ, Quận 5, TP.HCM</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">+84 28 3812 3456</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">info@utasolution.com</span>
                </div>
              </div>
  
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
  
            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Dịch vụ</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Công ty</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Hỗ trợ</h4>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © 2024 UTA Solution. Tất cả quyền được bảo lưu.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính sách bảo mật
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;