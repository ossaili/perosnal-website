export default function Navbar() {
  return (
    <div className="bg-white h-14 drop-shadow-sm flex flex-row divide-x">
      <div className="h-full flex">
        <div className="my-auto px-12 tracking-[.35em] font-raleway font-extrabold text-xs	text-zinc-600	hover:text-blue-500	cursor-pointer	">
          SHADI OSSAILI
        </div>
      </div>

      <div className="grid grid-cols-5 gap-0">
        <NavbarItem label="ABOUT" />
        <NavbarItem label="RESUME" />
        <NavbarItem label="PROJECTS" />
        <NavbarItem label="STATS" />
        <NavbarItem label="CONTACT" />
      </div>
    </div>
  );
}

function NavbarItem({ label }) {
  return <div>{label}</div>;
}
