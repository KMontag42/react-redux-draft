class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { connectedUsers: [] }
  end
end
