import rewardsActionTypes from '../actionTypes/rewards'

const redeemRewardItem = rewardIndex => ({
  type: rewardsActionTypes.REDEEM_REWARD_ITEM,
  rewardIndex,
})

export default {
  redeemRewardItem,
}
