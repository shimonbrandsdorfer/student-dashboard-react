import { useEffect } from "react";
import styles from './welcome.module.css';
import { Link } from "react-router-dom";
/*    tailwind.config = {
      
           
                  
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                        lg: "0.75rem",
                        xl: "1rem",
                        full: "9999px",
                    },
                },
            },
        };
   */

export function MainPage() {
    useEffect(()=>{
      document.body.classList.add('noLeftMargin');
       return () => {
        document.body.classList.remove('noLeftMargin');
      };
    
    },[])
    return (<>
        <main className="bg-[#F6F9FC]  font-display text-[#333333] ">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <header className="flex items-center justify-between whitespace-nowrap px-4 py-4 md:px-6">
                    <div className="flex items-center gap-3 text-[#0A2540] ">
                        <div className="h-8 w-8 text-cyan">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold tracking-[-0.015em]">Viewpoint Academy</h2>
                    </div>
                    <div className="flex items-center gap-2">
                         <Link to="./login"  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540]/10 transition-colors">
                            <div  className="truncate">Login</div>
                        </Link>
                         <Link to="./login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0A2540] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                            <div className="truncate">Register</div>
                        </Link>
                    </div>
                </header>
                <main className="flex flex-1 justify-center">
                    <div className="flex w-full max-w-7xl flex-col">
                        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="flex flex-col gap-6 text-center lg:text-left">
                                    <div className="flex flex-col gap-4">
                                        <h1
                                            className="text-4xl font-black leading-tight tracking-tighter text-[#0A2540]  sm:text-5xl lg:text-6xl">
                                            Welcome to Your Student Hub</h1>
                                        <p
                                            className="text-base font-normal leading-normal text-[#333333]  sm:text-lg">
                                            Access your projects, assignments, and resources all in one place. Let&lsquo;s get started
                                            on what&lsquo;s next.</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

                                        <Link to='login'
                                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#00F6A3] text-[#0A2540] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                                            <span className="truncate">Login</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full h-64 sm:h-80 lg:h-auto lg:aspect-square bg-center bg-no-repeat bg-cover rounded-xl"
                                    data-alt="Abstract image of students collaborating around a computer screen with lines of code."
                                    style={{ backgroundImage: 'url("./software.png")' }}>
                                </div>
                            </div>
                        </section>
                        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-10">
                            <div className="bg-[#0A2540]  text-white rounded-xl p-8 sm:p-12 lg:p-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="flex flex-col gap-4">
                                        <h2
                                            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-white ">
                                            Manage Your Projects</h2>
                                        <p
                                            className="mt-2 text-base font-normal leading-normal text-white/80  sm:text-lg">
                                            Our integrated platform allows you to track project progress, collaborate with
                                            teammates, and get real-time feedback from instructors, all in one place.</p>
                                        <ul className="mt-4 space-y-3">
                                            <li className="flex items-start gap-3">
                                                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00F6A3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                                                
                                                <p className="flex-1 text-white/80 "><strong
                                                    className="text-white ">Version Control:</strong> Connect
                                                    your Git repositories for seamless code management.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                               <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00F6A3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                                         
                                                <p className="flex-1 text-white/80 "><strong
                                                    className="text-white ">Live Feedback:</strong> Instructors
                                                    can comment directly on your codebase and project milestones.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                            <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00F6A3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                                         
                                                <p className="flex-1 text-white/80 "><strong
                                                    className="text-white ">Showcase Your Work:</strong> Build a
                                                    portfolio of completed projects directly on the platform.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl"
                                        data-alt="A screenshot of a project management dashboard with graphs and task lists."
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnE3IH_TIolRgbieFBbVd9U427o__bj5meKlvBvIbhK65TtfnxdJ-WttC3RwK0Sn8KUf7Wmpixpad-AqQ2t9wRCLN3MMJcL5RqkEdx9JEchpD6V8TNAMYf9FtO9i5Va6a_BRFHSJbf0MXtgz-CIi26Z_Es_M5WBv1O-5LMeQvPbIjwFgJKRFtZYLQqQkdKv7_kinkFR5Bm_1o_NuJqPcS6P1Glb5vCyESMJgcxvbOGrpr51zpuziDmex_-iDMMFGsL0p07CRapYgw")' }}>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl lg:order-last"
                                    data-alt="A user interface for submitting an assignment, showing an upload button and a text field for comments."
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA16vZGG-nJhLnorx-5E0I9q6DzsyBx51MJBFxgvzp0e7DFNsZVT8JTqbDBeTjkgOQ6jKGoZZ6rec2jL9uyZCIrbxtbQ5eavNM1bZt4KSDXKhjajgJ18piMTuItQ-6TTttaWTVKopiQByDCyAXSIxobH6dV7DbpfjFY4Zgp3NS-Iruh8d2T1LpJwH9pGCGCaD_XirDp4l2hKS4RNGvgzWMpTouX3JKv46yZ4jIF6t-TXZ-bLO-dDWsRYZbrgyFt_4mDtxL7xZOtg-4")' }}>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2
                                        className="text-3xl font-bold leading-tight tracking-tight text-[#0A2540]  sm:text-4xl">
                                        Submit Assignments with Ease</h2>
                                    <p
                                        className="mt-2 text-base font-normal leading-normal text-[#333333]  sm:text-lg">
                                        Never miss a deadline. Our platform centralizes all your coursework, making it simple to
                                        submit assignments, view grades, and access learning materials.</p>
                                    <ul className="mt-4 space-y-3">
                                        <li className="flex items-start gap-3">
                                            <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00F6A3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                                            <p className="text-[#333333]  flex-1"><strong
                                                className="text-[#0A2540] ">Centralized Hub:</strong> All your
                                                courses, assignments, and deadlines in a single dashboard.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00F6A3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                                            <p className="text-[#333333]  flex-1"><strong
                                                className="text-[#0A2540] ">Instant Notifications:</strong> Get
                                                alerts for new assignments and upcoming due dates.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                             <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00F6A3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                                            <p className="text-[#333333]  flex-1"><strong
                                                className="text-[#0A2540] ">Secure &amp; Reliable:</strong> Upload
                                                your work confidently with our robust submission system.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className={`py-16 sm:py-24 px-4 sm:px-8 lg:px-10 ${styles.imgBackground}`}>
                            <div className="relative">




                                <h2
                                    className="text-3xl font-bold leading-tight tracking-tight text-center text-white mb-10">
                                    Currant Programs</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                    <div
                                        className="flex flex-1 flex-col gap-4 rounded-xl border border-[#E6E6E6]  bg-[#FFFFFF]  p-6 transition-transform hover:-translate-y-1"
                                        style={{ backgroundColor: 'rgba(240, 248, 255, 0.44)' }}>
                                        <div className="text-[#00F6A3] text-4xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="36px" fill="#00F6A3"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-lg font-bold leading-tight text-white">Full-Stack
                                                Development</h3>
                                            <p className="text-sm font-normal leading-normal text-white ">Master
                                                front-end and back-end technologies to build complete web applications from the
                                                ground up.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-1 flex-col gap-4 rounded-xl border border-[#E6E6E6]  bg-[#FFFFFF]  p-6 transition-transform hover:-translate-y-1"
                                        style={{ backgroundColor: 'rgba(240, 248, 255, 0.44)' }}>
                                        <div className="text-[#00F6A3] text-4xl">
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="36px" fill="#00F6A3"><path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z"/></svg>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-lg font-bold leading-tight text-white">Data Science
                                                &amp; AI</h3>
                                            <p className="text-sm font-normal leading-normal text-white">Learn
                                                to analyze data, build predictive models, and implement intelligent AI solutions for
                                                real-world problems.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-10">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2
                                    className="text-3xl font-bold leading-tight tracking-tight text-[#0A2540]  sm:text-4xl">
                                    Faculty &amp; Staff</h2>
                                <p
                                    className="mt-4 text-base font-normal leading-normal text-[#333333]  sm:text-lg">
                                    Learn from industry veterans and academic experts dedicated to your success. Our instructors
                                    bring years of real-world experience directly into the classroom.</p>
                            </div>
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center text-center">
                                    <img className="size-32 rounded-full object-cover" data-alt="Portrait of Alex Johnson"
                                        src="./1.png" />
                                    <div className="mt-4">
                                        <h3 className="text-lg font-bold text-[#0A2540] ">Abe Neuwirth</h3>
                                        <p className="text-sm font-medium text-[#00F6A3]">Lead Instructor, Full-Stack</p>
                                        <p className="text-sm text-[#333333]  mt-2">As a full stack software engineer with experience that includes complex application development and data science projects using diverse languages and tools, Abe has worked in product development for AI-powered video analytics SaaS.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img className="size-32 rounded-full object-cover" data-alt="Portrait of Samantha Lee"
                                        src="./2.jpeg" />
                                    <div className="mt-4">
                                        <h3 className="text-lg font-bold text-[#0A2540] ">Shimon Brandsdorfer</h3>
                                        <p className="text-sm font-medium text-[#00F6A3]">Founder of BitSmart Solutions</p>
                                        <p className="text-sm text-[#333333]  mt-2">Shimon holds a Ph.D. in
                                            Machine Learning and specializes in ethical AI and large-scale data analysis. His passion for teaching is reflected in his engaging, informative, and motivating lessons</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img className="h-32 w-32 rounded-full object-cover" data-alt="Portrait of a faculty member"
                                        src="./3.jpg" />
                                    <div className="mt-4">
                                        <h3 className="text-lg font-bold text-[#0A2540] ">Abraham Perl</h3>
                                        <p className="text-sm font-medium text-[#00F6A3]">Senior Instructor, Backend Systems</p>
                                        <p className="text-sm text-[#333333]  mt-2">A programmer teacher in the line for many years, Abraham has sustained hundreds of successful heimish men in the Software development industry.


                                            He is committed to his students&lsquo; ultimate success. </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <footer className="bg-[#0A2540]  text-white  mt-16">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10 py-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                            <div className="col-span-2 lg:col-span-1">
                                <a className="flex items-center gap-3" href="#">
                                    <div className="size-6 text-[#00F6A3]">
                                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_6_319_footer)">
                                                <path
                                                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z">
                                                </path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_6_319_footer">
                                                    <rect fill="white" height="48" width="48"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-xl font-bold">Viewpoint Academy</span>
                                </a>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-wider uppercase text-[#00F6A3]">Programs</h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li><a className="hover:underline" href="#">Full-Stack Development</a></li>
                                    <li><a className="hover:underline" href="#">Data Science &amp; AI</a></li>
                                    <li><a className="hover:underline" href="#">All Programs</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-wider uppercase text-[#00F6A3]">About</h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li><a className="hover:underline" href="#">Our Mission</a></li>
                                    <li><a className="hover:underline" href="#">Faculty</a></li>
                                    <li><a className="hover:underline" href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-wider uppercase text-[#00F6A3]">Platform</h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li><a className="hover:underline" href="#">Manage Projects</a></li>
                                    <li><a className="hover:underline" href="#">Submit Assignments</a></li>
                                    <li><a className="hover:underline" href="#">Student Portal</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-wider uppercase text-[#00F6A3]">Legal</h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li><a className="hover:underline" href="#">Privacy Policy</a></li>
                                    <li><a className="hover:underline" href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 border-t border-white/20  pt-8 flex flex-col sm:flex-row items-center justify-between">
                            <p className="text-sm text-white/70 /70">© 2024 Viewpoint Academy. All rights
                                reserved.</p>
                            <div className="flex mt-4 sm:mt-0 space-x-6 text-white/70 /70">
                                <a className="hover:text-[#00F6A3]" href="#">
                                    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path clipRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            fillRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a className="hover:text-[#00F6A3]" href="#">
                                    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </main>

    </>)
}


