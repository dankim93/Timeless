require 'rails_helper'

RSpec.describe User, type: :model do
  describe User do
    it { should validate_presence_of(:username) }
    it "validates uniqueness of username" do
      User.new(:password_digest => 'whatever', :username => 'something').save!(:validate => false)
      should validate_uniqueness_of :username
    end
    # it { should ensure_inclusion_of(:username).in_array(["Cavaliers", "Suns", "Mavericks"])}
  end

  describe "associations" do
    it { should have_many(:photos)}
    it { should have_many(:albums)}
    it { should have_many(:comments)}
  end

  describe 'validations' do
    before(:each) do
      User.create!(username: 'test', password: 'password')
    end
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
  end
end
