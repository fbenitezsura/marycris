import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TriangleDownMini } from "@medusajs/icons"
import clsx from "clsx"

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

const variants = {
    default: 'relative w-full cursor-default rounded-lg bg-[#E5E5E5] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
    inputPhone: 'w-full min-w-[70px] pt-4 pb-1 h-11 mt-0 text-left pl-3 bg-ui-bg-field border rounded-md focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover',
    error: "w-full h-[35px] bg-[#ffffff10] rounded-[10px] pl-[16px] px-[8.5px] pr-[30px] placeholder:text-gray-light placeholder:text-[14px] text-white text-[14px] border-1 border-red",
    none: '',
};

const optionsVariants = {
    default: 'relative w-full cursor-default rounded-lg bg-[#E5E5E5] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
    inputPhone: 'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm',
    error: "w-full h-[35px] bg-[#ffffff10] rounded-[10px] pl-[16px] px-[8.5px] pr-[30px] placeholder:text-gray-light placeholder:text-[14px] text-white text-[14px] border-1 border-red",
    none: '',
}

export default function Dropdown({
    title,
    items,
    value,
    handleChange,
    className,
    variant = 'default'
}: {
    title: string,
    items: Array<any>
    value: any
    handleChange: (value: string) => void,
    className: string,
    readonly variant?: keyof typeof variants
}) {

    return (
        <div className={clsx('relative z-40', className)}>
            <Listbox value={value} onChange={(e) => handleChange(e)}>

                <Listbox.Button
                    className={clsx('', variants[variant])}>
                    <span className="">
                        {value.label}
                    </span>
                    <span className="pointer-events-none pt-4 pb-1 absolute inset-y-0 right-0 flex items-center pr-2">
                        <TriangleDownMini />
                    </span>
                </Listbox.Button>
                <label
                    htmlFor={title}
                    className={clsx(
                    "flex items-center text-[9px] justify-center mx-3 transition-all absolute duration-300 top-1 -z-1 origin-0 text-gray-500",
                    
                    )}
                >
                    {title}
                </label>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className={clsx('', optionsVariants[variant])}>
                        {items.map((item, itemIdx) => (
                            <Listbox.Option
                                key={itemIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-4 pr-4 ${active ? 'bg-[#FF5733] text-white cursor-pointer' : 'text-gray-900'
                                    }`
                                }
                                value={item}
                            >
                                {item.label}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    )
}
