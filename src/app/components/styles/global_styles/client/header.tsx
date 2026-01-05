import { useRouter } from "next/navigation";

export default function ClientNavHeader(){
    const router = useRouter();  // Initialize the useRouter hook to handle navigation

    // Function to handle shopping cart click
    const handleCartClick = () => {
        router.push('/page/client/cart'); // Navigate to the cart page
    };
    return (
        <div className="flex p-3 -ml-1 pt-2 pb-2 justify-between items-center bg-white top-0 z-50 sticky">
            {/* search */}
            <div className="flex w-full items-center gap-x-8 space-x-4">
                <img className="hidden lg:block lg:w-fit lg:h-8 xl:block xl:w-fit xl:h-8" src="/favicon.ico" alt="logo"/>
                <div className='flex w-xs sm:w-sm lg:w-xl xl:w-2xl items-center gap-x-2 h-12 border-t-1 border-b-1 border-[#F3F3F5] bg-gray-100 p-3 rounded-2xl'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 19L15.5001 15.5M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type='text' className='w-full p-3 rounded-xl outline-none border-none focus:ring-0'  placeholder="Search jobs, talent..."></input>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-4 pt-3">
                <div className="flex items-center space-x-8 text-xl ml-3 sm:ml-3 lg:ml-3">
                    <div className="sm:flex sm:items-center sm:gap-x-3 
                                    lg:flex lg:items-center lg:gap-x-3
                                    xl:flex xl:items-center xl:gap-x-3
                                    hover:cursor-pointer active:opacity-30 hidden">
                        {/* jobs */}
                        <p>Jobs</p>
                        <svg className="-mt-3 w-2 h-2" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <div className="hover:cursor-pointer active:opacity-30 hidden xl:block lg:block sm:block">
                    {/* talents */}
                    <p>Talent</p>
                    </div>

                    <div className="hidden xl:block lg:block gap-x-3 hover:cursor-pointer active:opacity-30" onClick={handleCartClick}>
                    {/* shopping-cart */}
                    <svg className="-mt-4 w-[22px] h-[22px]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H2.30616C2.55218 1 2.67519 1 2.77418 1.04524C2.86142 1.08511 2.93535 1.14922 2.98715 1.22995C3.04593 1.32154 3.06333 1.44332 3.09812 1.68686L3.57143 5M3.57143 5L4.62332 12.7314C4.75681 13.7125 4.82355 14.2031 5.0581 14.5723C5.26478 14.8977 5.56108 15.1564 5.91135 15.3174C6.30886 15.5 6.80394 15.5 7.79411 15.5H16.352C17.2945 15.5 17.7658 15.5 18.151 15.3304C18.4905 15.1809 18.7818 14.9398 18.9923 14.6342C19.2309 14.2876 19.3191 13.8247 19.4955 12.8988L20.8191 5.94969C20.8812 5.62381 20.9122 5.46087 20.8672 5.3335C20.8278 5.22177 20.7499 5.12768 20.6475 5.06802C20.5308 5 20.365 5 20.0332 5H3.57143ZM9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM17 20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19C16.5523 19 17 19.4477 17 20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    
                    <div className="hidden xl:block lg:block gap-x-3 hover:cursor-pointer active:opacity-30">
                    {/* message */}
                    <svg className="-mt-4 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 14" fill="none">
                        <path d="M13.9993 9.99935C13.9993 10.353 13.8589 10.6921 13.6088 10.9422C13.3588 11.1922 13.0196 11.3327 12.666 11.3327H3.88468C3.53109 11.3328 3.19201 11.4733 2.94202 11.7233L1.47402 13.1913C1.40782 13.2575 1.32348 13.3026 1.23167 13.3209C1.13987 13.3391 1.0447 13.3297 0.95822 13.2939C0.871737 13.2581 0.797817 13.1974 0.745806 13.1196C0.693795 13.0418 0.666028 12.9503 0.666016 12.8567V1.99935C0.666016 1.64573 0.806491 1.30659 1.05654 1.05654C1.30659 0.806491 1.64573 0.666016 1.99935 0.666016H12.666C13.0196 0.666016 13.3588 0.806491 13.6088 1.05654C13.8589 1.30659 13.9993 1.64573 13.9993 1.99935V9.99935Z" stroke="#1A1A1A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </div>

                    <div className="hidden xl:block lg:block gap-x-3 hover:cursor-pointer active:opacity-30">
                    {/* notification */}
                    <svg className="-mt-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33333 20.0909C10.041 20.6562 10.9755 21 12 21C13.0245 21 13.959 20.6562 14.6667 20.0909M4.50763 17.1818C4.08602 17.1818 3.85054 16.5194 4.10557 16.1514C4.69736 15.2975 5.26855 14.0451 5.26855 12.537L5.29296 10.3517C5.29296 6.29145 8.29581 3 12 3C15.7588 3 18.8058 6.33993 18.8058 10.4599L18.7814 12.537C18.7814 14.0555 19.3329 15.3147 19.9006 16.169C20.1458 16.5379 19.9097 17.1818 19.4933 17.1818H4.50763Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </div>

                    <div className="w-40 h-10 -mt-4 px-4 py-1 rounded-xl bg-[#00BC7D] active:opacity-30 hover:cursor-pointer hidden sm:block xl:block lg:block">
                    {/* post a job */}
                    <p className="pt-0.5 text-white text-lg">+ Post a Job</p>
                    </div>

                    <div className="w-12 h-12 mr-2 -mt-4 px-[14px] py-4 rounded-full bg-[#ECECF0] active:opacity-30 hover:cursor-pointer">
                    {/* user */}
                    <svg className="-mt-[10px] w-5 h-5" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 19C17 17.6044 17 16.9067 16.8278 16.3389C16.44 15.0605 15.4395 14.06 14.1611 13.6722C13.5933 13.5 12.8956 13.5 11.5 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </div>
                </div>
            </div>
      </div>
    )
}

