class HelloWorldController < ApplicationController
  def index
  end

  def draft
    d = Draft.all.first
    @hello_world_props = d.state.merge({clientUser: current_user.as_json, contestants: d.contestants.as_json})
  end
end
