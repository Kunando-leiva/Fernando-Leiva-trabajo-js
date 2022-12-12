const api ={
    key: "09500779c6807b3d45df5b30ba22fe14" ,
    url: "https://api.openweathermap.org/data/2.5/weather" ,
}

  const card = document.getElementById("tarjeta")
  
  const city = document.getElementById("ciudad");
  const date = document.getElementById("fecha");
  const tempImg = document.getElementById("temp-img");
  const temp = document.getElementById("temp");
  const weather = document.getElementById("clima");
  const range = document.getElementById("rango");
  
  function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = "./img/Clima/temp-mid.png";
    if (temp > 26) {
      src = "img/Clima/temp-high.png";
    } else if (temp < 20) {
      src = "img/Clima/temp-low.png";
    }
    tempImg.src = src;
  }
  
  async function search(query) {
    try {
      const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
      const data = await response.json();
      tarjeta.style.display = "block";
      ciudad.innerHTML = `${data.name}, ${data.sys.country}`;
      fecha.innerHTML = (new Date()).toLocaleDateString();
      temp.innerHTML = `${toCelsius(data.main.temp)}c`;
      clima.innerHTML = data.weather[0].description;
      rango.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
      updateImages(data);
    } catch (err) {
      console.log(err);
      alert("Hubo un error");
    }
  }
  
  function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }
  
  function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
  }
  
  const searchform = document.getElementById("busqueda-form");
  const searchbox = document.getElementById("busquedabox");
  searchform.addEventListener("submit", onSubmit, true);