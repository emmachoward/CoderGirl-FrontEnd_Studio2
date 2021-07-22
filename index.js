function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      return response.json()
    }) 
    .then(function(data) {
      renderBios(data);
    })
}

//Function should return a component displaying an astronaut's bio
function AstronautBios(astronaut) {

  return (
    <div className='astronaut'>
      <div className='bio'>
        <h3>{astronaut.firstName} {astronaut.lastName}</h3>
        <ul>
          <li>Hours in Space: {astronaut.hoursInSpace}</li>
          <li>Active: {astronaut.active.toString()}</li>
          <li>Skills: {astronaut.skills.join(", ")}</li>
        </ul>
      </div>
      <img className='avatar' src={astronaut.picture} />

    </div>
  )
}

// Function should render all astronaut bios
function renderBios(data) {

  let astronautArray = [];
  
  const root = document.getElementById('root');
  const container = 
    <div className='container'>
      {astronautArray}
    </div>

    for (let i = 0; i < data.length; i++) {
      
      astronautArray.push(AstronautBios(data[i]));
    }

     // <div className='container'>
    //   for (let i = 0; i < data.length; i++) {
    //     {AstronautBios(data[i])}
    //   }
    // </div>
    // <div className='container'>
    //   {AstronautBios(data.map(function(name, index){return name, index;}))}
    // </div>
        //I know this way isn't right, but I can't figure out how where to put the loop where it doens't break react.
    //     <div className='container'>
      
    //     {AstronautBios(data[0])}
    //     {AstronautBios(data[1])}
    //     {AstronautBios(data[3])}
    //     {AstronautBios(data[4])}
    //     {AstronautBios(data[5])}
    //     {AstronautBios(data[6])}

    // </div>
  
  ReactDOM.render( container, root );
  //The AstronautBios component should be repeated to display bios for all 
  //astronaunts in the returned data object.

  //Then attach t the 'root' div!
}



getData();


