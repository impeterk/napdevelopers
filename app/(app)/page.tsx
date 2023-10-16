export default function Home() {
  return (
    <main className="w-full md:flex justify-center">
      <div className="px-4 relative flex place-items-center before:absolute before:h-[100px] before:w-[180px] before:translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-sky-700/10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] md:after:h-[300px] max-sm:after:w-[350px] after:w-[400px] 2xl:after:w-[720px] after:bg-gradient-conic after:from-cyan-500 after:to-blue-700 after:blur-3xl 2xl:after:blur-[100px] after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-700/10 before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex flex-col gap-3 2xl:gap-6 items-center w-full">
          <p className="relative dark:text-slate-300 text-slate-800 max-[375px]:text-2xl text-3xl md:text-4xl 2xl:text-6xl font-black tracking-widest">
            {`<NaP Developers />`}
          </p>
          <p className="relative text-center dark:text-slate-300 text-slate-700  max-[375px]:text-sm md:text-xl 2xl:text-2xl font-bold tracking-wide">
            We Develop, While You Take a NaP.
          </p>
        </div>
      </div>
    </main>
  );
}
