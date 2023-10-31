import { NotificationRightSideTypes } from "../../configs/commonTypes";

export const NotificationRightSide = ({ className, imagesCofig, mainText, subText }: NotificationRightSideTypes) => {
  return (
    <div className={`flex flex-col gap-4  ${className}`}>
      <img src={imagesCofig.src} alt={imagesCofig.alt} height={imagesCofig.height} width={imagesCofig.width} />
      <h4 className={mainText.className}>{mainText.text}</h4>
      <p className={subText.className}>{subText.text}</p>
    </div>
  );
};
