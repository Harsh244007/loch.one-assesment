import { NotificationRightSide } from "./NotificationRightSide";
import { NotificationLeftSide } from "./NotificationLeftSide";
import BellIcon from "../../assets/notification/Bell.svg";

const NotificationMain = () => {
  const NOTIFCATIONJSON = {
    IMAGECONFIG: { src: BellIcon, alt: "Bell Icon", height: 32, width: 32 },
    NOTIFICATIONMAINTEXT: { text: "Get notified when a highly correlated whale makes a move", className: "notificationMainText" },
    NOTIFICATIONSUBTEXT: {
      text: "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
      className: "notificationSubText",
    },
  };
  return (
    <section className="flex justify-between gap-5 items-center flex-col lg:flex-row lg:ml-40">
      <NotificationRightSide
        imagesCofig={NOTIFCATIONJSON.IMAGECONFIG}
        mainText={NOTIFCATIONJSON.NOTIFICATIONMAINTEXT}
        subText={NOTIFCATIONJSON.NOTIFICATIONSUBTEXT}
      />
      <NotificationLeftSide />
    </section>
  );
};
export default NotificationMain;
