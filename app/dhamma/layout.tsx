import BVHeader from '../components/header/BVHeader';

export default function DhammaLayout(children: React.ReactNode) {
  return (
    <>
      <BVHeader />
      {children}
    </>
  );
}
