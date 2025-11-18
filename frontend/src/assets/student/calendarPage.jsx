
                import { Sidebar } from "./sidebar";
                import {MyCalendar} from './calendar'

export function Calendar(){


    /*  colors: {
                        "[#111827]": "#111827",
                        "[#06B6D4]": "#06B6D4",
                        "[#EC4899]": "#EC4899",
                        "[#F3F4F6]": "#F3F4F6",
               
                        "[#FFFFFF]": "#FFFFFF",
                      
                        "border-light": "#E5E7EB",
                      
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
    < MyCalendar/>
                     
        <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col p-6">
                <header className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold text-[#111827] ">November 2023</h1>
                        <div className="flex items-center gap-1">
                            <button className="p-2 rounded hover:bg-gray-200 ">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="p-2 rounded hover:bg-gray-200 ">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="py-2 px-4 rounded-lg border border-border-light  bg-[#FFFFFF]  hover:bg-[#F3F4F6]  text-sm font-medium">Today</button>
                        <div className="p-0.5 bg-border-light  rounded-lg flex items-center">
                            <button
                                className="py-1.5 px-3 text-sm font-medium rounded-md bg-[#FFFFFF] ">Month</button>
                            <button
                                className="py-1.5 px-3 text-sm font-medium text-gray-500  hover:text-[#111827] ">Week</button>
                            <button
                                className="py-1.5 px-3 text-sm font-medium text-gray-500  hover:text-[#111827] ">Day</button>
                        </div>
                    </div>
                </header>
                <div
                    className="flex-1 grid grid-cols-7 grid-rows-6 gap-px bg-border-light  border border-border-light  rounded-xl overflow-hidden shadow-sm">
                    <div
                        className="text-center py-2 text-sm font-medium text-gray-500  bg-[#FFFFFF] ">
                        Sun</div>
                    <div
                        className="text-center py-2 text-sm font-medium text-gray-500  bg-[#FFFFFF] ">
                        Mon</div>
                    <div
                        className="text-center py-2 text-sm font-medium text-gray-500  bg-[#FFFFFF] ">
                        Tue</div>
                    <div
                        className="text-center py-2 text-sm font-medium text-gray-500  bg-[#FFFFFF] ">
                        Wed</div>
                    <div
                        className="text-center py-2 text-sm font-medium text-gray-500  bg-[#FFFFFF] ">
                        Thu</div>
                    <div
                        className="text-center py-2 text-sm font-medium text-gray-500  bg-[#FFFFFF] ">
                        Fri</div>
                    <div
                        className="text-center py-2 text-sm font-medium text-gray-500  bg-[#FFFFFF] ">
                        Sat</div>
                    <div className="relative p-2 bg-[#FFFFFF]  text-gray-400 "><span
                            className="absolute top-2 right-2 text-xs">29</span></div>
                    <div className="relative p-2 bg-[#FFFFFF]  text-gray-400 "><span
                            className="absolute top-2 right-2 text-xs">30</span></div>
                    <div className="relative p-2 bg-[#FFFFFF]  text-gray-400 "><span
                            className="absolute top-2 right-2 text-xs">31</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">1</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">2</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">3</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">4</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">5</span>
                        <div className="mt-6 space-y-1">
                            <div
                                className="text-xs font-medium bg-[#EC4899]/10 text-[#EC4899] p-1 rounded-md truncate cursor-pointer">
                                Midterm Exam Due</div>
                        </div>
                    </div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">6</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">7</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">8</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">9</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">10</span>
                        <div className="mt-6 space-y-1">
                            <div
                                className="text-xs font-medium bg-[#06B6D4]/10 text-[#06B6D4] p-1 rounded-md truncate cursor-pointer">
                                Project Proposal Due</div>
                        </div>
                    </div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">11</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">12</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">13</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">14</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">15</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">16</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">17</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">18</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">19</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">20</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">21</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">22</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">23</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">24</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">25</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">26</span></div>
                    <div className="relative p-2 bg-[#06B6D4]/10 "><span
                            className="absolute top-2 right-2 text-sm font-medium flex items-center justify-center size-6 rounded-full bg-[#06B6D4] text-white">27</span>
                    </div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">28</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">29</span></div>
                    <div className="relative p-2 bg-[#FFFFFF] "><span
                            className="absolute top-2 right-2 text-sm font-medium">30</span></div>
                    <div className="relative p-2 bg-[#FFFFFF]  text-gray-400 "><span
                            className="absolute top-2 right-2 text-xs">1</span></div>
                    <div className="relative p-2 bg-[#FFFFFF]  text-gray-400 "><span
                            className="absolute top-2 right-2 text-xs">2</span></div>
                </div>
            </div>
            <aside
                className="w-80 bg-[#FFFFFF]  border-l border-border-light  p-6 shrink-0 flex flex-col gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4 text-[#111827] ">Filters</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 ">Class</label>
                            <select
                                className="form-select mt-1 block w-full rounded-lg border-border-light  bg-[#F3F4F6]  focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] text-sm">
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
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-700 ">November</h4>
                        <div className="flex items-center gap-1">
                            <button className="p-1 rounded hover:bg-gray-200 ">
                                <span className="material-symbols-outlined text-base">chevron_left</span>
                            </button>
                            <button className="p-1 rounded hover:bg-gray-200 ">
                                <span className="material-symbols-outlined text-base">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                        <span className="text-gray-500 ">S</span>
                        <span className="text-gray-500 ">M</span>
                        <span className="text-gray-500 ">T</span>
                        <span className="text-gray-500 ">W</span>
                        <span className="text-gray-500 ">T</span>
                        <span className="text-gray-500 ">F</span>
                        <span className="text-gray-500 ">S</span>
                        <span className="text-gray-400">29</span>
                        <span className="text-gray-400">30</span>
                        <span className="text-gray-400">31</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                        <span>14</span>
                        <span>15</span>
                        <span>16</span>
                        <span>17</span>
                        <span>18</span>
                        <span>19</span>
                        <span>20</span>
                        <span>21</span>
                        <span>22</span>
                        <span>23</span>
                        <span>24</span>
                        <span>25</span>
                        <span>26</span>
                        <span
                            className="bg-[#06B6D4] text-white rounded-full size-7 flex items-center justify-center">27</span>
                        <span>28</span>
                        <span>29</span>
                        <span>30</span>
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


