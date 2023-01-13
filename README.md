# Mundo Virtual Solutions
 - Documentation
 - Tech Stack
 - Best Practices
 - Coding Conventions

## Documentation

.
├── components...................................
│   └── navbar
│       ├── index.ts
│       └── navbar.component.tsx
├── icons
│   ├── about-icon.tsx
│   ├── home-icon.tsx
│   ├── index.ts
│   ├── logo-icon.tsx
│   └── menu-icon.tsx
├── next.config.js
├── package.json
├── pages
│   ├── about.tsx
│   ├── api
│   │   └── health-checker.ts
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── postcss.config.js
├── public
│   ├── favicon.png
│   └── images
│       └── virtualito_bot.png
├── README.md
├── styles
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock

### Dependencies with which the development was worked

### @Next/font

*includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS size-adjust property used.

This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your static assets. No requests are sent to Google by the browser*
_ _ _

### @Types/node

### types :

*TypeScript is JavaScript for application-level development. That is, the work done in the initial configuration of the project is compensated by the ease of maintenance that it provides in complex projects.

Difficult to maintain is one of the main reasons why Java and C# developers avoid migrating large projects to JavaScript. We can say that TypeScript is a language that overcomes this barrier.*
_ _ _

### Node :

*Node.js is an engine that runs JavaScript, not TypeScript. The node TypeScript package allows us to transpile your .ts files to .js scripts. Babel can also be used to transpile TypeScript, but the market standard is the official Microsoft package.*

### Types/react :

*It is a typed JavaScript superset and includes its own compiler. Being a typed language, TypeScript can catch bugs and crashes at build time, long before your app goes live.*

*advantages:*
  
  * With TS you can easily define Prop Types, making the code much easier to read, adding readability when you want to verify the definition of a component.

  * TypeScript + React provides better intelliSense, auto-completion for JSX (JavaScript syntax extension).

  * With the popularity of TS it is possible to make use of other libraries that   include TS support.

  * In addition, the React library supports type definition, so it is no longer a concern for us, in case a library does not have a type, we can easily create the definition.

  * Refactoring is much easier since we know the exact types and where to change them. And you can detect what can go wrong in the type definition, preventing the application from breaking.


_ _ _ 

### Types types/react-dom :

*While React provides us with methods to create the elements that will be rendered in our HTML, ReactDOM provides us with the methods that will allow us to get to a point where our code will meet our HTML*

*The react-dom package provides DOM-specific methods that can be used at the top level of your application as a way to escape the React model if needed.*

_ _ _ 

### Daisyui :

 *It offers a large collection of predefined utility classes to quickly enrich your application with versatile styling.*

 *Provides styles for core components, such as buttons, navigation bars, or tab containers. But more special use cases are also covered with existing components, such as a counter or a display for statistical data.daisyUI adds classes to Tailwind CSS for all the common UI components, classes like btn*

 _ _ _ 

 ### Eslint :

 *Is an open source tool focused on the lintig process for javascript (or more correctly for ECMAScript). ESLint is the predominant tool for the task of "cleaning up" javascript code both on the server (node.js) and in the browser.*

*Since JavaScript is a dynamic and weakly typed language, it is especially easy to fall into human error when writing code. ESLint uses a system of rules that allow you to define what is and what is not possible within the code. ESLint is written in Nodejs and it is possible to install it from npm.Can help you:*

*show you syntax errors
*Show you errors when good practices are not followed.
*Provide suggestions to improve your code.

_ _ _ 

### Eslint-config-next:

*Next.js provides an integrated ESLint experience out of the box.*

*we can run next lint every time ESLint runs to detect errors. Once ESLint has been configured, it will also be automatically executed during each compilation ( next build). Errors will fail the build, while warnings will not.*

*Next.js automatically installs eslint as eslint-config-next's development dependencies in your application and will create an .eslintrc.json file in the root of your project that includes the selected configuration.*

### framer-motion:

 *is an animation library for creating declarative animations in React. It provides production-ready animations and a low-level API to help simplify the process of integrating animations into an application.*

 *Algunas bibliotecas de animaciones de React, como react-transition-group y Transition-Hook , animan elementos con transiciones CSS configuradas manualmente . Framer Motion adopta un enfoque diferente al animar elementos debajo del capó con estilos preconfigurados.*

*motiony uaeAnimationson dos estilos que son activados y controlados por funciones expuestas por Framer Motion. La motionfunción se utiliza para crear componentes de movimiento, y estos son los componentes básicos de Framer Motion.*

### next:

*Is a lightweight, open source JavaScript framework built on top of React, which allows you to develop very fast and easy-to-use applications and websites. Although it does have a learning curve, even new front-end developers can pick it up quickly. It is based on Babel and Node.*

*Es una solución para crear sitios web renderizados por el servidor. Las aplicaciones de React solo pueden renderizar su contenido en el navegador, del lado del cliente.*

*Is a solution for creating server-rendered websites. React apps can only render their content in the browser, client-side*

### React-dom:

