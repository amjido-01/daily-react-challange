import { SectionOne } from './SectionOne'
import { SectionTwo } from './SectionTwo'
import { SectionThree } from './SectionThree'
import { SectionFour } from './SectionFour'
import { Example } from './Example'
import TextAnimation from './TextAnimation'
import HeroSection from "./HeroSection"
import HamburgerMenu from './HamburgerMenu'
export const Landing = () => {
  return (
    <div className=" min-h-screen">
      <HamburgerMenu />
      <HeroSection />
      <TextAnimation />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Example />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
