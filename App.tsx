
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsAndEducation from './components/SkillsAndEducation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbfbfd] selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsAndEducation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
