// export default function BVPageTitle({ children }: { children: React.ReactNode }) {
export default function BVPageTitle({ children }: { children: string }) {
  return <h1 className="font-semibold text-4xl md:!text-6xl text-center !text-(--page-title) mt-4 mb-8">{children}</h1>;
}
