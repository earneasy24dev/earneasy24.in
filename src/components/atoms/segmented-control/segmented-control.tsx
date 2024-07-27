import {
  useMergedRef,
  useResizeObserver,
  useUncontrolled,
  useUuid,
} from "@mantine/hooks";
import classNames from "../../../utils/classNames";
import { forwardRef, Ref, useEffect, useRef, useState } from "react";
import styles from "./segmented-control.module.css";
export type SegmentedControlInput = {
  label: string | React.ReactNode;
  value: string;
  icon?: JSX.Element;
  className?: string;
  labelClassName?: string;
};
export type SegmentedControlProps = Omit<
  JSX.IntrinsicElements["div"],
  "onChange" | "ref"
> & {
  ref?: Ref<HTMLDivElement>;
  data: SegmentedControlInput[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  fullWidth?: boolean;
  size?: "sm" | "lg";
  disabled?: boolean;
};

const WRAPPER_PADDING = 4;
export const SegmentedControl = forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(
  (
    {
      className,
      disabled,
      name,
      data,
      value,
      onChange,
      defaultValue,
      fullWidth,
      size = "sm",
    }: SegmentedControlProps,
    ref
  ) => {
    const uuid = useUuid(name);
    const [_value, handleValueChange] = useUncontrolled({
      value,
      defaultValue,
      finalValue: Array.isArray(data) ? data[0].value : null,
      onChange,
      rule: (val) => !!val,
    });
    const [observerRef, containerRect] = useResizeObserver();
    const refs = useRef<Record<string, HTMLLabelElement>>({});
    const [activePosition, setActivePosition] = useState({
      width: 0,
      height: 0,
      translate: [0, 0],
    });

    useEffect(() => {
      if (_value && refs.current[_value as string] && observerRef.current) {
        /**
         * The below code is for determining the offset dimensions for the active indicator to move to
         */
        const element = refs.current[_value as string];
        const elementRect = element.getBoundingClientRect();
        const scaledValue = element.offsetWidth / elementRect.width;
        const width = elementRect.width * scaledValue || 0;
        const height = elementRect.height * scaledValue || 0;

        const parentOffsetLeft = element.parentElement
          ? element.parentElement.offsetLeft
          : 0;
        const parentOffsetTop = element.parentElement
          ? element.parentElement.offsetTop
          : 0;

        const offsetLeft = parentOffsetLeft - WRAPPER_PADDING;

        setActivePosition({
          width,
          height,
          translate: [offsetLeft, parentOffsetTop - WRAPPER_PADDING],
        });
      }
    }, [_value, containerRect, observerRef]);

    const controls = data.map((item) => (
      <div
        className={classNames(
          styles["control"],
          _value === item.value && styles["active"],
          size && styles[size],
          item.className
        )}
        key={item.value}
      >
        <input
          className={styles["hide-input"]}
          disabled={disabled}
          type="radio"
          name={uuid}
          value={item.value}
          id={`${uuid}-${item.value}`}
          checked={_value === item.value}
          onChange={() => handleValueChange(item.value)}
        />

        <label
          className={classNames(
            styles["label"],
            _value === item.value && styles["active"],
            size && styles[size],
            item.labelClassName
          )}
          htmlFor={`${uuid}-${item.value}`}
          ref={(node: HTMLLabelElement) => {
            refs.current[item.value] = node;
          }}
        >
          {item.icon && item.icon}

          {item.label}
        </label>
      </div>
    ));
    return (
      <div
        className={classNames(
          styles["base"],
          fullWidth && styles["full-width"],
          className
        )}
        ref={useMergedRef(observerRef, ref)}
      >
        <div
          className={styles["active-indicator"]}
          style={{
            width: activePosition.width,
            height: activePosition.height,
            transform: `translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px )`,
          }}
        />
        {controls}
      </div>
    );
  }
);

export default SegmentedControl;
