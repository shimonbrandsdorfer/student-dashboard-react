<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import { useProjectInfo } from '../context';

export function LoginPage() {
    const { API_URL, setRole, setLoggedIn } = useProjectInfo();


    useEffect(() => {
        document.body.classList.add('noLeftMargin');
        return () => {
            document.body.classList.remove('noLeftMargin');
        };

    }, [])

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState({ message: null });



    const handleLogin = async (event) => {
        event.preventDefault();
      

        try {
  setLoading(true);
        setError({ message: null });


console.error(event.target.username.value);
        const username = event.target.username.value;
        const password = event.target.password.value;

            const response = await fetch(API_URL + '/authApi/login', {
                method: 'POST', // Use 'POST' for login
                credentials: 'include', // ✅ Required for cookies

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });


            if (!response.ok) {
                console.log(response)
                const data = await response.json();
            

                setError({ message: data.message });
                return;

            }

            const data = await response.json();

            console.log('Login successful:', data);
            // Redirect to dashboard or another page
            setRole(data.user.role);
            setLoggedIn(true);
           navigate('/dashboard');



        } catch (error) {
            console.error('Login failed:', error);
            setError({ message: error?.message || 'Something went wrong.' });



        } finally {

            setLoading(false);


        }
    }

    return (<>



        <main className='bg-[#f6f7f7]  font-["Lexend", "sans-serif"]'>
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#F3F4F6] p-4 group/design-root">
                <div className="w-full max-w-md">
                    <header className="text-center mb-8">
                        <h1 className="text-[#111827] text-3xl font-bold leading-tight tracking-tighter">Welcome to Viewpoint Academy</h1>
                    </header>
                    <main className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="border-b border-[#E5E7EB]">
                            <div className="flex">


                            </div>
                        </div>
                        <div className="p-8">
                            <form className="flex flex-col gap-6" onSubmit={(e) => handleLogin(e)}>
                                <div className="flex flex-col">
                                    <label className="flex flex-col">
                                        <p className="text-[#111827] text-base font-medium leading-normal pb-2">Email / Username</p>
                                        <input id="username" className="focus:outline-none form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#D1D5DB] bg-white h-12 px-4 py-2 placeholder:text-[#9CA3AF] text-[#111827] text-base font-normal leading-normal focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/50" placeholder="Username" required/>
                                    </label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="flex flex-col">
                                        <p className="text-[#111827] text-base font-medium leading-normal pb-2">Password</p>
                                        <div className="relative flex w-full items-center">
                                            <input id="password" className="focus:outline-none form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#D1D5DB] bg-white h-12 pl-4 pr-12 placeholder:text-[#9CA3AF] text-[#111827] text-base font-normal leading-normal focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/50" placeholder="Password" type="password" required />
                                            <button className="absolute right-0 flex h-full items-center justify-center px-4 text-[#6B7280]" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#6B7280"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                                            </button>
                                        </div>
                                    </label>
                                    <a className="mt-2 text-right text-sm font-normal leading-normal text-[#6B7280] underline hover:text-[#06B6D4]" href="#">Forgot Password?</a>
                                </div>
                                <p style={{color: 'red'}}>{error.message}</p>
                                <button type="submit"  className="flex h-12 w-full items-center justify-center rounded-lg bg-[#111827] text-base font-bold text-white transition-colors hover:bg-[#1F2937]">
                                    {loading ? (
                                        <div className=''>
                                            <BeatLoader color="white" size={10} />
                                        </div>
                                    ) : 'Login'}
                                </button>

                            </form>
                            <div className="relative my-8 flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-[#E5E7EB]"></div>
                                </div>
                                <div className="relative bg-white px-4 text-sm text-[#6B7280]">or</div>
                            </div>
                            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#D1D5DB] bg-white text-base font-medium text-[#111827] transition-colors hover:bg-gray-50">
                                <svg height="20" viewBox="0 0 48 48" width="20" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
                                    <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
                                    <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
                                    <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.28-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
                                    <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C41.31,34.128,44,28.228,44,20C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </main>

    </>)
}





