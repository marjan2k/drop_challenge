const randomNumberGenerator = (lowerLimit, upperLimit) => (
  Math.floor((Math.random() * (upperLimit - lowerLimit)) + lowerLimit)
)

const brands = ['Amazon', 'Tim Hortons', 'Starbucks', 'Metro']

export default () => ({
  brand: brands[randomNumberGenerator(0, brands.length - 1)],
  amount: randomNumberGenerator(50, 2000),
  date: new Date(),
  id: randomNumberGenerator(0, 999999),
})
