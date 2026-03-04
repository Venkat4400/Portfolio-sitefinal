import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import skillBridgeImg from "@/assets/images/skillbridge-project.png";
import flipkartImg from "@/assets/images/flipkart-project.png";
import weatherImg from "@/assets/images/weather-project.png";
import flappyBirdImg from "@/assets/images/flappy-bird-project.png";
import candyCrushImg from "@/assets/images/candy-crush-project.png";
import ticTacToeImg from "@/assets/images/tictactoe-project.png";
import calculatorImg from "@/assets/images/calculator-project.png";
import farmerCropImg from "@/assets/images/FARMERCrop-project.png";
import bloodDonationImg from "@/assets/images/BloodDonAtion-project.png";
import foodOrderingImg from "@/assets/images/food-ordering-project.png";
import skinCancerImg from  "@/assets/images/Skin-project.png";

const Projects = () => {
  const projects = [
    {
      title: "SkillBridge Platform",
      description: "Skill Bridge is a full-stack web application built using the React.js framework Typescript and node.js SQL. It connects volunteers with NGOs for opportunities. The platform supports user authentication, opportunity management, application tracking, Resume Scanner, Mock Interview to improve confidence and skills and Study plane voice Based.",
      image: skillBridgeImg,
      tech: ["React", "Node.js", "supabase", "Express","CSS","JavaScript","HTML"],
      github: "https://github.com/Venkat4400/SkilBridge-2.0",
      demo: "https://skilbridge-20.vercel.app/"
    },
     {
      title: "Farmer Crop Prediction is an AI-powered agriculture App",
      description: "Farmer Crop Prediction is an AI-powered agriculture platform that helps farmers predict crop yield, analyze soil and weather data, and receive smart crop and fertilizer recommendations. It supports better decisions through data-driven farming insights .Based on proves year data and ML.",
      image: farmerCropImg,
      tech: ["React", "Node.js", "SQL", "Express", "Typescript", "python", "DATA sets", "WeAther API's", "ML"],
      github: "https://github.com/Venkat4400/Farmer-Crop-Yield-Prediction",
      demo: "https://newfcp.vercel.app/"
    },
    {
      title: "Blood Donation App ",
      description: "Blood Donate App Real-time Blood Donation Platform A clean, modern full-stack web app that instantly connects blood donors with recipients across India. Built with latest technologies to solve critical blood shortage problems with speed and simplicity. Tech StackReact • TypeScript • Vite • Tailwind CSS • shadcn/ui • Supabase (Auth + PostgreSQL + Realtime)Key Features",
      image: bloodDonationImg,
      tech: ["React", "Node.js", "Tailwind CSS ", "Google Maps API", "Authentication & Authorization", "Supabase"],
      github: "https://github.com/Venkat4400/Blood-Donate-App-clean",
      demo: "https://venkat4400.github.io/Online-Food-Ordering-App/"
    },
    {
      title: "Online Food Ordering App",
      description: "Full-stack food delivery application with real-time order tracking, menu management, and secure Authentication & Authorization integration  Dynamic Routing MANU  CART functionality.",
      image: foodOrderingImg,
      tech: ["React", "Node.js", "sql", "Tailwind CSS", "Authentication & AuthorizationExpress"],
      github: "https://github.com/Venkat4400/food-ordering-app-2.0",
      demo: "https://food-ordering-app-20.vercel.app/"
    },
        {
      title: "Skin-cancer-Detection using ML",
      description: "AI Dermatology Screening & Risk Assessment Deep Learning Powered Skin Lesion Analyzer An intelligent web-based AI tool for early skin cancer screening and dermatology risk evaluation. Built with Flask backend and EfficientNetV2 model, trained on the HAM10000 dataset (10,000+ clinical images). Delivers high-accuracy lesion classification with calibrated confidence scores and a clear 6-stage risk assessment for fast, trustworthy, and interpretable results.",
      image:  skinCancerImg,
      tech: ["HTML", "Node.js", "JavaScript", "CSS","ML","Flask","CNN"],
      github: "https://github.com/Venkat4400/Skin-cancer-Detection-",
      demo: "https://github.com/Venkat4400/Skin-cancer-Detection-"
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





















