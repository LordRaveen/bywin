import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export default function PageHeader({ title, description, image = "/assets/images/program-poultry.png" }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] md:h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-primary pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title} 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b5e4c]/95 via-[#1b5e4c]/80 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="mb-6 h-1 w-20 bg-secondary" />
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
            {title}
          </h1>
          
          {description && (
            <p className="text-sm md:text-lg text-emerald-50/90 leading-relaxed font-medium max-w-2xl border-l-4 border-secondary/30 pl-6">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-secondary/10 translate-x-16 translate-y-16 rotate-45" />
    </div>
  );
}
