import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"

const CategoryPreview = ({
  collection
}: any) => (
  <div className="h-[400px] bg-[#ccc]">
    <span>{collection?.title}</span>
  </div>
)

export default CategoryPreview
