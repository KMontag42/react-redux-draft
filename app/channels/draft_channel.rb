# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class DraftChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'draft_channel'
  end

  def unsubscribed
    # current_user.leave
  end

  def join
    ActionCable.server.broadcast 'draft_channel', { type: 'JOIN', data: current_user }
  end

  def leave
  end

  def start
  end

  def next_round
  end

  def make_pick
  end
end
