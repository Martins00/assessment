import { NavLink} from "react-router-dom";
import { underline } from "../utils";

const MobileNav = () => {

    return ( 
        <div className="items-center px-5 bg-white w-full sm:flex">
            <div
              className={` justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 transition-all `}
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
     );
}
 
export default MobileNav;