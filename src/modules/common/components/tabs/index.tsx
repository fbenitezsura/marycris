'use client'

import { Tab } from '@headlessui/react';
import ProductPreview from "@modules/products/components/product-preview"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { useEffect, useState } from 'react';
import Link from "next/link"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs({
    type,
    collections
}: {
    type: string,
    collections: any
}) {

    const [collectionSelected, setCollectionSelected] = useState(0);

    const { data } = useFeaturedProductsQuery(collections[collectionSelected]?.id);

    return (
        <div className="w-full px-2 py-8 sm:px-0 md:px-[40px]">
            <Tab.Group onChange={setCollectionSelected}>
                <Tab.List className="flex space-x-1 mx-auto w-full md:max-w-[650px] pb-5 overflow-x-auto">
                    {type === 'collection' && collections.map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full md:min-w-auto py-2.5 px-[22px] text-[16px] font-medium leading-5',
                                    'focus:outline-none',
                                    selected
                                        ? 'text-[#96ae00]'
                                        : 'text-[#4d5574]'
                                )
                            }
                        >
                            {category.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="grid grid-cols-12 gap-x-6 gap-y-8 mt-[10px]">
                    {data && data.map((product) => {
                        console.log('product', product)
                        return (
                            <div className="col-span-12 md:col-span-3">
                                <ProductPreview isFeatured {...product} />
                            </div>

                        )
                    })}
                    {data?.length === 0 && (
                        <div className="col-span-12 flex justify-center mt-[80px]">
                            <span>Sin productos disponibles.</span>
                        </div>
                    )}
                </Tab.Panels>
            </Tab.Group>
            <p className="text-[#4d5574] text-[16px] mt-[40px] flex md:flex-row flex-col justify-center">Descrube todo la calidad de nuestros productos.
                <Link href="/" className="text-[16px] text-[#96ae00] flex items-center justify-center mt-2 md:mt-0">
                    Tienda 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>

                </Link>
            </p>
        </div>
    )
}
