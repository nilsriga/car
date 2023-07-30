/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';

// Articles

export const ArticleTitle = styled.h1`
  font-size: var(--headingXL);
  color: var(--headingsColor);
  text-align: center;
  line-height: var(--headingsLineHeight);

  @media (max-width: 860px) {
    text-align: inherit;
  }

  @media (max-width: 768px) {
    font-size: var(--headingL);
  }
`;

export const ArticleSubtitle = styled.p`
  font-size: var(--baseXL);
  color: var(--baseTextColor);
  text-align: center;
  line-height: var(--bodyLineHeight);

  @media (max-width: 860px) {
    text-align: inherit;
  }
`;

// Common

export const SectionTitle = styled.h1`
  font-size: var(--headingL);
  color: var(--headingsColor);
  text-align: inherit;
  line-height: var(--headingsLineHeight);
  margin: auto;
  padding: ${({ noPaddings }) => (noPaddings ? '0' : ' 0 var(--globalPaddingLr)')};
  width: 100%;
  max-width: var(--globalContainer);

  @media (max-width: 768px) {
    font-size: calc(var(--headingL) * 0.8);
  }
`;

export const HeadingMedium = styled.h1`
  font-size: var(--headingM);
  color: var(--headingsColor);
  text-align: inherit;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--headingS);
  }
`;

export const HeadingSmall = styled.h1`
  font-size: var(--baseL);
  color: var(--headingsColor);
  text-align: inherit;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--baseXL);
  }
`;

const Tip = styled.span`
  width: var(--tipWidth);
  border-radius: var(--tipWidth);
  height: 100%;
  background: var(--primaryColor);
`;

const HeadingSmallTip = styled(HeadingSmall)`
  &&& {
    --tipWidth: 3px;
    column-gap: var(--gapSmall);
    display: grid;
    grid-template-columns: var(--tipWidth) auto;
  }
`;

export const HeadingSmallWithTip = ({ children }) => (
  <HeadingSmallTip>
    <Tip />
    {children}
  </HeadingSmallTip>
);
