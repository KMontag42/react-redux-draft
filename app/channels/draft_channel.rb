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
  end

  def next_round
    DraftChannel.broadcast_to(current_user, { type: 'NEXT_ROUND' })
  end

  def make_pick
    DraftChannel.broadcast_to(current_user, { type: 'PICK', data: {userId: 1, contestantId: 1, round: 1} })
  end
end
