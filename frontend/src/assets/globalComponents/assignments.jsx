import { useNavigate } from 'react-router-dom';
import { Sidebar } from "./sidebar";
import { fakeAssignments } from './fakeData/fakeAssignments';
import {useProjectInfo} from '../context';
import { Link } from 'react-router-dom';






export function Assignments() {

    const navigate = useNavigate();
    const {role} = useProjectInfo();


    const students = 35;

    return (
        <div className="font-display bg-[#F3F4F6]  text-[#111827] ">
            <div className="relative flex min-h-screen w-full flex-col">
                <div className="flex h-full grow flex-row">
                    {/* SideNavBar  */}

                    <Sidebar />

                    {/* Main Content  */}
                    <main className="flex-1 p-8">
                        <div className="flex flex-col gap-6">
                            {/* PageHeading  */}

                            <div class="flex flex-wrap items-center justify-between gap-4">
                                <h1 className="text-primary dark:text-white text-3xl font-bold leading-tight">All Assignments</h1>
                                {role === 'teacher' &&
                                  <Link to='/new-assignment' className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-[#06B6D4] text-white text-sm font-bold leading-normal shadow-sm hover:bg-[#06B6D4]/90">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                    <span className="truncate">Create New Assignment</span>
                                </Link>}
                              
                            </div>
                            {/* Filters Section  */}
                            <div className="flex flex-col gap-4">
                                {/* SearchBar  */}
                                <div className="w-full">
                                    <label className="flex flex-col h-12 w-full">
                                        <div className="flex w-full flex-1 items-stretch rounded-lg shadow-sm">
                                            <div
                                                className="text-gray-500 flex bg-white  items-center justify-center pl-4 rounded-l-lg border border-gray-300  border-r-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6B7280"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                                            </div>
                                            <input
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#111827]  focus:outline-0 focus:ring-2 focus:ring-[#06B6D4]/50 border border-gray-300  bg-white  h-full placeholder:text-gray-500  px-4 text-base font-normal leading-normal"
                                                placeholder="Search by assignment title..." />
                                        </div>
                                    </label>
                                </div>
                                {/* Chips  */}
                                <div className="flex gap-3 flex-wrap">
                                    <button
                                        className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white  pl-4 pr-3 text-sm font-medium shadow-sm border border-gray-300  hover:bg-gray-50 ">
                                        <p className="text-[#111827] ">All Classes</p>


                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#6B7280"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg>
                                    </button>
                                    <button
                                        className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white  pl-4 pr-3 text-sm font-medium shadow-sm border border-gray-300  hover:bg-gray-50 ">
                                        <p className="text-[#111827] ">Status: Published</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#6B7280"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg>

                                    </button>
                                    <button
                                        className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white  pl-4 pr-3 text-sm font-medium shadow-sm border border-gray-300  hover:bg-gray-50 ">
                                        <p className="text-[#111827] ">Due Date: This Week</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#6B7280"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg>
                                    </button>
                                </div>
                            </div>
                            {/* Table  */}
                            <div
                                className="overflow-hidden rounded-lg border border-gray-200  bg-white  shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 ">
                                            <tr className="text-left">
                                                <th
                                                    className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500  w-2/5">
                                                    Assignment Title</th>
                                               {role === 'student' &&
                                               
                                               <th
                                                    className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 ">
                                                    Grade</th>}
                                                
                                                <th
                                                    className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 ">
                                                    Due Date</th>
                                                <th
                                                    className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 ">
                                                    Submissions</th>
                                                    {role === 'student' &&
                                                      <th
                                                    className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 ">
                                                    Status</th>
                                                    }
                                              
                                                <th
                                                    className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500  text-right">
                                                    Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 ">

                                            {fakeAssignments.map((assignment, index) => {
                                                const date = new Date(assignment.dueDate);

                                                const weekday = date.toLocaleString("en-US", { weekday: "short" });
                                                const month = date.toLocaleString("en-US", { month: "short" });
                                                const year = date.getFullYear();

                                                const formatted = `${weekday}, ${month} ${year}`;

                                                return (

                                                    <tr key={index} className="hover:bg-gray-50 " onClick={() => navigate(`/eachAssignment/${assignment.id}`)}>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#111827] ">
                                                            {assignment.title}
                                                        </td>
                                                          {role === 'student' &&
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                                            {assignment.grade}</td>
                                            }
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                                            {formatted}
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                                            {assignment.submissions}/{students} Submitted</td>
                                                             {role === 'student' &&
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                            <span
                                                                className={` ${assignment.submited ? 'bg-cyan-100 ' : ''}inline-flex items-center rounded-full   px-2.5 py-0.5 text-xs font-medium text-cyan-800 `}>
                                                                {assignment.submited ? 'Submited' : 'Not Submited'}
                                                            </span>
                                                        </td>
                                            }
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                                                            <button
                                                                className="text-gray-500  hover:text-[#111827] e">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6B7280"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}


                                        </tbody>
                                    </table>
                                </div>
                                {/* Pagination  */}
                                <div
                                    className="flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6">
                                    <div className="flex flex-1 justify-between sm:hidden">
                                        <a className="relative inline-flex items-center rounded-md border border-gray-300  bg-white  px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 "
                                            href="#">Previous</a>
                                        <a className="relative ml-3 inline-flex items-center rounded-md border border-gray-300  bg-white  px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 "
                                            href="#">Next</a>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                        <div>
                                            <p className="text-sm text-gray-700 ">
                                                Showing
                                                <span className="font-medium mx-2">1</span>
                                                to
                                                <span className="font-medium mx-2">4</span>
                                                of
                                                <span className="font-medium mx-2">20</span>
                                                results
                                            </p>
                                        </div>
                                        <div>
                                            <nav aria-label="Pagination"
                                                className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                                <a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  hover:bg-gray-50  focus:z-20 focus:outline-offset-0"
                                                    href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9CA3AF"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                                                </a>
                                                <a aria-current="page"
                                                    className="relative z-10 inline-flex items-center bg-[#06B6D4]/10 text-[#06B6D4] px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
                                                    href="#">1</a>
                                                <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-gray-300  hover:bg-gray-50  focus:z-20 focus:outline-offset-0"
                                                    href="#">2</a>
                                                <a className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-gray-300  hover:bg-gray-50  focus:z-20 focus:outline-offset-0 md:inline-flex"
                                                    href="#">3</a>
                                                <span
                                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700  ring-1 ring-inset ring-gray-300  focus:outline-offset-0">...</span>
                                                <a className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-gray-300  hover:bg-gray-50  focus:z-20 focus:outline-offset-0 md:inline-flex"
                                                    href="#">5</a>
                                                <a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  hover:bg-gray-50  focus:z-20 focus:outline-offset-0"
                                                    href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9CA3AF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}


