import { ColorTags, GradientText, Section } from 'astro-boilerplate-components';

import JobCard from '@/components/JobCard';

const Resume = () => (
  <Section
    title={
      <>
        <GradientText>Resume</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <JobCard
        title={'Director of Software Engineering - Summit Technology Group'}
        dateRange={'9/2021 - 7/2024'}
        tags={[
          { color: ColorTags.EMERALD, label: 'Django' },
          { color: ColorTags.SKY, label: 'Django Rest Framework' },
          { color: ColorTags.SLATE, label: 'PostgreSQL' },
          { color: ColorTags.LIME, label: 'Celery' },
          { color: ColorTags.YELLOW, label: 'JavaScript' },
          { color: ColorTags.GREEN, label: 'Vue.js' },
          { color: ColorTags.ORANGE, label: 'AWS' },
        ]}
        description={[
          `Led a diverse team of global and stateside software engineers in
                the financial services and small business lending sector,
                driving the development of innovative software solutions. I
                defined the technical vision and strategy, creating roadmaps
                that ensured alignment with business objectives and effectively
                addressed customer needs.`,
          `Directed the development of scalable and robust software
                solutions using Python (Django), JavaScript (Vue.js), and other
                relevant technologies.`,
          `Championed the adoption of best practices and industry
                standards, driving continuous improvement and technical
                excellence, which led to a 25% decrease in development time and
                a 20% increase in overall code quality.`,
          `Conducted daily code reviews and mentored junior to senior
                developers, improving overall code quality and ensure adherence
                to best practices`,
          `Collaborated with cross-functional teams to define project
                requirements, scope, and deliverables, ensuring the successful
                execution of software projects.`,
        ]}
      />

      {/* Bluestone Analytics, CACI */}
      <JobCard
        title={'Senior Fullstack Engineer - Bluestone Analytics, CACI'}
        dateRange={'4/2020 - 9/2021'}
        tags={[
          { color: ColorTags.EMERALD, label: 'Django' },
          { color: ColorTags.ROSE, label: 'Flask' },
          { color: ColorTags.SKY, label: 'React.js' },
          { color: ColorTags.GRAY, label: 'TypeScript' },
          { color: ColorTags.YELLOW, label: 'JavaScript' },
          { color: ColorTags.EMERALD, label: 'Node.js' },
          { color: ColorTags.ORANGE, label: 'AWS' },
          { color: ColorTags.PURPLE, label: 'Terraform' },
        ]}
        description={[
          `Engineered scalable, security-focused web applications using
                both Django/Flask Python web frameworks, PostgreSQL, MySQL,
                Redis, Celery, and Docker, incorporating complex algorithms and
                data structures.`,
          `Developed and maintained an enterprise-level API in Node.js,
                OSINT data collection, ETL pipelines, and internal applications,
                utilizing Elasticsearch and various AWS services including EC2,
                S3, Lambda, API Gateway, ECS, ElastiCache, and IAM.`,
          `Collaborated in a fast-paced, cross-departmental environment to
                assist in the development and maintenance of frontend UI written
                in React.js.`,
        ]}
      />

      {/* Ticket Edge */}
      <JobCard
        title={'Lead Software Engineer - Ticket Edge'}
        dateRange={'4/2016 - 4/2020'}
        tags={[
          { color: ColorTags.EMERALD, label: 'Django' },
          { color: ColorTags.SKY, label: 'Django Rest Framework' },
          { color: ColorTags.GRAY, label: 'TypeScript' },
          { color: ColorTags.YELLOW, label: 'JavaScript' },
          { color: ColorTags.SKY, label: 'React.js' },
          { color: ColorTags.EMERALD, label: 'Node.js' },
          { color: ColorTags.LIME, label: 'Celery' },
          { color: ColorTags.SLATE, label: 'PostgreSQL' },
          { color: ColorTags.GREEN, label: 'MongoDB' },
          { color: ColorTags.ORANGE, label: 'AWS' },
        ]}
        description={[
          `Spearheaded the end-to-end development of a SaaS application,
                leveraging a robust technology stack including Python, Django,
                React.js, PostgreSQL, Redis, and Celery.`,
          `Led a team of 12 offshore backend and frontend developers,
                driving the successful completion of multiple high-impact
                projects. Improved project delivery time by 30% through
                effective coordination and management of cross-functional teams.`,
          `Improved PostgreSQL database performance by 35% through query
                optimization and indexing`,
        ]}
      />
    </div>
  </Section>
);
export { Resume };
