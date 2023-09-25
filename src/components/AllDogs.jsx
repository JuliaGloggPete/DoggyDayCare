import { useEffect } from "react";
import './AllDogs.css';

const AllDogs = (props) => {

    const dogArray = props.dogs;
    console.log(dogArray);

    useEffect(() => {

        createDog(dogArray);
        }, [])

    
    const createDog = (dogs) =>{

        const dogsSection = document.getElementById('allDogs') 

        dogs.forEach(dog => {

            const dogElement = createDogElements(dog);
            dogsSection.appendChild(dogElement);
        });
      
      
      }

      const createDogElements = (dog) =>{

        const dogElement = document.createElement('div');
        dogElement.className ='dog';

        const dogHeading = document.createElement('h2');
        dogHeading.innerHTML = `${dog.name} ${"\u{1F436}"}`;
        const dogDescription = document.createElement('ul');
        const dogSex = document.createElement('li')
        if(dog.sex === "female"){
        dogSex.innerText = `Tik`;}
        else{
            //dogSex.innerText = `Kön: hane ${dog.sex}`;}
      
            dogSex.innerText = `Hane`;}
      
        ;

        dogDescription.appendChild(dogSex);
        const dogBreed = document.createElement('li')
        dogBreed.innerText = dog.breed; 
        dogDescription.appendChild(dogBreed);
       const dogPicContainer = document.createElement('div');
       dogPicContainer.className='dogPic';
       
       

        const dogPic = document.createElement('img')
        dogPic.src = dog.img;
        dogPic.alt = dog.name;
        if (dogPic.height > dogPic.width){
            dogPic.className = 'dogWidth'
        }
        
        else{
            dogPic.className = 'dogHeight'
        }
        dogPicContainer.appendChild(dogPic)

    


        dogElement.appendChild(dogHeading);

        dogElement.appendChild(dogDescription);
    
        dogElement.appendChild(dogPicContainer);
     
        return dogElement;


      }


console.log({dogArray});
    return (
        <section id="allDogs">
           <div className="h3Dog"> <h3> Våra hundar</h3></div>
        </section>
    )
}

export default AllDogs;