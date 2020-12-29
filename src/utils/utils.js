export default function Generate() {
  const weatherEntires = [];
  const arrlength = 27;
  
  for (let i = 0; i < arrlength; i++) {
    weatherEntires.push({
      id: `${i}`,
      Temperature: ((Math.random() * arrlength) - 20).toFixed(2),
      DataPoint: ((Math.random() * arrlength) - 10).toFixed(2),
      Wind: (Math.random() * 116).toFixed(2),
      Pressure: (Math.random() * 6).toFixed(2),
    });
  }
  return weatherEntires;
}
