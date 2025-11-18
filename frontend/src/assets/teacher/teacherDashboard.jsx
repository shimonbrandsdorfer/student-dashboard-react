


export function TeacherDashboard (){

  return(<>

  
<main className="font-display">
  <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark group/design-root">
    <aside
      className="sticky top-0 h-screen bg-white dark:bg-primary/20 p-4 flex flex-col w-64 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-4">
     <a href="../user-profile.html" className="flex items-center gap-3 p-2">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="Teacher's profile picture"
            style={{backgroundImage: "url('../3.jpg')"}} >
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#111827] dark:text-white text-base font-medium leading-normal">Abraham Perl</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Teacher</p>
          </div>
        </a>
        <nav className="flex flex-col gap-2 mt-4">
          <a  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/30" href="./t-dashboard.html">
            <span className="material-symbols-outlined text-[#111827] dark:text-white"
              style={{fontVariationSettings: " 'FILL' 1, 'wght' 400"}}>dashboard</span>
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
    <main className="flex-1 p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#111827] dark:text-white text-3xl font-bold leading-tight">Welcome back, Mr. Harrison!</h1>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Managing: Grade 10 English
              Literature</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div
            className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-primary/20 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#111827] dark:text-white text-base font-medium leading-normal">Assignments Created</p>
              <span className="material-symbols-outlined text-[#06B6D4]">assignment</span>
            </div>
            <p className="text-[#06B6D4] text-4xl font-bold leading-tight">12</p>
          </div>
          <div
            className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-primary/20 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#111827] dark:text-white text-base font-medium leading-normal">Students Enrolled</p>
              <span className="material-symbols-outlined text-[#06B6D4]">group</span>
            </div>
            <p className="text-[#06B6D4] text-4xl font-bold leading-tight">28</p>
          </div>
          <div
            className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-primary/20 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#111827] dark:text-white text-base font-medium leading-normal">Upcoming Deadlines</p>
              <span className="material-symbols-outlined text-[#06B6D4]">pending_actions</span>
            </div>
            <p className="text-[#06B6D4] text-4xl font-bold leading-tight">3</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-[#111827] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4">Quick
            Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center justify-center gap-2 flex-1 min-w-[200px] cursor-pointer rounded-lg h-12 px-6 bg-[#EC4899] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="truncate">Create Assignment</span>
            </button>
            <button
              className="flex items-center justify-center gap-2 flex-1 min-w-[200px] cursor-pointer rounded-lg h-12 px-6 bg-white dark:bg-primary/30 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-primary/40 transition-colors">
              <span className="material-symbols-outlined">visibility</span>
              <span className="truncate">View Submissions</span>
            </button>
            <button
              className="flex items-center justify-center gap-2 flex-1 min-w-[200px] cursor-pointer rounded-lg h-12 px-6 bg-white dark:bg-primary/30 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-primary/40 transition-colors">
              <span className="material-symbols-outlined">campaign</span>
              <span className="truncate">Post Announcement</span>
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-primary/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-[#111827] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Class
            Roster</h3>
          <div
            className="bg-primary/5 dark:bg-primary/20 rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Enrollment Code</p>
              <p className="text-lg font-bold text-[#111827] dark:text-white">ENG10-LIT-H</p>
            </div>
            <button
              className="flex items-center justify-center gap-2 cursor-pointer rounded-md h-10 px-4 bg-white dark:bg-primary/30 border border-gray-300 dark:border-gray-600 text-[#111827] dark:text-white text-sm font-bold leading-normal hover:bg-gray-50 dark:hover:bg-primary/40 transition-colors">
              <span className="material-symbols-outlined text-base">link</span>
              <span className="truncate">Copy Invite Link</span>
            </button>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            <div
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                  data-alt="Avatar of Olivia Chen"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAIebkebgvxWeLbvrp66zLXlxHCxW6Lxo2otDgWNKyXnyoRds1fxingiRb1TxOIT5Q7WCYJ_CCUf9ssuSAPa_1FDr0hEk9ZU1hqwstaM2NQ0HjOJDgSn_oispQvnJ49FMwscN5YE1doYRjElHCGlZeqrGR5BRbM6ShZVV6tcosQrp10k_jZAGVwMphsdQeFh7WQQMtGfybyvG3NYrU1sk6HQaQ2qSiz2qomAtw6TyImkjBegWPT8sDnlzLQT_eww60SuXzeNOeiKc")'}}>
                </div>
                <p className="text-[#111827] dark:text-white text-sm font-medium">Olivia Chen</p>
              </div>
            </div>
            <div
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                  data-alt="Avatar of Benjamin Carter"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByorQdNHfEINtxiH7LfK7VaaOEI54EKfX3q4DU_MtMTlM-ssBzM-SCRDgSm4FLHguVCSoh4wNR90VP4Yr2Y5QbZUNaPoI8s4N-SbHN91c0prh5kZHmv2MPJuIIKVAmdNFAy1oMmT_IYTE-nZ6Ru7IwOK5nhhqLfvMPkbhQswHeJroBbbnZtniRtyRAfu0PizRNDQb8LP4ZmZJGarlc-fAPkV1rlYkYFl3PDjvaS7nbQBXx4TG0U-923a1ac3YJ6F2IqroJJv0F96Y")'}}>
                </div>
                <p className="text-[#111827] dark:text-white text-sm font-medium">Benjamin Carter</p>
              </div>
            </div>
            <div
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                  data-alt="Avatar of Sophia Rodriguez"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDckBmdAqqYsF96ftE_A7KLcfcppZ1tM1D5DHZew4mYVWsc7wFn1T5e4FZG1AqTwhjto6eEoBOcYUZ_YUI2Jh-4OgeujjBp5wTyRPrXlT92iyoKXBI2YFDj297ikxLBMwVGZVUKocBTpGd0d2HRux64djcgwl3BU1BkXrJCVLn7ZVEvnFor0afmfS1zJlWWXSRzRiVBowPZ4eUmboLwTUfEt_uddJIhIOn1ca6_MS9cap1pAfc0JDE_fMwXX2Ar4jLCekr9jBMcmA4")'}}>
                </div>
                <p className="text-[#111827] dark:text-white text-sm font-medium">Sophia Rodriguez</p>
              </div>
            </div>
            <div
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                  data-alt="Avatar of Liam Goldberg"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF50Ndd51i53s7ghaYU_dVG7pLpBEvFCwIZAYNcdJLMhFVv5jEatdndQWIWsr71_8LB9AVooPqIQ_V936OgJeF_8fX9QITQCSdGq7v5AG8fJOlaMSai1J4kN_0wV2mdAjzkhyQYFGgkwmQbKbbwxvZ6qgFv0a4Q-Q6pxA6R0BFyNwzkhvO7i_LGU_ht1V02A4MtTRnjeKwCwjS44I8cCWVtogL9sf28xG5C0jIhYJPjAlEWOSqzXFuQZLm5ruvYV-mBib4V_DBWbg")'}}>
                </div>
                <p className="text-[#111827] dark:text-white text-sm font-medium">Liam Goldberg</p>
              </div>
            </div>
            <div
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                  data-alt="Avatar of Chloe Nguyen"
               style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOyNN8W216e8vnJFKF7ySYql6PsMUKRPTCb5d8axNjaLWMBuOEzHCesGGUlOYyGAw7yf2GLXt7IbspPRF0dBKVT7-fa10A4QTtn37xLlhAYhraYs6L6KaQYSwGW2I_Hs4JUupXLveaa4d8iQZ4QetJVQqDF6fdgmk7q__piYZp53rfBn92uWRfJguIvFyxyUTw36NphZvFQTrH3IxB9gdMxIbn9AQEhAWR9m0Lj7luRmcJFWZP_VwUAFFK43UZXeA1027RNdGlQZo")'}}>
                </div>
                <p className="text-[#111827] dark:text-white text-sm font-medium">Chloe Nguyen</p>
              </div>
            </div>
            <div
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                  data-alt="Avatar of Ethan Miller"
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4gAdQ9T-Q6bFBK1I4D_X0T4hn6LYvzwqj-UtOO9kgNjTdbu4vMaFwU6vaMy9CoSOx0y_RepyJ12KhAIVUIvECZoiSMBcI6sgII0l6vKzrORFbe-AL8au8_CevMoeZzwMBFYNWZUunRF-mRb4DM3k4UitAig-CRTkCUXfd5REexsYa_0K9X59h-gaJ3altWkqcEsOf65OYcWfOKUdi61G5fRdzCvG7GvkcBlVxvbZOdkHzUIbnnddGxTmSOP_nbTsQc1HJb-XPUGM")'}}>
                </div>
                <p className="text-[#111827] dark:text-white text-sm font-medium">Ethan Miller</p>
              </div>
            </div>
            <div
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                  data-alt="Avatar of Ava Thompson"
                   style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFe5Fvx3ihsMEfSvd1ZZDlQMSsnGMeoeSkaYg7KadJwXUS7PMwHXvpl8Yt3Srx-t-z9bm9PMxoz2QcUhkEXDCv9sMpxBRtQvSCwuypi0j7IIQIDQOuad-JH7Q3p_RIejUAMhsn4R42-6kk5sHgpwjwImt698c5jujTME0y6dZVmpZUt0uXW8iSvyhuQMsCRt7OvNxS-EbGcajnLr9x-WL2Ad1M07VBpLiGDbVunq1hFtQ9Cap45cjrILSBcYccxUzJaDWFI90jf_o")'}}>
                </div>
                <p className="text-[#111827] dark:text-white text-sm font-medium">Ava Thompson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</main>
  
  </>)
}


