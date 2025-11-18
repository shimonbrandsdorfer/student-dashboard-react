

                import { Sidebar } from "./sidebar";
  export function Announcements(){
    return(
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
            {/* Card 1 (Unread, Urgent)  */}
            <div
              className="group/card relative flex flex-col items-stretch justify-start overflow-hidden rounded-xl border border-transparent bg-white shadow-sm transition-all hover:shadow-md @container">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-secondary"></div>
              <div className="flex flex-col gap-4 p-5 pl-7 @sm:flex-row @sm:items-start">
                <div className="flex w-full min-w-0 grow flex-col items-stretch justify-center gap-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p
                      className="text-primary text-lg font-bold leading-tight tracking-[-0.015em] group-hover/card:text-secondary transition-colors">
                      Urgent: School Closure Tomorrow</p>
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">Urgent</span>
                      <span
                        className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-primary/60">Global</span>
                    </div>
                  </div>
                  <p className="text-primary/70 text-sm font-normal leading-relaxed">Due to unforeseen weather conditions,
                    Viewpoint Academy will be closed tomorrow, October 27th. All classes and extracurricular activities
                    are cancelled. Please stay safe and check your email for further updates.</p>
                  <div className="flex items-center gap-2 text-xs text-primary/50">
                    <span>Administration</span>
                    <span>•</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 (Unread)  */}
            <div
              className="group/card relative flex flex-col items-stretch justify-start overflow-hidden rounded-xl border border-transparent bg-white shadow-sm transition-all hover:shadow-md @container">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-secondary"></div>
              <div className="flex flex-col gap-4 p-5 pl-7 @sm:flex-row @sm:items-start">
                <div className="flex w-full min-w-0 grow flex-col items-stretch justify-center gap-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p
                      className="text-primary text-lg font-bold leading-tight tracking-[-0.015em] group-hover/card:text-secondary transition-colors">
                      Midterm Exam Study Guide Available</p>
                    <span
                      className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-primary/60">Math
                      101</span>
                  </div>
                  <p className="text-primary/70 text-sm font-normal leading-relaxed">The study guide for the upcoming Math
                    101 midterm exam has been posted in the &#39;Resources&#39; section. Please review it carefully. I will be
                    holding extra office hours on Friday to answer any questions you may have.</p>
                  <div className="flex items-center gap-2 text-xs text-primary/50">
                    <span>Mr. Smith</span>
                    <span>•</span>
                    <span>1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 (Read)  */}
            <div
              className="group/card flex flex-col items-stretch justify-start rounded-xl bg-white/70 shadow-sm transition-all hover:shadow-md @container">
              <div className="flex flex-col gap-4 p-5 @sm:flex-row @sm:items-start">
                <div className="flex w-full min-w-0 grow flex-col items-stretch justify-center gap-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p
                      className="text-primary/80 text-lg font-bold leading-tight tracking-[-0.015em] group-hover/card:text-secondary transition-colors">
                      Reminder: History 203 Essay Due Friday</p>
                    <span
                      className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-primary/60">History
                      203</span>
                  </div>
                  <p className="text-primary/60 text-sm font-normal leading-relaxed">Just a friendly reminder that your
                    research essays are due this Friday at 11:59 PM. Please submit them through the online portal. No
                    late submissions will be accepted.</p>
                  <div className="flex items-center gap-2 text-xs text-primary/50">
                    <span>Mrs. Davis</span>
                    <span>•</span>
                    <span>3 days ago</span>
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

    )
  }



