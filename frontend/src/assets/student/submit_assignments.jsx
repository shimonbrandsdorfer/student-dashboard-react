
                import { Sidebar } from "./sidebar";

export function StudentAssSubmit() {
  return (

    <body className="font-display bg-background-light dark:bg-background-dark text-[#111827] dark:text-gray-200">
      <div className="relative flex min-h-screen w-full">
        {/* TopNavBar  */}
         <Sidebar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-8">
            {/* Breadcrumbs  */}
            <div className="flex flex-wrap gap-2 items-center">
              <a className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-[#06B6D4]" href="#">Courses</a>
              <span className="material-symbols-outlined text-gray-400" style={{ fontSize: '16px' }}>chevron_right</span>
              <a className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-[#06B6D4]" href="#">History 101</a>
              <span className="material-symbols-outlined text-gray-400" style={{ fontSize: '18px' }}>chevron_right</span>
              <span className="text-primary dark:text-white text-sm font-medium">Assignment Details</span>
            </div>
            {/* Main Content Grid  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Assignment Info  */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                  {/* PageHeading  */}
                  <h1 className="text-primary dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">History of
                    Ancient Rome Essay</h1>
                  {/* Chips  */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div
                      className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#EC4899]/10 text-[#EC4899] px-4">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_today</span>
                      <p className="text-sm font-medium">Due: Oct 26, 11:59 PM</p>
                    </div>
                    <div
                      className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-background-dark px-4">
                      <span className="material-symbols-outlined text-gray-600 dark:text-gray-300"
                        style={{ fontSize: '18px' }}>check_circle</span>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-200">100 Points Possible</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                  {/* SectionHeader  */}
                  <h2 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Assignment
                    Instructions</h2>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mt-4 space-y-4">
                    <p>Write a 1,500-2,000 word essay on the socio-economic factors that led to the decline of the Roman
                      Republic. Your essay should analyze at least three primary factors and use a minimum of five academic
                      sources, including the provided materials.</p>
                    <p>Learning Objectives:</p>
                    <ul className="list-disc pl-5">
                      <li>Understand the key events and figures of the late Roman Republic.</li>
                      <li>Analyze historical sources for bias and context.</li>
                      <li>Develop a compelling historical argument supported by evidence.</li>
                      <li>Properly cite sources using Chicago style.</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                  <h2 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Attachments
                  </h2>
                  <ul className="mt-4 space-y-3">
                    <li
                      className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#06B6D4]">description</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Essay Rubric.pdf</span>
                      </div>
                      <a className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-background-dark text-gray-500 dark:text-gray-400"
                        href="#">
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                      </a>
                    </li>
                    <li
                      className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#06B6D4]">article</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Source Material.docx</span>
                      </div>
                      <a className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-background-dark text-gray-500 dark:text-gray-400"
                        href="#">
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Right Column: Submission & Status  */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-white dark:bg-primary shadow-sm rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary dark:text-white">Status</h3>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">Not Started</p>
                  </div>
                </div>
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
                          <span
                            className="material-symbols-outlined text-4xl text-gray-400 dark:text-gray-500 mx-auto">upload_file</span>
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
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rocket_launch</span>
                      Submit Assignment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  )
}


