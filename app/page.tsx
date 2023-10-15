import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between w-ful ">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex pt-12">
        <p className="dark:invert text-slate-600">
          Website Under Construction...
        </p>
      </div>

      <div className="px-4 relative flex place-items-center before:absolute before:h-[300px] before:w-[580px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-inherit before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[340px] md:after:translate-x-[15%] after:bg-gradient-conic after:from-sky-500 after:via-blue-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-inherit before:dark:to-sky-700 before:dark:opacity-10 after:dark:from-sku-500 after:dark:via-blue-700 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex flex-col gap-3 items-center">
          <p className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-slate-950 text-3xl md:text-4xl font-black tracking-widest">
            {`<NaP Developers />`}
          </p>
          <p className="relative text-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-slate-800  md:text-xl font-black tracking-wide">
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
