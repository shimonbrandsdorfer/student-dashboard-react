
import { Sidebar } from "../globalComponents/sidebar";
import { MyCalendar } from '../globalComponents/calendar'

export function TeacherCalendar() {


    return (
        <div className="font-display bg-[#F3F4F6]  text-[#111827] ">
            <div className="relative flex min-h-screen w-full">
                <Sidebar />


                <main className="flex-1 flex overflow-hidden" style={{ justifyContent: 'space-between' }}>
                    < MyCalendar className='flex-1' />
                    <aside className="w-80 flex-shrink-0 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 p-6 flex flex-col gap-6">
                        <h2 className="text-xl font-bold text-charcoal dark:text-white">Teacher's Quick-Add Event Form</h2>
                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 sr-only" for="event-name">Event Name</label>
                                <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-cyan focus:ring-cyan text-base py-2 px-3" id="event-name" name="event-name" placeholder="Event Name" type="text" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 sr-only" for="event-date">Date</label>
                                <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-cyan focus:ring-cyan text-base py-2 px-3" id="event-date" name="event-date" type="date" value="2024-10-09" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 sr-only" for="event-time">Time</label>
                                <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-cyan focus:ring-cyan text-base py-2 px-3" id="event-time" name="event-time" type="time" value="10:00" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 sr-only" for="event-class">Class</label>
                                <select className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-cyan focus:ring-cyan text-base py-2 px-3" id="event-class" name="event-class">
                                    <option value="">Select Class</option>
                                    <option value="all">All Classes</option>
                                    <option value="history101">History 101</option>
                                    <option value="algebra2">Algebra II</option>
                                    <option value="creativewriting">Creative Writing</option>
                                </select>
                            </div>
                          
                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-light-gray dark:bg-gray-800 p-3 text-charcoal dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-sm"> Advanced Options </span>
                                
                                    <svg className="shrink-0 transition duration-300 group-open:-rotate-180 text-gray-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </summary>
                                <div className="mt-4 px-3 space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block" for="event-description">Description</label>
                                        <textarea className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-cyan focus:ring-cyan text-sm py-2 px-3 min-h-[80px]" id="event-description" name="event-description" placeholder="Add event description..."></textarea>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block" for="event-attachments">Attachments</label>
                                        <div className="flex items-center gap-2">
                                            <input className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan/10 file:text-cyan-700 dark:file:bg-cyan/30 dark:file:text-cyan-200 hover:file:bg-cyan/20 dark:hover:file:bg-cyan/40 cursor-pointer focus:outline-none" id="event-attachments" name="event-attachments" type="file" />
                                        </div>
                                    </div>
                                </div>
                            </details>
                            <div className="mt-4 flex justify-end gap-3">
                         
                                <button className="px-4 py-2 text-sm font-bold rounded-lg bg-[#06B6D4] text-white hover:bg-[#06B6D4]/90" type="submit">Add Event</button>
                            </div>
                        </form>
                    </aside>
                </main>
            </div>

        </div>
    )
}


