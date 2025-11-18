
export function TeacherCalendar() {

    return (
        <body className="font-display bg-background-light dark:bg-background-dark text-charcoal dark:text-light-gray">
            <div className="flex h-screen w-full">
                {/* Left Sidebar  */}

                {/* Main Content  */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <h1 className="text-3xl font-bold text-charcoal dark:text-white">October 2024</h1>
                            <div className="flex items-center gap-1">
                                <button className="flex size-9 items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                                </button>
                                <button className="flex size-9 items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                                </button>
                            </div>
                            <button className="px-4 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">Today</button>
                        </div>
                        <div className="flex h-10 items-center justify-center rounded-lg bg-white dark:bg-gray-900/50 p-1 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-4 has-[:checked]:bg-cyan has-[:checked]:text-white text-charcoal dark:text-gray-300 dark:has-[:checked]:text-white text-sm font-medium transition-colors">
                                <span className="truncate">Month</span>
                                <input checked="" className="invisible w-0" name="view-toggle" type="radio" value="Month" />
                            </label>
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-4 has-[:checked]:bg-cyan has-[:checked]:text-white text-charcoal dark:text-gray-300 dark:has-[:checked]:text-white text-sm font-medium transition-colors">
                                <span className="truncate">Week</span>
                                <input className="invisible w-0" name="view-toggle" type="radio" value="Week" />
                            </label>
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-4 has-[:checked]:bg-cyan has-[:checked]:text-white text-charcoal dark:text-gray-300 dark:has-[:checked]:text-white text-sm font-medium transition-colors">
                                <span className="truncate">Day</span>
                                <input className="invisible w-0" name="view-toggle" type="radio" value="Day" />
                            </label>
                        </div>
                    </div>
                    {/* Calendar Grid  */}
                    <div className="grid grid-cols-7 grid-rows-5 h-[calc(100%-80px)] gap-px bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                        {/* Header  */}
                        <div className="text-center py-2 text-sm font-semibold bg-white dark:bg-gray-800">Sun</div>
                        <div className="text-center py-2 text-sm font-semibold bg-white dark:bg-gray-800">Mon</div>
                        <div className="text-center py-2 text-sm font-semibold bg-white dark:bg-gray-800">Tue</div>
                        <div className="text-center py-2 text-sm font-semibold bg-white dark:bg-gray-800">Wed</div>
                        <div className="text-center py-2 text-sm font-semibold bg-white dark:bg-gray-800">Thu</div>
                        <div className="text-center py-2 text-sm font-semibold bg-white dark:bg-gray-800">Fri</div>
                        <div className="text-center py-2 text-sm font-semibold bg-white dark:bg-gray-800">Sat</div>
                        {/* Days  */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-2 text-gray-400 dark:text-gray-500"><span className="text-sm">29</span></div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-2 text-gray-400 dark:text-gray-500"><span className="text-sm">30</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">1</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">2</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">3</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">4</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">5</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2 flex flex-col gap-1.5"><span className="text-sm font-medium">6</span><button className="w-full text-left text-xs p-1.5 rounded-md bg-magenta/20 text-magenta-800 dark:bg-magenta/30 dark:text-magenta-200 hover:bg-magenta/30">History Project Due</button></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">7</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">8</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2 flex flex-col gap-1.5"><span className="text-sm font-medium">9</span><button className="w-full text-left text-xs p-1.5 rounded-md bg-cyan/20 text-cyan-800 dark:bg-cyan/30 dark:text-cyan-200 hover:bg-cyan/30">Math Quiz Ch. 4</button></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">10</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">11</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">12</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">13</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">14</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">15</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">16</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">17</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2 flex flex-col gap-1.5"><span className="text-sm font-medium">18</span><button className="w-full text-left text-xs p-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300">Staff Meeting</button></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">19</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">20</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2 flex flex-col gap-1.5"><span className="text-sm font-medium">21</span><button className="w-full text-left text-xs p-1.5 rounded-md bg-magenta/20 text-magenta-800 dark:bg-magenta/30 dark:text-magenta-200 hover:bg-magenta/30">Parent-Teacher Conf.</button></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">22</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">23</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">24</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">25</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">26</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">27</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">28</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">29</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">30</span></div>
                        <div className="bg-white dark:bg-gray-900 p-2"><span className="text-sm font-medium">31</span></div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-2 text-gray-400 dark:text-gray-500"><span className="text-sm">1</span></div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-2 text-gray-400 dark:text-gray-500"><span className="text-sm">2</span></div>
                    </div>
                </main>
                {/* Right Sidebar */}
                <aside className="w-72 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-8 text-cyan">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fillRule="evenodd"></path>
                                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold text-charcoal dark:text-white">Viewpoint Academy</h1>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan h-12 text-white text-sm font-bold shadow-sm hover:bg-cyan/90 transition-colors">
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">Create Event</span>
                    </button>
                    <div className="mt-8 flex flex-col gap-6">
                        <div>
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="class-filter">Class</label>
                            <select className="mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-cyan focus:ring-cyan" id="class-filter">
                                <option>All Classes</option>
                                <option>History 101</option>
                                <option>Algebra II</option>
                                <option>Creative Writing</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="event-filter">Event Type</label>
                            <select className="mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-cyan focus:ring-cyan" id="event-filter">
                                <option>All Events</option>
                                <option>Assignment</option>
                                <option>Exam</option>
                                <option>Holiday</option>
                            </select>
                        </div>
                        <label className="flex items-center justify-between cursor-pointer" htmlFor="hebrew-toggle">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Show Hebrew Dates</span>
                            <div className="relative">
                                <input className="sr-only peer" id="hebrew-toggle" type="checkbox" />
                                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan"></div>
                            </div>
                        </label>
                    </div>
                    {/* Mini Calendar  */}
                    <div className="mt-8">
                        <div className="flex items-center justify-between p-1">
                            <button className="flex size-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="material-symbols-outlined text-base">chevron_left</span>
                            </button>
                            <p className="text-sm font-bold text-center">October 2024</p>
                            <button className="flex size-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="material-symbols-outlined text-base">chevron_right</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-7 text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                            <p className="h-8 flex items-center justify-center">S</p>
                            <p className="h-8 flex items-center justify-center">M</p>
                            <p className="h-8 flex items-center justify-center">T</p>
                            <p className="h-8 flex items-center justify-center">W</p>
                            <p className="h-8 flex items-center justify-center">T</p>
                            <p className="h-8 flex items-center justify-center">F</p>
                            <p className="h-8 flex items-center justify-center">S</p>
                            <div className="col-start-3 h-8 flex items-center justify-center">1</div>
                            <div className="h-8 flex items-center justify-center">2</div>
                            <div className="h-8 flex items-center justify-center">3</div>
                            <div className="h-8 flex items-center justify-center">4</div>
                            <div className="h-8 flex items-center justify-center">5</div>
                            <div className="h-8 flex items-center justify-center">6</div>
                            <div className="h-8 flex items-center justify-center">7</div>
                            <div className="h-8 flex items-center justify-center">8</div>
                            <div className="h-8 flex items-center justify-center text-white bg-cyan rounded-full">9</div>
                            <div className="h-8 flex items-center justify-center">10</div>
                            <div className="h-8 flex items-center justify-center">11</div>
                            <div className="h-8 flex items-center justify-center">12</div>
                            <div className="h-8 flex items-center justify-center">13</div>
                            <div className="h-8 flex items-center justify-center">14</div>
                            <div className="h-8 flex items-center justify-center">15</div>
                            <div className="h-8 flex items-center justify-center">16</div>
                            <div className="h-8 flex items-center justify-center">17</div>
                            <div className="h-8 flex items-center justify-center">18</div>
                            <div className="h-8 flex items-center justify-center">19</div>
                            <div className="h-8 flex items-center justify-center">20</div>
                            <div className="h-8 flex items-center justify-center">21</div>
                            <div className="h-8 flex items-center justify-center">22</div>
                            <div className="h-8 flex items-center justify-center">23</div>
                            <div className="h-8 flex items-center justify-center">24</div>
                            <div className="h-8 flex items-center justify-center">25</div>
                            <div className="h-8 flex items-center justify-center">26</div>
                            <div className="h-8 flex items-center justify-center">27</div>
                            <div className="h-8 flex items-center justify-center">28</div>
                            <div className="h-8 flex items-center justify-center">29</div>
                            <div className="h-8 flex items-center justify-center">30</div>
                            <div className="h-8 flex items-center justify-center">31</div>
                        </div>
                    </div>
                    <div className="mt-auto flex items-center gap-4 p-2 rounded-lg hover:bg-light-gray dark:hover:bg-gray-800">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEN4a3bkE0GE2LzV2njugigFzGEhoV7CEaO-KEwTPoSFkAfc3VqyZRVSWjTFFj7voGQgs2SJI3hjGspUer7qBIr1fUFN7ddMFBtpFXFzoMq0pjwS2kpSmtf4aXYII4O_SORdOrdxaYqkAM2MJ-_ceQlOgMyU0NSZ9rT1qwtue3mghPNZRPUd7I0Vo1Rfb7UKr4xYgbo4kIgkjPBSDDsSBoUlVe2uBBDgeIhg0-oBMX3LVLOMyC2Wm3cZl-IsMqWouSVEHMOyM6olQ");'></div>
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold text-charcoal dark:text-white">Jane Doe</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Teacher</p>
                        </div>
                        <span className="material-symbols-outlined ml-auto text-gray-500">logout</span>
                    </div>
                </aside>
                {/* Event Detail Modal */}
                <div className="fixed inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center opacity-0 pointer-events-none transition-opacity" id="event-modal">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg m-4">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-charcoal dark:text-white">Math Quiz Ch. 4</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Posted in Algebra II</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-cyan">calendar_today</span>
                                <p className="text-sm font-medium">Wednesday, October 9, 2024</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-cyan">schedule</span>
                                <p className="text-sm font-medium">10:00 AM - 10:50 AM</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Instructions</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    The quiz will cover all topics from Chapter 4, including linear equations and functions. Please bring a calculator. No notes will be permitted.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Attachments</h4>
                                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                                    <span className="material-symbols-outlined text-magenta">description</span>
                                    <p className="text-sm font-medium text-charcoal dark:text-gray-200">Chapter_4_Review_Sheet.pdf</p>
                                    <span className="material-symbols-outlined ml-auto text-gray-500">download</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-light-gray dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3 rounded-b-xl">
                            <button className="px-4 py-2 text-sm font-bold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">Close</button>
                            <button className="px-4 py-2 text-sm font-bold rounded-lg bg-cyan text-white hover:bg-cyan/90">View Assignment</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}


