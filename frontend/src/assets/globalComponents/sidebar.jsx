import { Link } from "react-router-dom";
import styles from './sidebar.module.css';
import { useProjectInfo } from '../context';

export function Sidebar() {
 const {role} = useProjectInfo();
    const links = [{
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" /></svg>,
        name: 'Dashboard',
        to: '/dashboard',
        for_role: ['student' ,'teacher'] ,

    }, {
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" /></svg>,
        name: 'Assignments',
        to: '/assignments',
         for_role: ['student' ,'teacher'] ,
    }, {
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>,
        name: 'Calendar',
        to: '/calendar',
           for_role: ['student', 'teacher'] ,
    }, {
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>,
        name: 'Announcements',
        to: '/announcements',
      for_role: ['student' ,'teacher'] ,
    },{
       icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22Zm0-80L320-560l56-58 64 64v-166h80v166l64-64 56 58-160 160ZM200-200h560-560Z"/></svg>,
       name: 'Submissions',
        to: '/grade',
         for_role: ['teacher'] ,
   
    }]
    console.log(links);
    return (
        <aside
            className={` ${styles.sidebar} flex flex-col w-64 bg-card-light  border-r border-border-light  p-4 shrink-0`} >
            <Link to="/" className="flex items-center gap-3 p-4 mb-4">
                <div className="bg-[#111827] text-white rounded-xl p-2 flex items-center justify-center size-10">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
                </div>
                <h1 className="text-2xl font-bold" >Viewpoint</h1>
            </Link>
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center p-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Student profile picture"
                        style={{ backgroundImage: 'url("/gee2.png")' }}>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-base font-medium leading-normal" >Yossi Gee
                        </h1>
                        <p className="text-gray-500 text-sm font-normal leading-normal"> 
                             {role.charAt(0).toUpperCase() + role.slice(1)}
</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-2">

                    {links.map((link, index) => (
                        
                         link.for_role.includes(role) &&( 

                        <Link key={index} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F3F4F6]"
                            to={link.to}>
                            {link.icon}
                            <p className="text-sm font-medium leading-normal ">
                                {link.name}
                            </p>
                        
                        </Link>
                        )

                    ))}




                </nav>
            </div>
            <div className="mt-auto flex flex-col gap-1">
             {/*    <Link className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F3F4F6]"
                    to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                    <p className="text-sm font-medium leading-normal" >Settings</p>
                </Link> */}
                <Link className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F3F4F6]"
                    to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    <p className="text-sm font-medium leading-normal" >Log Out</p>
                </Link>
            </div>
        </aside>
    )
}
