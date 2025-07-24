import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: (props: any) => <MapPin {...props} className="text-green-500" />,
      title: "Địa chỉ văn phòng",
      content: "123 Nguyễn Văn Cừ, Quận 5, TP.HCM",
      subContent: "Tầng 8, Tòa nhà IT Center"
    },
    {
      icon: (props: any) => <Phone {...props} className="text-green-500" />,
      title: "Số điện thoại",
      content: "+84 28 3812 3456",
      subContent: "Hotline: 1900 9999"
    },
    {
      icon: (props: any) => <Mail {...props} className="text-green-500" />,
      title: "Email liên hệ",
      content: "info@utasolution.com",
      subContent: "support@utasolution.com"
    },
    {
      icon: (props: any) => <Clock {...props} className="text-green-500" />,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 18:00",
      subContent: "Thứ 7: 8:00 - 12:00"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-700" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-500" }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Liên hệ với chúng tôi</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Sẵn sàng </span>
            <span className="bg-gradient-to-r from-[#2196f3] via-[#26a69a] to-[#22c55e] bg-clip-text text-transparent font-bold">hỗ trợ</span>
            <span className="text-white"> bạn</span>
          </h2>
          <p
            className="text-[20px] leading-[28px] m-[0px_284.006px] text-center"
            style={{
              color: "#a1a1aa",
            
            }}
          >
            Đội ngũ chuyên gia của UTA Solution luôn sẵn sàng lắng nghe và tư vấn 
            giải pháp công nghệ phù hợp nhất cho doanh nghiệp của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} variant="floating" className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{info.content}</p>
                      <p className="text-muted-foreground text-xs">{info.subContent}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card variant="tech" className="mt-8 p-6">
              <h3 className="font-semibold text-foreground mb-4">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Contact */}
            <Card variant="service" className="mt-6 p-6 text-center">
              <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Cần hỗ trợ ngay?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Liên hệ hotline để được tư vấn miễn phí
              </p>
              <Button variant="hero" size="sm" className="w-full">
                Gọi ngay: 1900 9999
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card
              variant="floating"
              className="p-8 border-[1.2px] border-solid rounded-[12px]"
              style={{ borderColor: "#27272a80" }}
            >
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <p className="text-muted-foreground">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn trong 24h
                </p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="flex flex-col gap-6">
                  {/* Row 1: Họ và tên, Email */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        placeholder="Nhập họ và tên của bạn"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  {/* Row 2: Số điện thoại, Công ty */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">
                        Số điện thoại *
                      </label>
                      <Input
                        placeholder="0123 456 789"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="text-sm font-medium text-foreground mb-2">
                        Công ty
                      </label>
                      <Input
                        placeholder="Tên công ty của bạn"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  {/* Dịch vụ quan tâm */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-foreground mb-2">
                      Dịch vụ quan tâm
                    </label>
                    <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                      <option>Chọn dịch vụ</option>
                      <option>Thiết kế Website</option>
                      <option>Website Thương mại điện tử</option>
                      <option>Ứng dụng Mobile</option>
                      <option>Hệ thống ERP</option>
                      <option>Digital Marketing</option>
                      <option>Tư vấn chuyển đổi số</option>
                    </select>
                  </div>
                  {/* Nội dung tin nhắn */}
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-foreground mb-2">
                      Nội dung tin nhắn *
                    </label>
                    <div className="relative w-full">
                      <Textarea
                        placeholder="Mô tả chi tiết về dự án hoặc câu hỏi của bạn..."
                        rows={5}
                        className="w-full bg-background border-border pr-12 focus:outline-none focus:ring-2 focus:ring-[#CCFFE5] focus:border-[#CCFFE5] transition-all"
                      />
                      <div className="absolute bottom-3 right-3 flex items-center">
                        <Send className="h-5 w-5 text-primary opacity-70" />
                      </div>
                    </div>
                  </div>
                  {/* Checkbox */}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="agree" className="rounded" />
                    <label htmlFor="agree" className="text-sm text-muted-foreground">
                      Tôi đồng ý với <a href="#" className="text-primary hover:underline">điều khoản sử dụng</a> và
                      <a href="#" className="text-primary hover:underline"> chính sách bảo mật</a>
                    </label>
                  </div>
                  {/* Button */}
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full group flex items-center justify-center bg-gradient-to-r from-[#3b82f6] to-[#22c55e] text-white font-semibold"
                  >
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <div className="mt-16">
          <Card variant="tech" className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ghé thăm văn phòng của chúng tôi
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Đến trực tiếp văn phòng UTA Solution để trao đổi chi tiết về dự án và 
              trải nghiệm không gian làm việc chuyên nghiệp của chúng tôi.
            </p>
            <Button variant="outline" size="lg">
              Xem bản đồ
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;