<div align="center"><a href="https://mundovirtual.solutions"><h1 align="center">MundoVirtual Solutions</h1></a>

MundoVirtual ayuda a convertir ideas en realidades a través de asesorías, prototipos y desarrollo de MVP.
This website has built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Upstash](https://upstash.com?ref=chronark.com), [Contentlayer](https://www.contentlayer.dev/) and deployed to [Vercel](https://vercel.com/).

</div>

<br/>

## Running Locally

```sh-session
git clone https://github.com/wolfcito/mundo-virtual-app
cd mundo-virtual-app
```

Create a `.env` file similar to [`.env.example`](https://github.com/chronark/chronark.com/blob/main/.env.example).

Then install dependencies and run the development server:

```sh-session
pnpm install
pnpm dev
```

## Documentation

- Documentation
- Tech Stack
- Coding Conventions

```bash
.
├── LICENSE
├── README.md
├── app
│   ├── components
│   │   ├── analytics
│   │   │   ├── analytics.component.tsx
│   │   │   └── index.ts
│   │   ├── article
│   │   │   ├── article.component.tsx
│   │   │   ├── article.type.ts
│   │   │   └── index.ts
│   │   ├── card
│   │   │   ├── card.component.tsx
│   │   │   ├── card.type.ts
│   │   │   └── index.ts
│   │   ├── header
│   │   │   ├── header.component.tsx
│   │   │   ├── header.type.ts
│   │   │   └── index.ts
│   │   ├── layout
│   │   │   ├── index.ts
│   │   │   ├── layout.component.tsx
│   │   │   └── layout.type.ts
│   │   ├── mdx
│   │   │   ├── index.ts
│   │   │   ├── mdx.component.tsx
│   │   │   └── mdx.type.ts
│   │   ├── navigation
│   │   │   ├── index.ts
│   │   │   └── navigation.component.tsx
│   │   ├── particles
│   │   │   ├── index.ts
│   │   │   ├── particles.component.tsx
│   │   │   └── particles.type.ts
│   │   ├── product
│   │   │   ├── index.ts
│   │   │   ├── product.component.tsx
│   │   │   └── product.type.ts
│   │   └── report-view
│   │       ├── index.ts
│   │       ├── report-view.component.tsx
│   │       └── report-view.type.ts
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects
│   │   ├── [slug]
│   │   │   ├── mdx.css
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   └── views
│       ├── contact.view.tsx
│       ├── home.view.tsx
│       ├── index.ts
│       ├── products.view.tsx
│       └── projects.view.tsx
├── content
│   └── projects
│       ├── chesscito.mdx
│       ├── cosmovision.mdx
│       ├── eth-tricolor.mdx
│       ├── martial-arts.mdx
│       ├── mundo-virtual.mdx
│       ├── museum-web3.mdx
│       ├── soffiapps.mdx
│       ├── virtual-voting.mdx
│       └── wolfcito.mdx
├── contentlayer.config.js
├── data
│   ├── index.ts
│   ├── products.data.ts
│   └── socials.data.tsx
├── global.css
├── hook
│   ├── index.ts
│   ├── mouse.hook.ts
│   └── mouse.type.ts
├── mdx-components.tsx
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pages
│   └── api
│       └── incr.ts
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.js
├── public
│   ├── banner-eth-tricolor.png
│   ├── chesscito.jpg
│   ├── coin.png
│   ├── cosmovision.jpg
│   ├── favicon.png
│   ├── find.png
│   ├── gift.png
│   ├── images
│   │   ├── black-elixir-potion.mundovirtual.png
│   │   ├── gold-elixir-potion.mundovirtual.png
│   │   └── purple-elixir-potion.mundovirtual.png
│   ├── mundovirtual.png
│   ├── og.png
│   ├── sofiapps.jpg
│   ├── tkd-mundovirtual-dsktp.jpg
│   ├── tkd-mundovirtual.jpeg
│   ├── virtual-voting.png
│   └── wolfcito-blog.jpg
├── tailwind.config.js
├── tsconfig.json
└── types
    └── mdx.d.ts
```

<b style = 'color : blue; font-size: 30px;'>Documentation</b>

<b style = 'color : blue; font-size: 28px;'> Dependencies with which the development was worked: </b>

> ### @Next/font

_includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS size-adjust property used._

_This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your static assets. No requests are sent to Google by the browser_

---

> ### @Types/node

Is a tool in the npm Packages category of a tech stack.
is an open source tool with 42.3K GitHub stars and 28.5K GitHub forks. Here’s a link to @types/node's open source repository on GitHub

> ### types :

_TypeScript is JavaScript for application-level development. That is, the work done in the initial configuration of the project is compensated by the ease of maintenance that it provides in complex projects._

_Difficult to maintain is one of the main reasons why Java and C# developers avoid migrating large projects to JavaScript. We can say that TypeScript is a language that overcomes this barrier._

> ### Node :

_Node.js\_ is an engine that runs JavaScript, not TypeScript. The node TypeScript package allows us to transpile your .ts files to .js scripts. Babel can also be used to transpile TypeScript, but the market standard is the official Microsoft package._

> ### Types/react :

_It is a typed JavaScript superset and includes its own compiler. Being a typed language, TypeScript can catch bugs and crashes at build time, long before your app goes live._

**advantages:**

- With TS you can easily define Prop Types, making the code much easier to read, adding readability when you want to verify the definition of a component.

- TypeScript + React provides better intelliSense, auto-completion for JSX (JavaScript syntax extension).

- With the popularity of TS it is possible to make use of other libraries that include TS support.

- In addition, the React library supports type definition, so it is no longer a concern for us, in case a library does not have a type, we can easily create the definition.

- Refactoring is much easier since we know the exact types and where to change them. And you can detect what can go wrong in the type definition, preventing the application from breaking.

---

> ### Types types/react-dom :

_While React provides us with methods to create the elements that will be rendered in our HTML, ReactDOM provides us with the methods that will allow us to get to a point where our code will meet our HTML_

_The react-dom package provides DOM-specific methods that can be used at the top level of your application as a way to escape the React model if needed._

---

> ### Eslint :

_Is an open source tool focused on the lintig process for javascript (or more correctly for ECMAScript). ESLint is the predominant tool for the task of "cleaning up" javascript code both on the server (node.js) and in the browser._

_Since **JavaScript** is a dynamic and weakly typed language, it is especially easy to fall into human error when writing code. ESLint uses a system of rules that allow you to define what is and what is not possible within the code. ESLint is written in Nodejs and it is possible to install it from npm.Can help you:_

*show you syntax errors
*Show you errors when good practices are not followed.
\*Provide suggestions to improve your code.

---

> ### Eslint-config-next:

_Next.js provides an integrated ESLint experience out of the box._

_we can run next lint every time ESLint runs to detect errors. Once ESLint has been configured, it will also be automatically executed during each compilation ( next build). Errors will fail the build, while warnings will not._

_Next.js automatically installs eslint as eslint-config-next's development dependencies in your application and will create an .eslintrc.json file in the root of your project that includes the selected configuration._

---

<b style = 'color : blue; font-size: 35px;'>React and some complements : </b>

> ### React :

_React is an open source Javascript library designed to create user interfaces with the goal of facilitating the development of single-page applications. It is maintained by Facebook and the free software community. There are more than a thousand free developers in the project.
Since its launch, its use has been increasing significantly, becoming, today, one of the most widely used front-end technologies._

_Since its launch, its use has been increasing significantly, becoming, today, one of the most widely used front-end technologies._

> ### React-dom:

_React DOM is the library in charge of rendering React components for the browser. Keep in mind that React is a library that can be used in different environments (mobile devices, desktop apps, terminal...)._

_While the React library, plainly, is the engine for creating components, hooks, props and state system... React DOM is the library that is responsible for rendering React components specifically in the browser._

> ### next:

_Is a lightweight, open source JavaScript framework built on top of React, which allows you to develop very fast and easy-to-use applications and websites. Although it does have a learning curve, even new front-end developers can pick it up quickly. It is based on Babel and Node._

_Es una solución para crear sitios web renderizados por el servidor. Las aplicaciones de React solo pueden renderizar su contenido en el navegador, del lado del cliente._

_Is a solution for creating server-rendered websites. React apps can only render their content in the browser, client-side_

---

<b style = 'color : blue; font-size: 35px;'>Styles and more:</b>

> ### tailwind css:

_It is a CSS framework that gives priority to utility over style itself, but also unlike other CSS frameworks such as Bootstrap or Bulma, Tailwind does not provide a series of predefined components. Instead, this framework operates at a lower level and provides you with a set of helper classes for structure and styling so that, using those classes, you can quickly create custom layouts with ease._

_The use of Tailwind entails a series of clear advantages, some technical and others more abstract, which simplify and speed up the development of websites._

> ### Daisyui :

_It offers a large collection of predefined utility classes to quickly enrich your application with versatile styling._

_daisyUI is a customizable Tailwind CSS component library that prevents verbose markup in frontend applications. With a focus on customizing and creating themes for user interfaces, daisyUI uses pure CSS and Tailwind utility classes, allowing developers to write clean HTML_

---

> ### autoprefixer:

_It is one of the simplest plugins. It simply allows us to apply whatever CSS prefixes are needed to the source code, thus saving us work and maintaining better compatibility with current and legacy browsers._

_This tool offers several interesting advantages:_

- You don't have to add CSS prefixes manually
- You don't have to maintain the default properties and their values ​​(difficult to maintain).
- refixes are added automatically based on data from CanIUse.
- By automatically generating prefixes, each time you resume the project, they will be better adapted to the present, as browsers evolve and support for older versions is lost.

---

> ### Postcss:

_PostCSS is a "Swiss Army Knife" for working automatically with the CSS code of frontend projects. This webinar talks about the main plugins available to take advantage of PostCSS, when processing and optimizing cascading style sheets._

_Just to get an idea of ​​the scope of the tool, we are going to name some of the most used plugins_

**PostCSSImport :**
_this plugin allows you to import the CSS that we have in dispersed files, uniting all its content in the same file_

**Autoprefixer :**
_It is one of the simplest plugins. It simply allows applying the CSS prefixes that are necessary to the source code_

**PurgeCSS :**
_PurgeCSS allows you to optimize the CSS, eliminating from the files that we are going to take to production all the style rules that are not used in the project_

---

<b style = 'color : blue; font-size: 35px;'>Table</b>

> ### architectural table:

| VERCEL         | NEXT                               | SOLANA             | ETHEREUM         |
| -------------- | ---------------------------------- | ------------------ | ---------------- |
| cloud platform | framework built on top of React.js | blockchain project | digital platform |

---

<b style = 'color : blue; font-size: 35px;'>Other elements:</b>

> ### typescript:

_is a programming language built on top of JavaScript (JS). This means that TypeScript provides the language with several additional features that make it possible to write code with fewer errors, simpler, coherent and easier to test, in short, cleaner and more robust._

_TypeScript va un paso más allá de ECMAScript 6 o posterior y añade más funcionalidad a ECMAScript, como tipado fuerte, anotaciones o módulos._

_Como TypeScript es un superconjunto de JavaScript, todo el código escrito en JS es válido para TS. Pero no lo contrario. Esto lo podemos comprobar gracias a los navegadores web. Ya que no entienden el código escrito en TypeScript y, para que lo hagan, es necesario hacer una ‘’transpilación’’ del código a JavaScript._

---

> ### framer-motion:

_is an animation library for creating declarative animations in React. It provides production-ready animations and a low-level API to help simplify the process of integrating animations into an application._

_Algunas bibliotecas de animaciones de React, como react-transition-group y Transition-Hook , animan elementos con transiciones CSS configuradas manualmente . Framer Motion adopta un enfoque diferente al animar elementos debajo del capó con estilos preconfigurados._

_motiony uaeAnimationson dos estilos que son activados y controlados por funciones expuestas por Framer Motion. La motionfunción se utiliza para crear componentes de movimiento, y estos son los componentes básicos de Framer Motion._

---

> ### Vercel :

_is a cloud platform for hosting static sites. More importantly, it provides a seamless workflow for development ,with preview and push to JAMstack sites."_

_Vercel also uses CDNs to scale and speed up production sites. It is worth mentioning that the team behind Vercel is also supporting another popular framework, Next.js._

_Vercel ofrece un marco de código abierto a desarrolladores front-end. La startup desarrolló un marco de código abierto para desarrolladores front-end llamado "Next. JS React". Además, ofrece una plataforma con plantillas interactivas que ayuda a equipos front-end a desarrollar sitios web y aplicaciones._

---

> ### Solana :

_that seeks to drive the development of next-generation DApps. Solana (SOL) seeks to offer a highly scalable, secure and as decentralized platform as possible. It also wants to have potentially thousands of nodes without the need for expensive, power-hungry hardware._

_is the most scalable so far, secure and tries to be as decentralized as possible._

_One of Solana's major innovations is the Proof of Story. Whereas, until now, decentralized networks have relied on centralized timing solutions to solve the problem of scalability and speed, Solana proposes the Proof of Story, a history that records events over time and increases the scalability of the network, while maintaining its decentralization and security. This log allows nodes that validate transactions not to have to wait for each transaction to be validated before moving forward._

---

> ### Ethereum :

_These applications can be, among others, security programs, voting systems and payment methods that belong to the cryptocurrency market. Like bitcoin, ethereum is not regulated by central authorities such as banks and governments._

_In other words, it is a technology for building applications and organizations, holding assets, transacting, and communicating without being controlled by a central authority._

_Currently, Solidity is the main language in Ethereum as well as in other private blockchains that compete with Ethereum, such as Monax and its Hyperledger Burrow blockchain, which uses Tendermint for the consensus mechanism._

---

> ### Yarn:

#### Installation of yarn version 1.22.19 via npm:

#### first step:

_it is recommended to install Yarn through the npm package
manager, which comes bundled with Node.js when you install it on
your system. Once you have npm installed you can run the
following both to install and upgrade Yarn:_

> npm install --global yarn

#### second step:

_You can also try this way indicating directly the version to
install:_

> yarn install

#### check version:

_we can use the following command to check the version we
installed:_

> yarn dev

#### more information about the installation:

\_ Here you will have more information about the installation of:

[installation yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

> ## General Philosoph:

_The project aims to facilitate starting up quickly and following industry best practices.
The project provides a well documented architecture and guidelines to avoid common pitfalls._

---

> ### Tech Stack

#### NextJS:

- SSR React framework with powerful conventions.
- Great documentation and communi

#### Vercel:

- Ease of configuration.
- Deployment speed.
- Developer experience.

---

### system design :

_The system has common patterns such as spacing (The Box Model), color palettes, shadows, typography, border radius (radii) plays an important role when we create these components as a representation of what it will look like for developer to create, by using the same values as we use with this system._

![html, css y javascript image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkB0CydleSLf3REskbWKAOmzcuAnzplToGA&usqp=CAU)

<b style = 'color : blue; font-size: 35px;'>Coding Conventions:</b>

### JavaScript Conventions :

- **naming variables:** boolean should be named using auxiliary verbs such as does, has, is and should. For example, Button uses isDisabled, isLoading, etc.

- **composition:** break down components into smaller parts with minimal props to keep complexity low, and compose them together.

- **filenames:** create folders with and index, lowercase with dash separator for dirs and names`components/auth-wizard`
  and five the following extensions each file acordingly
  `.config.ts`, `.component.tsx`, `.test.ts`, `.context.tsx`, `.type.ts`, `.hook.ts`

- Bypass the export default.

- Receive an object, return an object

```javascript
// types/services.type.ts
export interface ServiceParams {
  limit?: number;
  offset?: number;
}

// services/account/account.type.ts
export interface GetAccountsParams extends ServiceParams {
  account?: string;
}

// services/account/account.service.ts
export async function getAccounts({
  account,
  limit = 15,
  offset = 0,
}: GetAccountsParams) {
  const where = account
    ? {
        account: {
          _eq: account,
        },
      }
    : null

  return getGraphQLSdk()
    .chain.query.accounts({
      where,
      limit,
      offset,
    })
    .get({ ...everything })
}
```

\*Most functions will receive an object and many of them return an object too.

Like any pattern, RORO should be seen as just another tool in our tool box. We use it in places where it adds value by making a list of parameters more clear and flexible and by making a return value more expressive.\*

### ReactJS Conventions:

- declare component with `function` keyword
- use const for methods
- place code in the following order

  - function component declaration
  - styled components
  - typescript types
  - getServerSideProps

  Example:

  ```javascript
  export function MyReactComponent({ myParam }: MyReactComponetParams) {
    const myMethod = () => console.log(myParam)

    return (
      <div className="bg-slate-100 md:flex ">
        A new world awaits. <br /> be the first to discover it.
        <button onClick={myMethod}>let's goo!</button>
      </div>
    )
  }

  export interface MyReactComponetParams {
    myParam: boolean;
  }
  ```

---

<b style = 'color : blue; font-size: 35px;'>For complement:</b>

**Keep the state flat:**

Updating nested Javascript objects immutably generally results in uglier code that is harder to maintain, unless you use a utility library to wrap up the process.

Immutably updating nested data requires that you return new copies of all items in the nesting hierarchy. Since components generally do shallow-equality reference comparisons on data to see if they need to update.Flat data, and in particular normalized data, enables some more optimized approaches for defining components

**State management:**

When you write a component that holds some state, you’ll have to make choices about how many state variables to use and what the shape of their data should be. While it’s possible to write correct programs even with a suboptimal state structure, there are a few principles that can guide you to make better choices:

- Group related state
- Avoid redundant state.
- Avoid duplication in state.

**Coding Style best practices:**

Follow a semantic, idiomatic, functional and declarative codestyle, using Modern JavaScript features and TypeScript. React is declarative, you declare you component structure and React and NextJS take care of handling the DOM changes require, it is possible to write imperative code but that is not recommended. Code should use correct semantics and meaningful naming, and be autoexplanatory, when you read your code outloud it should sound like plain english as much as possible.

**Coding Style Best Practices:**

Follow a semantic, idiomatic, functional and declarative codestyle, using Modern JavaScript features and TypeScript. React is declarative, you declare you component structure and React and NextJS take care of handling the DOM changes require, it is possible to write imperative code but that is not recommended. Code should use correct semantics and meaningful naming, and be autoexplanatory.
