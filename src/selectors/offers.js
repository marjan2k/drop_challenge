import { createSelector } from 'reselect'

const getOffers = (state) => state.offers

const getFavoriteOffer = createSelector(
  [getOffers],
  (offers) => (offers.find(offer => offer.favorite)),
)

export default {
  getFavoriteOffer,
}
