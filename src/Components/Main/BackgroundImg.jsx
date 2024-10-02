import largeImg from "/src/assets/images/background-large.jpg";
import mediumImg from "/src/assets/images/background-medium.jpg";
import smallImg from "/src/assets/images/background-small.jpg";
import breakpoints from "../../breakpoints";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const Picture = styled.picture`
  position: relative;
`;

const Para = styled.p`
  position: absolute;
  bottom: 0;
  padding: 10px;
  color: #f9fafb;
  font-size: 1em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const StyledA = styled.a`
  color: inherit;
  margin: 0 5px;
`;

const BackgroundImage = () => {
  return (
    <Picture>
      <source media={`(max-width: ${breakpoints.mobile})`} srcSet={smallImg} />
      <source
        media={`(min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`}
        srcSet={mediumImg}
      />
      <source media={`(min-width: ${breakpoints.tablet}) `} srcSet={largeImg} />
      <Img alt="background-image" />
      <Para>
        Photo by
        <StyledA href="https://unsplash.com/@mercantile" target="_blank">
          Mercantile
        </StyledA>
        on
        <StyledA href="https://unsplash.com/" target="_blank">
          Unsplash
        </StyledA>
      </Para>
    </Picture>
  );
};

export default BackgroundImage;