*React DOM is the library that is responsible for rendering React components for the browser. Keep in mind that React is a library that can be used in different environments (mobile devices, desktop apps, terminal*

*It allows us to create user interfaces in the development of a single page application, also known as SPA.*

### typescript:

*is a programming language built on top of JavaScript (JS). This means that TypeScript provides the language with several additional features that make it possible to write code with fewer errors, simpler, coherent and easier to test, in short, cleaner and more robust.*

*TypeScript va un paso más allá de ECMAScript 6 o posterior y añade más funcionalidad a ECMAScript, como tipado fuerte, anotaciones o módulos.*

*Como TypeScript es un superconjunto de JavaScript, todo el código escrito en JS es válido para TS. Pero no lo contrario. Esto lo podemos comprobar gracias a los navegadores web. Ya que no entienden el código escrito en TypeScript y, para que lo hagan, es necesario hacer una ‘’transpilación’’ del código a JavaScript.*

_ _ _ 

### autoprefixer:

*It is one of the simplest plugins. It simply allows us to apply whatever CSS prefixes are needed to the source code, thus saving us work and maintaining better compatibility with current and legacy browsers.*

*This tool offers several interesting advantages:*

* You don't have to add CSS prefixes manually
* You don't have to maintain the default properties and their values ​​(difficult to maintain).
* refixes are added automatically based on data from CanIUse.
* By automatically generating prefixes, each time you resume the project, they will be better adapted to the present, as browsers evolve and support for older versions is lost.

### Postcss:

*PostCSS is a "Swiss Army Knife" for working automatically with the CSS code of frontend projects. This webinar talks about the main plugins available to take advantage of PostCSS, when processing and optimizing cascading style sheets.*

*Just to get an idea of ​​the scope of the tool, we are going to name some of the most used plugins*

**PostCSSImport :** 
*this plugin allows you to import the CSS that we have in dispersed files, uniting all its content in the same file*

**Autoprefixer :**
*It is one of the simplest plugins. It simply allows applying the CSS prefixes that are necessary to the source code*

**PurgeCSS :**
*PurgeCSS allows you to optimize the CSS, eliminating from the files that we are going to take to production all the style rules that are not used in the project*

_ _ _

### tailwindcss:
 
*It is a CSS framework that gives priority to utility over style itself, but also unlike other CSS frameworks such as Bootstrap or Bulma, Tailwind does not provide a series of predefined components. Instead, this framework operates at a lower level and provides you with a set of helper classes for structure and styling so that, using those classes, you can quickly create custom layouts with ease.*

*The use of Tailwind entails a series of clear advantages, some technical and others more abstract, which simplify and speed up the development of websites.*


### architectural table:
|         VERCEL         |         NEXT                       |        SOLANA       |        ETHEREUM       | 
|- - - - - - - - - - - - | - - - - - - - - - - - - - - - - - -|- - - - - - - - - - -|  - - - - - - - - - - -|  
|     cloud platform     |framework built on top of React.js  | blockchain project  |   digital platform    |
 

### Vercel :

*is a cloud platform for hosting static sites. More importantly, it provides a seamless workflow for development ,with preview and push to JAMstack sites."*

*Vercel also uses CDNs to scale and speed up production sites. It is worth mentioning that the team behind Vercel is also supporting another popular framework, Next.js.*

*Vercel ofrece un marco de código abierto a desarrolladores front-end. La startup desarrolló un marco de código abierto para desarrolladores front-end llamado "Next. JS React". Además, ofrece una plataforma con plantillas interactivas que ayuda a equipos front-end a desarrollar sitios web y aplicaciones.*

### Next :

*Next nos permite, instalando una sola dependencia, tener configurado todo lo que necesitamos para crear una aplicación de React usando Babel, Webpack, server render y muchas otras técnicas como HMR o separación de código y… ¡hasta hace más fácil hacer deploy de nuestras aplicaciones!*


### Solana :

*that seeks to drive the development of next-generation DApps. Solana (SOL) seeks to offer a highly scalable, secure and as decentralized platform as possible. It also wants to have potentially thousands of nodes without the need for expensive, power-hungry hardware.*

*is the most scalable so far, secure and tries to be as decentralized as possible.*

*One of Solana's major innovations is the Proof of Story. Whereas, until now, decentralized networks have relied on centralized timing solutions to solve the problem of scalability and speed, Solana proposes the Proof of Story, a history that records events over time and increases the scalability of the network, while maintaining its decentralization and security. This log allows nodes that validate transactions not to have to wait for each transaction to be validated before moving forward.*

### Ethereum :

*These applications can be, among others, security programs, voting systems and payment methods that belong to the cryptocurrency market. Like bitcoin, ethereum is not regulated by central authorities such as banks and governments.*

*In other words, it is a technology for building applications and organizations, holding assets, transacting, and communicating without being controlled by a central authority.*

*Currently, Solidity is the main language in Ethereum as well as in other private blockchains that compete with Ethereum, such as Monax and its Hyperledger Burrow blockchain, which uses Tendermint for the consensus mechanism.*
_ _ _

## General Philosoph:

*The project aims to facilitate starting up quickly and following industry best practices.
The project provides a well documented architecture and guidelines to avoid common pitfalls.*


### Tech Stack


#### NextJS:
  * SSR React framework with powerful conventions.
  * Great documentation and communi
  
#### Vercel:
  * Ease of configuration.
  * Deployment speed.
  * Developer experience.

### system design :

*The system has common patterns such as spacing (The Box Model), color palettes, shadows, typography, border radius (radii) plays an important role when we create these components as a representation of what it will look like for developer to create, by using the same values as we use with this system.*




### Best Practices

### Coding Conventions

