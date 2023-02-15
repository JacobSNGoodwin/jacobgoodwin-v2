type Project = {
  title: string;
  mediaName?: string;
  description: string;
  url?: string;
  github: string;
  icons: Array<string>;
};

const projects: Array<Project> = [
  {
    title: 'Nuxt Ghost Starter',
    description:
      'A starter project for building a server-side rendered or statically generated site from Ghost blog data',
    github: 'https://github.com/JacobSNGoodwin/nuxt-ghost-starter',
    icons: ['nuxt', 'vue', 'ghost', 'bulma'],
  },
  {
    title: 'Wordmem',

    description:
      'Completed full-stack memorization application that is the basis for my current Youtube and dev.to tutorial. The application features multiple services and events-driven communication between them with Google Cloud PubSub. The app runs behind a Traefik reverse proxy with all services running in Docker Containers.',
    url: 'https://dev.to/jacobsngoodwin/series/9052',
    github: 'https://github.com/JacobSNGoodwin/wordmem',
    icons: [
      'react',
      'go',
      'vue',
      'node',
      'typescript',
      'gc',
      'docker',
      'redis',
      'postgres',
      'traefik',
      'gin',
      'bulma',
    ],
  },
  {
    title: 'Vue-DFS-Store',
    description:
      "A dead-🤬-simple store based on Vue's built-in reactivity built with Typescript",
    github: 'https://github.com/jacobsngoodwin/vue-dfs-store',
    icons: ['vue', 'typescript'],
  },
  {
    title: 'IESD Spark',
    description:
      'Student and teacher portal for Inland Empire Software Developers organization',
    github: 'https://github.com/inland-empire-software-development/spark',
    icons: ['react', 'nextjs', 'typescript', 'typeorm', 'postgres'],
  },
  {
    title: 'Smith Plot',
    mediaName: 'SmithPlot.png',
    description:
      'Single-page application written with D3.js and Vue for plotting and comparing RF-network measurement data',
    url: 'https://www.smithplot.com',
    github: 'https://github.com/JacobSNGoodwin/smith-plot',
    icons: ['vue', 'd3', 'vuetify'],
  },
  {
    title: 'Store Employee and Inventory Manager',
    description:
      'A work-in-progress full-stack application for managing employees and product inventory. The application is built with modern React and Apollo Client on the front end. The back end is a GraphQL server built with Go and leveraging Postgres for data and Redis as a session cache.',
    github: 'https://github.com/JacobSNGoodwin/react-go-graphql',
    icons: [
      'go',
      'react',
      'typescript',
      'graphql',
      'postgres',
      'redis',
      'bulma',
    ],
  },
  {
    title: 'Echo-Mongo',
    description:
      'A REST API built with the Echo Framework for Golang. It implements MongoDB and Google Cloud Storage',
    github: 'https://github.com/JacobSNGoodwin/echo_mongo',
    icons: ['go', 'echo', 'gc', 'mongo'],
  },
  {
    title: 'Upload Stream with Akka and Google Cloud',
    description:
      'An Akka Actor System Representing an IOT system. The repository contains a publishing client which publishes messages to PubSub telling the actor system to record or upload a file to Google Cloud for a particular IOT device. Then the subscription application receives the message from PubSub, and prompts that device to either record its data or to upload its data to Google Cloud Storage.',
    github: 'https://github.com/JacobSNGoodwin/uploadStreamDemo',
    icons: ['scala', 'akka', 'gc'],
  },
  {
    title: 'RF-Network',
    mediaName: null,
    description:
      'Node module, written in Typescript, for parsing RF measurement data into a Network class',
    url: 'https://www.npmjs.com/package/rf-network',
    github: 'https://github.com/JacobSNGoodwin/rf-network',
    icons: ['typescript', 'jest', 'node'],
  },
  {
    title: 'Gatsby Portfolio',
    mediaName: null,
    description: 'This fine portfolio page built with Gatsby JS',
    url: 'https://jacobgoodwin.me',
    github: 'https://github.com/JacobSNGoodwin/portfolio-gatsby',
    icons: ['gatsby', 'react', 'sass'],
  },
  {
    title: 'JSNG - Ghost Blog Theme',
    description:
      'Handlebars-templated theme written for the Ghost blogging platform',
    github: 'https://github.com/JacobSNGoodwin/jsng',
    icons: ['ghost', 'handlebars', 'sass', 'parcel'],
  },
];

export default projects;
