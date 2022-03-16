import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <div className="bg-[#f4f4f4] min-h-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
