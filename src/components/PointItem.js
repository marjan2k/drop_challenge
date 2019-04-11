import React, { Fragment, memo } from 'react'
import accounting from 'accounting'

const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }


const DateFormat = memo(({ date }) => {
  return (
    new Date(date).toLocaleDateString('en-Us', dateOptions)
  )
})

const positiveAmount = amount => amount > 0

const PointItem = memo(({ amount, brand, date }) => (
  <div className="line-item">
    <p style={{ marginTop: 0 }}>
      {positiveAmount(amount)
        ? 'You earned points'
        : 'You redeemed points'
      }
    </p>

    <hr style={{ marginBottom: 30 }} />

    <p className="point-text" style={{ color: positiveAmount(amount) ? null : '#ffc200' }}>
      {accounting.formatNumber(Math.abs(amount))}
    </p>

    <p className="label">
      POINTS
    </p>

    <hr style={{ marginTop: 30 }} />

    <p style={{ marginBottom: 0 }}>
      {positiveAmount(amount) && (
        <Fragment>
          from <b>{brand} </b>
        </Fragment>
      )}
      on <b><DateFormat date={date} /></b>
    </p>
  </div>
))

export default PointItem
