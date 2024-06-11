'use client'

import { Tab } from '@headlessui/react';
import ProductPreview from "@modules/products/components/product-preview"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { useEffect, useState } from 'react';
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
                                    'min-w-[150px] w-full md:min-w-auto py-2.5 text-sm font-medium leading-5',
                                    'focus:outline-none',
                                    selected
                                        ? 'underline text-black underline-offset-[12px]'
                                        : 'text-neutral-700'
                                )
                            }
                        >
                            {category.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="grid grid-cols-12 gap-x-6 gap-y-8 mt-[20px]">
                    {data && data.map((product) => {
                        console.log('product',product)
                        return (
                            <div className="col-span-6 md:col-span-3">
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
        </div>
    )
}
