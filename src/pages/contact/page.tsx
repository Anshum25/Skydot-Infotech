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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-12 lg:pt-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Prefer to reach out directly? Use the information below to contact our offices.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Headquarters</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      [VERIFY CONTENT]<br/>
                      Rajkot, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-[var(--skydot-orange)]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[var(--skydot-orange)]" />
                  </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Phone</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    [VERIFY CONTENT]<br/>
                    Support Hours: [VERIFY CONTENT]
                  </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Email</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      General: info@skydotinfotech.com<br/>
                      Sales: [VERIFY CONTENT]
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
