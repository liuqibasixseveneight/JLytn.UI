import styled from 'styled-components';

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: auto;
  min-height: 400vh;
  width: 100%;
`;

export const PearlescentBackground = styled.div`
  align-items: center;
  display: flex;
  height: 200vh;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;

  background:
    /* Base pearl with refined contrast */ radial-gradient(
      ellipse 140% 110% at 35% 40%,
      #f8f8f8 0%,
      #d8d8d8 50%,
      #c0c0c0 100%
    ),
    /* Vibrant color blobs with irregular positioning */
      radial-gradient(
        ellipse 65% 55% at 18% 22%,
        rgba(255, 100, 150, 1),
        rgba(255, 100, 150, 0.6) 30%,
        transparent 52%
      ),
    radial-gradient(
      ellipse 70% 60% at 75% 18%,
      rgba(100, 190, 255, 1),
      rgba(100, 190, 255, 0.6) 35%,
      transparent 58%
    ),
    radial-gradient(
      ellipse 75% 65% at 48% 65%,
      rgba(100, 255, 190, 1),
      rgba(100, 255, 190, 0.6) 35%,
      transparent 57%
    ),
    radial-gradient(
      ellipse 60% 55% at 85% 78%,
      rgba(255, 225, 120, 1),
      rgba(255, 225, 120, 0.6) 30%,
      transparent 53%
    ),
    radial-gradient(
      ellipse 68% 58% at 38% 52%,
      rgba(190, 120, 255, 1),
      rgba(190, 120, 255, 0.6) 35%,
      transparent 56%
    ),
    radial-gradient(
      ellipse 62% 68% at 63% 32%,
      rgba(255, 150, 200, 1),
      rgba(255, 150, 200, 0.6) 30%,
      transparent 54%
    ),
    radial-gradient(
      ellipse 58% 70% at 28% 82%,
      rgba(140, 215, 255, 1),
      rgba(140, 215, 255, 0.6) 35%,
      transparent 58%
    ),
    /* Off-center luminous glow */
      radial-gradient(
        ellipse 90% 80% at 55% 45%,
        rgba(255, 255, 255, 0.7),
        transparent 58%
      );

  background-blend-mode: lighten, screen, screen, screen, screen, screen, screen,
    screen, screen;
  box-shadow: inset 25px -35px 110px rgba(255, 255, 255, 0.8),
    inset -30px 25px 110px rgba(255, 255, 255, 0.7),
    0 0 150px rgba(255, 255, 255, 0.4);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJncmFpbiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjQuNSIgbnVtT2N0YXZlcz0iOCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsdGVyPSJ1cmwoI2dyYWluKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==');
    opacity: 0.6;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjUuOCIgbnVtT2N0YXZlcz0iOCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==');
    opacity: 0.5;
    mix-blend-mode: soft-light;
    pointer-events: none;
  }
`;

export const HomeTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  max-height: 100vh;
  justify-content: center;
  left: 0;
  padding: 0 4rem;
  position: absolute;
  top: 0;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }
`;

export const HomeTitle = styled.h1`
  color: ${({ theme }) => theme?.colors?.zinc?.darkest};
  font-family: 'Stack Sans Headline', sans-serif;
  font-size: clamp(3rem, 22vw, 10rem);
  letter-spacing: -0.02em;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
`;
