import clsx from "clsx"

const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <>
      <button
        type="button"
        role="radio"
        aria-checked="true"
        data-state={checked ? "checked" : "unchecked"}
        className="group relative flex h-5 w-5 items-center justify-center outline-none"
      >
        <div className=" bg-white border-[1px] shadow-md border-[#2A2D6E] group-data-[state=checked]:bg-[#2D2A6E] group-disabled:!bg-ui-bg-disabled flex h-[14px] w-[14px] items-center justify-center rounded-full transition-all">
          {checked && (
            <span
              data-state={checked ? "checked" : "unchecked"}
              className="group flex items-center justify-center"
            >
              <div className="bg-ui-bg-base shadow-details-contrast-on-bg-interactive group-disabled:bg-ui-fg-disabled rounded-full h-1.5 w-1.5"></div>
            </span>
          )}
        </div>
      </button>
      {/* <div
        className={clsx(
          "h-3 w-3 rounded-full border border-gray-200 flex items-center justify-center",
          {
            "border-gray-900": checked,
          }
        )}
      >
        {checked && <div className="w-2 h-2 rounded-full bg-gray-900" />}
      </div> */}
    </>
  )
}

export default Radio
