import { useState } from "react";
import { Down, Search, ShoppingCart, User, SearchBlack } from "../utils";
import MobileNav from "./Mobilenav";
import Navbar from "./Navbar";

const Header = () => {
    const [navbar, setNavbar] = useState(false)

    return ( 
        <section className="fixed top-0 z-20 w-full">
            <div className="relative flex justify-between items-center bg-black text-white">
                <div className="flex justify-center items-center gap-1 p-1 px-2.5 md:px-8 bg-white/10 ">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.994 0C2.682 0 0 2.688 0 6C0 9.312 2.682 12 5.994 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 5.994 0ZM10.152 3.6H8.382C8.19 2.85 7.914 2.13 7.554 1.464C8.658 1.842 9.576 2.61 10.152 3.6ZM6 1.224C6.498 1.944 6.888 2.742 7.146 3.6H4.854C5.112 2.742 5.502 1.944 6 1.224ZM1.356 7.2C1.26 6.816 1.2 6.414 1.2 6C1.2 5.586 1.26 5.184 1.356 4.8H3.384C3.336 5.196 3.3 5.592 3.3 6C3.3 6.408 3.336 6.804 3.384 7.2H1.356ZM1.848 8.4H3.618C3.81 9.15 4.086 9.87 4.446 10.536C3.342 10.158 2.424 9.396 1.848 8.4ZM3.618 3.6H1.848C2.424 2.604 3.342 1.842 4.446 1.464C4.086 2.13 3.81 2.85 3.618 3.6ZM6 10.776C5.502 10.056 5.112 9.258 4.854 8.4H7.146C6.888 9.258 6.498 10.056 6 10.776ZM7.404 7.2H4.596C4.542 6.804 4.5 6.408 4.5 6C4.5 5.592 4.542 5.19 4.596 4.8H7.404C7.458 5.19 7.5 5.592 7.5 6C7.5 6.408 7.458 6.804 7.404 7.2ZM7.554 10.536C7.914 9.87 8.19 9.15 8.382 8.4H10.152C9.576 9.39 8.658 10.158 7.554 10.536ZM8.616 7.2C8.664 6.804 8.7 6.408 8.7 6C8.7 5.592 8.664 5.196 8.616 4.8H10.644C10.74 5.184 10.8 5.586 10.8 6C10.8 6.414 10.74 6.816 10.644 7.2H8.616Z" fill="white"/>
                    </svg>
                    <span className="text-[12px] md:text-sm">EN</span>
                    <Down param={"#fff"}/>
                </div>
                <p className="text-center  px-1 min-w-fit overflow-auto text-[11px]">SALES BEGIN • FREE SHIPPING ON ALL ORDERS</p>
                <div className="bg-[#27B03F] flex justify-center items-center gap-1 px-1 md:px-10 py-1 ">
                    <svg className="basis-1/4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.582 11.9842C14.3338 11.8602 13.1099 11.2601 12.8818 11.178C12.6537 11.095 12.4879 11.054 12.3221 11.3021C12.1563 11.5491 11.6791 12.1082 11.5334 12.2733C11.3887 12.4383 11.243 12.4583 10.9948 12.3343C10.2613 12.0436 9.58432 11.628 8.99417 11.106C8.44988 10.6052 7.98325 10.0268 7.60952 9.38964C7.46483 9.14158 7.59445 9.00755 7.71905 8.88452C7.83058 8.7735 7.96824 8.59546 8.09184 8.45043C8.1942 8.32522 8.27811 8.18612 8.34103 8.03733C8.37414 7.96896 8.38956 7.89343 8.38587 7.81762C8.38219 7.7418 8.35952 7.66811 8.31993 7.60324C8.25763 7.47921 7.76025 6.25993 7.55325 5.76382C7.35128 5.28172 7.1463 5.34673 6.99256 5.33873C6.84787 5.33173 6.68207 5.32973 6.51628 5.32973C6.39016 5.33323 6.26613 5.36267 6.15199 5.4162C6.03786 5.46974 5.93609 5.54621 5.85309 5.6408C5.57177 5.90599 5.34901 6.22661 5.19902 6.58222C5.04903 6.93783 4.97509 7.32064 4.98191 7.70626C5.0626 8.6407 5.41567 9.53135 5.99779 10.2688C7.06483 11.8612 8.52957 13.15 10.2482 14.0087C10.7118 14.2069 11.1853 14.3812 11.667 14.5308C12.1748 14.6842 12.7116 14.7175 13.2345 14.6278C13.5809 14.558 13.9089 14.4174 14.1979 14.2149C14.4869 14.0124 14.7306 13.7525 14.9136 13.4515C15.0768 13.0814 15.1271 12.6717 15.0583 12.2733C14.997 12.1693 14.8312 12.1082 14.582 11.9842ZM17.086 2.90318C15.3778 1.20315 13.1071 0.178983 10.6967 0.0213433C8.28639 -0.136297 5.90062 0.583338 3.9836 2.04627C2.06658 3.5092 0.748953 5.61573 0.276019 7.97369C-0.196916 10.3316 0.207076 12.7803 1.41278 14.8639L0 20L5.27934 18.6227C6.7395 19.4141 8.37558 19.8288 10.0382 19.829H10.0422C12.0117 19.828 13.9368 19.2459 15.5742 18.1563C17.2115 17.0667 18.4877 15.5185 19.2415 13.7072C19.9953 11.8959 20.1928 9.90288 19.8092 7.9799C19.4255 6.05692 18.4779 4.29028 17.086 2.90317V2.90318ZM14.4403 16.8953C13.1221 17.7178 11.5979 18.1542 10.0422 18.1546H10.0382C8.55597 18.1545 7.10107 17.7575 5.82596 17.0053L5.52351 16.8273L2.39047 17.6455L3.22649 14.6048L3.03055 14.2927C2.16092 12.9123 1.72205 11.3061 1.76943 9.67735C1.81681 8.0486 2.34832 6.47042 3.29674 5.14236C4.24517 3.81429 5.56791 2.796 7.09771 2.21624C8.62752 1.63649 10.2957 1.5213 11.8912 1.88525C13.4868 2.2492 14.9381 3.07594 16.0617 4.26093C17.1852 5.44593 17.9305 6.93595 18.2034 8.54258C18.4762 10.1492 18.2643 11.8003 17.5945 13.2871C16.9247 14.7738 15.827 16.0295 14.4403 16.8953Z" fill="white"/>
                    </svg>
                    <span className="text-[12px] w-full">
                        <span>Chat</span> <span className="hidden sm:inline">with us</span>
                    </span>
                </div>
            </div>
            <div className="flex bg-white">
                <div className="basis-[8%] bg-[#F9DC38] hidden sm:block"></div>
                <div className="border w-full basis-full sm:basis-[92%]">
                    <section className="flex justify-between sm:justify-none">
                        <div className="items-center gap-1 border px-4 sm:px-10 py-2 text-xs font-semibold hidden sm:flex"><span className="mr-2">All Categories</span><Down param={"#000"}/></div>
                        <div className="sm:grow border pr-9 hidden sm:flex">
                            <input type="text" className="border-0 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="What are you looking for?"  required/>
                            <button type="button" className="text-black bg-[#F9DC38] font-medium text-sm px-4 my-1">Search</button>
                            <button type="button" className="text-white bg-black font-medium text-sm px-4 my-1 "><Search/></button>
                        </div>
                        <div className="flex sm:hidden">
                            <div className="mx-5 pt-1">
                                <button
                                    className="py-2 text-gray-700 rounded-md outline-none"
                                    onClick={() => {setNavbar(!navbar)}}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.4}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                    </button>
                                </div>
                            <button type="button" className="text-black font-medium text-sm px-4 py-3 my-1 "><SearchBlack/></button>
                        </div>
                        <div className="flex">
                            <div className="sm:border sm:px-10 px-5 py-3 my-auto"><ShoppingCart/></div>
                            <div className="flex items-center gap-1 sm:border sm:px-10 px-5 py-3 my-auto"><User/><Down param={'#000'}/></div>
                        </div>
                    </section>
                    {navbar && <MobileNav/>}
                    <section className="w-full hidden sm:block">
                        <Navbar navbar={navbar}/>
                    </section>
                </div>
            </div>
        </section>

     );
}
 
export default Header;