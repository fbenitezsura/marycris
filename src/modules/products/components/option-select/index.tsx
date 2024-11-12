import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"
import React, { useEffect } from "react"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  // useEffect para seleccionar la primera variante si no hay una seleccionada
  useEffect(() => {
    // Verifica si no hay una variante actual o si la variante actual no está en las opciones filtradas
    if (filteredOptions.length > 0 && !filteredOptions.includes(current)) {
      // Establece la primera variante como seleccionada
      updateOption({ [option.id]: filteredOptions[0] })
    }
  }, [filteredOptions, current, option.id, updateOption])

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">{title}</span>
      <div className="flex flex-wrap justify-between gap-2">
        {filteredOptions.map((v) => (
          <button
            onClick={() => updateOption({ [option.id]: v })}
            key={v}
            className={clsx(
              "border border-gray-300 text-sm h-10 rounded p-2 flex-1 bg-white transition-colors duration-150",
              {
                "bg-[#e2e2e2] text-black border-[#bbbbbb] border-2": v === current, // Seleccionado
                "hover:bg-gray-100": v !== current, // Hover suave
              }
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}

export default OptionSelect
