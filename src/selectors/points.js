import { createSelector } from 'reselect'

const getPoints = (state) => state.points

const getSortedPointsByDate = createSelector(
  [getPoints],
  (points) => {
    return points.slice().sort((a, b) => {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date)
    })
  },
)

const getTotalPoints = createSelector(
  [getPoints],
  (points) => points.reduce((acc, point) => acc + point.amount, 0),
)

const getTotalPointsByBrand = createSelector(
  [getPoints],
  (points) => {
    const pointsByBrand = {}
    points.forEach(point => {
      if (pointsByBrand[point.brand]) {
        pointsByBrand[point.brand] = pointsByBrand[point.brand] + point.amount
      } else {
        pointsByBrand[point.brand] = point.amount
      }
    })
    return pointsByBrand
  },
)

export default {
  getSortedPointsByDate,
  getTotalPoints,
  getTotalPointsByBrand,
}
