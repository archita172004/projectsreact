
// import React from 'react'
// import ReactDOM from 'react-dom'

// const welcome = 'Welcome to 30 days of react'
// const title='getting started react'
// const subtitle ='javascript library'
// const authorFirstName='Archita'
// const authorLastName='Chaudhary'
// const date ='Jan 16, 2024'

// // JSX element
// const header = (
//    <header>
//      <div className='header-wrapper'>
//      <h1>{welcome}</h1>
//          <h2>{title}</h2>
//              <h3>{subtitle}</h3>
//              <p>
//                  Instructor: {authorFirstName} {authorLastName}</p>
//              <small>Date: {date}</small>
//              </div>
//      </header>
//    )
 
//    const yearBorn = 2004
//    const currentYear = new Date().getFullYear()
//    const age = currentYear - yearBorn
//    const personAge =(
//      <p>
//          {' '}
//          {authorFirstName} {authorLastName} is {age} years old
//          </p>
//    )



   
//    const techs = ['HTML','CSS','JavaScript']
//    const techsFormatted = techs.map((tech)=> <li key={tech}>{tech}</li>)
   
//    const main = (
//      <main>
//          <div className='main-wrapper'>
//          <p>Prerequisite tp get statrted {' '}<strong>
//              <em> react.js</em>
//              </strong>
//              </p>

//          <ul>
//              {techsFormatted}
//              </ul>
//              {personAge}
//              </div>
//          </main>
//    )
   
//    const copyRight = 'Copyright 2024'
   
//    const footer =(
//      <footer >
//          <div className='footer-wrapper'>
//         <p>{copyRight}</p> 
//         </div>
//          </footer>
//    )
   

//    const app = (
//      <div className='app'>
//      {header} 
//      {main} 
//      {footer}
//      </div>
//    )
   
//    const rootElement = document.getElementById('.root')
//    ReactDOM.render(app,rootElement)
   
   
   
   //index.js
   import React from 'react'
   import {createRoot} from 'react-dom/client'
   // To get the root element from the HTML document
   
   //adding css
   import './index.css'

   //importing image
   import ac from './cron.PNG'
   

   
   
   
   // JSX element, header
   const welcome = 'Welcome to 30 Days Of React'
   const title = 'Getting Started React'
   const subtitle = 'JavaScript Library'
   const author = {
       firstName: 'Asabeneh',
       lastName: 'Yetayeh',
      }
      const date = 'Oct 2, 2020'

      // JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const user = (
  <div>
    <img src={ac} alt='ac'></img>
  </div>
)
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
    {user}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
// ReactDOM.render(app, rootElement)
createRoot(rootElement).render(app)