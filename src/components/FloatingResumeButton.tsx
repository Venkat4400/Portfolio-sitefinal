import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const FloatingResumeButton = () => {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Kota_Venkat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Download Resume"
    >
      <Button 
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground glow-button rounded-full shadow-2xl animate-pulse-glow"
      >
        <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
        Resume
      </Button>
    </button>
  );
};

export default FloatingResumeButton;
