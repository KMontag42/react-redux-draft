#App.draft = App.cable.subscriptions.create "DraftChannel",
#  connected: ->
#    # Called when the subscription is ready for use on the server
#    @join()
#
#  disconnected: ->
#    @leave()
#
#  rejected: ->
#    # something
#
#  received: (data) ->
#    # Called when there's incoming data on the websocket for this channel
#    # if data.type == 'JOIN'
#      # something
#
#  join: ->
#    @perform 'join'
#
#  leave: ->
#    @perform 'leave'
#
#  start: ->
#    @perform 'start'
#
#  next_round: ->
#    @perform 'next_round'
#
#  make_pick: ->
#    @perform 'make_pick'
