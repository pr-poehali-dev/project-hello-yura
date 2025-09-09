import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Creative Web Platform",
      description: "Инновационная платформа для креативных проектов с современным дизайном",
      image: "/img/8c48593f-f550-452a-864e-a440dce93ed7.jpg",
      category: "Web Design",
      tags: ["React", "UI/UX", "Creative"],
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Полная разработка брендинга и визуальной идентичности",
      image: "/img/f6a87114-6792-491c-b7b8-3ee993859331.jpg",
      category: "Branding",
      tags: ["Logo", "Branding", "Visual"],
    },
  ];

  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Web Development", level: 90 },
    { name: "Branding", level: 85 },
    { name: "Creative Direction", level: 92 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray via-white to-lightGray">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-vibrant to-orange-600 bg-clip-text text-transparent">
            MARINA
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#portfolio" className="text-darkGray hover:text-vibrant transition-colors">
              Портфолио
            </a>
            <a href="#about" className="text-darkGray hover:text-vibrant transition-colors">
              Обо мне
            </a>
            <a href="#contact" className="text-darkGray hover:text-vibrant transition-colors">
              Контакты
            </a>
          </div>
          <Button className="bg-vibrant hover:bg-orange-600 text-white">
            Связаться
          </Button>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-vibrant/10 text-vibrant border-vibrant/20">
                  Creative Portfolio
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-darkGray leading-tight">
                  CREATIVE
                  <br />
                  <span className="bg-gradient-to-r from-vibrant via-orange-500 to-red-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
                    PORTFOLIO
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Марина Лактионова — креативный дизайнер и разработчик с фокусом на создание 
                  уникальных цифровых решений и визуальных концепций.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-vibrant hover:bg-orange-600 text-white px-8">
                  <Icon name="Eye" className="mr-2" size={20} />
                  Смотреть работы
                </Button>
                <Button variant="outline" size="lg" className="border-vibrant text-vibrant hover:bg-vibrant hover:text-white px-8">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать CV
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant to-orange-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="/img/913c8b03-0640-4fc0-8413-61fede1a3b36.jpg" 
                alt="Marina Laktionova" 
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Навыки */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-darkGray mb-4">Навыки и экспертиза</h2>
            <p className="text-gray-600 text-lg">Профессиональные компетенции в области дизайна и разработки</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-darkGray">{skill.name}</h3>
                    <span className="text-vibrant font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-vibrant to-orange-600 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-darkGray mb-4">Избранные работы</h2>
            <p className="text-gray-600 text-lg">Творческие проекты и решения</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkGray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-vibrant text-white mb-2">{project.category}</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-darkGray group-hover:text-vibrant transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-vibrant border-vibrant/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="text-vibrant hover:bg-vibrant/10 p-0">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О себе */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-darkGray">Обо мне</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Я креативный дизайнер и разработчик с более чем 5-летним опытом создания 
                уникальных цифровых решений. Специализируюсь на создании современных 
                пользовательских интерфейсов и визуальных концепций.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Моя философия заключается в том, что хороший дизайн должен не только 
                выглядеть красиво, но и решать реальные проблемы пользователей, 
                создавая эмоциональную связь между брендом и аудиторией.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-vibrant">50+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vibrant">5+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-vibrant shadow-lg">
                <div className="flex items-start space-x-4">
                  <Icon name="Lightbulb" className="text-vibrant mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-darkGray mb-2">Creative</h4>
                    <p className="text-gray-600">Креативность и инновации</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-vibrant shadow-lg">
                <div className="flex items-start space-x-4">
                  <Icon name="Layers" className="text-vibrant mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-darkGray mb-2">Design Layers</h4>
                    <p className="text-gray-600">Многослойный подход к дизайну</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-vibrant shadow-lg">
                <div className="flex items-start space-x-4">
                  <Icon name="Sparkles" className="text-vibrant mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-darkGray mb-2">Innovation</h4>
                    <p className="text-gray-600">Инновационные решения</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-darkGray to-darkerGray text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к сотрудничеству?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Обсудим ваш следующий проект и создадим что-то удивительное вместе
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-vibrant hover:bg-orange-600 text-white px-8">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-darkGray px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-vibrant transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-vibrant transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-vibrant transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;