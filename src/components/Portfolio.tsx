import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Nền tảng thương mại điện tử đa kênh với hơn 10,000 sản phẩm và hệ thống thanh toán tích hợp",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Corporate Website",
      description: "Website doanh nghiệp hiện đại với CMS quản lý nội dung và tích hợp SEO toàn diện",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
      category: "Website",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Ứng dụng ngân hàng di động với bảo mật cao, giao dịch nhanh chóng và giao diện thân thiện",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      category: "Mobile App",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "ERP Management System",
      description: "Hệ thống quản lý doanh nghiệp tích hợp đầy đủ module từ nhân sự, kế toán đến kho vận",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      category: "Enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Food Delivery Platform",
      description: "Nền tảng giao đồ ăn với theo dõi realtime, đánh giá nhà hàng và hệ thống loyalty",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      technologies: ["React", "Express.js", "Socket.io", "Maps API"],
      category: "Platform",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Hệ thống quản lý học tập trực tuyến với video streaming, quiz và tracking tiến độ",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["Angular", "Python Django", "PostgreSQL"],
      category: "Education",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["Tất cả", "Website", "E-commerce", "Mobile App", "Enterprise", "Platform", "Education"];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-green-700 mb-6">
            <span className="text-xs font-medium text-green-400">Portfolio dự án</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Những dự án </span>
            <span className="bg-gradient-to-r from-[#2196f3] via-[#26a69a] to-[#22c55e] bg-clip-text text-transparent">tiêu biểu</span>
          </h2>
          <p className="text-base text-[#a1a1aa] max-w-2xl mx-auto">
            Khám phá những dự án thành công mà UTA Solution đã thực hiện cho các khách hàng<br />
            từ nhiều lĩnh vực khác nhau.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`
                px-5 py-1.5 rounded-full font-medium text-sm
                border border-[#27272a]
                transition-colors duration-200
                ${
                  category === "Tất cả"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-transparent text-white/80 hover:bg-[#232323] hover:text-white"
                }
              `}
              style={{ minWidth: 90 }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} variant="floating" className="overflow-hidden group cursor-pointer">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                  Xem chi tiết
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-card to-muted/50 rounded-2xl p-8 lg:p-12 border border-border">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Có ý tưởng dự án mới?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hãy chia sẻ ý tưởng của bạn với chúng tôi. UTA Solution sẽ giúp biến ý tưởng 
              thành sản phẩm công nghệ thực tế với chất lượng cao nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#22c55e] shadow-none border-none outline-none transition-colors duration-200 hover:brightness-110"
              >
                Bắt đầu dự án
              </Button>
              <Button variant="outline" size="lg">
                Xem thêm portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;