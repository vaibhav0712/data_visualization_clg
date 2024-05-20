//* SIMPLE D3 EXAMPLE
// sampleData = [1, 2, 3];
// d3.select("div")
//   .selectAll("p")
//   .data(sampleData)
//   .enter()
//   .append("p")
//   .text((d) => d * 10);

//* BAR CHART EXAMPLE

DUMMY_DATA = [
  { id: 'd1', value: 35, region: 'India' },
  { id: 'd2', value: 30, region: 'USA' },
  { id: 'd3', value: 25, region: 'China' },
  { id: 'd4', value: 40, region: 'Germany' },
];

xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((data) => data.region))
  .rangeRound([0, 550])
  .padding(0.1);
yScale = d3.scaleLinear().domain([0, 45]).range([550, 0]);

container = d3
  .select('svg')
  .classed('container', true)
  .style('border', '3px solid black');

t = d3.transition().duration(2000).ease(d3.easeLinear);

bars = container
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .style('width', xScale.bandwidth())
  .style('height', (dta) => 550 - yScale(dta.value))
  .attr('x', (dta) => xScale(dta.region))
  .attr('y', (dta) => yScale(dta.value - 10)); // experiment with value for animation effect

const animation = () => {
  bars.transition(t).style('fill', 'orange');
};
animation();

// bars.transition(t).attr("y", (dta) => yScale(dta.value));

// interactive buttions

const colors = ['red', 'green', 'cyan', 'yellow', 'white', ' black'];

// d3.selcet("#buttons")
//   .selectAll("button")
//   .data(colors)
//   .enter()
//   .append("button")
//   .text((d) => d);

d3.select('div')
  .selectAll('button')
  .data(colors)
  .enter()
  .append('button')
  .classed('button', true)
  .text((d) => d)
  .style('background-color', (d) => `${d}`)
  .on('click', (event, d) => {
    d3.select('body').style('background-color', d);
  });

// different ways to load data in d3
// localfile
// manualy
// through api

d3.json('https://dummyjson.com/products/1').then((data) => {
  console.log(data);
});

data1 = [1, 2, 4];
data2 = [2, 3, 4];
data3 = d3.merge([data1, data2]);
console.log(data3);

// adding play button
d3.select('#play')
  .selectAll('button')
  .data([1])
  .enter()
  .append('button')
  .classed('button', true)
  .text('play')
  .on('click', (event) => {
    console.log('Hello');
  });

// animation rect
var xNew = 0;
svgAni = d3
  .select('#ani')
  .attr('width', '500')
  .attr('height', '500')
  .style('border', '1px solid black');

rect = svgAni
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 100)
  .attr('height', 100)
  .style('fill', 'red');

circle = svgAni
  .append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 50)
  .style('fill', 'blue');

const cir_ani = () => {
  circle
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr('cy', 400)
    .style('fill', 'blue')
    .transition()
    .duration(1000)
    .attr('cx', 400)
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr('cy', 100)
    .style('fill', 'red')
    .transition()
    .duration(1000)
    .attr('cx', 100)
    .on('end', cir_ani);
};

const ani = () => {
  rect
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr('x', 400)
    .style('fill', 'blue')
    .transition()
    .duration(1000)
    .attr('y', 400)
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr('x', 0)
    .style('fill', 'red')
    .transition()
    .duration(1000)
    .attr('y', 0)
    .on('end', ani);
};

// ani();
// cir_ani();
