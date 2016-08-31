class AddBetterDefaultToDraftState < ActiveRecord::Migration[5.0]
  def change
    change_column_default :drafts, :state, {
      connectedUsers: [],
      participatingUsers: [],
        draft: {
        currentRound: 1,
        roundTime: 0,
        roundPickOrder: [],
        currentPick: 0
      },
      picks: []
    }
  end
end
