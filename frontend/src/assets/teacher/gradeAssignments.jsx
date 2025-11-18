export function GradeAssignments(){

    return(<>
    <main className="font-display">
    <div
        className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden">
       <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark group/design-root">
        {/* TopNavBar */}
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
              style={{fontVariationSettings: "'FILL' 1, 'wght' 400"}}>dashboard</span>
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
            <main className="flex-1 px-4 py-8 md:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
            {/* Breadcrumbs  */}
                    <div className="flex flex-wrap items-center gap-2 pb-4">
                        <a className="text-gray-500 text-sm font-medium leading-normal" href="#">Courses</a>
                        <span className="text-gray-400 text-sm font-medium leading-normal">/</span>
                        <a className="text-gray-500 text-sm font-medium leading-normal" href="#">British Literature</a>
                        <span className="text-gray-400 text-sm font-medium leading-normal">/</span>
                        <a className="text-gray-500 text-sm font-medium leading-normal" href="#">Assignments</a>
                        <span className="text-gray-400 text-sm font-medium leading-normal">/</span>
                        <span className="text-primary text-sm font-medium leading-normal">Historical Analysis Essay</span>
                    </div>
                     {/* PageHeading */}
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-primary text-3xl font-bold leading-tight tracking-tight">Historical Analysis
                                Essay</h1>
                            <p className="text-gray-500 text-base font-normal leading-normal">Due: October 26, 2023 at 11:59
                                PM • 15/25 Graded</p>
                        </div>
                    </div>
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
                                        <span className="material-symbols-outlined text-xl">search</span>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg border border-gray-200 bg-white px-3 text-base font-normal leading-normal text-primary placeholder:text-gray-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                        placeholder="Search students..." value="" />
                                </div>
                            </label>
                    {/* Student List */}
                            <div className="flex flex-col gap-1 overflow-y-auto">
                        {/* Selected Student */}
                                <div
                                    className="flex cursor-pointer items-center gap-4 rounded-lg bg-secondary/10 p-3 ring-2 ring-secondary">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <div className="h-full w-full rounded-full bg-cover bg-center bg-no-repeat"
                                            data-alt="Student avatar"
                                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCsV_OWPEomCetrsdYLuv2fLCVM1F50xMpYR3xIffRVcDQVt7pK5yuv1PVcdAb8PYWnX4PpFuPh-jPAIhm4MpKq6ACIhuYUKV0ZpEP4ZevQTEWJzKvWiitmVWsvXUbuWnOeJtO7-fFOos9X6p7PcTnqvIwcl2VQOTjc34q9tyNed3o1GpwglXecqS-Pr1n5HfehBoeRD43cp9yMLUAVlkwPUyiGNfA0fvzuWxpy2a9reKyGsCRPYHG1lWzBX3-ESTN3Px8YntelT0")'}}>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-primary text-base font-medium leading-normal line-clamp-1">
                                            Eleanor Vance</p>
                                        <p className="text-sm font-normal leading-normal text-secondary">Submitted: Oct 25,
                                            10:15 PM</p>
                                    </div>
                                    <div className="ml-auto shrink-0">
                                        <span
                                            className="inline-flex items-center rounded-full bg-secondary/20 px-2.5 py-0.5 text-xs font-semibold text-secondary">Needs
                                            Grading</span>
                                    </div>
                                </div>
         {/* Graded Student Item */}
                                <div className="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-gray-50">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <div className="h-full w-full rounded-full bg-cover bg-center bg-no-repeat"
                                            data-alt="Student avatar"
                                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD73ZODr6SzDKWkrb5mYCWwETzc1AMh02Hn76tsSEA60LZ8M-098wOcTswrN1cPj7Ch8Vq7d6veI3nhaOyrw75XNyoCOhqVMXL-q_82CvjZ3XY182x1seTcf9gmSxcCW3b4m97p239NcgPOZybH6MNk8HFWgH4cHgdAFOAWO4HTCI8B2243IecbwO3GbO_jwv3GImE0nXjl_YCdqOq0fMwOcrKarLz_tR7xZDEGdUJgRBJZYQM59bxso21piL6VjSHew5NMoOc-UHk")'}}>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-primary text-base font-medium leading-normal line-clamp-1">Marcus
                                            Holloway</p>
                                        <p className="text-sm font-normal leading-normal text-gray-500">Graded: 88/100</p>
                                    </div>
                                    <div className="ml-auto shrink-0">
                                        <span
                                            className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">Graded</span>
                                    </div>
                                </div>
                              
                                <div className="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-gray-50">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <div className="h-full w-full rounded-full bg-cover bg-center bg-no-repeat"
                                            data-alt="Student avatar"
                                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGBpzirnOmJ9X-UtZHaqs_DVXWA2-EZ6-BYz1kqi8wT_3IgRXrz0YsqSlO1o2Mj3D507cklVj1KTfAMZToxto-dEnGchxGaIfwyck8fmcwY5DbIGtaOFzgU1jEifrh9XTfv1GLaFQKwhCFlx7fZ6fQYhLamwMZyxaiIq6-MS-_Xe9zvDKywdtG2zLJ60IrXMkLHpjNKMDHW80mI165HWEGXoRttYJ1iE7yJhINNz4zCDpdxKb73Mrjys2QvjDqVwgjyNQ51W3zkzQ")'}}>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-primary text-base font-medium leading-normal line-clamp-1">Clara
                                            Oswald</p>
                                        <p className="text-sm font-normal leading-normal text-accent">Submitted Late</p>
                                    </div>
                                    <div className="ml-auto shrink-0">
                                        <span
                                            className="inline-flex items-center rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">Late</span>
                                    </div>
                                </div>
                                {/* Missing Submission Item */}
                                <div className="flex cursor-pointer items-center gap-4 rounded-lg p-3 hover:bg-gray-50">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <div className="h-full w-full rounded-full bg-cover bg-center bg-no-repeat"
                                            data-alt="Student avatar"
                                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSjOuLWg5FoLvOpJX4AhgsKeLLtBa3EWCwfMWSp9jhLc_SRkzm5B4LszDUSDmdb8G38CpZBWKExiOsBFbEewIIwzajoeWKtphSFmP1deiguDvAhnNYZ0guk_Y6QrNqHMEJqwKpENygBgeBPwnxNdhRmbAHQLKazwteLfyVvebrXXKdzlFOkcZDyQC388Mlg12RLPxOlywZMCB1f4_XATTpvSjdXgaZRf926seHJg2aNlTh_VfCFeiwlXMgeKgKFW4I1WaAAzvybGQ")'}}>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-primary text-base font-medium leading-normal line-clamp-1">Leo
                                            Fitz</p>
                                        <p className="text-sm font-normal leading-normal text-gray-500">Not Submitted</p>
                                    </div>
                                    <div className="ml-auto shrink-0">
                                        <span
                                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800">Missing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-bold text-primary">Submission Details</h3>
                                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                                    <div>
                                        <p className="text-base font-medium text-primary">Eleanor Vance</p>
                                        <p className="text-sm text-gray-500">Submitted on October 25, 2023, 10:15 PM</p>
                                    </div>
                                    <a className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-200"
                                        href="#">
                                        <span className="material-symbols-outlined text-base">download</span>
                                        Download File
                                    </a>
                                </div>
                                <div className="mt-4 h-96 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-gray-700">The historical analysis of the Tudor period reveals a
                                        significant shift in England&#39;s political and religious landscape. The
                                        establishment of the Church of England under Henry VIII was not merely a matter
                                        of royal succession but a profound act of statecraft that reshaped national
                                        identity...</p>
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
                                                <div className="flex items-center space-x-3">
                                                    <button
                                                        className="rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-primary"
                                                        type="button"><span
                                                            className="material-symbols-outlined text-xl">format_bold</span></button>
                                                    <button
                                                        className="rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-primary"
                                                        type="button"><span
                                                            className="material-symbols-outlined text-xl">format_italic</span></button>
                                                    <button
                                                        className="rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-primary"
                                                        type="button"><span
                                                            className="material-symbols-outlined text-xl">format_list_bulleted</span></button>
                                                    <button
                                                        className="rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-primary"
                                                        type="button"><span
                                                            className="material-symbols-outlined text-xl">format_list_numbered</span></button>
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
                                        className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
                                        type="button">Save as Draft</button>
                                    <button
                                        className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:w-auto"
                                        type="button">Save &amp; Return to Student</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</main>
    
    </>)
}



