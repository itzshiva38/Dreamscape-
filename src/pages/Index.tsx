
import { useState, useEffect } from "react";
import StarryBackground from "../components/StarryBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import DreamJournal from "../components/DreamJournal";
import MemoryLane from "../components/MemoryLane";
import HundredReasons from "../components/HundredReasons";
import FutureDreams from "../components/FutureDreams";
import Soundscape from "../components/Soundscape";
import DreamGames from "../components/DreamGames";
import Footer from "../components/Footer";
import LuminaOrb from "../components/LuminaOrb";
import LoadingScreen from "../components/LoadingScreen";
import MusicControls from "../components/MusicControls";
import SyncedLyrics from "../components/SyncedLyrics";
import { MusicPlayerProvider } from "@/contexts/MusicPlayerContext";
import DreamscapePasswordGate from "../components/DreamscapePasswordGate";

const AUTH_KEY = "dreamscape-unlocked";

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem(AUTH_KEY, "true");
    setUnlocked(true);
  };

  if (!unlocked) {
    return <DreamscapePasswordGate onUnlock={handleUnlock} />;
  }

  return (
    <MusicPlayerProvider>
      <div className="relative min-h-screen">
        <LoadingScreen />
        <StarryBackground />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <DreamJournal />
          <MemoryLane />
          <HundredReasons />
          <FutureDreams />
          <Soundscape />
          <DreamGames />
          <Footer />
        </main>
        <LuminaOrb />
        <MusicControls />
        <SyncedLyrics />
      </div>
    </MusicPlayerProvider>
  );
}

export default Index;
