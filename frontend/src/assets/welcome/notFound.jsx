
import { useEffect } from "react";

export function Page404() {
  useEffect(()=>{
    document.body.classList.add('noLeftMargin');
     return () => {
      document.body.classList.remove('noLeftMargin');
    };
  
  },[])

  return (<>


    <main className="font-display">
      <div className="relative flex min-h-screen w-full flex-col bg-light-gray dark:bg-background-dark group/design-root overflow-x-hidden">
        <div className="flex h-full grow">


          <main className="flex-1 flex items-center justify-center p-8">
            <div className="flex flex-col items-center gap-6 w-full max-w-lg text-center">
              <img className="w-full max-w-[280px]" data-alt="Illustration of a lost compass with magenta accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgWTiNoCeGCIaqssclI0ouy-UWdpRYqn7zXfQeKL6xeJI3_HuJQO4e5aoAfUgah51vxwZvVqbDhvpMOAFCysYSza4r7wixaafdsbDmHGrzfL3IqqYUsqEOen-v787eX53Q_w43rbyyj3zKErBBClcXncgUTbbc8ANNFtzJ4PgGe3Gh3q_pAXwcd2LwGhQjQBTatYnW17h_NP6B3UrffOG-oHtfv9H4z6_DJRPhLTdW41wH1sVeHhowFGLDWx030uxHHQxiVRH6DSc" />
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-charcoal dark:text-white text-6xl font-bold leading-tight tracking-tighter">404</h1>
                <p className="text-charcoal dark:text-white text-2xl font-semibold leading-tight tracking-tight">Page Not Found</p>
                <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal max-w-md mt-2">
                  Oops! It seems the page you were looking for has moved or doesn&#39;t exist.
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-cyan text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-cyan/90 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                <span className="truncate">Go to Dashboard</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </main>

  </>)
}
