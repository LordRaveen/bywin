import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface InternalPageTemplateProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}

export default function InternalPageTemplate({
  title,
  description,
  image,
  children
}: InternalPageTemplateProps) {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <article className="flex-grow">
        <PageHeader 
          title={title} 
          description={description} 
          image={image}
        />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          {children ? children : (
            <div className="text-center py-24 px-8 border-2 border-dashed border-slate-200 bg-slate-50 relative group">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-secondary/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-secondary/20" />
              
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">
                Empowering through {title.toLowerCase()}
              </h2>
              <p className="text-slate-600 mb-10 max-w-lg mx-auto font-medium leading-relaxed">
                We are currently refining our detailed {title.toLowerCase()} page to provide you with the most accurate and impactful information. Brighter Youth and Women Initiative is dedicated to transparency and excellence in every intervention.
              </p>
              <Button asChild className="bg-primary hover:bg-[#1b5e4c] text-white font-black rounded-none px-10 h-14 uppercase tracking-widest shadow-lg transition-all">
                <Link href="/">
                  <ArrowLeft className="mr-3 h-5 w-5" /> Back to Home
                </Link>
              </Button>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </main>
  );
}
