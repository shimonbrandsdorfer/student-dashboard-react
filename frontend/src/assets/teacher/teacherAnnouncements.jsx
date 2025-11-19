

import { Sidebar } from '../globalComponents/sidebar';
export function TeacherAnnouncements() {

    

    const fakeAnnouncements = [{
        id: 1,
        title: 'Parent-Teacher Conference Sign-ups',
        content: `Create a basic HTML page using at least 10 different HTML elements inside the <body>. The goal is to get comfortable writing well-formed HTML and committing it properly to the class repository.


                      Create a new file in the vp2025 repo:
                      The filename should be  [your-name].html (e.g., sara-goldstein.html).
                      Inside the file, write a complete HTML document with:
                      <!DOCTYPE html><html>, <head>, <title>, and <body> tags.
                        In the <body>, use at least 10 different HTML elements, that were covered in class.

                      Commit and push, create a PR.

                      Submit the link to your PR`,
        datePublished: '2021-08-29T18:45:00Z',
        ClassWide: true,

    }, {
        id: 2,
        title: 'Reminder: Science Fair Project Due',
        content: `Create a basic HTML page using at least 10 different HTML elements inside the <body>. The goal is to get comfortable writing well-formed HTML and committing it properly to the class repository.


                      Create a new file in the vp2025 repo:
                      The filename should be  [your-name].html (e.g., sara-goldstein.html).
                      Inside the file, write a complete HTML document with:
                      <!DOCTYPE html><html>, <head>, <title>, and <body> tags.
                        In the <body>, use at least 10 different HTML elements, that were covered in class.

                      Commit and push, create a PR.

                      Submit the link to your PR`,
        datePublished: '2022-05-04T18:45:00Z',
        ClassWide: true,

    }, {
        id: 3,
        title: 'School Play Audition Info',
        content: `Create a basic HTML page using at least 10 different HTML elements inside the <body>. The goal is to get comfortable writing well-formed HTML and committing it properly to the class repository.


                      Create a new file in the vp2025 repo:
                      The filename should be  [your-name].html (e.g., sara-goldstein.html).
                      Inside the file, write a complete HTML document with:
                      <!DOCTYPE html><html>, <head>, <title>, and <body> tags.
                        In the <body>, use at least 10 different HTML elements, that were covered in class.

                      Commit and push, create a PR.

                      Submit the link to your PR`,
        datePublished: '2023-04-11T18:45:00Z',
        ClassWide: false,

    }]
    return (<>


        <main className="font-sans bg-light-gray text-charcoal">
            <div className="relative flex min-h-screen w-full">
                {/* SideNavBar  */}
                <Sidebar />
                {/* Main Content  */}
                <main className="flex-1 p-8">
                    <div className="max-w-7xl mx-auto">
                        {/* PageHeading  */}
                        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
                            <h1 className="text-charcoal text-4xl font-black leading-tight tracking-tighter font-display">Announcements</h1>
                           
                        </header>
                        {/* Two-column layout  */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Left Column: Composition Form  */}
                            <div className="lg:col-span-3">
                                <div className="bg-white p-6 rounded-lg shadow-subtle">
                                    <h2 className="text-charcoal text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6 font-display">New Announcement</h2>
                                    <form className="space-y-6">
                                        {/* Announcement Title  */}
                                        <label className="flex flex-col">
                                            <p className="text-charcoal text-base font-medium leading-normal pb-2">Announcement Title</p>
                                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-charcoal focus:outline-0 focus:ring-2 focus:ring-cyan/50 border border-gray-300 bg-white focus:border-cyan h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal" placeholder="e.g., Upcoming Field Trip Details" value="" />
                                        </label>
                                        {/* Body with Rich Text Editor  */}
                                        <div className="flex flex-col">
                                            <p className="text-charcoal text-base font-medium leading-normal pb-2">Body</p>
                                            <div className="border border-gray-300 rounded focus-within:ring-2 focus-within:ring-cyan/50 focus-within:border-cyan">
                                                <div className="flex items-center space-x-1 sm:pr-4">
                                                    <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                                        type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z" /></svg>
                                                    </button>
                                                    <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                                        type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z" /></svg>
                                                    </button>
                                                    <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                                        type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M200-120v-80h560v80H200Zm280-160q-101 0-157-63t-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63Z" /></svg>
                                                    </button>
                                                    <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                                        type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z" /></svg>
                                                    </button>
                                                    <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                                        type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z" /></svg>
                                                    </button>
                                                    <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                                        type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#6b7280"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" /></svg>
                                                    </button>
                                                </div>
                                                <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-b text-charcoal focus:outline-0 focus:ring-0 border-0 bg-white min-h-48 placeholder:text-gray-400 p-3 text-base font-normal leading-normal" placeholder="Write the main content of your announcement here..."></textarea>
                                            </div>
                                        </div>
                                        {/* Audience  */}
                                        <div className="flex flex-col">
                                            <p className="text-charcoal text-base font-medium leading-normal pb-2">Audience</p>
                                            <div className="flex items-center gap-2 rounded bg-gray-100 p-1 w-fit">
                                                <button className="px-4 py-1.5 text-sm font-semibold text-charcoal bg-white rounded shadow-sm" type="button">Class-wide</button>
                                                <button className="px-4 py-1.5 text-sm font-medium text-gray-600" type="button">Global</button>
                                            </div>
                                        </div>
                                       
                                        {/* Action Buttons  */}
                                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                                          
                                            <button className="flex min-w-[84px] items-center justify-center rounded-lg h-11 px-5 bg-[#06B6D4] text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-cyan/90 transition-colors" type="button">
                                                <span className="truncate">Publish Now</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Right Column: Previously Posted  */}
                            <div className="lg:col-span-2">
                                <div className="bg-white p-6 rounded-lg shadow-subtle h-full">
                                    <h2 className="text-charcoal text-[22px] font-bold leading-tight tracking-[-0.015em] mb-2 font-display">History</h2>
                                    {/* Search & Filter  */}
                                    <div className="flex gap-4 mb-4">
                                         <label className="flex h-11 w-full flex-col">
                                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                                    <div
                                        className="flex items-center justify-center rounded-l-lg border-y border-l border-gray-200 bg-gray-50 pl-3 text-gray-500">
                                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000005c"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg border border-gray-200 bg-white px-3 text-base font-normal leading-normal text-primary placeholder:text-gray-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                                        placeholder="Search Announcements..." value="" />
                                </div>
                            </label>
                                        <button className="flex items-center gap-2 rounded border border-gray-300 h-10 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" /></svg>
                                            Filter
                                        </button>
                                    </div>
                                    {/* Announcements List  */}
                                    <ul className="space-y-4">
                                        {fakeAnnouncements.map((announcement) => (
                                            <li key={announcement.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-charcoal">{announcement.title}</h3>
                                                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{announcement.content}</p>
                                                    </div>
                                                    <button className="text-gray-500 hover:text-charcoal p-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-2 mt-3 text-xs">
                                                    
                                                    <span className="inline-flex items-center font-semibold px-2 py-0.5 rounded-full bg-magenta/10 text-magenta">{announcement.ClassWide? 'Class-wide': 'Global'}</span>
                                                    <span className="text-gray-400 ml-auto">{announcement.datePublished}</span>
                                                </div>
                                            </li>
                                        ))}




                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    </>)
}



