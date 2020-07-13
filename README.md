# bloggie README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

![](https://lh3.googleusercontent.com/proxy/ljKZbFgeBH2N-bISVL9iFI8S9FK8rMkgl6w5968RrRjWx9y2VsI84k8m4edbMKdDH_5DFlCCFppRrMjWcaQIJFdatxuu8NlnZH4Pz1MleQ)

<br>

## Overview

_**bloggie** is a Full CRUD blog app with user posts, comments & likes with a Ruby on Rails Back-End and React Front-End._

<br>

## MVP

_**bloggie** will have user(s), posts, comments & likes. In addition to popular/ recent posts,  bloggie will also have archived posts._

<br>

### Goals

- _Back-End with Ruby on Rails,_
- _Front-End with React.js._
- _Mobile responsive with 3 breakpoints ( mobile, tablet, desktop )._
- _Styling with SCSS._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Frontend clinet._ |
|   React Router   | _Handles frontend routing._ |
| Ruby on Rails | _Handles backend database, and api data._ |
|     Axios      | _Handles API calls between frontend and backend._ |

<br>

### Client (Front End)

#### Wireframes

- Figma Design

[https://www.figma.com/file/I4le3VzoenJYmhotAVIehd/Blog?node-id=0%3A1](url)

#### Component Tree
[https://www.figma.com/file/qAlWnLcSmtjroEFfKTTCsd/React-Components](url)

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ App
|__ components/
      |__ Main.jsx
      |__ Header.jsx
      |__ Nav.jsx
      |__ Footer.jsx
      |__ All Posts.jsx
      |__ Post.jsx
      |__ Create Post.jsx
      |__ Edit Post.jsx
      |__ Comments.jsx
      |__ Likes.jsx
      |__ Sign in.jsx
      |__ Sign up.jsx
      |__ User Profile.jsx
|__ services/

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will contain the navigation & logo._               |
|  Navigation  | functional |   n   |   y   | _The navigation will provide a link to each of the pages & signup/signin._       |
|   Main    |   functional    |   y   |   n   | _The Main will be the main componet with state._      |
|    Posts    | functional |   n   |   y   | _Posts will show all User posts._ |
| Post | functional |   n   |   y   | _The Post will render the post info via props._                 |
|    Edit Post    | functional |   n   |   y   | _Edit Post will hande CRUD for updating/deleting posts._ |
|    Create Post    | functional |   n   |   y   | _Create Post will handle initial CRUD._ |
|    Sign in    | functional |   n   |   y   | _Handles user signin functionality._ |
|    Sign up    | functional |   n   |   y   | _Handles user signup functionality._ |
|    Footer    | functional |   n   |   n   | _The footer will show basic info about site._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Rails Models, Controllers, Routes   |    H     |     4 hrs      |     tbd hrs     |    tbd hrs    |
| Create CRUD Actions |    H     |     5 hrs      |     tbd hrs     |     TBD     |
| User Auth |    H     |     2 hrs      |     tbd hrs     |     TBD     |
| testing CRUD Routes |    H     |     2 hrs      |     tbd hrs     |     TBD     |
| Initial React Component Layout |    H     |     3 hrs      |     tbd hrs     |     TBD     |
| React Routing |    H     |     3 hrs      |     tbd hrs     |     TBD     |
| React Components |    H     |     5 hrs      |     tbd hrs     |     TBD     |
| Connecting Ruby & React CRUD Actions |    H     |     4 hrs      |     tbd hrs     |     TBD     |
| Posts |    H     |     3 hrs      |     tbd hrs     |     TBD     |
| Post |    H     |     3 hrs      |     tbd hrs     |     TBD     |
| SASS Styling |    H     |     3 hrs      |     tbd hrs     |     TBD     |
| TOTAL               |          |     tbd hrs      |     tbd hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

>ERD Model draw.io

https://drive.google.com/file/d/1AP06QmD-ukAdcnkvFWA1S4erhdoZJt1C/view?usp=sharing (url)
<br>

***

## Post-MVP

> Search and filter User(s) & Post(s)
> Expand Post create/edit features (ie: add images, more control over post styling )

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description -- Coming soon.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution -- Coming soon.
