

import { Sidebar } from "../globalComponents/sidebar";
import { fakeAnnouncement } from '../globalComponents/fakeData/fakeAnnouncements';
export function Announcements() {
    return (
        <div className="font-display bg-background">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="relative flex min-h-screen w-full">
                    {/* TopNavBar Component  */}
                    <Sidebar />

                    <main className="flex flex-1 justify-center px-4 py-8 sm:px-6 lg:px-8 xl:px-40">
                        <div className="layout-content-container flex w-full max-w-4xl flex-col gap-6">
                            {/* PageHeading Component  */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <h1 className="text-primary text-4xl font-black leading-tight tracking-[-0.033em]">Announcements</h1>
                            </div>
                            {/* Chips (Filters) Component  */}
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                <button
                                    className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border-2 border-secondary bg-secondary/10 px-4 text-sm font-semibold text-secondary">
                                    <span>All Classes</span>
                                </button>
                                <button
                                    className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white px-4 text-sm font-medium text-primary/70 shadow-sm hover:bg-gray-50">
                                    <span>Global</span>
                                </button>
                                <button
                                    className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white px-4 text-sm font-medium text-primary/70 shadow-sm hover:bg-gray-50">
                                    <span>Math 101</span>
                                </button>
                                <button
                                    className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white px-4 text-sm font-medium text-primary/70 shadow-sm hover:bg-gray-50">
                                    <span>History 203</span>
                                </button>
                            </div>
                            {/* Announcements Feed  */}
                            <div className="flex flex-col gap-4">
                                {fakeAnnouncement.map((announcement) => (
                                    <div
                                        className="group/card relative flex flex-col items-stretch justify-start overflow-hidden rounded-xl border border-transparent bg-white shadow-sm transition-all hover:shadow-md @container">
                                        <div className="absolute left-0 top-0 h-full w-1.5 bg-secondary"></div>
                                        <div className="flex flex-col gap-4 p-5 pl-7 @sm:flex-row @sm:items-start">
                                            <div className="flex w-full min-w-0 grow flex-col items-stretch justify-center gap-2">
                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                                    <p
                                                        className="text-primary text-lg font-bold leading-tight tracking-[-0.015em] group-hover/card:text-secondary transition-colors">
                                                        {announcement.title}</p>
                                                    
                                                </div>
                                                <p className="text-primary/70 text-sm font-normal leading-relaxed">{announcement.message}</p>
                                                <div className="flex items-center gap-2 text-xs text-primary/50">
                                                    <span>{announcement.announcementBy}</span>
                                                    <span>•</span>
                                                    <span>2 hours ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}




                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}



