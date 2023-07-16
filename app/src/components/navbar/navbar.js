import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, Outlet } from 'react-router-dom';
import { primary_color, secondary_color } from "../../utils/colors";



const navigation = [
  { name: "Home", to: "/home", current: false },
  { name: "Sale", to: "/sale", current: false },
  { name: "Purchase", to: "/purchase", current: false },
  { name: "Stock", to: "/addstock", current: false },
  { name: "Supplier", to: "/addSupplier", current: false },
  { name: "Report", to: "/salesReport", current: false },
  { name: "Set Default Printer", to: "/printer", current: false },
  { name: "Logout", to: "/", current: false },
];
 
export default function NavBar({SideNav,Footer}) {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
       {navigation.map((i)=>(
         <Typography
         as="li"
         variant="small"
         color="white"
         className="p-1 font-normal"
       >
         <Link to={i.to} className="flex items-center">
           {i.name}
         </Link>
       </Typography>
       ))}
    </ul>
  );
 
  return (
    <>
     <div className='flex flex-col' >
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4  top-0" 
      style={{backgroundColor:primary_color}}>
        <div className="flex items-center justify-between text-blue-gray-900">
        
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
           
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      
      </Navbar>
      <div className="flex flex-row" style={{backgroundColor:secondary_color}} > 
          {SideNav}
           <div className="mx-auto" >
          <Outlet/>
        </div>
      </div>
      {Footer}
    </div>
    </>
  );
}