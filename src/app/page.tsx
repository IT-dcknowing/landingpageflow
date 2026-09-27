import Hero from "@/components/Hero";
import FlowStorySection from "@/components/FlowStorySection";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="px-2 pb-4 pt-20 md:px-3 md:pt-24">
        <Hero />
      </div>
      <FlowStorySection />
    </main>
  );
}
