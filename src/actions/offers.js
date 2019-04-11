import offersActionTypes from '../actionTypes/offers'

const markOfferFavorite = offerIndex => ({
  type: offersActionTypes.MARK_OFFER_FAVORITE,
  offerIndex,
})

export default {
  markOfferFavorite,
}
