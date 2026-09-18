import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Get in Touch"
        title="Start a Conversation"
        description="Whether you need a custom software solution, an ERP implementation, or a technical consultation, our engineering team is ready to discuss your requirements."
      />

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            
            {/* Contact Form */}
            <div className="bg-background border border-border/50 p-8 md:p-12 shadow-sm">
              <h2 className="home-headline text-3xl font-light mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-12 lg:pt-8">
              <div>
                <p className="home-label mb-5 text-[var(--skydot-blue)]">Contact Information</p>
                <h2 className="home-headline text-3xl md:text-4xl font-light mb-6">
                  Direct Contact
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Prefer to reach out directly? Use the information below to contact our offices.
                </p>
              </div>

              <div className="grid gap-px bg-border">
                <div className="flex gap-6 bg-background p-6 hover:bg-secondary/40 transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--skydot-blue)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">Headquarters</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Gondal Road<br/>
                      Rajkot, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-background p-6 hover:bg-secondary/40 transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[var(--skydot-orange)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      +91 8000 800 500<br/>
                      Support Hours: Mon-Fri, 9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-background p-6 hover:bg-secondary/40 transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      General: info@skydotinfotech.com<br/>
                      Sales: sales@skydotinfotech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
