import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { primary_color} from '../../utils/colors'
import { Link } from 'react-router-dom';


const navigation = [

  {
    name: 'sale',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'sale report', href: '/salesReport' },
      { name: 'sold item report', href: '/soldItemReport' },
      { name: 'sale return report', href: '/saleReturn' },
      { name: 'narcotics drugs report', href: '/NarcoticsDrugRreport' },
      { name: 'bill payment report', href: '/billReport' },
    ],
  },
  
  {
    name: 'purchase',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'purchase report', href: '/purchaseReport' },
      { name: 'purchase return report', href: '/purchaseReturnReport' },
      { name: 'narcotics adjustment report', href: '/narcoticsAdjustmentReport' },
    ],
  },

  {
    name: 'stock',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'stock report', href: '/stockReport' },
      { name: 'stock in hand report', href: '/stockInHandReport' },
      { name: 'product report', href: '/productReport' },
      { name: 'expiry product report', href: '/expiryProductReport' },
      { name: 'short item list report', href: '/shortItemListReport' },
    ],
  },

  {
    name: 'suppler',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'list of vender report', href: '/listOfVenderReport' },
    ],
  },


]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideReportNav() {
  return (
    <div
      style={{ backgroundColor: primary_color }}
      className="flex grow flex-col gap-y-5 overflow-y-auto border-r
       border-gray-200 bg-white px-6 w-auto h-screen py-6 ">

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700'
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      <span className='text-white'>{item.name}</span>
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-white'
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0 text-white" aria-hidden="true" />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-white',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <Link to={subItem.href}>
                               
                                 <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-white'
                                  )}
                                >
                                  {subItem.name}
                                 </Disclosure.Button>
                                </Link>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
         
        </ul>
      </nav>
    </div>
  )
}
