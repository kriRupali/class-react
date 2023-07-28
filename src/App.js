// import logo from './logo.svg';
//  import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import A from "./components/A.js";
import { B, C } from "./components/A.js";
import X from "./components/B.js";
import { Y, Z } from "./components/B.js";
import { Formlogin } from "./homework/Formlogin.js";
import Spotifylogin from "./homework/Spotifylogin.js";
import Comp1 from "./Spotifysecond/Comp1.js";
import Comp2 from "./Spotifysecond/Comp2.js";
import Comp3 from "./Spotifysecond/Comp3.js";
const App = () => {
  // const stringLiteral = "Rupali";
  // const numberLiteral = 25;
  // const bigIntValue = 25n;
  // const nullValue = null;
  // const undefinedValue = undefined;
  // const booleanValue = true;
  // const functionValue = () => {
  //   console.log(20 + 50 + 70);
  //   console.log("Good Morning");
  // };
  // const objectValue = { name: "Rupali", gender: "Female" };
  // const arrayValue = [10, 50, 64, 4];
  return (
    <>
      {/* <div> */}
      {
        /* <A></A>
      <B></B>
      <C></C>
      <X></X>
      <Y></Y>
      <Z></Z> */
        // <Formlogin
        // string={stringLiteral}
        // string2={"Gaurav"}
        // number={numberLiteral}
        // number2={25}
        // bigIntValue={bigIntValue}
        // nullValue={nullValue}
        // undefinedValue={undefinedValue}
        // functionValue={functionValue}
        // objectValue={objectValue}
        // arrayValue={arrayValue}
        // booleanValue={booleanValue}
        // ></Formlogin>
        // <Spotifylogin></Spotifylogin>
      }
      {/* </div> */}

      <section style={{display:"flex",flexDirection:"column",backgroundColor:"black"}}>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </section>
    </>
  );
};
export default App;
