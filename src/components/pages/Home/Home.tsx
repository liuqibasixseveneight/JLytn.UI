import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';

import {
  HomeTitle,
  HomeTitleWrapper,
  HomeWrapper,
  PearlescentBackground,
} from './Home.styles';
import type { HomeProps } from './types';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Home = (_props: HomeProps) => {
  const forenameRef = useRef<HTMLDivElement>(null);
  const surnameRef = useRef<HTMLDivElement>(null);
  const homeTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!forenameRef.current || !surnameRef.current || !homeTitleRef.current)
      return;

    const forenameSplit = new SplitText(forenameRef.current, {
      type: 'chars',
      className: 'char',
    });
    const surnameSplit = new SplitText(surnameRef.current, {
      type: 'chars',
      className: 'char',
    });

    gsap.from(forenameSplit.chars, {
      y: 75,
      opacity: 0,
      rotation: 'random(-20, 20)',
      duration: 1,
      ease: 'back',
      offset: '100%',
      stagger: 0.05,
    });
    gsap.from(surnameSplit.chars, {
      y: 75,
      opacity: 0,
      rotation: 'random(-20, 20)',
      duration: 1,
      ease: 'back',
      offset: '100%',
      stagger: 0.05,
    });

    ScrollTrigger.create({
      trigger: homeTitleRef.current,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      markers: true,
    });
  }, []);

  return (
    <HomeWrapper>
      <PearlescentBackground>
        <HomeTitleWrapper ref={homeTitleRef}>
          <HomeTitle>
            <div ref={forenameRef}>JOSHUA-</div>
            <div ref={surnameRef}>LAYTON</div>
          </HomeTitle>
        </HomeTitleWrapper>
      </PearlescentBackground>
    </HomeWrapper>
  );
};
