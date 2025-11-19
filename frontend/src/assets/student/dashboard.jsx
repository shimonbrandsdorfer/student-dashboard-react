<<<<<<< HEAD

                import { Sidebar } from "./sidebar";
                import { Link } from "react-router-dom";



export function StudentDashboard(){
    return(<>
    
<main className="font-display bg-[#F3F4F6] ">
    <div className="relative flex h-auto min-h-screen w-full group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow">


       <Sidebar />
                
            <div className="flex w-full flex-col" style={{color: '#111827'}}>
                <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <div className="flex min-w-72 flex-col gap-1">
                                <h1
                                    className="text-primary  text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                                    Dashboard</h1>
                                <p
                                    className="text-[#6B7280]  text-base font-normal leading-normal">
                                    Welcome back, Yossi! Here&lsquo;s your overview.</p>
                            </div>
                            <div className="flex flex-1 sm:flex-none justify-stretch">
                                <div
                                    className="flex w-full sm:w-auto flex-col sm:flex-row sm:flex-wrap gap-3 justify-start">
                                    <Link to="/submit_assignment"
                                        className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors" style={{backgroundColor: '#06B6D4'}}>
                                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                                     <span className="truncate">Submit Assignment</span>
                            </Link>
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-[#FFFFFF]  text-[#111827]  border border-gray-200  shadow-subtle text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors">
                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/></svg>
                                        <span className="truncate">View Grades</span>
                                    </button>
                                    <Link to="/calendar"
                                        className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-[#FFFFFF]  text-[#111827] border border-gray-200  shadow-subtle text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                                        <span className="truncate">Calendar</span>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div
                                className="lg:col-span-2 bg-[#FFFFFF]  rounded-xl shadow-subtle p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2
                                        className="text-primary  text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                        Pending Assignments</h2>
                                    <a className="text-sm font-medium hover:underline" style={{color: '#06B6D4'}}
                                        href="./ass.html">View All</a>
                                </div>
                                <div className="flex flex-col divide-y divide-gray-200  -mx-6">
                                    <div className="flex items-center gap-4 px-6 min-h-[72px] py-3 justify-between">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div
                                                className="text-primary  flex items-center justify-center rounded-lg bg-gray-100  shrink-0 size-12">
                                                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                                            </div>
                                            <div className="flex flex-col justify-center min-w-0">
                                                <p
                                                    className="text-primary  text-base font-medium leading-normal truncate">
                                                    The Great Gatsby: Symbolism Essay</p>
                                                <p
                                                    className="text-[#6B7280]  text-sm font-normal leading-normal">
                                                    Due in 2 days</p>
                                            </div>
                                        </div>
                                         <a href="./submit-ass.html"
                                            className="text-base font-medium leading-normal whitespace-nowrap shrink-0 hover:underline" style={{color: '#06B6D4'}}>Submit</a>
                                    </div>
                                    <div className="flex items-center gap-4 px-6 min-h-[72px] py-3 justify-between">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div
                                                className="text-primary  flex items-center justify-center rounded-lg bg-gray-100  shrink-0 size-12">
                                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                                            </div>
                                            <div className="flex flex-col justify-center min-w-0">
                                                <p
                                                    className="text-primary  text-base font-medium leading-normal truncate">
                                                    Shakespeare Sonnet Analysis</p>
                                                <p
                                                    className="text-[#6B7280]  text-sm font-normal leading-normal">
                                                    Due in 5 days</p>
                                            </div>
                                        </div>
                                         <a href="./submit-ass.html"
                                            className="text-base font-medium leading-normal whitespace-nowrap shrink-0 hover:underline" style={{color: '#06B6D4'}}>Submit</a>
                                    </div>
                                    <div className="flex items-center gap-4 px-6 min-h-[72px] py-3 justify-between">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div
                                                className="text-primary  flex items-center justify-center rounded-lg bg-gray-100  shrink-0 size-12">
                                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                                            </div>
                                            <div className="flex flex-col justify-center min-w-0">
                                                <p
                                                    className="text-primary  text-base font-medium leading-normal truncate">
                                                    Vocabulary Quiz - Unit 4</p>
                                                <p
                                                    className="text-[#6B7280]  text-sm font-normal leading-normal">
                                                    Due: Tomorrow at 3 PM</p>
                                            </div>
                                        </div>
                                        <a href="./submit-ass.html"
                                            className="text-base font-medium leading-normal whitespace-nowrap shrink-0 hover:underline" style={{color: '#06B6D4'}}>Start</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="bg-[#FFFFFF]  rounded-xl shadow-subtle p-6 space-y-4">
                                    <h2
                                        className="text-primary  text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                        My Progress</h2>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative size-40">
                                            <svg className="size-full" height="36" viewBox="0 0 36 36" width="36"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle className="stroke-current text-gray-200" cx="18"
                                                    cy="18" fill="none" r="16" strokeWidth="3"></circle>
                                                <circle className="stroke-current text-[#EC4899]" cx="18" cy="18" fill="none"
                                                    r="16" strokeDasharray="88" strokeDashoffset="18"
                                                    strokeLinecap="round" strokeWidth="3"
                                                    transform="rotate(-90 18 18)"></circle>
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span
                                                    className="text-4xl font-black text-primary ">82%</span>
                                                <span
                                                    className="text-sm text-[#6B7280] ">Overall
                                                    Grade</span>
                                            </div>
                                        </div>
                                        <p
                                            className="text-center text-sm text-[#6B7280] ">
                                            Great job! You&lsquo;re on track for an excellent final grade.</p>
                                    </div>
                                </div>
                                <div className="bg-[#FFFFFF]  rounded-xl shadow-subtle p-6 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h2
                                            className="text-primary  text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                            Announcements</h2>
                                        <a className="text-sm font-medium hover:underline" style={{color: '#06B6D4'}}
                                            href="#">View All</a>
                                    </div>
                                    <div className="flex flex-col divide-y divide-gray-200  -mx-6">
                                        <div className="flex flex-col gap-1.5 px-6 py-4">
                                            <p
                                                className="text-primary  text-base font-medium leading-normal">
                                                Guest Speaker Next Week</p>
                                            <p
                                                className="text-[#6B7280]  text-sm font-normal leading-normal">
                                                Author Jane Doe will be joining our class via Zoom...</p>
                                            <p className="text-xs text-gray-400 ">Posted: 2 days ago</p>
                                        </div>
                                        <div className="flex flex-col gap-1.5 px-6 py-4">
                                            <p
                                                className="text-primary  text-base font-medium leading-normal">
                                                Reminder: Field Trip Forms Due</p>
                                            <p
                                                className="text-[#6B7280]  text-sm font-normal leading-normal">
                                                Please submit your signed permission slips by Friday.</p>
                                            <p className="text-xs text-gray-400 ">Posted: 4 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

</main>
    </>)
}


=======

                import { Sidebar } from "../globalComponents/sidebar";
                import { Link } from "react-router-dom";
                import {fakeAnnouncement} from '../globalComponents/fakeData/fakeAnnouncements';
                 import {fakeAssignments} from '../globalComponents/fakeData/fakeAssignments';
                
import { Assignments } from "../globalComponents/assignments";




export function StudentDashboard(){
    return(<>
    
<main className="font-display bg-[#F3F4F6] ">
    <div className="relative flex h-auto min-h-screen w-full group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow">


       <Sidebar />
                
            <div className="flex w-full flex-col" style={{color: '#111827'}}>
                <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <div className="flex min-w-72 flex-col gap-1">
                                <h1
                                    className="text-primary  text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                                    Dashboard</h1>
                                <p
                                    className="text-[#6B7280]  text-base font-normal leading-normal">
                                    Welcome back, Yossi! Here&lsquo;s your overview.</p>
                            </div>
                            <div className="flex flex-1 sm:flex-none justify-stretch">
                                <div
                                    className="flex w-full sm:w-auto flex-col sm:flex-row sm:flex-wrap gap-3 justify-start">
                                    <Link to="/assignments"
                                        className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors" style={{backgroundColor: '#06B6D4'}}>
                                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                                     <span className="truncate">Submit Assignment</span>
                            </Link>
                                   
                                    <Link to="/calendar"
                                        className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-[#FFFFFF]  text-[#111827] border border-gray-200  shadow-subtle text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                                        <span className="truncate">Calendar</span>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div
                                className="lg:col-span-2 bg-[#FFFFFF]  rounded-xl shadow-subtle p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2
                                        className="text-primary  text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                        Pending Assignments</h2>
                                    <a className="text-sm font-medium hover:underline" style={{color: '#06B6D4'}}
                                        href="./assignments">View All</a>
                                </div>
                                <div className="flex flex-col divide-y divide-gray-200  -mx-6">
                                  
                                  {fakeAssignments.filter((assignment)=> !assignment.submited).slice(0, 3).map((a)=>(

 <div className="flex items-center gap-4 px-6 min-h-[72px] py-3 justify-between">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div
                                                className="text-primary  flex items-center justify-center rounded-lg bg-gray-100  shrink-0 size-12">
                                                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                                            </div>
                                            <div className="flex flex-col justify-center min-w-0">
                                                <p
                                                    className="text-primary  text-base font-medium leading-normal truncate">
                                                    {a.title}</p>
                                                <p
                                                    className="text-[#6B7280]  text-sm font-normal leading-normal">
                                                    Due in 2 days</p>
                                            </div>
                                        </div>
                                         <Link to={`/eachAssignment/${a.id}`}
                                            className="text-base font-medium leading-normal whitespace-nowrap shrink-0 hover:underline" style={{color: '#06B6D4'}}>Submit</Link>
                                    </div>
                                  ))}
                                   
                                  

                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="bg-[#FFFFFF]  rounded-xl shadow-subtle p-6 space-y-4">
                                    <h2
                                        className="text-primary  text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                        My Progress</h2>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative size-40">
                                            <svg className="size-full" height="36" viewBox="0 0 36 36" width="36"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle className="stroke-current text-gray-200" cx="18"
                                                    cy="18" fill="none" r="16" strokeWidth="3"></circle>
                                                <circle className="stroke-current text-[#EC4899]" cx="18" cy="18" fill="none"
                                                    r="16" strokeDasharray="88" strokeDashoffset="18"
                                                    strokeLinecap="round" strokeWidth="3"
                                                    transform="rotate(-90 18 18)"></circle>
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span
                                                    className="text-4xl font-black text-primary ">82%</span>
                                                <span
                                                    className="text-sm text-[#6B7280] ">Overall
                                                    Grade</span>
                                            </div>
                                        </div>
                                        <p
                                            className="text-center text-sm text-[#6B7280] ">
                                            Great job! You&lsquo;re on track for an excellent final grade.</p>
                                    </div>
                                </div>
                                <div className="bg-[#FFFFFF]  rounded-xl shadow-subtle p-6 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h2
                                            className="text-primary  text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                            Announcements</h2>
                                        <a className="text-sm font-medium hover:underline" style={{color: '#06B6D4'}}
                                            href="announcements">View All</a>
                                    </div>
                                    <div className="flex flex-col divide-y divide-gray-200  -mx-6">


                                        {fakeAnnouncement.slice(0, 2).map((a)=>(
                                            <div className="flex flex-col gap-1.5 px-6 py-4">
                                            <p
                                                className="text-primary  text-base font-medium leading-normal">
                                                {a.title}</p>
                                            <p
                                                className="text-[#6B7280]  text-sm font-normal leading-normal">
                                                {a.message}</p>
                                            <p className="text-xs text-gray-400 ">Posted: 2 days ago</p>
                                        </div>

                                        ))}
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

</main>
    </>)
}


>>>>>>> origin/main
