import React, { useState } from "react";

export default function Test() {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [show, setShow] = useState(null);
    return (
        <div className="dark:bg-gray-900">
            <div>
                <div className="relative">
                    {/* For md screen size */}
                    <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"} bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}>
                        <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
                            <div>
                                <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search for products" className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none" />
                        </div>
                        <div className="space-x-6">
                            <button aria-label="view favourites" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button aria-label="go to cart" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <svg className="fill-stroke" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 4.2002H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* For md screen size */}
                    {/* For large screens */}
                    <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
                        <div className="container mx-auto flex items-center justify-between">
                            <h1 className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white" aria-label="the Crib.">
                                <svg className="fill-stroke" width={93} height={19} viewBox="0 0 93 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.272 6V9.336H7.008V13.392C7.008 13.952 7.128 14.352 7.368 14.592C7.624 14.832 8 14.952 8.496 14.952C8.848 14.952 9.152 14.92 9.408 14.856C9.664 14.776 9.904 14.672 10.128 14.544L10.44 17.376C10.04 17.648 9.512 17.856 8.856 18C8.216 18.16 7.584 18.24 6.96 18.24C5.424 18.24 4.24 17.936 3.408 17.328C2.576 16.704 2.16 15.648 2.16 14.16V9.336H0.192V6H2.16V3.384L7.008 2.04V6H10.272ZM12.1916 18V1.056H17.0396V8.328C17.7436 6.616 18.9996 5.76 20.8076 5.76C22.0236 5.76 22.9836 6.12 23.6876 6.84C24.3916 7.544 24.7436 8.56 24.7436 9.888V18H19.8956V11.184C19.8956 10.496 19.7836 10.024 19.5596 9.768C19.3516 9.512 19.0556 9.384 18.6716 9.384C18.1916 9.384 17.7996 9.568 17.4956 9.936C17.1916 10.304 17.0396 10.888 17.0396 11.688V18H12.1916ZM33.2184 18.24C31.1384 18.24 29.5064 17.696 28.3224 16.608C27.1384 15.52 26.5464 13.984 26.5464 12C26.5464 10.672 26.8184 9.544 27.3624 8.616C27.9064 7.688 28.6664 6.984 29.6424 6.504C30.6184 6.008 31.7464 5.76 33.0264 5.76C34.3384 5.76 35.4504 6.008 36.3624 6.504C37.2904 6.984 37.9944 7.656 38.4744 8.52C38.9704 9.384 39.2184 10.392 39.2184 11.544C39.2184 12.136 39.1784 12.64 39.0984 13.056H31.2024C31.3144 13.776 31.5384 14.272 31.8744 14.544C32.2264 14.8 32.6904 14.928 33.2664 14.928C33.7624 14.928 34.1544 14.824 34.4424 14.616C34.7464 14.408 34.9624 14.12 35.0904 13.752L38.9784 14.904C38.7704 15.64 38.3784 16.256 37.8024 16.752C37.2264 17.248 36.5384 17.624 35.7384 17.88C34.9384 18.12 34.0984 18.24 33.2184 18.24ZM33.0264 9.048C32.5144 9.048 32.1064 9.192 31.8024 9.48C31.5144 9.768 31.3224 10.256 31.2264 10.944H34.6344C34.5704 10.32 34.4104 9.848 34.1544 9.528C33.9144 9.208 33.5384 9.048 33.0264 9.048Z"
                                        fill="#9CA3AF"
                                    />
                                    <path
                                        d="M46.9723 5.76C48.3163 5.76 49.4203 5.952 50.2843 6.336C51.1643 6.72 51.8283 7.208 52.2763 7.8C52.7243 8.392 52.9803 9.016 53.0443 9.672L48.5563 11.04C48.5083 10.384 48.3723 9.896 48.1483 9.576C47.9403 9.256 47.6043 9.096 47.1403 9.096C46.5323 9.096 46.0763 9.32 45.7723 9.768C45.4843 10.216 45.3403 10.976 45.3403 12.048C45.3403 13.168 45.5083 13.928 45.8443 14.328C46.1803 14.712 46.6203 14.904 47.1643 14.904C48.0443 14.904 48.5483 14.32 48.6763 13.152L53.0203 14.52C52.9563 15.208 52.6763 15.832 52.1803 16.392C51.7003 16.952 51.0363 17.4 50.1883 17.736C49.3403 18.072 48.3403 18.24 47.1883 18.24C45.1083 18.24 43.4683 17.696 42.2683 16.608C41.0683 15.52 40.4683 13.984 40.4683 12C40.4683 10.672 40.7403 9.544 41.2843 8.616C41.8283 7.688 42.5883 6.984 43.5643 6.504C44.5403 6.008 45.6763 5.76 46.9723 5.76ZM54.6604 18V6H59.0044L59.1484 8.808C59.4204 7.864 59.8444 7.12 60.4204 6.576C61.0124 6.032 61.7804 5.76 62.7244 5.76C63.0604 5.76 63.3244 5.792 63.5164 5.856C63.7244 5.904 63.8844 5.968 63.9964 6.048L63.5644 9.984C63.4044 9.92 63.1964 9.864 62.9404 9.816C62.6844 9.768 62.3884 9.744 62.0524 9.744C61.3324 9.744 60.7244 9.944 60.2284 10.344C59.7484 10.728 59.5084 11.312 59.5084 12.096V18H54.6604ZM67.5609 4.944C66.6009 4.944 65.9049 4.784 65.4729 4.464C65.0569 4.128 64.8489 3.576 64.8489 2.808C64.8489 2.04 65.0569 1.488 65.4729 1.152C65.9049 0.815999 66.6009 0.647999 67.5609 0.647999C68.5369 0.647999 69.2329 0.815999 69.6489 1.152C70.0649 1.488 70.2729 2.04 70.2729 2.808C70.2729 3.576 70.0649 4.128 69.6489 4.464C69.2329 4.784 68.5369 4.944 67.5609 4.944ZM69.9849 6V18H65.1369V6H69.9849ZM80.6843 18.24C79.7083 18.24 78.8763 17.968 78.1883 17.424C77.5163 16.864 77.0283 16.136 76.7243 15.24L76.5803 18H72.3323V1.056H77.1803V8.064C77.5003 7.376 77.9643 6.824 78.5723 6.408C79.1803 5.976 79.9483 5.76 80.8763 5.76C82.2523 5.76 83.3563 6.312 84.1883 7.416C85.0203 8.52 85.4363 10.064 85.4363 12.048C85.4363 14.016 85.0123 15.544 84.1643 16.632C83.3323 17.704 82.1723 18.24 80.6843 18.24ZM78.8363 14.784C79.3803 14.784 79.8043 14.576 80.1083 14.16C80.4123 13.744 80.5643 13.024 80.5643 12C80.5643 10.976 80.4123 10.264 80.1083 9.864C79.8043 9.448 79.3803 9.24 78.8363 9.24C78.3083 9.24 77.9003 9.48 77.6123 9.96C77.3243 10.44 77.1803 11.12 77.1803 12C77.1803 12.944 77.3243 13.648 77.6123 14.112C77.9163 14.56 78.3243 14.784 78.8363 14.784ZM89.451 13.44C90.299 13.44 90.955 13.648 91.419 14.064C91.899 14.48 92.139 15.064 92.139 15.816C92.139 16.568 91.899 17.152 91.419 17.568C90.955 17.984 90.299 18.192 89.451 18.192C88.603 18.192 87.939 17.984 87.459 17.568C86.995 17.152 86.763 16.568 86.763 15.816C86.763 15.064 86.995 14.48 87.459 14.064C87.939 13.648 88.603 13.44 89.451 13.44Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </h1>
                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Furniture
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Lookbook
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Support
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search for products" className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
                            </div>
                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 p-4">
                            <ul className="flex flex-col space-y-6">
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Home
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Furniture
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Lookbook
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Support
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="h-full flex items-end">
                            <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        <div>
                                            <svg className="fill-stroke" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 5H21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-base">Cart</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        <div>
                                            <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-base">Wishlist</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>




                {/* Sidebar starts */}
                {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
                <div className="flex">
                    <div className="w-64 absolute sm:relative bg-gray-400 shadow md:h-screen flex-col justify-between hidden sm:flex">
                        <div className="px-8">
                            <ul className="mt-8">
                                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                        </svg>
                                        <span className="text-sm  ml-2">Dashboard</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                        </svg>
                                        <span className="text-sm  ml-2">Products</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                            <circle cx={12} cy={12} r={9} />
                                        </svg>
                                        <span className="text-sm  ml-2">Performance</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="7 8 3 12 7 16" />
                                            <polyline points="17 8 21 12 17 16" />
                                            <line x1={14} y1={4} x2={10} y2={20} />
                                        </svg>
                                        <span className="text-sm  ml-2">Deliverables</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                        </svg>
                                        <span className="text-sm  ml-2">Invoices</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                            <polyline points="4 12 12 16 20 12" />
                                            <polyline points="4 16 12 20 20 16" />
                                        </svg>
                                        <span className="text-sm  ml-2">Inventory</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>
                                        <span className="text-sm  ml-2">Settings</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* Sidebar ends */}





                    {/* Remove class [ h-64 ] when adding a card block */}
                    <div className="container mx-auto  md:w-4/5 px-3">

                        {/* feild */}
                        <div className="flex md:flex-row flex-col items-center justify-cente py-4" style={{ fontFamily: '"Lato", sans-serif' }}>

                            <div className="flex flex-col md:mr-16">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Email
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                            </div>

                            <div className="flex flex-col md:mr-16">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Email
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                            </div>
                            <div className="flex flex-col md:mr-16">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Email
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                            </div>
                            <div className="flex flex-col md:mr-16">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Email
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                            </div>

                            {/* </div> */}
                        </div>





                        {/* table  */}
                        <div className="sm:px-6 w-full">

                            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">

                                <div className="mt-7 overflow-x-auto">
                                    <table className="w-full whitespace-nowrap">
                                        <tbody>
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="pl-24">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded">Due today at 18:00</button>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 0 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(0)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 0 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">UX Wireframes</p>
                                                    </div>
                                                </td>
                                                <td className="pl-24">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <button className="py-3 px-6 focus:outline-none text-sm leading-none text-gray-600 bg-gray-100 hover:bg-gray-200 rounded">Due on 21.02.21</button>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 1 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(1)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 1 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                                    </div>
                                                </td>
                                                <td className="pl-24" />
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <button className="py-3 px-7 text-sm leading-none text-gray-600 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded">Due tomorrow</button>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 3 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(3)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 3 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input defaultChecked type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Development Phase 1</p>
                                                    </div>
                                                </td>
                                                <td className="pl-24" />
                                                <td className="pl-5" />
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 4 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(4)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 4 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="pl-24">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <button className="py-3 px-7 text-sm leading-none text-gray-600 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none">Due tomorrow</button>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 5 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(5)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 5 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input defaultChecked type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="pl-24" />
                                                <td className="pl-5" />
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 6 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(6)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 6 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">CSS and functionality</p>
                                                    </div>
                                                </td>
                                                <td className="pl-24">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <button className="py-3 px-3 text-sm leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded focus:outline-none">Due Today at 18:00</button>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 7 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(7)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 7 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input defaultChecked type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="pl-24" />
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 8 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(8)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 8 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-3" />
                                            <tr className="h-16 border border-gray-100 rounded">
                                                <td>
                                                    <div className="ml-5">
                                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M5 12l5 5l10 -10" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Vue integration</p>
                                                    </div>
                                                </td>
                                                <td className="pl-24">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">23</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                                stroke="#52525B"
                                                                strokeWidth="1.25"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
                                                    </div>
                                                </td>
                                                <td className="pl-5">
                                                    <button className="py-3 px-3 text-sm leading-none text-gray-600 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none">Due Today at 18:00</button>
                                                </td>
                                                <td className="pl-4">
                                                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                                </td>
                                                <td>
                                                    <div className="relative px-5 pt-2">
                                                        {show == 9 ? (
                                                            <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        ) : (
                                                            <button className="focus:outline-none" onClick={() => setShow(9)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                        {show == 9 && (
                                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                                    <p>Delete</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <style>
                            {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
                        </style>
                    </div>
                </div>
            </div>

        </div>

    );
}

