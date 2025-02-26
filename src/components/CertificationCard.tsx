import type { ReactNode } from 'react';

type ICertificationCardProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  certDate: string;
  link: string;
  category: ReactNode;
};

const CertificationCard = (props: ICertificationCardProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          className="h-36 w-36 p-5 hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
          title={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a
          className="hover:text-cyan-400"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-xl font-semibold">{props.name}</div>
        </a>
        <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
      </div>
      <p className="mt-1 text-gray-500">{props.certDate}</p>
      <p className="mt-2 text-gray-400">{props.description}</p>
    </div>
  </div>
);

export { CertificationCard };
