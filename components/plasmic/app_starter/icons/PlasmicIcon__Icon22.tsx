// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.991 9.255a3.772 3.772 0 005.688.408l2.262-2.265A3.777 3.777 0 0012.261 1 3.77 3.77 0 009.61 2.06l-1.3 1.29m1.697 4.395A3.772 3.772 0 005.67 6.469a3.77 3.77 0 00-1.35.868L2.06 9.602A3.777 3.777 0 004.739 16a3.77 3.77 0 002.652-1.06l1.29-1.29"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
