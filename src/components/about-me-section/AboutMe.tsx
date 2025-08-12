import ListTitle from '../ui/ListTitle';

export default function AboutMe() {
  return (
    <div className='py-20'>
      <ListTitle title='About Me' num='01' />
      <div className='py-12 max-w-prose mx-auto text-md md:text-lg text-left leading-relaxed space-y-6 text-text-primary'>
        <p>
          Hi, I’m <strong>Hyun</strong>— <strong>a software engineer</strong>{' '}
          with a unique background that blends design, communication, and a deep
          passion for building thoughtful digital experiences.
        </p>
        <p>
          Before transitioning into tech, I worked in
          <strong> education, design, and cafe management</strong> — experiences
          that taught me how to systemise, communicate clearly, and work
          collaboratively. As a cafe supervisor, I built onboarding tools like
          training docs and a shared stock system to improve daily workflows and
          team communication. These hands-on, people-focused roles helped shape
          how I approach software: with empathy, structure, and a mindset for
          growth.
        </p>
        <p>
          At university in Korea, I served as
          <strong> student council president</strong>, leading events for
          students and alumni and co-organising education seminars with other
          institutions. Representing my peers and collaborating across teams
          helped me build strong communication and planning skills that continue
          to shape how I work on cross-functional tech teams today.
        </p>
        <p>
          After earning my
          <strong>
            {' '}
            Master’s in Information Technology (Software Development)
          </strong>{' '}
          in Australia, I interned as a
          <strong> Frontend Developer at Nabi & Co</strong>, where I helped
          build a Japanese language learning platform. There, I contributed to
          both user-facing features and admin tools using
          <strong>
            {' '}
            Next.js 15, React 19, TypeScript, Tailwind CSS, and PostgreSQL
          </strong>
          . This experience not only deepened my frontend expertise but also
          sparked my interest in full-stack development — which I’ve been
          expanding through projects using <strong>Node.js</strong>, database
          management, and RESTful API integration.
        </p>
        <p>
          I’m drawn to tech because of its potential to simplify complexity,
          empower users, and bring ideas to life through code. I love working
          with people, learning from others, and contributing to products that
          make a difference.
        </p>
      </div>
    </div>
  );
}
