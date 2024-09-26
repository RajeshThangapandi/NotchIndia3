import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../../components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons";

import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://5.imimg.com/data5/SELLER/Default/2021/5/TV/ZF/JL/8809730/apollo-hot-mix-plant-500x500.jpeg",
      title: "Apollo Hot mix plant",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      rating: "4.8",
    },
    {
      imageSrc: "data:image/jpeg;base64,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",
      title: "Wirtgen - Milling Machine",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
     imageSrc:"https://www.wirtgen-group.com/media/03_voegele/01_bilder_2/01_produkte_2/hotspots/universal_class/s1800-3_freisteller_710px_breite_vorderseite_768x1024.png",
      title: "vogele",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.2,
    }
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Our Machineries</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                
                <Description>{card.description}</Description>
              </TextInfo>
             
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
