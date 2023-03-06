type Experience = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: Array<string>;
};

type Education = {
  school: string;
  dates: string;
  degree: string;
  other: string;
  thesis?: {
    title: string;
    summary: string;
  };
};

type Resume = {
  experience: Array<Experience>;
  education: Array<Education>;
};

const resume: Resume = {
  experience: [
    {
      title: 'Software Engineer',
      company: 'Passport',
      location: 'Remote with HQ in Charlotte, NC',
      dates: 'January 2021 - Present',
      bullets: [
        'Building modern parking permit and curbside reservation applications for government clients and their customers',
        'Serverless microservice development on AWS with the Serverless Framework and NodeJS',
        'Web application development for customers and governments built with React',
      ],
    },
    {
      title: 'Solutions Consultant Specialist',
      company: 'Dassault Systemes (formerly CST of America)',
      location: 'Bay Area, California',
      dates: 'April 2014 - July 2018',
      bullets: [
        "Technical Account Management - Provide direct technical support for two of CST's largest Silicon Valley accounts",
        'Pre-sales Technical Support - Provide technical presentations, benchmarks, simulation guidance, and direct support to prospective CST customers',
        'Advise engineers and managers on ideal numerical solutions to a variety of antenna, microwave, and PCB products',
        'Draft educational materials on simulation software for both internal use and for customers',
        'Instruct training courses and workshops',
      ],
    },
    {
      title: 'Microwave and Sensors Engineer',
      company: 'Sandia National Labs',
      location: 'Livermore, California',
      dates: 'March 2010 - April 2014',
      bullets: [
        'Antenna simulation, design, and measurement in complex fixtures',
        'Simulation, design, and measurement of broadband microwave matching networks and filters',
        'Sensor R&D',
        'International Collaboration with AWE of the United Kingdom',
      ],
    },
    {
      title: "Master's Engineer",
      company: 'Northrop Grumman',
      location: 'North Highlands, California',
      dates: 'June 2009 - December 2009',
      bullets: [
        'Indoor and outdoor far-field antenna measurements',
        'VSWR and mutual coupling measurements for antenna arrays',
        'Automation of antenna qualification using OriginLab scripting language',
      ],
    },
    {
      title: 'Research Assistant',
      company: 'iNANO',
      location: 'UC Davis',
      dates: 'June 2007 - September 2008',
      bullets: [
        'Optical reflectance and transmittance measurements of nano- and micro-structures deposited on economical substrates',
      ],
    },
  ],
  education: [
    {
      school: 'UCLA',
      dates: 'September 2010 - March 2012',
      degree: 'MS in Electrical Engineering',
      other:
        'Critical Skills Masters Program Fellowship - Sponsored by Sandia National Laboratories',
      thesis: {
        title:
          'Determining Integrated Lens Antenna Far-Field Patterns Using Geometrical Optics and the Aperture Field',
        summary:
          'Outlines a method for determining the far-field radiation pattern of an electrically large integrated lens antenna. Rays are traced from the phase center of an antenna aperture, refracted from the lens boundary, and then sampled on a plane in front of the lens. The far-field is then computed using a near-field to far-field transformation from fields on this plane. The results are compared with time-domain simulations in CST Microwave Studio.',
      },
    },
    {
      school: 'UC Davis',
      dates: 'September 2002 - June 2009',
      degree: 'BS with High Honors in Electrical Engineering',
      other: 'Regents Scholar',
    },
  ],
};

export default resume;
