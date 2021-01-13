import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig, linkedIn } from '@config';
import { media } from '@styles';

import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--green);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  @media (max-width: 768px) {
    margin: 60px auto 0;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
  a {
    &:focus {
      outline: 0;
    }
  }
`;

const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: none;
  filter: grayscale(100%) contrast(1);
  border-radius: var(--border-radius);
  transition: var(--transition);
`;

const StyledAvatarLink = styled.a`
  ${({ theme }) => theme.mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: var(--border-radius);
  background-color: var(--lightest-slate);
  margin-left: -20px;
  &:hover,
  &:focus {
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid var(--green);
    top: 10px;
    left: 10px;
    z-index: -1;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const avatar = 'src/images/me.png';

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Android Development (Java/Kotlin)',
    'Flutter Development',
    'React Native',
    'Problem Solving',
    'NodeJS',
    'Express',
    'Firebase',
    'MongoDB',
    'MySQL',
    'Git',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Divyank Lunkad, a third-year student with keen interest in Data Structures
              and Algorithms.
            </p>

            <p>
              I am pursuing my Bachelors from <a href="https://pict.edu/">PICT, Pune</a> in Computer
              Science (2018-2022) with Cumulative GPA of 9.34/10.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <StyledAvatarLink href={linkedIn}>
            <StyledAvatar fluid={data.avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
