import AkkaIcon from '../../assets/icons/akka-icon.svg';
import AWSIcon from '../../assets/icons/aws.svg';
import BrandIcon from '../../assets/icons/brand.svg';
import BulmaIcon from '../../assets/icons/bulma.svg';
import CsharpIcon from '../../assets/icons/csharp.svg';
import D3Icon from '../../assets/icons/d3js-icon.svg';
import DartIcon from '../../assets/icons/dartlang-icon.svg';
import DockerIcon from '../../assets/icons/docker.svg';
import EchoIcon from '../../assets/icons/echo-logo.svg';
import ExpressIcon from '../../assets/icons/expressjs-icon.svg';
import FlutterIcon from '../../assets/icons/flutterio-icon.svg';
import GatsbyIcon from '../../assets/icons/gatsbyjs-icon.svg';
import GhostIcon from '../../assets/icons/ghost-tile.svg';
import GCIcon from '../../assets/icons/google-cloud.svg';
import GinIcon from '../../assets/icons/gin.svg';
import GoIcon from '../../assets/icons/golang-official.svg';
import GraphQLIcon from '../../assets/icons/graphql.svg';
import HandlebarsIcon from '../../assets/icons/handlebarsjs-icon.svg';
import JavascriptIcon from '../../assets/icons/javascript.svg';
import JestIcon from '../../assets/icons/jestjsio.svg';
import MongoIcon from '../../assets/icons/mongodb.svg';
import NextJSIcon from '../../assets/icons/nextjs.svg';
import NpmIcon from '../../assets/icons/npmjs-ar21.svg';
import NodeIcon from '../../assets/icons/nodejs-icon.svg';
import NuxtIcon from '../../assets/icons/nuxt-square.svg';
import ParcelIcon from '../../assets/icons/parceljs-rect.svg';
import PostgresIcon from '../../assets/icons/postgresql.svg';
import PrismaIcon from '../../assets/icons/prisma.svg';
import PythonIcon from '../../assets/icons/python-icon.svg';
import ReactIcon from '../../assets/icons/reactjs-icon.svg';
import RedisIcon from '../../assets/icons/redis.svg';
import SassIcon from '../../assets/icons/sass-lang-icon.svg';
import ScalaIcon from '../../assets/icons/scala-lang-icon.svg';
import TraefikIcon from '../../assets/icons/traefik.svg';
import TypeORMIcon from '../../assets/icons/typeorm.svg';
import TypeScriptIcon from '../../assets/icons/typescriptlang-icon.svg';
import VueIcon from '../../assets/icons/vue.svg';
import VuetifyIcon from '../../assets/icons/vuetify.svg';

type IconData = {
  icon: string;
  url: string;
};

const icons: Record<string, IconData> = {
  akka: { icon: AkkaIcon, url: 'https://akka.io/' },
  aws: { icon: AWSIcon, url: 'https://aws.amazon.com/' },
  brand: { icon: BrandIcon, url: null },
  bulma: { icon: BulmaIcon, url: 'https://bulma.io/' },
  csharp: {
    icon: CsharpIcon,
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  d3: { icon: D3Icon, url: 'https://d3js.org/' },
  dart: { icon: DartIcon, url: 'https://dart.dev/' },
  docker: { icon: DockerIcon, url: 'https://www.docker.com/' },
  echo: { icon: EchoIcon, url: 'https://echo.labstack.com/' },
  express: { icon: ExpressIcon, url: 'https://expressjs.com/' },
  flutter: { icon: FlutterIcon, url: 'https://flutter.dev/' },
  gatsby: { icon: GatsbyIcon, url: 'https://www.gatsbyjs.org/' },
  gin: { icon: GinIcon, url: 'https://github.com/gin-gonic/gin' },
  ghost: { icon: GhostIcon, url: 'https://ghost.org/' },
  gc: { icon: GCIcon, url: 'https://cloud.google.com/' },
  go: { icon: GoIcon, url: 'https://golang.org/' },
  graphql: { icon: GraphQLIcon, url: 'https://graphql.org/' },
  handlebars: { icon: HandlebarsIcon, url: 'https://handlebarsjs.com/' },
  javascript: {
    icon: JavascriptIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  jest: {
    icon: JestIcon,
    url: 'https://jestjs.io/',
  },
  mongo: { icon: MongoIcon, url: 'https://www.mongodb.com/' },
  nextjs: { icon: NextJSIcon, url: 'https://nextjs.org/' },
  node: { icon: NodeIcon, url: 'https://nodejs.org/en/' },
  npm: { icon: NpmIcon, url: 'https://www.npmjs.com/' },
  nuxt: { icon: NuxtIcon, url: 'https://nuxtjs.org/' },
  parcel: { icon: ParcelIcon, url: 'https://parceljs.org/' },
  postgres: { icon: PostgresIcon, url: 'https://www.postgresql.org/' },
  prisma: { icon: PrismaIcon, url: 'https://www.prisma.io/' },
  python: { icon: PythonIcon, url: 'https://www.python.org/' },
  react: { icon: ReactIcon, url: 'https://reactjs.org/' },
  redis: { icon: RedisIcon, url: 'https://redis.io/' },
  sass: { icon: SassIcon, url: 'https://sass-lang.com/' },
  scala: { icon: ScalaIcon, url: 'https://www.scala-lang.org/' },
  traefik: { icon: TraefikIcon, url: 'https://traefik.io/' },
  typeorm: { icon: TypeORMIcon, url: 'https://typeorm.io/#/' },
  typescript: {
    icon: TypeScriptIcon,
    url: 'https://www.typescriptlang.org/',
  },
  vue: { icon: VueIcon, url: 'https://vuejs.org/' },
  vuetify: { icon: VuetifyIcon, url: 'https://vuetifyjs.com/en/' },
};

export default icons;
