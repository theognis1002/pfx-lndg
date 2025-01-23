import { GradientText, Section } from 'astro-boilerplate-components';

import { CertificationCard } from '@/components/CertificationCard';

const CertificationList = () => (
  <Section
    title={
      <>
        <GradientText>Certifications</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <CertificationCard
        name="Google Cloud Associate Cloud Engineer"
        description=""
        link="https://www.credly.com/badges/dc399772-33e6-4cf9-b7c2-33ddb2bd65ad/linked_in_profile"
        certDate="1/2025"
        img={{
          src: '/assets/images/google-cloud.png',
          alt: 'Google Cloud Associate Cloud Engineer',
        }}
        category={<></>}
      />
      <CertificationCard
        name="Google Cloud Cloud Digital Leader"
        description=""
        link="https://www.credly.com/badges/84e4be18-59a8-451f-beb0-dd4c8885e266/linked_in_profile"
        certDate="12/2024"
        img={{
          src: '/assets/images/google-cloud.png',
          alt: 'Google Cloud Cloud Digital Leader',
        }}
        category={<></>}
      />
      <CertificationCard
        name="AWS Certified Developer - Associate"
        description=""
        link="https://www.credly.com/badges/61187eb9-d674-4a51-941b-e925d6691a8b/linked_in_profile"
        certDate="9/2024"
        img={{
          src: '/assets/images/aws.png',
          alt: 'AWS Certified Developer - Associate',
        }}
        category={<></>}
      />
      <CertificationCard
        name="AWS Certified Solutions Architect - Associate"
        description=""
        link="https://www.credly.com/badges/cd7bda97-f907-4ae1-9c06-c0824b3a8d79/linked_in_profile"
        certDate="9/2022"
        img={{
          src: '/assets/images/aws.png',
          alt: 'AWS Certified Solutions Architect - Associate',
        }}
        category={<></>}
      />
      <CertificationCard
        name="AWS Certified Cloud Practitioner"
        description=""
        link="https://www.credly.com/badges/3c66afa0-4505-4571-885d-b9432351fcdc/linked_in_profile"
        certDate="1/2021"
        img={{
          src: '/assets/images/aws.png',
          alt: 'AWS Certified Cloud Practitioner',
        }}
        category={<></>}
      />
      <CertificationCard
        name="Microsoft Certified: Azure Fundamentals"
        description=""
        link="https://www.credly.com/badges/471b3fa6-8dea-4d3d-ac41-46b8d9a6aa5c/linked_in_profile"
        certDate="10/2022"
        img={{
          src: '/assets/images/azure.png',
          alt: 'Microsoft Certified: Azure Fundamentals',
        }}
        category={<></>}
      />
    </div>
  </Section>
);

export { CertificationList };
