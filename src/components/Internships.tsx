import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Internships = () => {
  const experiences = [
    {
      company: "Infosyes Stringboard.",
      role: "Full Stack Developer Intern",
      period: "October  2025 - December 2025",
      description: "Developed and maintained responsive web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and optimize performance.",
      technologies: ["Angular.js", "Node.js", "Bootstrap", "Typescript"]
    },
    {
      company: "Eduexpose in Hydarabad .",
      role: "Frontend WebDeveloper Intern",
      period: "22/5/2025 - 22/7/2025",
      description: "Built interactive user interfaces and improved user experience. Worked on component library development and implemented responsive design patterns.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "html","css", "JavaScript"]
    },
    {
      company: "BISH-Bihar Innovation & Startup Hub under Pranjwal Foundation ",
      role: "FrontEnd  Developer Intern",
      period: "november 2024 - january 2026",
      description: "Designed and implemented RESTful APIs. Optimized database queries and improved application performance by 40%.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
    }
  ];

  return (
    <section id="internships" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 opacity-0 ${
                  index % 2 === 0 ? 'md:flex-row animate-slide-in-left' : 'md:flex-row-reverse animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                {/* Content */}
                <div className="md:w-1/2">
                  <Card className="glass-card p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30 border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
