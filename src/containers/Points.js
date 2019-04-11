import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import pointsSelector from '../selectors/points'
import PointItem from '../components/PointItem'

@connect(state => ({
  points: pointsSelector.getSortedPointsByDate(state),
}))
export default class Points extends PureComponent {
  render() {
    return (
      <div className="container">
        <ul>
          {this.props.points.map((points, index) =>
            <PointItem
              key={`point-${index}`}
              amount={points.amount}
              brand={points.brand}
              date={points.date}
            />,
          )}
        </ul>
      </div>
    )
  }
}
