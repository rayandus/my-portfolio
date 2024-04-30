export const projects = [
  {
    company: 'Ombori',
    project: 'Retail AI Assistant',
    startDate: 'January 2024',
    endDate: 'February 2024',
    description:
      'Phase 1 of the Store AI Project which focuses on developing an AI Assistant Configuration Management and Playground, allowing admins to create, train, and test their AI assistants. Includes the development of Chat Assistant UI library, installable via NPM. The UI library is intended to be used in Endless Aisle solution. It’s also used in the aforementioned playground. The chat assistant integrates with in-house API which under-the-hood is powered by OpenAI.',
    participation:
      'Developed both configuration management for AI Assistants and Chat UI library',
    techStack: ['Reactjs', 'Emotion', 'React Query', 'Typescript', 'Expressjs'],
  },
  {
    company: 'Ombori',
    project: 'Products API and Admin UI Enhancements and Fixes',
    startDate: 'November 2023',
    endDate: 'December 2023',
    description: 'Major fixes and overhaul on products content management.',
    participation:
      'Fixes and refactors • Streamlined reusable react-final-form components • Created unit tests. Performed manual tests • Reintegration of new api endpoints',
    techStack: ['Reactjs', 'Emotion', 'React Query', 'Typescript', 'Expressjs'],
  },
  {
    company: 'Ombori',
    project: 'Endless Aisle Solution Customization/Enhancements/Fixes',
    startDate: 'September 2023',
    endDate: 'October 2023',
    description:
      'Develop and integrate new features tailored to specific client requirements into the existing solution. Enhance the system by refactoring areas with improved JSON schema widgets and resolve existing issues for a more robust and efficient solution.',
    participation:
      'Improve content management part including the codebase to enable design override much easier based on UX design approved by the client • Refactors and fixes.',
    techStack: [
      'Reactjs',
      'Emotion',
      'React Query',
      'Expressjs',
      'Typescript',
      'MongoDB',
    ],
  },
  {
    company: 'Ombori',
    project: 'Bundle Update for Devices',
    startDate: 'July 2023',
    endDate: 'August 2023',
    description:
      'Streamlines the updating of OS and modules of tenant’s devices. This feature allows for individual, group, or universal updates, offering convenience, easy management, and the ability to rollback changes. It’s a unified solution for maintaining device software.',
    participation:
      'Develop the UI part • Create api endpoints that communicates to Azure IoT Edge.',
    techStack: [
      'Reactjs',
      'Emotion',
      'React Query',
      'Expressjs',
      'Typescript',
      'MongoDB',
    ],
  },
  {
    company: 'Ombori',
    project: 'JSON Schema Widgets',
    startDate: 'June 2023',
    endDate: 'July 2023',
    description:
      'Enhance JSON schema widgets for a user-friendly branding creation experience. New widgets include a multilingual text field, file and typography and color selectors, and dynamic dropdowns based on API responses.',
    participation:
      'Create new widgets and enhance existing ones based on UX design • Integration testing to ensure each widget produces the correct schema settings.',
    techStack: ['Reactjs', 'Emotion', 'React Query', 'Typescript', 'React JSON Schema'],
  },
  {
    company: 'Ombori',
    project: 'Monitoring Alerts for Devices',
    startDate: 'April 2023',
    endDate: 'May 2023',
    description:
      'Device Health Monitoring feature that allows admin users  to monitor the health and performance of their devices. It provides email alerts based on custom criteria, ensuring optimal device performance and quick issue resolution.',
    participation:
      'Develop the UI based on UX design • Create and update api endpoints for CRUD operations.',
    techStack: [
      'Reactjs',
      'Emotion',
      'React Query',
      'Expressjs',
      'Typescript',
      'MongoDB',
    ],
  },
  {
    company: 'Ombori',
    project: 'Lift a product and learn',
    startDate: 'February 2023',
    endDate: 'March 2023',
    description:
      'A product solution that engages customer by allowing them to lift a product from a pedestal or platform and information about that product appears on the screen. Lifting two products will show both product information side-by-side.',
    participation:
      'Integrate with the RFID sensor application to determine the lift state of the product • Create the screen application solution to display the product information • Implement pre-rendering techniques required for a low-spec, low-budget cpu hardware',
    techStack: ['Reactjs', 'Emotion', 'React Query', 'Typescript'],
  },
  {
    company: 'Ombori',
    project: 'Endless Aisle Solution with Chatbot-like Guided Conversation',
    startDate: 'January 2023',
    endDate: 'February 2023',
    description:
      'A retail solution that allows customers to navigate products on a touch screen with a guided selling assistant. The assistant is a state machine powered chat box which helps or guides user to trim down preferences.',
    participation:
      'Customize the existing endless aisle solution • Integrate guided selling feature • Create a reusable a package for the guided selling feature',
    techStack: ['Reactjs', 'Emotion', 'React Query', 'Typescript', 'X State'],
  },
  {
    company: 'Ombori',
    project: 'Endless Aisle Solution with Cast Product-to-Screen',
    startDate: 'November 2022',
    endDate: 'December 2022',
    description:
      'A retail solution that allows staff and/or customers to navigate products on a touch screen and cast a selected product to a bigger screen for demonstration purposes or a high-resolution look of the product.',
    participation: 'Enhance or add features • refactor • PubNub integration',
    techStack: ['Reactjs', 'Emotion', 'React Query', 'Typescript', 'PubNub'],
  },
  {
    company: 'Ombori',
    project: 'Find and Mix Fashion Style',
    startDate: 'October 2022',
    endDate: 'November 2022',
    description:
      'Fashion-curated touch screen solution with tinder-like feature that lets customer swipe-select through different products and gets a fashion recommendation.',
    participation:
      'Implement over an in-house IoT platform • closely works with the designer • implements caching and optimizations to solve hardware limitations',
    techStack: ['Reactjs', 'Emotion', 'React Query', 'Typescript'],
  },
  {
    company: 'Ombori',
    project:
      'Deployment and Integration Activities for Endless Aisle and Fitting Room Solutions to a Major Clientele',
    startDate: 'July 2022',
    endDate: 'October 2022',
    description:
      'Endless Aisle is a retail solution that allows customers to navigate products on a touch screen, call for help, check in-house and online availability. Fitting room smart solution is powered by RFID technology where customer brings in a product into a special fitting room and information of the product appears on the screen with recommendations. Customer can also ask for new products to try on without ever going out of the fitting room.',
    participation:
      'Assist tech lead in enhancements  •  Tasks/Staff app solution integration •  client collaboration and assistance during integration and roll out phases',
    techStack: [
      'Reactjs',
      'Emotion',
      'React Query',
      'Typescript',
      'Azure',
      'Azure SignalR',
    ],
  },
  {
    company: 'Ombori',
    project: 'IoT/Non-IoT Device Management',
    startDate: 'May 2022',
    endDate: 'July 2022',
    description:
      'A re-architecture to an existing device management module. The re-architecture aims to offer a more intuitive and improved interfaces, visible alert and device monitoring features, and faster response time while taking into careful consideration the support of legacy devices.',
    participation:
      'Implement ui designs to actual code • suggests better and more intuitive interfaces • enhances affected api endpoints • optimize both logic and ui presentation • actively participates in re-architecture discussions',
    techStack: [
      'Reactjs',
      'AntDesign',
      'Emotion',
      'Expressjs',
      'Typescript',
      'Azure',
      'Azure Functions',
      'Sentry',
    ],
  },
  {
    company: 'Ombori',
    project: 'IoT Edge Device Monitoring and Alert',
    startDate: 'April 2022',
    endDate: 'May 2022',
    description:
      'A cloud function that monitors the health of the devices per client and sends out a notification (email, slack) and logs them in sentry when devices become offline and when they become online. As part of the pipeline, the service will also be able to monitor and alert critical levels of CPU, memory, and disk usage.',
    participation:
      'Collaborate with tech lead with the enhancements and optimizations • ensures implementation adheres to technical expectations • gradually refactor areas that need improvements',
    techStack: ['Expressjs', 'Typescript', 'Azure', 'Azure Functions'],
  },
  {
    company: 'Ombori',
    project: 'Tasks Application for Order Management',
    startDate: 'February 2022',
    endDate: 'March 2022',
    description:
      'A web-based application that serves as a queuing application for orders initiated by customers in a store using an endless aisle solution. Through this app, store staff can prioritize, look through inventories in the physical space, prepare the orders, and deliver them to the awaiting customer.',
    participation:
      'Collaborates with co-developer • implements UX from design team and suggests better alternatives as needed • identifies gray areas in the requirements and discusses with project manager',
    techStack: [
      'Reactjs',
      'Material UI',
      'CSS',
      'Javascript',
      'Typescript',
      'Azure',
      'Azure SignalR',
      'Azure Functions',
      'Azure DevOps',
      'Azure CosmosDB',
      'CI/CD',
    ],
  },
  {
    company: 'Ombori',
    project: 'Cost Estimator / Pricing Calculator',
    startDate: 'January 2022',
    endDate: 'February 2022',
    description:
      'A pricing calculator tool intended for both and in aid to sales team and prospect customers. The tool allows them to pick and combine retail solutions that they are interested in showing a breakdown of the cost per solution, user account cost, support cost with overall estimated monthly cost.',
    participation:
      'Main developer • implements UX from design team and suggests better alternatives as needed',
    techStack: [
      'Reactjs',
      'Bootstrap',
      'Emotion',
      'CSS',
      'Javascript',
      'Typescript',
      'Azure',
      'Azure Storage Accounts',
      'Azure DevOps',
      'CI/CD',
    ],
  },
  {
    company: 'Ombori',
    project: 'Billing System',
    startDate: 'October 2021',
    endDate: 'December 2021',
    description:
      'Billing system for charging solution subscriptions, overages, and generating invoices to subscribed organizations and sub-organizations.',
    participation:
      'Collaborates with co-developer and CTO on requirements and adherence of task implementations in relation to architectural design of the system • prevents and mitigates possible impact to dependent systems.',
    techStack: [
      'Reactjs',
      'AntDesign',
      'Emotion',
      'CSS',
      'Javascript',
      'Expressjs',
      'Typescript',
      'MongoDB',
    ],
  },
  {
    company: 'Ombori',
    project: 'Misc Admin Console and API Enhancements and Fixes',
    startDate: 'July 2021',
    endDate: 'September 2021',
    description:
      'Admin Console is where customer organizations manage their account, users, solution installations that they are currently subscribed to, provision devices, and many others.',
    participation:
      'Collaborates with co-developers and platform tech leads • ensures acceptance criteria are met •  participates in PR and/or peer code reviews',
    techStack: [
      'Reactjs',
      'AntDesign',
      'Emotion',
      'CSS',
      'React Query',
      'Javascript',
      'Expressjs',
      'Typescript',
      'React JSON Schema',
      'MongoDB',
      'Sentry',
    ],
  },
  {
    company: 'Ombori',
    project: 'Queuing System',
    startDate: 'May 2021',
    endDate: 'July 2021',
    description:
      'A virtual queue solution that incorporates either digital and paper tickets, or both. Provides sms notifications and in-store digital signages as customers await for their turn in the line. Extensible with appointment booking, occupancy control, order pick-up, people counter, and/or digital signage.',
    participation:
      'Collaborates with co-developers and platform tech lead • ensures acceptance criteria are met • participates in PR and/or peer code reviews • initiates collating and documenting of coding standards',
    techStack: [
      'Reactjs',
      'Material UI',
      'Emotion',
      'CSS',
      'Javascript',
      'Typescript',
      'Azure Functions',
      'Azure CosmosDB',
      'Azure SignalR',
    ],
  },
];
