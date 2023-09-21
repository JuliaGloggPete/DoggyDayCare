import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// https://api.jsonbin.io/v3/b/650bf228bb1aab22f2c6018d
//MasterKey $2a$10$Q.jHslDi5J3WWkt5MGrvoezfIBCJlg5bANY6tMh7MYGWgQRRMzfh2
//jsonbin123!



// theoretiktska jag lägga in data om det skulle uppdateras men det gör den ju inte
function App() {
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
        <button>till hunderna</button>
        <p>Varför</p>

        

       
      </div>
    
  )
}

export default App
