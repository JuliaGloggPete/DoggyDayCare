import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome';
import AllDogs from './components/AllDogs';
import DogDetails from './components/DogDetails';
import pawImage from './assets/paw.jpg';
import backgroundImage from './assets/background.jpg';

// https://api.jsonbin.io/v3/b/650bf228bb1aab22f2c6018d
//MasterKey $2a$10$Q.jHslDi5J3WWkt5MGrvoezfIBCJlg5bANY6tMh7MYGWgQRRMzfh2
//jsonbin123!



// theoretiktska jag lägga in data om det skulle uppdateras men det gör den ju inte
function App() {

  const WELCOME = 'welcome', ALLDOGS = 'allDogs', DOGDETAILS = 'dogDetails';

  let content = null;
  const [currentScreen, setCurrentScreen] = useState(WELCOME)

  switch(currentScreen){

    case WELCOME :
      content = <Welcome pawImage={pawImage} backgroundImage ={backgroundImage} />
      break;
      
    case ALLDOGS:
      content = <AllDogs/>
      break;
    case WELCOME :
      content = <DogDetails/>
      break;

      default:
        content = <Welcome pawImage={pawImage} />




  }


 const[data, setData] = useState(null);

const apiURL = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683"

const fetchData = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("hej");

    const dogData = await response.json();
    setData(dogData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  console.log({data});
};

  useEffect(() => {

  fetchData();
  }, [])


  return (
   
      <div>
     {content}
        

       
      </div>
    
  )
}

export default App
