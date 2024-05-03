for (property in statistics) {
  if (property.substring(0, 1) == "r") { 
    console.log(object[property]);
  }
  if (object[property] % 2 == 1) {
    console.log(object[property]);
  }
}
