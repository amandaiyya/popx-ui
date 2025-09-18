import clsx from "clsx";
import React from "react";

function Button({
    children,
    isDisabled = false,
    isPrimary,
    className = '',
    onClick,
    ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        "rounded-md p-3 w-full cursor-pointer",
         isPrimary ? "bg-primary text-white hover:bg-primary/" : "bg-secondary text-text",
         isDisabled && "bg-tertiary text-white",
         className,
      )}
      {...props}
    >
        {children}
    </button>
  )
}

export default Button;
