import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import skillBridgeImg from "@/assets/images/skillbridge-project.png";
import foodOrderingImg from "@/assets/images/food-ordering-project.png";
import flipkartImg from "@/assets/images/flipkart-project.png";
import weatherImg from "@/assets/images/weather-project.png";
import flappyBirdImg from "@/assets/images/flappy-bird-project.png";
import candyCrushImg from "@/assets/images/candy-crush-project.png";
import ticTacToeImg from "@/assets/images/tictactoe-project.png";
import calculatorImg from "@/assets/images/calculator-project.png";

const Projects = () => {
  const projects = [
    {
      title: "SkillBridge Platform",
      description: "A comprehensive volunteer and opportunity platform connecting skilled professionals with meaningful projects and organizations.",
      image: skillBridgeImg,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Venkat4400/skillbridge-react",
      demo: "https://venkat4400.github.io/skillbridge-react/"
    },
    {
      title: "Online Food Ordering App",
      description: "Full-stack food delivery application with real-time order tracking, menu management, and secure payment integration.",
      image: foodOrderingImg,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Venkat4400/Online-Food-Ordering-App",
      demo: "https://venkat4400.github.io/Online-Food-Ordering-App/"
    },
    {
      title: "Flipkart Clone",
      description: "E-commerce platform clone with product catalog, shopping cart, category filters, and responsive design.",
      image: flipkartImg,
      tech: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/Venkat4400/Flipkart-Clone-App",
      demo: "https://venkat4400.github.io/Flipkart-Clone-App/"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive UI, and detailed weather information.",
      image: weatherImg,
      tech: ["React", "OpenWeather API", "CSS"],
      github: "https://github.com/Venkat4400/Weather-Reporting-APP",
      demo: "https://venkat4400.github.io/Weather-Reporting-APP/"
    },
    {
      title: "Flappy Bird Game",
      description: "Classic Flappy Bird game clone with smooth animations, score tracking, and responsive controls.",
      image: flappyBirdImg,
      tech: ["JavaScript", "HTML5 Canvas", "CSS"],
      github: "https://github.com/Venkat4400/Flappy-Bird-Game",
      demo: "https://venkat4400.github.io/Flappy-Bird-Game/"
    },
    {
      title: "Candy Crush Clone",
      description: "Match-3 puzzle game with colorful animations, score system, move counter, and time tracking features.",
      image: candyCrushImg,
      tech: ["JavaScript", "HTML5", "CSS", "Game Logic"],
      github: "https://github.com/Venkat4400/Candy-Crush-Game",
      demo: "https://venkat4400.github.io/Candy-Crush-Game/"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Classic Tic Tac Toe game with dark mode support, reset functionality, and clean, modern UI design.",
      image: ticTacToeImg,
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Venkat4400/Tac-Teo-Tie",
      demo: "https://venkat4400.github.io/Tac-Teo-Tie/"
    },
    {
      title: "Calculator App",
      description: "Modern calculator application with basic arithmetic operations, responsive design, and smooth animations.",
      image: calculatorImg,
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Venkat4400/Calculator-app",
      demo: "https://calculator-app-psi-neon-23.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
