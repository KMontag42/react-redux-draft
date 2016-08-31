class HelloWorldController < ApplicationController
  def index
    d = Draft.all.first
    @hello_world_props = d.state
  end
end
