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
    if d.round_pick_order.length == 0 && d.connected_users.select {|x| x['id'] == current_user.id}.length == 0
      d.connected_users = d.connected_users.push(current_user).uniq
      d.save!
    end
    ActionCable.server.broadcast 'draft_channel', { type: 'JOIN', data: d.as_json }
  end

  def leave
    d = Draft.all.first
    d.connected_users.delete(current_user)
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

  def make_pick
    d = Draft.all.first
    if d.current_pick+1 >= d.round_pick_order.length
      next_round
    else
      d.picks = d.picks.push({userId: d.current_user['username'], contestantId: 1, round: d.current_round, order: d.picks.length})
      d.current_pick += 1
      d.save!
      ActionCable.server.broadcast 'draft_channel', { type: 'PICK', data: d.as_json }
    end
  end
end
