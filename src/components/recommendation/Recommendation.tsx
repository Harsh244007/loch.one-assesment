import HeroCohortImage from "../../assets/recommendation/Cohorts 1.png";
import EyeIconImage from "../../assets/recommendation/Eye.svg";
import { ImagesConfigType } from "../../configs/commonTypes";
import { CommonImageCached } from "../common/CommonFn";
import { NotificationRightSide } from "../notification/NotificationRightSide";

const RecommendationMain = () => {
  const EyeIconImageConfig: ImagesConfigType = { src: EyeIconImage, alt: "Eye Icon", height: 32, width: 32 };
  const HeroCohortImageConfig: ImagesConfigType = {
    src: HeroCohortImage,
    alt: "Cohort Image",
    height: 306,
    width: 335,
    className: "recommendationCohortIamge",
  };
  const RecommendationMainJSON = {
    heroImage: HeroCohortImageConfig,
    ExtraInfo: {
      className: "recommendationExtraInfo lg:mr-5 xl:mr-24",
      Icon: EyeIconImageConfig,
      mainText: { text: "Watch what the whales are doing", className: "notificationMainText" },
      subText: {
        text: "All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.",
        className: "notificationSubText",
      },
    },
  };
  return (
    <section className="flex justify-between items-center gap-5 flex-col-reverse lg:flex-row lg:ml-40">
      <CommonImageCached Icon={RecommendationMainJSON.heroImage} />
      <NotificationRightSide
        className={RecommendationMainJSON.ExtraInfo.className}
        imagesCofig={RecommendationMainJSON.ExtraInfo.Icon}
        mainText={RecommendationMainJSON.ExtraInfo.mainText}
        subText={RecommendationMainJSON.ExtraInfo.subText}
      />
    </section>
  );
};

export default RecommendationMain;
