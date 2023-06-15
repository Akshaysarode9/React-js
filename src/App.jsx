// import React from 'react'
// import "./style.css";
// const App=() =>{
//   return (
//     <div>
//       <h1 className='head'>HI REACT JS</h1>
//       <h2 id='head1'>REACT JS</h2>
//       <h3 style={{background:"red"}}>HI AKKI</h3>
//       <h4 style={{fontSize:"50"}}>Akki</h4>
//     </div>
//   );
// };
// export default App;

//* CLASS BASED COMPONENTS
//^ FUNCTIONAL BASED COMPONENTS

// & HOW WE CAN DECLARE CLASS BASED COMPONENTS 
//* BY USING rcc

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>HI REACT CLASS</h1>
//       </>
//     );
//   }
// }



// *2ND WAY YOUR FUNCTIONAL BASED COMPONENTS
// & IF YOU WANT FUNCTIONAL BASED COMPONENTS YOU HAVE TO USED RFC OR RAFCE
//* & BY USING rfc

// import React from 'react'

// export default function App() {
//   return (
//     <div>React class</div>
//   )
// }


//* BY USING rafce

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App


//~ CLASS BASED COMPONENTS IS ALSO CALLED AS STATEFULL COMPONENT.
//~ fUNCTIONAL BASED COMPONENTS IS ALSO CALLED AS STATELESS COMPONENTS.


import React, { Component } from 'react'
import Child from './Child';
import "./style.css"
export default class App extends Component {
  render() {
    return (
      <div><h1>HI COMPONENTS RENDERS App.jsx</h1><Child/></div>
    );
  }
}
