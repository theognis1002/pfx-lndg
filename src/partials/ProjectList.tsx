import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Limee AI"
        description="Limee provides innovative Voice AI agents that transform how restaurants receive phone calls and handle orders. 
        By leveraging open-source large language models (LLMs) technology offers a smart, seamless alternative to traditional staffing and call center solutions - enhancing both efficiency and customer satisfaction."
        link="/"
        img={{
          src: '/assets/images/limee.png',
          alt: 'Limee AI',
        }}
        category={
          <>
            <Tags color={ColorTags.STONE}>Next.js</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.GREEN}>Django</Tags>
            <Tags color={ColorTags.LIME}>Celery</Tags>
            <Tags color={ColorTags.RED}>Redis</Tags>
            <Tags color={ColorTags.GRAY}>PostgreSQL</Tags>
          </>
        }
      />
      <Project
        name="Spotify Clone - Seapig Tickets"
        description="Spotify Clone for Seapig Tickets. This project is a clone of the Spotify Web Player. It is a full-stack application that uses the Spotify Web API to fetch data and play music. The front-end is built with TypeScript & React."
        link="https://www.seapigtickets.com"
        img={{
          src: '/assets/images/spotify.png',
          alt: 'Spotify Clone - Seapig Tickets',
        }}
        category={
          <>
            <Tags color={ColorTags.STONE}>Next.js</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
