class Draft < ApplicationRecord

  def connected_users
    state.dig('connectedUsers')
  end

  def connected_users=(val)
    state['connectedUsers'] = val
  end

  def users
    state.dig('participatingUsers')
  end

  def picks
    state['picks']
  end

  def picks_for_round(round)
    state['picks'].select {|x| x['round'] == round}
  end

end
