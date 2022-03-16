import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="flex">
      <div>
        <div className="font-raleway text-2xl font-extrabold 	text-zinc-800	 tracking tracking-[.25em] pb-4">
          SHADI OSSAILI
        </div>
        <div
          className="font-raleway text-sm font-light	text-zinc-800	 
        tracking tracking-[.25em] hover:text-blue-500	cursor-pointer underline	decoration-black/20	
         decoration-dashed	underline-offset-4
         decoration-1	
         hover:no-underline	
         "
        >
          shadi.s.ossaili@gmail.com
        </div>
      </div>
      <div className="bg-white grow border">
        <div className="px-16 py-8">
          <h1>ABOUT THIS WEB SITE</h1>
        </div>
      </div>
    </div>
  );
}
