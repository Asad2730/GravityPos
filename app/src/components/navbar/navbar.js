import React from 'react';

import { Disclosure } from '@headlessui/react'
import { primary_color } from '../../utils/colors';
import {  Link, Outlet } from 'react-router-dom';

const navigation = [
    { name: "Sale", to: "/sale", current: false },
    { name: "Purchase", to: "/purchase", current: false },
    { name: "Stock", to: "/stock",  current: false },
    { name: "Calculator", to: "/calculator",  current: false },
    { name: "Set Default Printer", to: "/printer",  current: false },
    { name: "Logout", to: "/",  current: false },
  ];

export default function NavBar() {
  return (
    <Disclosure as="nav" style={{backgroundColor:primary_color}} className="bg-white shadow ">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16">
            
              <div className="flex flex-1">
              
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {
                    navigation.map((i)=>(                      
                      <>
                        <Link className='inline-flex items-center border-b-2
                        border-transparent px-1 pt-1 text-sm font-medium
                       text-white hover:border-gray-300 hover:text-gray-700'
                         to={i.to}
                        >                   
                        {i.name}
                        </Link>
                      </>
                    ))
                  }
                </div>
              </div>
            
            </div>

          </div>
          <Outlet/> 

         
        </>
      )}
    </Disclosure>
  )
}
