import React from "react";
import BellIcon from "../../assets/notification/Bell2.svg";
import BarChartIcon from "../../assets/notification/Bar-chart.svg";
import ClockIcon from "../../assets/notification/clock.svg";
import { ImagesConfigType, NotificationCardItemType } from "../../configs/commonTypes";
import { CustomButtonCached, CustomCheckBoxCached, CustomNotificationCardDropdownCached, CustomNotificationCardSaveCached } from "../common/CommonFn";

const NotificationCardMain: React.FC<NotificationCardItemType> = ({ Icon, mainClassName, BodyElement, HeaderSecondElement }) => {
  return (
    <div className={`notificationCard gap-3 flex flex-col ${mainClassName}`}>
      <div className="flex justify-between">
        <img src={Icon.src} alt={Icon.alt} height={Icon.height} width={Icon.width} />
        {HeaderSecondElement}
      </div>
      {BodyElement}
    </div>
  );
};

export const NotificationLeftSide: React.FC = () => {
  const BellIconConfig: ImagesConfigType = { src: BellIcon, alt: "Notifcation Icon", height: 28, width: 28 };
  const BarChartIconConfig: ImagesConfigType = { src: BarChartIcon, alt: "Bar Chart Icon", height: 28, width: 28 };
  const ClockIconConfig: ImagesConfigType = { src: ClockIcon, alt: "Clock Icon", height: 28, width: 28 };

  const NotificationLeftSideJSON = {
    cards: [
      {
        Icon: BellIconConfig,
        HeaderSecondElement: <CustomButtonCached text="Save" className="notificationEmailSaveButton" />,
        BodyElement: (
          <CustomNotificationCardSaveCached
            inputClassName="inputEmailOnSave Bell"
            text="We’ll be sending notifications to you here"
            inputFieldText="hello@loch.one"
          />
        ),
      },
      {
        Icon: BarChartIconConfig,
        mainClassName: "justify-between",
        HeaderSecondElement: <CustomCheckBoxCached className="notificationCheckbox Bar-check" />,
        BodyElement: (
          <CustomNotificationCardDropdownCached
            inputClassName="notficationInputDropdown Bar"
            text="Notify me when any wallets move more than"
            dropdownFieldText="$1,000.00"
          />
        ),
      },
      {
        Icon: ClockIconConfig,
        mainClassName: "justify-between",
        HeaderSecondElement: <CustomCheckBoxCached className="notificationCheckbox clock-check" />,
        BodyElement: (
          <CustomNotificationCardDropdownCached
            inputClassName="notficationInputDropdown Clock"
            dropdownFieldText=">30 days"
            text="Notify me when any wallet dormant for"
            extraText="becomes active"
          />
        ),
      },
    ],
  };
  return (
    <div className="testimonialCardWrapper flex m-auto">
      <div className="flex overflow-scroll marqueescroll gap-4 m-auto">
        {NotificationLeftSideJSON["cards"].map((cardItem: NotificationCardItemType, index: number) => {
          return (
            <NotificationCardMain
              Icon={cardItem.Icon}
              mainClassName={cardItem.mainClassName}
              BodyElement={cardItem.BodyElement}
              HeaderSecondElement={cardItem.HeaderSecondElement}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
