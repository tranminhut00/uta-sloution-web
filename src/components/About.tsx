import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Lightbulb, 
  Heart,
  ArrowRight,
  Star,
  TrendingUp,
  Target
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: (props: any) => <Lightbulb {...props} className="text-green-500" />,
      title: "Sáng tạo",
      description: "Luôn tìm kiếm giải pháp mới, công nghệ tiên tiến để đem lại giá trị tốt nhất cho khách hàng"
    },
    {
      icon: (props: any) => <Heart {...props} className="text-green-500" />,
      title: "Tận tâm",
      description: "Đặt khách hàng làm trọng tâm, cam kết hỗ trợ và đồng hành cùng sự phát triển của doanh nghiệp"
    },
    {
      icon: (props: any) => <Award {...props} className="text-green-500" />,
      title: "Chất lượng",
      description: "Đảm bảo chất lượng cao trong từng sản phẩm, dịch vụ với quy trình làm việc chuyên nghiệp"
    },
    {
      icon: (props: any) => <Target {...props} className="text-green-500" />,
      title: "Hiệu quả",
      description: "Tối ưu hóa hiệu suất, mang lại ROI tích cực và kết quả vượt mong đợi cho mọi dự án"
    }
  ];

  const achievements = [
    { 
      number: "100+", 
      label: "Dự án hoàn thành", 
      icon: (props: any) => (
        <div className="flex justify-center items-center mb-[10px]">
          <TrendingUp {...props} className="text-green-500" />
        </div>
      )
    },
    { 
      number: "50+", 
      label: "Khách hàng tin tưởng", 
      icon: (props: any) => (
        <div className="flex justify-center items-center mb-[10px]">
          <Users {...props} className="text-green-500" />
        </div>
      )
    },
    { 
      number: "5+", 
      label: "Năm kinh nghiệm", 
      icon: (props: any) => (
        <div className="flex justify-center items-center mb-[10px]">
          <Award {...props} className="text-green-500" />
        </div>
      )
    },
    { 
      number: "4.9/5", 
      label: "Đánh giá khách hàng", 
      icon: (props: any) => (
        <div className="flex justify-center items-center mb-[10px]">
          <Star {...props} className="text-green-500" />
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-2 rounded-full border border-green-800 mb-6">
            <span className="text-lg font-medium text-green-500">Về UTA Solution</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
            <span className="text-white">Đối tác </span>
            <span className="text-[#2196f3] font-bold">tin </span>
            <span className="text-[#26a69a] font-bold">cậy</span>
            <span className="text-white"> của bạn</span>
          </h2>
          <p className="text-base text-[#a1a1aa] max-w-2xl mx-auto mt-2">
            UTA Solution được thành lập với sứ mệnh mang lại những giải pháp công nghệ tiên tiến, 
            giúp doanh nghiệp Việt Nam phát triển mạnh mẽ trong kỷ nguyên số.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Câu chuyện của chúng tôi
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Với hơn 5 năm kinh nghiệm trong lĩnh vực công nghệ thông tin, UTA Solution đã 
                trở thành đối tác tin cậy của nhiều doanh nghiệp từ startup đến tập đoàn lớn.
              </p>
              <p>
                Chúng tôi chuyên cung cấp các giải pháp công nghệ toàn diện bao gồm thiết kế 
                website, phát triển ứng dụng di động, hệ thống ERP và dịch vụ marketing số.
              </p>
              <p>
                Đội ngũ chuyên gia của UTA Solution luôn cập nhật các công nghệ mới nhất như 
                React, Node.js, Python, AI/ML để đảm bảo sản phẩm đạt chất lượng cao nhất.
              </p>
            </div>

            <div className="mt-8">
              <Button
                variant="hero"
                size="lg"
                className="group px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#22c55e] shadow-[0_4px_24px_0_rgba(59,130,246,0.15)] hover:brightness-110 transition-all duration-200 flex items-center gap-2"
              >
                Tìm hiểu thêm
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} variant="floating" className="text-center p-6">
                <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Giá trị cốt lõi
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của UTA Solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} variant="tech" className="text-center group">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-card to-muted/50 rounded-2xl p-8 lg:p-12 border border-border">
            <Users className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Đội ngũ chuyên gia của chúng tôi
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Gặp gỡ những chuyên gia công nghệ đầy kinh nghiệm, luôn sẵn sàng hỗ trợ 
              và biến ý tưởng của bạn thành hiện thực.
            </p>
            <Button variant="outline" size="lg">
              Xem đội ngũ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;