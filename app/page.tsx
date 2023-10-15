import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[100svh] flex-col items-center justify-between w-ful ">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex pt-12">
        <p className="dark:invert text-slate-600">
          Website Under Construction...
        </p>
      </div>

      <div className="px-4 relative flex place-items-center before:absolute before:h-[100px] before:w-[380px] before:translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-sky-700/10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] md:after:h-[300px] after:w-[375px] max-sm:after:-translate-x-[10%] after:bg-gradient-conic after:from-cyan-500 after:to-blue-700 after:blur-3xl lg:after:blur-[100px] after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-700/10 before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex flex-col gap-3 items-center">
          <p className="relative   dark:text-slate-300 text-slate-800 max-[375px]:text-2xl text-3xl md:text-4xl font-black tracking-widest">
            {`<NaP Developers />`}
          </p>
          <p className="relative text-center   dark:text-slate-300 text-slate-700  max-[375px]:text-sm md:text-xl font-bold tracking-wide">
            We Develop, While You Take a NaP.
          </p>
        </div>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full pb-8">
        <p className="text-slate-950 dark:invert">
          {`© ${new Date().getFullYear()} | NaP Developers`}
        </p>
      </div>
    </main>
  );
}
