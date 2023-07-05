
import { primary_color} from '../../utils/colors'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav({navigation}) {
  return (
    <div
      style={{ background: primary_color }}
      className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 
      bg-white px-6 w-64 h-full py-6">

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
             { navigation.map((item) => (
                <li key={item.name}>
                 
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
                                   
                </li>
              ))}
            </ul>
          </li>
         
        </ul>
      </nav>
    </div>
  )
}
