# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class DraftChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'draft_channel'
  end

  def unsubscribed
    leave
  end

  def join
    d = Draft.all.first
    d.connected_users = d.connected_users.push(current_user).uniq { |x| x['id'] }
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'JOIN', data: d.as_json }
  end

  def leave
    d = Draft.all.first
    d.connected_users = d.connected_users.delete_if { |x| x['id'] == current_user.id}
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'LEAVE', data: d.as_json }
  end

  def start
    d = Draft.all.first
    if d.round_pick_order.length == 0
      d.participating_users = d.connected_users
      d.participating_users.shuffle!
      d.round_pick_order = d.participating_users
      d.save!
    end
    ActionCable.server.broadcast 'draft_channel', { type: 'START_DRAFT', data: d.as_json }
  end

  def next_round
    d = Draft.all.first
    d.current_round = d.current_round + 1
    d.round_pick_order = d.round_pick_order.reverse
    d.current_pick = 0
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'NEXT_ROUND', data: d.as_json }
  end

  def make_pick(data)
    u = Contestant.find(data['contestantId'])
    d = Draft.all.first
    dingus = d.current_round.to_s # cast should make it its own variable ?
    d.picks = d.picks.push({userId: d.current_user['username'], contestantId: u.name, round: dingus.to_i, order: d.picks.length})
    d.current_pick += 1
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'PICK', data: d.as_json }
  end
end
