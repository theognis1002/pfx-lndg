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
              <a
                href="https://www.python.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={pythonLogo.src}
                  alt="Python"
                  title="Python"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://www.djangoproject.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={djangoLogo.src}
                  alt="Django"
                  title="Django"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={reactLogo.src}
                  alt="React"
                  title="React"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={nextjsLogo.src}
                  alt="Next.js"
                  title="Next.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://vuejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={vueLogo.src}
                  alt="Vue.js"
                  title="Vue.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://golang.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={golangLogo.src}
                  alt="Go Programming Language"
                  title="Go"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
          <tr className="h-56">
            <td className="p-3">
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={postgresLogo.src}
                  alt="PostgreSQL"
                  title="PostgreSQL"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://www.mysql.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={mysqlLogo.src}
                  alt="MySQL"
                  title="MySQL"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://www.mongodb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={mongoLogo.src}
                  alt="MongoDB"
                  title="MongoDB"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://redis.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={redisLogo.src}
                  alt="Redis"
                  title="Redis"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://aws.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={awsLogo.src}
                  alt="AWS"
                  title="AWS"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://cloud.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={googleCloudLogo.src}
                  alt="Google Cloud"
                  title="Google Cloud"
                  width={260}
                  height={224}
                />
              </a>
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
              <a
                href="https://www.docker.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={dockerLogo.src}
                  alt="Docker"
                  title="Docker"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://kubernetes.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-1"
                  src={kubernetesLogo.src}
                  alt="Kubernetes"
                  title="Kubernetes"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  </div>
);

export { Skills };
