
                import { Sidebar } from "./sidebar";
                import {MyCalendar} from './calendar'

export function Calendar(){


    /*  colors: {
                        "[#111827]": "#111827",
                        "[#06B6D4]": "#06B6D4",
                        "[#EC4899]": "#EC4899",
                        "[#F3F4F6]": "#F3F4F6",
               
                        "[#FFFFFF]": "#FFFFFF",
                      
                        "[#E5E7EB]": "#E5E7EB",
                      
                    },
                    fontFamily: {
                        "display": ["Roboto", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "8px",
                        "lg": "12px",
                        "xl": "16px",
                        "full": "9999px" */
    return(
        <div className="font-display bg-[#F3F4F6]  text-[#111827] ">
    <div className="relative flex min-h-screen w-full">
     <Sidebar />
   
                     
        <main className="flex-1 flex overflow-hidden" style={{justifyContent: 'space-between'}}>
           < MyCalendar className='flex-1'/>
            <aside
                className="w-80 bg-[#FFFFFF]  border-l border-[#E5E7EB]  p-6 shrink-0 flex flex-col gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4 text-[#111827] ">Filters</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 ">Class</label>
                            <select
                                className="form-select mt-1 block w-full rounded-lg border-[#E5E7EB]  bg-[#F3F4F6]  focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] text-sm">
                                <option>All Classes</option>
                                <option>ENG-101: English Literature</option>
                                <option>MATH-203: Calculus II</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 ">Event Type</label>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center">
                                    <input checked=""
                                        className="form-checkbox h-4 w-4 rounded text-[#06B6D4] focus:ring-[#06B6D4]/50"
                                        type="checkbox" />
                                    <label className="ml-2 text-sm text-gray-700 ">Assignments</label>
                                </div>
                                <div className="flex items-center">
                                    <input checked=""
                                        className="form-checkbox h-4 w-4 rounded text-[#EC4899] focus:ring-[#EC4899]/50"
                                        type="checkbox" />
                                    <label className="ml-2 text-sm text-gray-700 ">Exams</label>
                                </div>
                                <div className="flex items-center">
                                    <input className="form-checkbox h-4 w-4 rounded text-green-500 focus:ring-green-500/50"
                                        type="checkbox" />
                                    <label className="ml-2 text-sm text-gray-700 ">School Events</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div>
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 " htmlFor="hebrew-dates">Include
                            Hebrew Dates</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" id="hebrew-dates" type="checkbox" value="" />
                            <div
                                className="w-11 h-6 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#06B6D4]">
                            </div>
                        </label>
                    </div>
                </div>
            </aside>
        </main>
    </div>

</div>
    )
}


