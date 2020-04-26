import React from 'react';
import styled from 'styled-components';

import reviewImg1 from '../../assets/images/trip-advisor-review-1.png';
import reviewImg2 from '../../assets/images/yelp-review.png';
import reviewImg3 from '../../assets/images/trip-advisor-review-2.png';

const StyledReviews = styled.section`
  height: 641px;
  background-color: #f4eaea;
`;
const Label = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #000000;
`;

const ReviewsImg = styled.img`
  width: 332px;
  height: 182px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: 0.85px;
  color: #ffffff;
`;

export default function Reviews() {
  return (
    <StyledReviews>
      <Label>Our Reviews</Label>

      <ReviewsImg src={reviewImg1} />
      <ReviewsImg src={reviewImg2} />
      <ReviewsImg src={reviewImg3} />
    </StyledReviews>
  );
}
