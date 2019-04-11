import React, { Fragment, memo } from 'react'
import accounting from 'accounting'
import ProgressBar from '../components/ProgressBar'


const redeemHandler = (redeemed, progress, cost, brand, index, redeemRewardAction) => () => {
  if (!redeemed) {
    if (progress === 100) {
      redeemRewardAction(cost, index)
      alert(
        `Congratulations for redeeming ${cost} points on ${brand}.
Keep earning more points to redeem more!`,
      )
    } else {
      alert('You need to collect more points before you can reedeem.')
    }
  }
}

const RewardItem = memo(({ cost, brand, totalPoints, index, redeemReward, redeemed }) => {
  const progress = (totalPoints >= cost)
    ? 100
    : Math.floor((totalPoints / cost) * 100)


  return (
    <div
      className="line-item"
      onClick={redeemHandler(redeemed, progress, cost, brand, index, redeemReward)}
    >
      <p style={{ marginTop: 0 }}>
        Reward
      </p>

      <hr style={{ marginBottom: 30 }} />

      <p style={{ fontSize: 20 }}>
        Get a $10 gift card at <b>{brand}</b>
      </p>

      {redeemed
        ? (
          <p style={{ color: '#0de47f', fontWeight: 'bold', fontSize: 18 }}>
            Redeemed
          </p>
        ) : (
          <Fragment>

            <ProgressBar progress={progress} />

            <p>
              {progress}% earned
            </p>

          </Fragment>
        )
      }

      <hr style={{ marginTop: 30 }} />

      <p style={{ marginBottom: 0 }} className="cost">
        This reward costs {accounting.formatNumber(cost)} pts
      </p>
    </div>
  )
})

export default RewardItem
