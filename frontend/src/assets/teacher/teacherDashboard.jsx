
import {Sidebar} from '../globalComponents/sidebar';
import { Link } from 'react-router-dom';

export function TeacherDashboard (){

  return(<>

  
<main className="font-display">
  <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark group/design-root">
<Sidebar />
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
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#06b6d4"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
            </div>
            <p className="text-[#06B6D4] text-4xl font-bold leading-tight">12</p>
          </div>
          <div
            className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-primary/20 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#111827] dark:text-white text-base font-medium leading-normal">Students Enrolled</p>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#06b6d4"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
            </div>
            <p className="text-[#06B6D4] text-4xl font-bold leading-tight">28</p>
          </div>
          <div
            className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-primary/20 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#111827] dark:text-white text-base font-medium leading-normal">Upcoming Deadlines</p>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#06b6d4"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
            </div>
            <p className="text-[#06B6D4] text-4xl font-bold leading-tight">3</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-[#111827] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4">Quick
            Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Link to='/new-assignment'
              className="flex items-center justify-center gap-2 flex-1 min-w-[200px] cursor-pointer rounded-lg h-12 px-6 bg-[#EC4899] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              <span className="truncate">Create Assignment</span>
            </Link>
            <Link to='/grade'
              className="flex items-center justify-center gap-2 flex-1 min-w-[200px] cursor-pointer rounded-lg h-12 px-6 bg-white dark:bg-primary/30 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-primary/40 transition-colors">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
              <span className="truncate">View Submissions</span>
            </Link>
            <Link to='/announcements'
              className="flex items-center justify-center gap-2 flex-1 min-w-[200px] cursor-pointer rounded-lg h-12 px-6 bg-white dark:bg-primary/30 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-primary/40 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/></svg>
              <span className="truncate">Post Announcement</span>
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-primary/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-[#111827] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Class
            Roster</h3>
        
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


