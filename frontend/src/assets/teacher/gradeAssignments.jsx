import {Sidebar} from '../globalComponents/sidebar';
import {assignmentsNeedsGrade} from '../globalComponents/fakeData/gradeAssignments';
import { useState } from 'react';

export function GradeAssignments(){

     const [currantAssignment, seturrantAssignment]= useState({});
   
    

    return(<>
    <main className="font-display">
    <div
        className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden">
       <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark group/design-root">
        {/* TopNavBar */}
        <Sidebar />
        
            <main className="flex-1 px-4 py-8 md:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
          
                     
                    
     {/* Two-Panel Layout */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
         {/* Left Panel (Student List) */}
                        <div className="flex h-full flex-col gap-4 rounded-lg bg-white p-4 shadow-sm lg:col-span-1">
                            <h2 className="text-lg font-bold text-primary">Submissions (25)</h2>
                        {/* SearchBar */}
                            <label className="flex h-11 w-full flex-col">
                                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                                    <div
                                        className="flex items-center justify-center rounded-l-lg border-y border-l border-gray-200 bg-gray-50 pl-3 text-gray-500">
                                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000005c"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg border border-gray-200 bg-white px-3 text-base font-normal leading-normal text-primary placeholder:text-gray-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                        placeholder="Search students..." value="" />
                                </div>
                            </label>
                    {/* Student List */}
                            <div className="flex flex-col gap-1 overflow-y-auto">
                      
                             
         {/* Grad Student Item */}
                              


{assignmentsNeedsGrade.map((assignment)=>(
      <div onClick={()=>seturrantAssignment(assignment)} className="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-gray-50">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <div className="h-full w-full rounded-full bg-cover bg-center bg-no-repeat"
                                            data-alt="Student avatar"
                                            style={{backgroundImage: `url(${assignment.img})`}}>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-primary text-base font-medium leading-normal line-clamp-1">
                                            {assignment.student}
                                        </p>
                                        <p className="text-sm font-normal leading-normal text-gray-500">{assignment.title}</p>
                                    </div>
                                    <div className="ml-auto shrink-0">
                                        <span
                                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800">Missing</span>
                                    </div>
                                </div>

))}






                              
                            </div>
                        </div>










                        {Object.keys(currantAssignment).length !== 0 && (
                        <div className="flex flex-col gap-6 lg:col-span-2">
                           
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                 <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-primary text-3xl font-bold leading-tight tracking-tight">
                               {currantAssignment.title}</h1>
                            <p className="text-gray-500 text-base font-normal leading-normal">Due: October 26, 2023 at 11:59
                                PM • 15/25 Graded</p>
                        </div>
                    </div>
                                <h3 className="mb-4 text-lg font-bold text-primary">Submission Details</h3>
                                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                                    <div>
                                        <p className="text-base font-medium text-primary">{currantAssignment.student}</p>
                                        <p className="text-sm text-gray-500">Submitted on October 25, 2023, 10:15 PM</p>
                                    </div>
                                    <a className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-200"
                                        href="#">
                                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                                        Download File
                                    </a>
                                </div>
                                 <h4 className="my-4 text-lg font-bold text-primary">Instructions</h4>
                                <div className="mt-4 h-fit overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-gray-700">{currantAssignment.description}</p>
                                    {/* Full document content would be scrollable here */}
                                </div>
                                <br />
                                <h4 className="my-4 text-lg font-bold text-primary">{currantAssignment.student} Answered</h4>
<div className="mt-4 h-fit max-h-96 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-gray-700">{currantAssignment.answer}</p>
                                    {/* Full document content would be scrollable here */}
                                </div>

                            </div>
                            {/* Grading Card */}
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-bold text-primary">Grade &amp; Feedback</h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="grade">Grade</label>
                                        <div className="relative mt-1">
                                            <input
                                                className="form-input block w-full rounded-lg border-gray-300 py-3 text-center text-lg shadow-sm focus:border-secondary focus:ring-secondary"
                                                id="grade" name="grade" placeholder="--" type="text" />
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                                <span className="text-gray-500 sm:text-sm">/ 100</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="comments">Feedback
                                        Comments</label>
                                    <div className="mt-1">
                                        <div
                                            className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary">
                                            <div className="border-b border-gray-300 bg-gray-50 p-2">
                                                <div className="flex items-center space-x-1 sm:pr-4">
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z"/></svg>
                            </button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button">
                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z"/></svg>
                              </button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M200-120v-80h560v80H200Zm280-160q-101 0-157-63t-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63Z"/></svg>
                              </button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button">
                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg>
                              </button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button">
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z"/></svg>
                              </button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
                            </button>
                        </div>
                                            </div>
                                            <textarea
                                                className="form-textarea block w-full resize-none border-0 p-3 text-primary placeholder-gray-400 focus:ring-0 sm:text-sm"
                                                id="comments" name="comments" placeholder="Add detailed feedback..."
                                                rows="6"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-end">
                                
                                    <button
                                        className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#06B6D4] px-5 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#06B6D4]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:w-auto"
                                        type="button">Save &amp; Return to Student</button>
                                </div>
                            </div>
                        </div>
                        )
                        
                        } 
                    
                       
                    </div>
                </div>
            </main>
        </div>
    </div>
</main>
    
    </>)
}



