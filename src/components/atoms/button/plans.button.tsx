import React from "react";
import classNames from "../../../utils/classNames";

export interface CustomButtonProps {
  text?: string;
  size?: "normal" | "large";
  disabled?: boolean;
  outlined?: boolean;
  className: any;
  icon: any;
}

/**
 * Component for custom button.
 *
 * @component
 * @example
 * return (
 *   <CustomButton text="Button" />
 * )
 */

const CustomPlansButton: React.FC<CustomButtonProps> = ({
  text,
  outlined = false,
  disabled = false,
  size,
  className,
  icon,
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
        {
          "bg-D7D4F5 text-B9B6EC": disabled,
          "bg-lightPink border-4 border-white hover:bg-white hover:text-lightPink hover:border-lightPink text-center rounded-full":
            !disabled,
        },
        // {
        //   "bg-primary text-white": !outlined,
        //   "bg-white hover:border-4 border-white hover:border-lightPink": outlined,
        // },
        //"active:bg-primary rounded-lg font-poppins leading-5",
        className
      )}
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default CustomPlansButton;
