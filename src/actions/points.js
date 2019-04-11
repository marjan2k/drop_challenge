import pointsActionTypes from '../actionTypes/points'

const addPoint = point => ({
  type: pointsActionTypes.ADD_NEW_POINT,
  point,
})

const redeemPoint = pointAmount => ({
  type: pointsActionTypes.ADD_NEW_POINT,
  point: {
    brand: 'Point Redeemed',
    amount: -pointAmount,
    date: new Date(),
    id: new Date().getTime(),
  },
})

export default {
  addPoint,
  redeemPoint,
}
