import {Sidebar} from '../globalComponents/sidebar';

export function CreateNewAssignment (){

 

  return(<>

  <div className="font-sans bg-[#F3F4F6] dark:bg-[#111827]-900 text-[#111827]">
  <div className="flex min-h-screen">
 <Sidebar />
    <main className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#111827]">Create New Assignment</h1>
        </div>
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-[#111827] mb-6">Assignment Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="assignment-title">Assignment
                  Title</label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                  id="assignment-title" placeholder="e.g., The Great Gatsby - Chapter 1 Analysis" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="assignment-description">Assignment
                  Description</label>
                <div className="mt-1">
                  <div className="w-full bg-white rounded-lg border border-gray-300 shadow-sm">
                    <div className="flex items-center justify-between px-3 py-2 border-b">
                      <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
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
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg">
                      <textarea
                        className="form-textarea block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
                        id="assignment-description" placeholder="Enter detailed instructions for the assignment..."
                        rows="8"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-[#111827] mb-6">Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="due-date">Due Date</label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                  id="due-date" type="datetime-local" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="points-possible">Points
                  Possible</label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                  id="points-possible" placeholder="100" type="number" />
              </div>
            </div>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-[#111827] mb-6">Attachments</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Supporting Materials</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                   
                 <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#9ca3af"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/></svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#06B6D4] hover:text-[#06B6D4]-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06B6D4]"
                        htmlFor="file-upload">
                        <span>Upload a file</span>
                        <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOCX, PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </div>
        <footer className="mt-8 py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button
            className="px-5 py-2.5 text-sm font-medium text-red-600 bg-white rounded-lg border border-red-200 hover:bg-red-50 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-200 w-full sm:w-auto">
            Delete Assignment
          </button>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-4 w-full sm:w-auto">
           
            <button
              className="px-5 py-2.5 text-sm font-medium text-white  rounded-lg bg-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]-300 w-full sm:w-auto">
              Publish Assignment
            </button>
          </div>
        </footer>
      </div>
    </main>
  </div>

</div>
  
  </>)
}



