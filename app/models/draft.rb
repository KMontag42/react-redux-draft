class Draft < ApplicationRecord

  has_many :contestants

  def default_state
    self.state = {"connectedUsers"=>[], "participatingUsers"=>[], "draft"=>{"currentRound"=>1, "roundTime"=>0, "roundPickOrder"=>[], "currentPick"=>0}, "picks"=>[]}
    save!
  end

  def connected_users
    state.dig('connectedUsers')
  end

  def connected_users=(val)
    state['connectedUsers'] = val
  end

  def participating_users
    # this is the pick order as well
    state.dig('participatingUsers')
  end

  def participating_users=(val)
    state['participatingUsers'] = val
  end

  def picks
    state['picks']
  end

  def picks=(val)
    state['picks'] = val
  end

  def current_pick
    state.dig('draft', 'currentPick')
  end

  def current_pick=(val)
    state['draft']['currentPick'] = val
  end

  def round_pick_order
    state.dig('draft', 'roundPickOrder')
  end

  def round_pick_order=(val)
    state['draft']['roundPickOrder'] = val
  end

  def picks_for_round(round)
    state['picks'].select {|x| x['round'] == round}
  end

  def current_round
    state.dig('draft', 'currentRound')
  end

  def current_round=(val)
    state['draft']['currentRound'] = val
  end

  def current_user
    p round_pick_order
    p current_pick
    round_pick_order[current_pick]
  end

end
