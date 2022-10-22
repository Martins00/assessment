import { NavLink } from "react-router-dom";
import { underline } from "../utils";


const Navbar = ({navbar}) => {
  
  return (
      <nav className="w-full bg-white">
        <div className="px-4 py-3 sm:px-10 justify-between mx-auto sm:items-center sm:flex ">
          <div className="block sm:hidden">
            <div className="flex items-center justify-between">
              <div className="sm:hidden">
                <button
                    className="py-2 text-gray-700 rounded-md outline-none"
                    
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
            </div>
          </div>


          <div className="items-center sm:flex">
            <div
              className={` justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 transition-all ${
                  navbar ? "block" : "hidden"
              }`}
              >
              <ul className="items-center  space-y-8 sm:flex sm:space-x-10 sm:space-y-0">
                <li className="text-gray-600 text-xs">
                    <NavLink className={({isActive}) => 
                      isActive ? underline() : ''
                  } to={"/"}>Home</NavLink>
                </li>
                <li className="text-gray-600 text-xs">
                    <NavLink className={({isActive}) => 
                      isActive ? '' : ''
                  } to={"/"}>T-shirt</NavLink>
                </li>
                <li className="text-gray-600 text-xs">
                    <NavLink className={({isActive}) => 
                      isActive ? '' : ''
                  } to={"/"}>NBA</NavLink>
                </li>
                <li className="text-gray-600 text-xs">
                    <NavLink className={({isActive}) => 
                      isActive ? '' : ''
                  } to={"/"}>Tracksuits</NavLink>
                </li>
                <li className="text-gray-600 text-xs">
                    <NavLink className={({isActive}) => 
                      isActive ? '' : ''
                  } to={"/"}>Product delivery 1-2 days</NavLink>
                </li>
                <li className="text-gray-600 text-xs">
                    <NavLink className={({isActive}) => 
                      isActive ? '' : ''
                  } to={"/"}>Contact</NavLink>
                </li>
                <li className="text-gray-600 text-xs">
                    <NavLink className={({isActive}) => 
                      isActive ? '' : ''
                  } to={"/"}>Reviews</NavLink>
                </li>
                
                

              </ul>
            </div>
            
          </div>

          
        </div>
      </nav>
  );
}
 
export default Navbar;