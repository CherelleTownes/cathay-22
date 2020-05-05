import React from 'react';
import styled from 'styled-components';

import reviewImg1 from '../../assets/images/trip-advisor-review-1.png';
import reviewImg2 from '../../assets/images/yelp-review.png';
import reviewImg3 from '../../assets/images/trip-advisor-review-2.png';

import recommendationImg1 from '../../assets/images/tripadvisor.png';
import recommendationImg2 from '../../assets/images/yelp.png';

const StyledReviews = styled.section`
  height: 641px;
  background-color: #f4eaea;
  width: 100%;
  @media (max-width: 425px) {
    height: 176px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 41px 320px;
  grid-row-gap: 57px;
  padding: 77px 29px 154px 29px;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 425px) {
    display: grid;
    grid-template-rows: 21px 120px;
    grid-row-gap: 17px;
    padding: 13px 0px 7px 0px;
    max-width: 395px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  a:link {
    text-decoration: none;
    @media (max-width: 425px) {
    }
  }
`;

const Label = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #000000;
  justify-self: center;
  text-transform: uppercase;
  @media (max-width: 425px) {
    font-size: 15px;
    letter-spacing: 0.75px;
    padding-top: 4px;
  }
`;

const TopText = styled.p`
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: 0.85px;
  color: #ffffff;
  margin-left: 50px;
  text-transform: uppercase;
  @media (max-width: 425px) {
    font-size: 8px;
    letter-spacing: 0.4px;
    margin-left: 15px;
  }
`;

const Vector = styled.hr`
  width: 298px;
  height: 1px;
  border: solid 2px #ea3a3a;
  margin-right: -22px;
  @media (max-width: 425px) {
    width: 100px;
    height: 0px;
    margin-top: 1px;
    margin-right: -7px;
    border: solid 0.5px #ea3a3a;
  }
`;

const BottomText = styled.p`
  width: 326px;
  height: 105px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: 0.85px;
  color: #ffffff;
  padding-left: 50px;
  text-transform: uppercase;
  @media (max-width: 425px) {
    width: 100px;
    padding-left: 10px;
    font-size: 6px;
    letter-spacing: 0.4px;
    display: none;
  }
`;

const MobileContent = styled.p`
  display: none;
  @media (max-width: 425px) {
    display: inline;
    width: 100px;
    font-size: 8px;
    letter-spacing: 0.4px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Roboto;
    font-weight: bold;
    font-stretch: normal;
    font-style: italic;
    line-height: normal;
    letter-spacing: 0.85px;
    color: #ffffff;
    padding-left: 15px;
    text-transform: uppercase;
    margin-top: -3px;
  }
`;

const ReviewImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 50;
  width: 428px;
  height: 320px;
  @media (max-width: 425px) {
    width: 125px;
    height: 97px;
  }
`;

const ReviewsImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 51px;
  filter: brightness(80%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  @media (max-width: 425px) {
    border-radius: 10px;
  }
`;

const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 50px;
  margin: 0 auto;
  @media (max-width: 425px) {
    padding-top: 10px;
  }
`;

const Recommendation = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 21px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  @media (max-width: 425px) {
    width: 21px;
    height: 21px;
    border-radius: 6px;
  }
`;

export default function Reviews() {
  return (
    <StyledReviews>
      <Grid>
        <Label>Our Reviews</Label>
        <ReviewContainer>
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g46842-d541995-Reviews-Cathay_22-Springfield_New_Jersey.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReviewImgContainer>
              <ReviewsImg src={reviewImg1} />
              <RecommendationContainer>
                <TopText>Love It</TopText>
                <Vector />
                <BottomText>
                  Haven't been here for awhile, the food and service is still
                  great. The spicy wontons and cold chengdu noodles are tasty as
                  hell, as is the sea dragon, a whole sea bass in a sweet and
                  spicy sauce....
                </BottomText>
                <MobileContent>
                  Haven't been here for awhile, the food and service is still
                  great...
                </MobileContent>
              </RecommendationContainer>
              <Recommendation src={recommendationImg1} />
            </ReviewImgContainer>
          </a>

          <a
            href="https://www.yelp.com/biz/cathay-22-springfield"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReviewImgContainer>
              <ReviewsImg src={reviewImg2} />
              <RecommendationContainer>
                <TopText>Been going here for years.</TopText>
                <Vector />
                <BottomText>
                  Always good food and great service. Enjoy the various fish
                  dishes and when we want to go "American Style" they have a
                  nice pupu!
                </BottomText>
                <MobileContent>
                  Always good food and great service. Enjoy the various fish...
                </MobileContent>
              </RecommendationContainer>
              <Recommendation src={recommendationImg2} />
            </ReviewImgContainer>
          </a>

          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g46842-d541995-Reviews-Cathay_22-Springfield_New_Jersey.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReviewImgContainer>
              <ReviewsImg src={reviewImg3} />
              <RecommendationContainer>
                <TopText>Quality Chinese food</TopText>
                <Vector />
                <BottomText>
                  The food here is fresh and delicious. It is not mass produced
                  take out. I don’t get that awful feeling is used to get when I
                  ate other
                </BottomText>
                <MobileContent>
                  The food here is fresh and delicious. It is not mass...
                </MobileContent>
              </RecommendationContainer>
              <Recommendation src={recommendationImg1} />
            </ReviewImgContainer>
          </a>
        </ReviewContainer>
      </Grid>
    </StyledReviews>
  );
}
