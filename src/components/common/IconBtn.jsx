export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        // border-yellow-50
        // text-richblack-900
        className={`flex items-center ${
          outline ? "border  border-[#FE794F] bg-transparent" : "bg-[#FE794F]"
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold  text-white
        duration-300 hover:scale-95 ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-yellow-50"}`}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    )
  }