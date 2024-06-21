import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1">
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              className="relative aspect-[34/34] w-full shadow-none"
              id={image.id}
            >
              <Image
                src={image.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0 rounded-md"
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                style={{
                  objectFit: "cover",
                }}
              />
            </Container>
          )
        })}
      </div>
      <div className="absolute">
        <div className="bg-red-200 py-[3px] px-[9px] rounded-[2px]">
          <span className="text-red-500 text-[12px] font-medium">HOT</span>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
