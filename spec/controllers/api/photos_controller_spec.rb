require 'rails_helper'

RSpec.describe Api::PhotosController, type: :controller do
  # describe 'GET #show' do
  #   let! (:user) { FactoryGirl.create(:user)}
  #   let! (:photo) { FactoryGirl.create(:photo) }
  #   before(:each) do
  #     get :show, { id: photo.id, format: :json }
  #   end
  #
  #   it { should render_template(:show) }
  #   it { should respond_with(200) }
  # end
  describe "POST #create" do

  context "with invalid params" do
      before(:each) do

        post :create, photo: { image_url: "url" }, format: :json
      end
      it { should respond_with(422) }

      it 'does not create the link' do
        expect(Photo.exists?).to be false
      end
    end

    context "with valid params" do
      before(:each) do

        post :create, photo: {image_url: 'url', title: 'test', description: 'testing', user_id: 1}
      end
      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the photo' do
        expect(Photo.exists?).to be true
      end
    end
  end
end
