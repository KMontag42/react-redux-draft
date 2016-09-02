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
    d.connected_users = d.connected_users.push(current_user)
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'JOIN', data: current_user }
  end

  def leave
    d = Draft.all.first
    d.connected_users.delete(current_user)
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'LEAVE', data: current_user }
  end

  def start
    d = Draft.all.first
    d.participating_users = d.connected_users
    d.participating_users.shuffle!
    d.round_pick_order = d.participating_users
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'START_DRAFT', data: d }
  end

  def next_round
    d = Draft.all.first
    d.round_pick_order = d.round_pick_order.reverse
    d.current_pick = 0
    d.save!
    DraftChannel.broadcast_to(current_user, { type: 'NEXT_ROUND', data: d })
  end

  def make_pick
    d = Draft.all.first
    d.picks = d.picks.push({userId: 1, contestantId: 1, round: 1, order: d.picks.length})
    d.current_pick += 1
    d.save!
    ActionCable.server.broadcast 'draft_channel', { type: 'PICK', data: {userId: 1, contestantId: 1, round: 1, order: d.picks.length-1} }
  end
end
