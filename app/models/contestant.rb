class Contestant < ApplicationRecord
  belongs_to :draft

  validates :draft_id, presence: true
end
