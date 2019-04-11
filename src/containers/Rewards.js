import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RewardItem from '../components/RewardItem'
import pointsSelector from '../selectors/points'
import pointActions from '../actions/points'
import rewardsActions from '../actions/rewards'

@connect(state => ({
  rewards: state.rewards,
  totalPoints: pointsSelector.getTotalPoints(state),
}), (dispatch => ({
  redeemReward: (pointAmount, index) => {
    dispatch(pointActions.redeemPoint(pointAmount))
    dispatch(rewardsActions.redeemRewardItem(index))
  },
})))
export default class Rewards extends PureComponent {
  render() {
    const { totalPoints, rewards, redeemReward } = this.props
    return (
      <div className="container">
        <ul>
          {rewards.map((reward, index) => (
            <RewardItem
              key={`reward-${index}-${reward.cost}-${reward.brand}`}
              index={index}
              cost={reward.cost}
              brand={reward.brand}
              totalPoints={totalPoints}
              redeemReward={redeemReward}
              redeemed={reward.redeemed}
            />
          ))}
        </ul>
      </div>
    )
  }
}
