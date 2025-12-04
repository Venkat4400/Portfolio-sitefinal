import { Card } from "@/components/ui/card";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const About = () => {
  const skills = {
    languages: ["Java", "Python", "JavaScript", "C", "TypeScript"],
    frontend: ["React.js", "Angular.js", "Bootstrap", "Tailwind CSS", "HTML5/CSS3"],
    backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs"," MySQL"," MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Docker", "NumPy", "Pandas"]
  };

  const skillCategories = [
    { title: "Languages", icon: Code2, items: skills.languages, color: "from-orange-500 to-amber-500" },
    { title: "Front-End", icon: Layout, items: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Back-End", icon: Database, items: skills.backend, color: "from-green-500 to-emerald-500" },
    { title: "Tools", icon: Terminal, items: skills.tools, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <Card className="glass-card p-8">
              <p className="text-muted-foreground leading-relaxed">
                I'm a final-year <span className="text-foreground font-semibold">Computer Science Engineering</span> student with a deep-rooted passion for building scalable, impactful solutions through full-stack Java development and modern web technologies.
              </p>
            </Card>
            
            <Card className="glass-card p-8">
              <p className="text-muted-foreground leading-relaxed">
                I specialize in crafting dynamic applications using tools like <span className="text-primary">React.js</span>, <span className="text-primary">Node.js</span>, and <span className="text-primary">Express.js,and Angular.js </span>, backed by strong fundamentals in Data Structures, Algorithms, and Object-Oriented Programming.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <p className="text-muted-foreground leading-relaxed">
                I thrive in collaborative, fast-paced environments where learning never stops. I've actively contributed to open-source development, achieved top honors at Tech Expos, and consistently engage in technical discussions to push the boundaries of innovation.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.slice(0, 3).map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
