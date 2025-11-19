
import { Sidebar } from "./sidebar";
import { useParams } from "react-router-dom";
import { fakeAssignments } from './fakeData/fakeAssignments';
import { useState, useEffect } from "react";
import { useProjectInfo } from "../context";

export function StudentAssSubmit() {
  const id = Number(useParams().id);
  const { role } = useProjectInfo();



  const [assignmentToDisplay, setAssignmentToDisplay] = useState({});

  useEffect(() => {
    setAssignmentToDisplay(fakeAssignments.find((a) => a.id === id))


  }, []);
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#111827] dark:text-gray-200">
      <div className="relative flex min-h-screen w-full">
        {/* TopNavBar  */}
        <Sidebar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-8">

            {/* Main Content Grid  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Assignment Info  */}
              {console.log(Object.keys(assignmentToDisplay).length !== 0)}
              {Object.keys(assignmentToDisplay).length !== 0 &&
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                    {/* PageHeading  */}
                    <h1 className="text-primary dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                      {assignmentToDisplay.title}</h1>
                    {/* Chips  */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      <div
                        className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#EC4899]/10 text-[#EC4899] px-4">

                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ec4899"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
                        <p className="text-sm font-medium">Due: Oct 26, 11:59 PM</p>
                      </div>
                      <div
                        className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-background-dark px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#4b5563"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{assignmentToDisplay.pointsPossible} Points Possible</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                    {/* SectionHeader  */}
                    <h2 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Assignment
                      Instructions</h2>
                    <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mt-4 space-y-4">
                      <p>{assignmentToDisplay.description}</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                    <h2 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Attachments
                    </h2>
                    <ul className="mt-4 space-y-3">
                      <li
                        className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#06b6d4"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>

                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Essay Rubric.pdf</span>
                        </div>
                        <a className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-background-dark text-gray-500 dark:text-gray-400"
                          href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#6b7280"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        </a>
                      </li>
                      <li
                        className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#06b6d4"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Source Material.docx</span>
                        </div>
                        <a className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-background-dark text-gray-500 dark:text-gray-400"
                          href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#6b7280"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              }
              {/* Right Column: Submission & Status  */}
              {role === 'student' &&
               <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary dark:text-white">Status</h3>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">{assignmentToDisplay.submited ? 'Submited' : 'Not Submited'}</p>
                  </div>
                </div>
                {!assignmentToDisplay.submited &&

                  <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-bold text-primary dark:text-white">Submit Your Work</h3>
                    <div className="mt-4">
                      {/* Tabs  */}
                      <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                          <a className="whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm text-[#06B6D4] border-[#06B6D4]"
                            href="#">
                            File Upload
                          </a>
                          <a className="whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 border-transparent"
                            href="#">
                            Text Entry
                          </a>
                        </nav>
                      </div>
                      {/* File Uploader  */}
                      <div className="mt-6">
                        <div
                          className="flex justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 px-6 py-10">
                          <div className="text-center">
                            <svg className="material-symbols-outlined text-4xl text-gray-400 dark:text-gray-500 mx-auto" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="36px" fill="#9ca3af"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-300">
                              <label
                                className="relative cursor-pointer rounded-md font-semibold text-[#06B6D4] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#06B6D4] focus-within:ring-offset-2 dark:focus-within:ring-offset-primary hover:text-[#06B6D4]/80"
                                htmlFor="file-upload">
                                <span>Browse files</span>
                                <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">PDF, DOCX, PNG, JPG up to 10MB</p>
                          </div>
                        </div>
                      </div>
                      <button
                        className="mt-6 w-full flex items-center justify-center gap-2 rounded-md bg-[#06B6D4] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#06B6D4]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ffffff"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" /></svg>
                        Submit Assignment
                      </button>
                    </div>
                  </div>}

              </div>
              }
             
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


