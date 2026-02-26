import { ScanningLine } from "@/components/ui/ScanningLine";
import { Hero } from "@/components/section/Hero";
import { Dashboard } from "@/components/section/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden digital-grid px-6">
      {/* Background Decor */}
      <ScanningLine />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-glow/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />

      {/* Main Section */}
      <Hero />
      <Dashboard />
    </main>
  );
}