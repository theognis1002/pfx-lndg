import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mike</GradientText> 👋
        </>
      }
      description={
        <>
          Lead Software Engineer with over 9+ years of experience in full stack
          development, software engineering, and software management. a proven
          track record of driving innovation and delivering high-impact
          solutions within the financial services and small business lending
          industry. Excited about tackling challenging problems and
          collaborating with skilled teams to drive continuous improvement and
          success.
          {/*           
          <a className="text-cyan-400 hover:underline" href="/">
            test
          </a>{' '} */}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a target="_blank" href="https://www.github.com/theognis1002">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub icon"
            />
          </a>
          <a
            className="ml-3"
            target="_blank"
            href="https://www.linkedin.com/in/michael-mcclelland-b82439113/"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="LinkedIn icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
