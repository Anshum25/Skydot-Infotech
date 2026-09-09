import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Basic frontend validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.phone) newErrors.phone = "Phone is required";
    if (!data.service) newErrors.service = "Please select a service";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    try {
      // Simulate API call for now. 
      // TODO: Connect this to an actual backend API endpoint.
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Assume success
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[400px]">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Received</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for reaching out. A technical specialist from Skydot Infotech will review your requirements and contact you within 24 hours.
        </p>
        <button onClick={() => setStatus("idle")} className={buttonVariants({ variant: "outline" })}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && Object.keys(errors).length === 0 && (
        <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3 text-destructive">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">An error occurred while sending your request. Please try again or contact us directly.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name <span className="text-destructive">*</span></label>
          <input name="name" type="text" className={`w-full h-12 px-4 rounded-xl border ${errors.name ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Corporate Email <span className="text-destructive">*</span></label>
          <input name="email" type="email" className={`w-full h-12 px-4 rounded-xl border ${errors.email ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone Number <span className="text-destructive">*</span></label>
          <input name="phone" type="tel" className={`w-full h-12 px-4 rounded-xl border ${errors.phone ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`} />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Company Name</label>
          <input name="company" type="text" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Service Required <span className="text-destructive">*</span></label>
        <select name="service" className={`w-full h-12 px-4 rounded-xl border ${errors.service ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}>
          <option value="">Select a service...</option>
          <option value="AI & Automation">AI & Automation</option>
          <option value="Web Development">Web Development</option>
          <option value="Software Development">Software Development</option>
          <option value="Mobile">Mobile</option>
          <option value="ERP">ERP</option>
          <option value="Cloud">Cloud</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Other">Other</option>
        </select>
        {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex justify-between">
            Budget
            <span className="text-muted-foreground text-xs font-normal">Optional</span>
          </label>
          <select name="budget" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
            <option value="">Select budget range...</option>
            <option value="< $10k">Under $10,000</option>
            <option value="$10k - $50k">$10,000 - $50,000</option>
            <option value="$50k - $100k">$50,000 - $100,000</option>
            <option value="> $100k">Over $100,000</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex justify-between">
            Timeline
            <span className="text-muted-foreground text-xs font-normal">Optional</span>
          </label>
          <select name="timeline" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
            <option value="">Select timeframe...</option>
            <option value="ASAP">As soon as possible</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex justify-between">
          Project Details / Technical Requirements
          <span className="text-muted-foreground text-xs font-normal">Optional</span>
        </label>
        <textarea name="details" rows={5} className="w-full p-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className={buttonVariants({ size: "lg", className: "w-full h-14 rounded-xl text-lg font-medium bg-primary hover:bg-primary/90 text-white disabled:opacity-70" })}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Processing Request...
          </>
        ) : (
          "Submit Request"
        )}
      </button>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        Your information is secure. A technical specialist from Skydot Infotech will review your requirements and contact you within 24 hours.
      </p>
    </form>
  );
}
