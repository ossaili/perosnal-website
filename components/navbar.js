import Link from 'next/dist/client/link';

export default function Navbar() {
  return (
    <div className="bg-white h-14 drop-shadow-sm flex flex-row divide-x">
      <div className="h-full flex">
        <div className="my-auto px-12 tracking-[.35em] font-raleway font-extrabold text-xs	text-zinc-600	hover:text-blue-500	cursor-pointer	">
          <Link href="/">
            <a> SHADI OSSAILI</a>
          </Link>
        </div>
      </div>

      <div className="flex ">
        <div className="my-auto flex divide-x  m-4">
          <NavbarItem label="ABOUT" href="/about" />
          <NavbarItem label="RESUME" href="/resume" />
          <NavbarItem label="PROJECTS" />
          <NavbarItem label="STATS" />
          <NavbarItem label="CONTACT" />
        </div>
      </div>
    </div>
  );
}

function NavbarItem({ label, href = '/' }) {
  return (
    <div className="px-4 font-raleway font-light text-xs	tracking-[.35em] hover:text-blue-500	cursor-pointer">
      <Link href={href}>
        <a> {label}</a>
      </Link>
    </div>
  );
}
