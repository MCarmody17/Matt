
import './styles/App.css';

import './styles/astronauts.css';
import Astronauts from ".//Components/Astronauts"; 
import Intro from ".//Components/Intro"
import About from ".//Components/about"

export default function App()    {
    return (
        <div className="App">
            <div id="content">
                <Astronauts></Astronauts>
                <Intro></Intro>
                <About></About>

            </div>
        </div>   
  );
}


