import { ImagesConfigType, TestimonialCardPropsType, TestimonialFooterPropsType } from "../../configs/commonTypes";
import TestimonialsMainIcon from "../../assets/testimonial/logo.svg";
import { CommonImageCached } from "../common/CommonFn";
const TestimonialsMain = () => {
  const TestimonialMainIconConfig: ImagesConfigType = { src: TestimonialsMainIcon, alt: "Loch Logo", height: 60, width: 60 };

  const TestimonialsMainJSON = {
    divClassName: {
      divider: "testimonialDivider",
      testimonialCardWrapper: "testimonialCardWrapper",
      testimonialCardInnerWrapper: "testimonialCardInnerWrapper",
    },
    title: { text: "Testimonials", className: "TestimonidalsTitle text-right w-full" },
    mainIcon: TestimonialMainIconConfig,
    TestiMonials: [
      {
        text: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
        userName: "Jack F",
        userTitle: "Ex Blackrock PM",
        width: "353px",
      },
      {
        text: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
        userName: "Yash P",
        userTitle: "Research, 3poch Crypto Hedge Fund",
        width: "353px",
      },
      {
        text: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
        userName: "Shiv S",
        userTitle: "Co-Founder Magik Labs",
        width: "561px",
      },
    ],
  };
  return (
    <section className="flex gap-4 flex-col">
      <h3 className={TestimonialsMainJSON.title.className}>{TestimonialsMainJSON.title.text}</h3>
      <div className={TestimonialsMainJSON.divClassName.divider} />
      <TestimonialFooter
        wrapperClassName={TestimonialsMainJSON.divClassName.testimonialCardWrapper}
        innerWrapperClassName={TestimonialsMainJSON.divClassName.testimonialCardInnerWrapper}
        Icon={TestimonialsMainJSON.mainIcon}
        Testimonials={TestimonialsMainJSON.TestiMonials}
      />
    </section>
  );
};
const TestimonialFooter: React.FC<TestimonialFooterPropsType> = ({ Icon, innerWrapperClassName, wrapperClassName, Testimonials }) => {
  return (
    <div className="flex gap-7 items-center flex-col md:flex-row md:items-end">
      <CommonImageCached Icon={Icon} />
      <div className={wrapperClassName}>
        <div className={innerWrapperClassName}>
          {Testimonials.map((testimonialCard: TestimonialCardPropsType, index: number) => {
            return (
              <TestimonialCard
                userName={testimonialCard.userName}
                width={testimonialCard.width}
                text={testimonialCard.text}
                userTitle={testimonialCard.userTitle}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const TestimonialCard: React.FC<TestimonialCardPropsType> = ({ userName, width, text, userTitle }) => {
  return (
    <div className="testimonialCardMain" style={{ width: width }}>
      <h4>
        {userName}
        <span>{userTitle}</span>
      </h4>
      <p>{text}</p>
    </div>
  );
};
export default TestimonialsMain;