=======
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import { useProjectInfo } from '../context';

export function LoginPage() {
    const { API_URL, setRole, setLoggedIn } = useProjectInfo();


    useEffect(() => {
        document.body.classList.add('noLeftMargin');
        return () => {
            document.body.classList.remove('noLeftMargin');
        };

    }, [])

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState({ message: null });



    const handleLogin = async (event) => {
        event.preventDefault();
      

        try {
  setLoading(true);
        setError({ message: null });


console.error(event.target.username.value);
        const username = event.target.username.value;
        const password = event.target.password.value;

            const response = await fetch(API_URL + '/authApi/login', {
                method: 'POST', // Use 'POST' for login
                credentials: 'include', // ✅ Required for cookies

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });


            if (!response.ok) {
                console.log(response)
                const data = await response.json();
            

                setError({ message: data.message });
                return;

            }

            const data = await response.json();

            console.log('Login successful:', data);
            // Redirect to dashboard or another page
            setRole(data.user.role);
            setLoggedIn(true);
           navigate('/dashboard');



        } catch (error) {
            console.error('Login failed:', error);
            setError({ message: error?.message || 'Something went wrong.' });



        } finally {

            setLoading(false);


        }
    }

    return (<>



        <main className='bg-[#f6f7f7]  font-["Lexend", "sans-serif"]'>
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#F3F4F6] p-4 group/design-root">
                <div className="w-full max-w-md">
                    <header className="text-center mb-8">
                        <h1 className="text-[#111827] text-3xl font-bold leading-tight tracking-tighter">Welcome to Viewpoint Academy</h1>
                    </header>
                    <main className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="border-b border-[#E5E7EB]">
                            <div className="flex">


                            </div>
                        </div>
                        <div className="p-8">
                            <form className="flex flex-col gap-6" onSubmit={(e) => handleLogin(e)}>
                                <div className="flex flex-col">
                                    <label className="flex flex-col">
                                        <p className="text-[#111827] text-base font-medium leading-normal pb-2">Username</p>
                                        <input id="username" className="focus:outline-none form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#D1D5DB] bg-white h-12 px-4 py-2 placeholder:text-[#9CA3AF] text-[#111827] text-base font-normal leading-normal focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/50" placeholder="Username" required/>
                                    </label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="flex flex-col">
                                        <p className="text-[#111827] text-base font-medium leading-normal pb-2">Password</p>
                                        <div className="relative flex w-full items-center">
                                            <input id="password" className="focus:outline-none form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#D1D5DB] bg-white h-12 pl-4 pr-12 placeholder:text-[#9CA3AF] text-[#111827] text-base font-normal leading-normal focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/50" placeholder="Password" type="password" required />
                                            <button className="absolute right-0 flex h-full items-center justify-center px-4 text-[#6B7280]" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#6B7280"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                                            </button>
                                        </div>
                                    </label>
                                    <a className="mt-2 text-right text-sm font-normal leading-normal text-[#6B7280] underline hover:text-[#06B6D4]" href="#">Forgot Password?</a>
                                </div>
                                <p style={{color: 'red'}}>{error.message}</p>
                                <button type="submit"  className="flex h-12 w-full items-center justify-center rounded-lg bg-[#111827] text-base font-bold text-white transition-colors hover:bg-[#1F2937]">
                                    {loading ? (
                                        <div className=''>
                                            <BeatLoader color="white" size={10} />
                                        </div>
                                    ) : 'Login'}
                                </button>

                            </form>
                            <div className="relative my-8 flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-[#E5E7EB]"></div>
                                </div>
                                <div className="relative bg-white px-4 text-sm text-[#6B7280]">or</div>
                            </div>
                            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#D1D5DB] bg-white text-base font-medium text-[#111827] transition-colors hover:bg-gray-50">
                                <svg height="20" viewBox="0 0 48 48" width="20" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
                                    <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
                                    <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
                                    <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.28-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
                                    <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C41.31,34.128,44,28.228,44,20C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </main>

    </>)
}





>>>>>>> origin/main
