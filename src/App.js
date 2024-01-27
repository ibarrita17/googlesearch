import React , { useState}from "react";

import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./components/AppRoutes";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import Results from "./components/Results";
//initializing app
const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);
    //rendering
    return (
        <ResultContextProvider>
        <div className ={darkTheme? 'dark' : ' '}> 
            <div className="bg-gray-222 dark:bg-gray-800" >
            
               <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Search/>
                <Results />
               
               <AppRoutes/>
               <Footer/>
                
            </div>
            
            
        </div>
        </ResultContextProvider>
    );
    }
export default App;
