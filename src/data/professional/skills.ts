type Skill = {
  label: String;
  items: Array<{ skill: string; icon?: string }>;
};

type SkillType = 'languages' | 'tools' | 'antennas';

const skills: Record<SkillType, Skill> = {
  languages: {
    label: 'Programming Languages',
    items: [
      {
        skill: 'Javascript',
        icon: 'javascript',
      },
      {
        skill: 'Typescript',
        icon: 'typescript',
      },
      {
        skill: 'Go',
        icon: 'go',
      },
      {
        skill: 'Rust',
        icon: 'rust',
      },
      {
        skill: 'Dart',
        icon: 'dart',
      },
      {
        skill: 'Scala',
        icon: 'scala',
      },
      {
        skill: 'Csharp',
        icon: 'csharp',
      },
      {
        skill: 'Python',
        icon: 'python',
      },
    ],
  },
  tools: {
    label: 'Tools and Frameworks',
    items: [
      {
        skill: 'React',
        icon: 'react',
      },
      {
        skill: 'Serverless',
        icon: 'serverless',
      },
      {
        skill: 'NextJS',
        icon: 'nextjs',
      },
      {
        skill: 'Redis',
        icon: 'redis',
      },
      {
        skill: 'AWS',
        icon: 'aws',
      },
      {
        skill: 'Google Cloud',
        icon: 'gc',
      },
      {
        skill: 'Flutter',
        icon: 'flutter',
      },
      {
        skill: 'Vue',
        icon: 'vue',
      },
      {
        skill: 'Nuxt',
        icon: 'nuxt',
      },
      {
        skill: 'ExpressJS',
        icon: 'express',
      },
      {
        skill: 'GraphQL',
        icon: 'graphql',
      },
      {
        skill: 'Postgresql',
        icon: 'postgres',
      },
      {
        skill: 'Parcel',
        icon: 'parcel',
      },
      {
        skill: 'Gatsby',
        icon: 'gatsby',
      },
      {
        skill: 'Akka',
        icon: 'akka',
      },
      {
        skill: 'Prisma',
        icon: 'prisma',
      },
      {
        skill: 'Jest',
        icon: 'jest',
      },
    ],
  },
  antennas: {
    label: 'Antenna Engineering',
    items: [
      {
        skill: 'Antenna Design',
      },
      {
        skill: 'Technical Account Management',
      },
      {
        skill: 'Antenna Simulation',
      },
      {
        skill: 'Antenna Measurement',
      },
      {
        skill: 'CST',
      },
      {
        skill: 'Technical Training',
      },
      {
        skill: 'Pre-sales Engineering Support',
      },
      {
        skill: 'MATLAB',
      },
      {
        skill: 'ADS',
      },
      {
        skill: 'LT Spice',
      },
    ],
  },
};

export default skills;
