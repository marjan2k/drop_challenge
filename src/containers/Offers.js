import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import OfferItem from '../components/OfferItem'
import offerActions from '../actions/offers'
import offersSelector from '../selectors/offers'
import pointsSelector from '../selectors/points'


@connect(state => ({
  offers: state.offers,
  favoriteOffer: offersSelector.getFavoriteOffer(state),
  getTotalPointsByBrand: pointsSelector.getTotalPointsByBrand(state),
}), {
  markOfferFavorite: offerActions.markOfferFavorite,
})
export default class Offers extends PureComponent {
  render() {
    const { offers, favoriteOffer, markOfferFavorite, getTotalPointsByBrand } = this.props
    return (
      <div className="container">
        {favoriteOffer && (
          <ul>
            <OfferItem
              key={`offer-${favoriteOffer.favorite}-${favoriteOffer.amount}-${favoriteOffer.id}`}
              brand={favoriteOffer.brand}
              amount={favoriteOffer.amount}
              type={favoriteOffer.type}
              favorite
              totalPointsForBrand={getTotalPointsByBrand[favoriteOffer.brand]}
            />
          </ul>
        )}
        <ul>
          {offers.map((offer, index) =>
            <OfferItem
              key={`offer-${offer.amount}-${offer.id}`}
              index={index}
              brand={offer.brand}
              amount={offer.amount}
              type={offer.type}
              totalPointsForBrand={getTotalPointsByBrand[offer.brand]}
              markOfferFavorite={markOfferFavorite}
            />,
          )}
        </ul>
      </div>
    )
  }
}
