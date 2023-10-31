import { ReactNode } from "react";

export type ImagesConfigType = {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
};
export type NotificationRightSideTextTypes = {
  text: string;
  className?: string;
};
export type NotificationRightSideTypes = {
  imagesCofig: ImagesConfigType;
  mainText: NotificationRightSideTextTypes;
  className?: string;
  subText: NotificationRightSideTextTypes;
};

export type CardItemType = {
  Icon: ImagesConfigType;
};
export type NotificationCardItemType = {
  Icon: ImagesConfigType;
  HeaderSecondElement?:ReactNode;
  mainClassName?:string;
  BodyElement?:ReactNode;
};
export type TestimonialCardPropsType = {
  userName: string;
  text: string;
  width?: string;
  userTitle: string;
};

export type TestimonialFooterPropsType = {
  Icon: ImagesConfigType;
  innerWrapperClassName?: string;
  wrapperClassName?: string;
  Testimonials: TestimonialCardPropsType[];
};
export type CustomButtonTypes = {
  text?: string;
  className: string;
};
export type CustomNotificationCardSaveProps = {
  inputFieldText: string;
  inputClassName: string;
  text: string;
};
export type CustomNotificationCardDropdownProps={
  dropdownFieldText: string;
  inputClassName: string;
  text: string;
  extraText?:string;
}