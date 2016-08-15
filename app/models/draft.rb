class Draft < ApplicationRecord

  def users
    state['participatingUsers']
  end

  def picks
    state['picks']
  end

  def picks_for_round(round)
    state['picks'].select {|x| x['round'] == round}
  end

end
