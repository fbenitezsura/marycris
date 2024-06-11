import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { MagnifyingGlassMini } from "@medusajs/icons"
import MobileHit from "@modules/search/components/mobile-hit"
import MobileHits from "@modules/search/components/mobile-hits"
import SearchBox from "@modules/search/components/search-box"

const SearchMenu = () => {
  const {
    screen: [_, setScreen],
    close,
  } = useMobileMenu()

  return (
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between w-full border-b border-gray-200 py-4 px-6">
          <div className="flex-1 basis-0">
            <div className="flex items-center gap-x-2">
              <MagnifyingGlassMini />
              <SearchBox close={close} />
            </div>
          </div>
          <div className="flex justify-end ml-4">
            <button
              onClick={() => setScreen("main")}
              className="text-small-semi uppercase"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
  )
}

export default SearchMenu
