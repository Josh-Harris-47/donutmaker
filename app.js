var donut = document.getElementsByClassName('donut')[0];
var donutinfo = document.getElementsByClassName('donutinfo')[0];
var donuttype = {
  dough: ['sour','regular','extra soft','super yummy','jelly',],
  glaze: ['powdered sugar','sugared','glazed'],
  toppings: ['sprinkles','bacon','cocunut','chocolate syrup']
}

var donutmaker = function(){
  donut.style.height = '20vh';
  donut.style.width = '20vw';
  donut.style.backgroundColor = 'brown';
  document.getElementsByClassName('hole')[0].style.display = "block";
  donut.insertAdjacentHTML('afterend', "Dough Type: "+donuttype.dough[Math.floor(Math.random() * donuttype.dough.length)]+"<br>")
  donut.insertAdjacentHTML('afterend', "Glaze Type: "+donuttype.glaze[Math.floor(Math.random() * donuttype.glaze.length)]+"<br>")
  donut.insertAdjacentHTML('afterend', "Toppings: "+donuttype.toppings[Math.floor(Math.random() * donuttype.toppings.length)]+"<br>")
}
console.log()
