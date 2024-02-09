//this file is for DOM manipulation and event handling
//kind of like a controller file
const cityForm = document.querySelector('form');

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { 
    cityDetails, 
    weather
  };
  //above notation will set the key the same as the value
};

cityForm.addEventListener('submit', e => {
  //prevent default action
  e.preventDefault();
  // get city value
  const city = cityForm.city.value.trim();

  //reset form
  cityForm.reset();

  //update UI with new city
  updateCity(city).then(data => console.log(data))
  .catch(err => console.log(err));
});