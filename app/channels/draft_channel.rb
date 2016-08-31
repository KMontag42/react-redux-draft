# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class DraftChannel < ApplicationCable::Channel
  def subscribed
    stream_for current_user
  end

  def unsubscribed
    # current_user.leave
  end

  def join
    DraftChannel.broadcast_to(current_user, { type: 'JOIN', data: current_user })
  end

  def leave
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
