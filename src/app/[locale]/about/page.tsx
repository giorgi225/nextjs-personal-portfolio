// Next
import { useMessages } from "next-intl";

// Components
import ContactInformation from "@/components/contact/ContactInformation";
import PageLayout from "@/components/layout/pageLayout";
import Paragraph from "@/components/ui/Paragraph";

const About = () => {
  const messages: any = useMessages();
  return (
    <PageLayout pageTitle="about" pageIntroduction="about_introduction">
      <Paragraph
        title={messages["digital_journey"]}
        paragraph={messages["digital_journey_text"]}
      />
      <Paragraph
        title={messages["learning_landscape"]}
        paragraph={messages["learning_landscape_text"]}
      />
      <Paragraph
        title={messages["journey_continues"]}
        paragraph={messages["journey_continues_text"]}
      />
      <ContactInformation />
    </PageLayout>
  );
};

export default About;
