import React from "react";

import { Row, Text, Button } from "components";

const Footer2 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Row className="items-start w-[78%]">
          <Text
            className="font-normal font-ptsans xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-white_A700 w-[auto]"
            variant="body4"
          >
            About Us
          </Text>
          <Text className="PrivacyandCoo" variant="body4">
            Privacy and Cookie Statement
          </Text>
          <Text className="PrivacyandCoo" variant="body4">
            FAQs
          </Text>
          <Button
            className="font-bold font-ptsans lg:ml-[268px] xl:ml-[335px] 2xl:ml-[377px] 3xl:ml-[452px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
            shape="RoundedBorder2"
            size="lg"
            variant="FillLightblue800"
          >
            Add new property
          </Button>
          <Button
            className="font-bold font-ptsans lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
            shape="RoundedBorder2"
            size="lg"
            variant="FillLightblue800"
          >
            Share your feedback
          </Button>
        </Row>
      </footer>
    </>
  );
};

export default Footer2;
