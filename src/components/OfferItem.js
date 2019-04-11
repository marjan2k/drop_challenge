import React, { memo } from 'react'

const OfferTypeParsed = memo(({ type }) => {
  switch (type) {
    case 'onetime':
      return 'One Time'

    case 'ongoing':
      return 'Ongoing'

    default:
      return 'Drop'
  }
})

const favoriteClickHandler = (index, actionDispatcher) => () => actionDispatcher && actionDispatcher(index)

const brandClickHandler = (brand, totalPointsForBrand) => () => alert(`Total points collected for ${brand}: ${totalPointsForBrand}`)

const OfferItem = memo(({ brand, amount, type, index, markOfferFavorite, favorite, totalPointsForBrand }) => (
  <div
    className="line-item"
    style={{ border: favorite ? '3px solid #0de47f' : null }}
  >

    <p style={{ marginTop: 0 }}>
      <b><OfferTypeParsed type={type} /></b> Offer
    </p>

    <hr style={{ marginBottom: 30 }} />

    <p className="offer-text" onClick={brandClickHandler(brand, totalPointsForBrand)}>
      {brand}
    </p>

    <hr style={{ marginTop: 30 }} />

    <p className="cost">
      {amount} per $1
    </p>
    {
      favorite
        ? (
          <p style={{ marginTop: 10, color: '#e53935' }}>
            Favorite &#10084;
          </p>
        )
        : (
          <p style={{ marginTop: 10, cursor: 'pointer' }} onClick={favoriteClickHandler(index, markOfferFavorite)}>
            Mark as favorite &#10084;
          </p>
        )
    }
  </div>
))

export default OfferItem
