//import './App.css';
//import Home from "./components/Home";
import Language from './components/Language';
//import  Person from "./components/Person";
import UserList from "./components/UserList";
import User from "./components/User";

//import Counter from "./components/Counter"
import Count from "./components/Count"

import NotFound from "./components/NotFound"
import {Route,Routes, Link} from "react-router-dom"
import Contact from './components/Contact';


function App() {  //parent
//const bool = false;

  //return (
    //<>
    //{bool ? <Home />: null}
      {/*<Person val ={"Tarannum"} />*/}
      {/*<Language/>*/}
      {/*<Counter/>*/}
      {/*<Counter count={0}/>*/}
      {/*<Counter count={2}/>*/}
      {/*<Counter count={0} value={10} />*/}
    //<UserList/>
   //</>

   return(
    <>
    <nav>
      
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/users" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</Link>
        </li>
        <li>
          <Link to="/lang" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Languages</Link>
        </li>
        <li>
          <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </nav>
      <Routes>
        {/*<Route path="/" exact element={<Counter count={1} value={1} />}/>*/}
        <Route path="/" exact element={<Count count={1} value={1} />}/>

         <Route path="/users" exact element={<UserList/>} />
         <Route path="/users/:username"exact element={<User/>} />
         <Route path="/lang" exact element={<Language/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
   );
  }

export default App;
