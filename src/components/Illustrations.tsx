import React from 'react';
import mascotLogo from '../assets/images/mascot-logo.svg';
import thinkingCouple from '../assets/images/thinking-couple.svg';
import transferIcon from '../assets/images/transfer-icon.svg';
import yenIcon from '../assets/images/yen-icon.svg';
import houseInHands from '../assets/images/house-in-hands.svg';
import houseClock from '../assets/images/house-clock.svg';
import womanThinking from '../assets/images/woman-thinking.svg';
import stressedDesk from '../assets/images/stressed-desk.svg';
import advisor from '../assets/images/advisor.svg';
import consultation from '../assets/images/consultation.svg';
import happyFamily from '../assets/images/happy-family.svg';

import advisorAlt from '../assets/images/advisor-alt.svg';
import transferIconAlt from '../assets/images/transfer-icon-alt.svg';
import yenIconAlt from '../assets/images/yen-icon-alt.svg';
import houseInHandsAlt from '../assets/images/house-in-hands-alt.svg';

import logoBlack from '../assets/images/logo-black.svg';
import logoGreenText from '../assets/images/logo-green-text.svg';
import thinkingMan from '../assets/images/thinking-man.svg';


// 1. AGE Technologies House-Dog Mascot
export function MascotLogo({
  className = "w-16 h-16",
}: {
  className?: string;
}) {
  return (
    <img
      src={mascotLogo}
      alt="Mascot Logo"
      className={className}
    />
  );
}
// 2. Black outline "Thinking Couple" (man and woman thinking)
export function ThinkingCouple({
  className = "w-48 h-32",
}: {
  className?: string;
}) {
  return (
    <img
      src={thinkingCouple}
      alt="Thinking Couple"
      className={className}
    />
  );
}

// 3. Green Icon: Transfer (Inheritance / Change of Name)
export function TransferIcon({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <img
      src={transferIcon}
      alt="Transfer"
      className={className}
    />
  );
}

// 4. Green Icon: Yen
export function YenIcon({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <img
      src={yenIcon}
      alt="Yen"
      className={className}
    />
  );
}

// 5. Green Icon: House In Hands
export function HouseInHandsIcon({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <img
      src={houseInHands}
      alt="House"
      className={className}
    />
  );
}

// 6. Green Illustration: House with Clock
export function HouseClockIllustration({
  className = "w-36 h-36",
}: {
  className?: string;
}) {
  return (
    <img
      src={houseClock}
      alt="House Clock"
      className={className}
    />
  );
}

// 7. Green Illustration: Woman Thinking with house/coins bubble
export function WomanThinkingIllustration({
  className = "w-36 h-36",
}: {
  className?: string;
}) {
  return (
    <img
      src={womanThinking}
      alt="Woman Thinking"
      className={className}
    />
  );
}
// 8. Green Illustration: Person Stressed at Desk
export function StressedDeskIllustration({
  className = "w-36 h-36",
}: {
  className?: string;
}) {
  return (
    <img
      src={stressedDesk}
      alt="Stressed Desk"
      className={className}
    />
  );
}
// 9. Black outline illustration: Advisor Pointing Up
export function AdvisorIllustration({
  className = "w-40 h-48",
}: {
  className?: string;
}) {
  return (
    <img
      src={advisor}
      alt="Advisor"
      className={className}
    />
  );
}

// 10. Black outline illustration: Two People Talking (Consultation)
export function ConsultationIllustration({
  className = "w-64 h-48",
}: {
  className?: string;
}) {
  return (
    <img
      src={consultation}
      alt="Consultation"
      className={className}
    />
  );
}

// 11. Black outline illustration: Happy Cheering Family
export function HappyFamilyIllustration({
  className = "w-72 h-48",
}: {
  className?: string;
}) {
  return (
    <img
      src={happyFamily}
      alt="Happy Family"
      className={className}
    />
  );
}
