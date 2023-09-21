

const Welcome = (props) => {
    const sectionStyle = {
        backgroundImage: `url(${props.backgroundImage})`, // Provide the image URL as a string
    };


    return (
        <section id='welcome_section' style={sectionStyle } >
            
            <h2>Hunddagis tuggben</h2>
            
            <div class="circle"> <img src={props.pawImage} alt="Paw" /> </div>
            <div> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sit, consectetur in reiciendis quos dolorum placeat ut at iure error facere? Veniam ea suscipit nihil fugit nesciunt, aliquam delectus iste.</p>
            <button >Ja!</button>
            </div>
        </section>
    )
}

export default Welcome;