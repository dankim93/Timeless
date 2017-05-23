require 'rails_helper'

RSpec.describe User, type: :model do
  # describe User do
  #   it { should validate_presence_of(:username) }
  #   it "validates uniqueness of username" do
  #     User.new(:password_digest => 'test', :username => 'testing').save!(:validate => false)
  #     should validate_uniqueness_of :username
  #   end
  # end
  let! (:user) { User.create!(username: 'guest', password: 'password')}

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
  end
  
  describe "associations" do
    it { should have_many(:photos)}
    it { should have_many(:albums)}
    it { should have_many(:comments)}
  end

  describe 'model_methods' do
    describe '.find_by_credentials' do
      context 'when given correct credentials' do
        it 'should find the right user' do
          correct = User.find_by_credentials('guest', 'password')
          expect(user).to eq(correct)
        end
      end

      context 'when given incorrect credentials' do
        it 'should return nil' do
          incorrect = User.find_by_credentials('guest', 'drowssap')
          expect(incorrect).to eq(nil)
        end
      end
    end
  end

  describe 'instance_methods' do
    describe '#reset_session_token!' do
      it 'resets the session token' do
        old_token = user.session_token
        new_token = user.reset_session_token!
        expect(old_token).not_to eq(new_token)
      end
    end
  end
end
