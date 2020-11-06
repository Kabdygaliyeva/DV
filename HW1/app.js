d3.selectAll("h4")
.transition()
.style("color","red")
.duration(5000);

const data1 = [
  {id:20, value:20, name:"Kaz"},
  {id:40, value:65, name:"Rus"},
  {id:70, value:50, name:"Kyr"},
  {id:150, value:55, name:"Ukr"},
  {id:127, value:46, name:"Blr"},
  {id:92, value:132, name:"Aze"},
  {id:105, value:44, name:"Kor"},
  {id:42, value:12, name:"Lat"},
  {id:105, value:96, name:"Tkm"},
  {id:33, value:49, name:"Mda"}
]

const data2 = [
  {id:76, value:76, name:"Bul"},
  {id:120, value:120, name:"Uzb"},
  {id:30, value:30, name:"Tur"},
  {id:82, value:82, name:"Cyp"},
]

const container = d3.select("svg")
.classed('container', true)
.attr('width', 200)
.attr('height', 200)
.style('background', '#f4f4f4')

const plot1 = container
   .selectAll("circle")
   .data(data1)
   .enter()
   .append("circle")
   .attr("cx", function(d) {return d.value})
   .attr("cy", function(d) {return d.id})
   .attr("r", function(d) {
     return Math.sqrt(d.value*d.value+d.id*d.id)/20
   })
   .attr("fill", function(d) {
     return "rgb("+d.value+","+d.id+",0)"
   })

d3.select("svg")
  .selectAll("text1")
  .data(data1).enter()
  .append("text")
  .attr("x", function(d) {return d.value+6})
  .attr("y", function(d) {return d.id+2})
  .text(function(d) {return d.name})
  .attr("font-size", "10px")

const plot2 = container
  .selectAll("rect")
  .data(data2)
  .enter()
  .append("rect")
  .attr("width", '6')
  .attr("height", '6')
  .attr('x', function(d) {return d.id+6})
  .attr('y', function(d) {return d.value+5})
  .attr("fill", function(d) {return "rgb("+d.value+5+","+d.id+25+",0)"})

d3.select("svg")
  .selectAll("text2")
  .data(data2).enter()
  .append("text")
  .attr("x", function(d) {return d.value+6})
  .attr("y", function(d) {return d.id+2})
  .text(function(d) {return d.name})
  .attr("font-size", "8px")
