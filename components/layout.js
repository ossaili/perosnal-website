import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <div className="bg-[#f4f4f4] min-h-full">
      <Navbar />
      <main className="mt-16  mx-32	p-12">{children}</main>
    </div>
  );
}
