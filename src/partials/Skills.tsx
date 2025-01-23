import { GradientText, Section } from 'astro-boilerplate-components';

import awsLogo from '../../public/assets/images/aws.png';
// import azureLogo from '../../public/assets/images/azure.png';
import djangoLogo from '../../public/assets/images/django.png';
import dockerLogo from '../../public/assets/images/docker.png';
import golangLogo from '../../public/assets/images/golang.png';
import googleCloudLogo from '../../public/assets/images/google-cloud.png';
import kubernetesLogo from '../../public/assets/images/kubernetes.png';
import mongoLogo from '../../public/assets/images/mongo.png';
import mysqlLogo from '../../public/assets/images/mysql.png';
import nextjsLogo from '../../public/assets/images/nextjs.png';
import postgresLogo from '../../public/assets/images/postgresql.png';
import pythonLogo from '../../public/assets/images/python.png';
import reactLogo from '../../public/assets/images/react.png';
import redisLogo from '../../public/assets/images/redis.png';
import vueLogo from '../../public/assets/images/vuejs.png';

const Skills = () => (
  <div className="mt-10">
    <Section
      title={
        <>
          <GradientText>Technical Skills</GradientText>
        </>
      }
    >
      <table className="w-full border-collapse">
        <tbody>
          <tr className="h-56">
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={pythonLogo.src}
                alt="Python"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={djangoLogo.src}
                alt="Django"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={reactLogo.src}
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={nextjsLogo.src}
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={vueLogo.src}
                alt="PostgreSQL & Relational Database Experience"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={golangLogo.src}
                alt="PostgreSQL & Relational Database Experience"
                width={260}
                height={224}
              />
            </td>
          </tr>
          <tr className="h-56">
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={postgresLogo.src}
                alt="PostgreSQL & Relational Database Experience"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={mysqlLogo.src}
                alt="PostgreSQL & Relational Database Experience"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={mongoLogo.src}
                alt="MongoDB Experience"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={redisLogo.src}
                alt="Redis & AWS Elasticache Experience"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={awsLogo.src}
                alt="AWS Cloud Experience"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={googleCloudLogo.src}
                alt="Google Cloud Cloud Experience"
                width={260}
                height={224}
              />
            </td>
            {/* <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={azureLogo.src}
                alt="Azure Cloud Experience"
                width={260}
                height={224}
              />
            </td> */}
          </tr>
          <tr className="h-56">
            {/* <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={azureLogo.src}
                alt="Azure Cloud Experience"
                width={260}
                height={224}
              />
            </td> */}
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={dockerLogo.src}
                alt="Docker / Docker Compose Experience"
                width={260}
                height={224}
              />
            </td>
            <td className="p-3">
              <img
                className="hover:translate-y-1"
                src={kubernetesLogo.src}
                alt="Kubernetes Experience"
                width={260}
                height={224}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  </div>
);

export { Skills };
