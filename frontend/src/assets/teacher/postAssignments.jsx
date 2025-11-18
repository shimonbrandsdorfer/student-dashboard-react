export function CreateNewAssignment (){

  return(<>

  <body className="font-sans bg-light-gray dark:bg-charcoal-900 text-charcoal">
  <div className="flex min-h-screen">
    <aside
      className="sticky top-0 h-screen bg-white dark:bg-primary/20 p-4 flex flex-col w-64 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-4">
     <a href="../user-profile.html" className="flex items-center gap-3 p-2">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="Teacher's profile picture"
            style={{backgroundImage: 'url("../3.jpg")'}}>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#111827] dark:text-white text-base font-medium leading-normal">Abraham Perl</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Teacher</p>
          </div>
        </a>
        <nav className="flex flex-col gap-2 mt-4">
          <a  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/30" href="./t-dashboard.html">
            <span className="material-symbols-outlined text-[#111827] dark:text-white"
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
 </span>
            <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Dashboard</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" href="./t-ass.html">
            <span className="material-symbols-outlined text-[#111827] dark:text-white">assignment</span>
            <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Assignments</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" href="./t-submit.html">
            <span className="material-symbols-outlined text-[#111827] dark:text-white">move_to_inbox</span>
            <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Submissions</p>
          </a>
         
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" href="./Announcements.html">
            <span className="material-symbols-outlined text-[#111827] dark:text-white">campaign</span>
            <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Announcements</p>
          </a>
        </nav>
      </div>
      <div className="flex flex-col gap-1 mt-auto">
        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" href="#">
          <span className="material-symbols-outlined text-[#111827] dark:text-white">settings</span>
          <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Settings</p>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" href="#">
          <span className="material-symbols-outlined text-[#111827] dark:text-white">help</span>
          <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Help</p>
        </a>
      </div>
    </aside>
    <main className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-charcoal">Create New Assignment</h1>
        </div>
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-charcoal mb-6">Assignment Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="assignment-title">Assignment
                  Title</label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan focus:ring-cyan"
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
                            type="button"><span className="material-symbols-outlined text-base">format_bold</span></button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button"><span
                              className="material-symbols-outlined text-base">format_italic</span></button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button"><span
                              className="material-symbols-outlined text-base">format_underlined</span></button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button"><span
                              className="material-symbols-outlined text-base">format_list_bulleted</span></button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button"><span
                              className="material-symbols-outlined text-base">format_list_numbered</span></button>
                          <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            type="button"><span className="material-symbols-outlined text-base">link</span></button>
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
            <h2 className="text-xl font-semibold text-charcoal mb-6">Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="due-date">Due Date</label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan focus:ring-cyan"
                  id="due-date" type="datetime-local" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="points-possible">Points
                  Possible</label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan focus:ring-cyan"
                  id="points-possible" placeholder="100" type="number" />
              </div>
            </div>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-charcoal mb-6">Attachments</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Supporting Materials</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <span className="material-symbols-outlined text-5xl text-gray-400">cloud_upload</span>
                    <div className="flex text-sm text-gray-600">
                      <label
                        className="relative cursor-pointer bg-white rounded-md font-medium text-cyan hover:text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan"
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="rubric">Attach Rubric</label>
                <select
                  className="form-select block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan focus:ring-cyan"
                  id="rubric">
                  <option>Select a rubric...</option>
                  <option>Essay Writing Rubric</option>
                  <option>Presentation Skills Rubric</option>
                  <option>-- Create New Rubric --</option>
                </select>
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
              className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan focus:z-10 focus:ring-2 focus:ring-cyan w-full sm:w-auto">
              Save as Draft
            </button>
            <button
              className="px-5 py-2.5 text-sm font-medium text-white bg-cyan rounded-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 w-full sm:w-auto">
              Publish Assignment
            </button>
          </div>
        </footer>
      </div>
    </main>
  </div>

</body>
  
  </>)
}



