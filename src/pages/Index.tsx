import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import FloatingResumeButton from "@/components/FloatingResumeButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Internships />
      <Contact />
      <FloatingResumeButton />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Kota Venkat. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
