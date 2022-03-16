import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row">
      <section className="w-80 mr-16">
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
      </section>
      <div className="bg-white  border w-full">
        <div className="px-16 py-8">
          <h1 className="text-[#3c3b3b]">ABOUT THIS SITE</h1>
        </div>
        <hr />
        <p className="px-16 py-8">
          Welcome to my website. Please feel free to read more about me, or you
          can check out my resume, projects, view site statistics, or contact
          me.
        </p>
      </div>
    </div>
  );
}
