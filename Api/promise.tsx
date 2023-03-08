fetch("http://localhost:3000/s")
  .then((response) => response.json())
  .then((data) => console.log(data));