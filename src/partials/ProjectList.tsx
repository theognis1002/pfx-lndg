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
        link="https://www.limee.ai"
        img={{
          src: '/assets/images/limee.png',
          alt: 'Limee AI',
        }}
        category={
          <>
            <Tags color={ColorTags.STONE}>Next.js</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.GREEN}>Python/Django</Tags>
            <Tags color={ColorTags.LIME}>Celery</Tags>
            <Tags color={ColorTags.RED}>Redis</Tags>
            <Tags color={ColorTags.GRAY}>PostgreSQL</Tags>
            <Tags color={ColorTags.BLUE}>AI/LLM's</Tags>
            <Tags color={ColorTags.ORANGE}>AWS</Tags>
          </>
        }
      />
      <Project
        name="Django - Migrations of Madness (Article)"
        description="A comprehensive guide to handling Django's powerful but often misunderstood migrations system. This article explores common challenges Djangonauts face with database migrations, from inconsistent histories to conflicting dependencies. Learn when to create and run migrations, how to keep them synchronized across environments, and strategies for resolving the various issues that can arise in this critical aspect of Django development."
        link="https://medium.com/@michaeljamesmcclelland/migrations-of-madness-99d82e5e7f6b"
        img={{
          src: '/assets/images/django.png',
          alt: 'Migrations of Madness',
        }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>Python/Django</Tags>
            <Tags color={ColorTags.LIME}>MySQL</Tags>
            <Tags color={ColorTags.GRAY}>PostgreSQL</Tags>
            <Tags color={ColorTags.RED}>Oracle</Tags>
            <Tags color={ColorTags.BLUE}>RDBMS</Tags>
          </>
        }
      />
      <Project
        name="Spotify Clone"
        description="Spotify Clone landing page for Seapig Tickets - a ticket brokerage company that resells inventory within the live entertainment (sports & concerts) industry. This project is a UI clone of the Spotify Web Player and is built with TypeScript & React."
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
