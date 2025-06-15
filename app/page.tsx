import BVHero from './components/BVHero';
import BVNewSuttaCards from './components/BVNewSuttaCards';
import BVSection from './components/BVSection';
import BVToolCards from './components/BVToolCards';
import BVLandingHeader from './components/header/BVLandingHeader';

export default function Home() {
  return (
    <main>
      <BVLandingHeader />
      <BVHero />
      <BVSection title="Outils">
        <BVToolCards />
      </BVSection>
      <BVSection title="Nouveautés">
        <BVNewSuttaCards />
      </BVSection>
    </main>
  );
}
