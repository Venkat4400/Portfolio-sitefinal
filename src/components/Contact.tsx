import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, text: "kotavenkat2004@gmail.com", href: "mailto:kotavenkat2004@gmail.com" },
    { icon: Phone, text: "+91 97017 12613", href: "tel:+911234567890" },
    { icon: MapPin, text: "India", href: "#" }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "Connect on LinkedIn",
      glowColor: "hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
      iconColor: "group-hover:text-[#0077b5]"
    },
    { 
      icon: Github, 
      href: "https://github.com", 
      label: "View my GitHub",
      glowColor: "hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]",
      iconColor: "group-hover:text-white"
    },
    { 
      icon: Mail, 
      href: "mailto:your.email@example.com", 
      label: "Send me an email",
      glowColor: "hover:shadow-[0_0_25px_rgba(251,146,60,0.6)]",
      iconColor: "group-hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card p-8 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a 
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {info.text}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Social Links with Tooltips */}
              <div className="border-t border-border/50 pt-6">
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-14 h-14 rounded-full glass-card flex items-center justify-center transition-all duration-300 group ${social.glowColor} hover:scale-110 animate-pulse-glow`}
                            style={{ animationDelay: `${index * 0.3}s` }}
                          >
                            <Icon className={`w-6 h-6 transition-colors duration-300 ${social.iconColor}`} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-popover text-popover-foreground border-primary/20">
                          <p>{social.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form with Glassmorphism */}
          <Card className="glass-card p-8 border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-button hover:scale-105 transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

