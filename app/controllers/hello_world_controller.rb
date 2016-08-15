class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { connectedUsers: [1,2,3,4,5] }
  end
end
