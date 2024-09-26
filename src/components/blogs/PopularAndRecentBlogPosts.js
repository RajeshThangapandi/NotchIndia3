import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../../components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "../../components/misc/Layouts.js";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``

export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  //Recommended: Only 2 Items
  const popularPosts = [
    {
      postImageSrc:
        "https://logowik.com/content/uploads/images/reliance-infrastructure1327.logowik.com.webp",
      authorImageSrc:
        "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
      title: "Construction of Widening of Two Lane to Four Lane bypasses",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "lorem",
      authorProfile: "lorem",
   
    },
    {
      postImageSrc:
        "https://ih1.redbubble.net/image.630145940.1568/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
      authorImageSrc:
        "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
      title: "Construction of Vaigai River North Bank Road",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "Vlogger",
     
    }
  ];

  const recentPosts = [
    {
      postImageSrc:
        "https://interiseweb.s3.ap-south-1.amazonaws.com/uploads/og_image_9f1699d08b.jpg",
      title: "MMR Overlay Works at Simhapuri Expressway Ltd.",
      authorName: "lorem",
  
    },
    {
      postImageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Tamil_Nadu_Emblem.png",
      title: "lorem",
      authorName: "lorem",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Ix2XlQfAJWX3VjXu-g5OcbNg1VEQsEaXXA&s",
      title: "Lorem Ipsum is simply dummy text",
      authorName: "Tony Hawk",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://upload.wikimedia.org/wikipedia/ta/0/0a/Mdu_Corporation_logo.jpg",
      title: "Lorem Ipsum is simply dummy text",
      authorName: "Himali Turn",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
      title: "Lorem Ipsum is simply dummy text",
      authorName: "Naomi Watts",
      url: "https://timerse.com"
    },
  ]

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>Signature Projects</Heading>
            <PostsContainer>
              {popularPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    
                    variants={postBackgroundSizeAnimation}
                    $imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    <AuthorImage src={post.authorImageSrc} />
                    <AuthorNameAndProfession>
                      <AuthorName>{post.authorName}</AuthorName>
                      <AuthorProfile>{post.authorProfile}</AuthorProfile>
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>Ongoing Projects</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image $imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
