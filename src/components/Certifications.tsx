import { Card } from "@/components/ui/card";
import mlCertificate from "@/assets/images/ml-certificate.png";
import nodejsCertificate from "@/assets/images/nodejs-certificate.png";
import salesforceCertificate from "@/assets/images/salesforce-certificate.png";
import deloitteCertificate from "@/assets/images/deloitte-certificate.png";
import accentureCertificate from "@/assets/images/accenture-certificate.png";
import fullstackCertificate from "@/assets/images/fullstack-certificate.png";
import trainingCertificate from "@/assets/images/training-certificate.png";
import internshipCertificate from "@/assets/images/internship-certificate.png";
import javaCertificate from "@/assets/images/java-certificate.jpg";


const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "IBM - Cognitive Class",
      image: mlCertificate,
      year: "2025",
      linkedInUrl: "https://courses.cognitiveclass.ai/certificates/b8d2052978ba46bbab221e5e8cac4e1d"
    },
    {
      title: "NodeJS Case Study - Movie App",
      issuer: "Infosys Springboard",
      image: nodejsCertificate,
      year: "2025",
      linkedInUrl: "https://verify.onwingspan.com"
    },
    {
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      image: salesforceCertificate,
      year: "2025",
      linkedInUrl: "sforce.co/verifycerts"
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte",
      image: deloitteCertificate,
      year: "2025",
      linkedInUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_pTnMhCDAkN3Jk5oej_1751342253703_completion_certificate.pdf"
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Accenture",
      image: accentureCertificate,
      year: "2025",
      linkedInUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_pTnMhCDAkN3Jk5oej_1750233734760_completion_certificate.pdf"
    },
    {
      title: "Full Stack Java Development",
      issuer: "Simplilearn",
      image: fullstackCertificate,
      year: "2025",
      linkedInUrl: "https://www.linkedin.com/in/venkat2026/details/certifications/1748855230580/single-media-viewer?type=DOCUMENT&profileId=ACoAAEpr9B4BXc4V7TEDt69kd8QvOb2OIxvStM0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJPeztYiJTVSfICDL1pSw5Q%3D%3D"
    },
    {
      title: "Web Development Training",
      issuer: "Eduexpose",
      image: trainingCertificate,
      year: "2025",
      linkedInUrl: "https://www.linkedin.com/in/venkat2026/details/certifications/1753272169052/single-media-viewer?type=DOCUMENT&profileId=ACoAAEpr9B4BXc4V7TEDt69kd8QvOb2OIxvStM0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bg4996SRoTfywNRexjJFLhQ%3D%3D"
    },
    {
      title: "Web Development Internship",
      issuer: "Eduexpose",
      image: internshipCertificate,
      year: "2025",
      linkedInUrl: "https://www.linkedin.com/in/venkat2026/details/certifications/1753272169052/single-media-viewer?type=DOCUMENT&profileId=ACoAAEpr9B4BXc4V7TEDt69kd8QvOb2OIxvStM0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bg4996SRoTfywNRexjJFLhQ%3D%3D"
    },
    {
      title: "Complete Java Developer Course",
      issuer: "Aajhub & Sapienz Recruit",
      image: javaCertificate,
      year: "2025",
      linkedInUrl: "https://heytopper.graphy.com/verify-certificate?serialno=URCF8LUX"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-background/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Certifications & Achievements
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                className="glass-card overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                style={{
                  animation: `fade-up 0.8s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shine-effect"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

