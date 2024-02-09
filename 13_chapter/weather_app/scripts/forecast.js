const key = "SjnCAzIxpusUNQF5z0NGiUdUIayGLBZe";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

getCity("golden")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));