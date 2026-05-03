// src/App.jsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;