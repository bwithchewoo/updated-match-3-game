class User < ApplicationRecord
  has_many :boards
  has_many :pieces, through: :boards
  has_many :user_achievements
  has_many :achievements, through: :user_achievements
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id"
  has_many :inverse_friends, through: :inverse_friendships, source: :user


  has_secure_password

  def achievements_count
    self.achievements.count
  end

  def achievements_list
    self.achievements.map do |achievement|
      achievement.achievement_name
    end
  end

  validates :username, presence: true, uniqueness: true
end
