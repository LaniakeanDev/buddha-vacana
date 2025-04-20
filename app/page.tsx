import BVHero from './components/BVHero';
import BVNewSuttaCards from './components/BVNewSuttaCards';
import BVSection from './components/BVSection';
import BVToolCards from './components/BVToolCards';
import BVHeader from './components/header/BVHeader';

export default function Home() {
  return (
    <div>
      <BVHeader />
      <BVHero />
      <BVSection title="Outils">
        <BVToolCards />
      </BVSection>
      <BVSection title="Nouveautés">
        <BVNewSuttaCards />
      </BVSection>
    </div>
  );
}
