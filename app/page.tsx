
import HeroSection from "@/components/ui/HeroSection";
import FeaturedSection from "@/components/ui/FeaturedSection";
import CategoriesSection from "@/components/ui/CategoriesSection";
import TextSlideshow from "../components/ui/TextSlideShow";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <main>
                <HeroSection />
                <FeaturedSection />
                <CategoriesSection />
                <TextSlideshow />
                
            </main>
        </div>
    );
}