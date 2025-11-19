import { Link } from "react-router-dom";


import styles from './sidebar.module.css';

export function TeacherSidebar() {
   
    return (
          <aside
                className={` ${styles.sidebar} flex flex-col w-64 bg-card-light  border-r border-border-light  p-4 shrink-0`} >
            <div className="flex flex-col gap-4">
                <a href="../user-profile.html" className="flex items-center gap-3 p-2">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Teacher's profile picture"
                        style={{ backgroundImage: 'url("../3.jpg")' }}>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#111827] dark:text-white text-base font-medium leading-normal">Abraham Perl</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Teacher</p>
                    </div>
                </a>
                <nav className="flex flex-col gap-2 mt-4">
                    <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/30" to="/dashboard">
                        <span className="material-symbols-outlined text-[#111827] dark:text-white"
                            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>dashboard</span>
                        <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Dashboard</p>
                    </Link>
                    <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" to="/assignment">
                        <span className="material-symbols-outlined text-[#111827] dark:text-white">assignment</span>
                        <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Assignments</p>
                    </Link>
                    <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" to="/grade">
                        <span className="material-symbols-outlined text-[#111827] dark:text-white">move_to_inbox</span>
                        <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Submissions</p>
                    </Link>

                    <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20" to="/announcements">
                        <span className="material-symbols-outlined text-[#111827] dark:text-white">campaign</span>
                        <p className="text-[#111827] dark:text-white text-sm font-medium leading-normal">Announcements</p>
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
               
                <Link className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F3F4F6]"
                    to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    <p className="text-sm font-medium leading-normal" >Log Out</p>
                </Link>
            </div>
        </aside>
    )
}