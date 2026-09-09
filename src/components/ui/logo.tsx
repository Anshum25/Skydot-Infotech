import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative h-16 w-60 lg:w-64 flex items-center", className)}>
      <img
        src="/logo.png"
        alt="Skydot Infotech"
        className="w-full h-full object-contain object-left"
        // I have removed the fallback hidden logic so you can see if the image is broken
      />
    </div>
  );
}
