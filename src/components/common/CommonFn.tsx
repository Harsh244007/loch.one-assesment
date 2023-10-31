import { memo } from "react";
import { CardItemType, CustomButtonTypes, CustomNotificationCardDropdownProps, CustomNotificationCardSaveProps } from "../../configs/commonTypes";

const RemoveLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
};
const CommonImage: React.FC<CardItemType> = ({ Icon }) => {
  return <img className={Icon.className} src={Icon.src} alt={Icon.alt} height={Icon.height} width={Icon.width} />;
};
const CommonImageCached = memo(CommonImage);

const CustomButton: React.FC<CustomButtonTypes> = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};
const CustomButtonCached = memo(CustomButton);

const CustomCheckBox: React.FC<CustomButtonTypes> = ({ className }) => {
  return <input type="checkbox" defaultChecked className={`${className} color-white bg-white`} />;
};
const CustomCheckBoxCached = memo(CustomCheckBox);

const CustomNotificationCardSave: React.FC<CustomNotificationCardSaveProps> = ({ inputFieldText, inputClassName, text }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="notificationCardText">{text}</p>
      <input className={inputClassName} placeholder={inputFieldText} value={inputFieldText} />
    </div>
  );
};
const CustomNotificationCardSaveCached = memo(CustomNotificationCardSave);

const CustomNotificationCardDropdown: React.FC<CustomNotificationCardDropdownProps> = ({ dropdownFieldText, inputClassName, text, extraText }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className={`notificationCardDropdownText ${inputClassName}`}>{text}</p>
      <select className={inputClassName}>
        <option value={dropdownFieldText}>{dropdownFieldText}</option>
      </select>
      {extraText && <p className="notificationCardDropdownText">{extraText}</p>}
    </div>
  );
};
const CustomNotificationCardDropdownCached = memo(CustomNotificationCardDropdown);

export {
  RemoveLoader,
  CustomNotificationCardDropdownCached,
  CustomNotificationCardSaveCached,
  CustomCheckBoxCached,
  CommonImageCached,
  CustomButtonCached,
};
