import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import pointsActions from '../actions/points'
import pointsSelector from '../selectors/points'
import PointBalance from '../components/PointBalance'
import routes from '../constants/routeNames'
import logo from '../images/logo-green.png'
import randomPointGenerator from '../utility/randomPointGenerator'


@withRouter
@connect(state => ({
  points: state.points,
  totalPoints: pointsSelector.getTotalPoints(state),
}), {
  addPoint: pointsActions.addPoint,
})
export default class Application extends PureComponent {
  componentDidMount() {
    const { addPoint } = this.props
    setInterval(() => addPoint(randomPointGenerator()), 2000)
  }

  pathMatches = (tabPathname) => {
    const { location: { pathname } } = this.props
    return pathname === tabPathname
  }

  render() {
    const { totalPoints } = this.props
    return (
      <div>
        <div className="top-bar">

          <img height={40} src={logo} alt='drop' />

          <a href={`#/${routes.POINTS}`} style={{ textDecoration: 'none' }}>
            <PointBalance amount={totalPoints} />
          </a>

          <nav>
            <a href={`#/${routes.POINTS}`}
               style={{ color: this.pathMatches(`/${routes.POINTS}`) ? '#0de47f' : null }}
            >
              Points
            </a>
            <a href={`#/${routes.OFFERS}`}
               style={{ color: this.pathMatches(`/${routes.OFFERS}`) ? '#0de47f' : null }}
            >
              Offers
            </a>
            <a href={`#/${routes.REWARDS}`}
               style={{ color: this.pathMatches(`/${routes.REWARDS}`) ? '#0de47f' : null }}
            >
              Rewards
            </a>
          </nav>

        </div>

        {this.props.children}
      </div>
    )
  }
}
