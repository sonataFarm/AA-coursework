require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  before(:each) do
    let(:user) { User.save(email: 'Timothy Tester', password: '123456') }
  end

  describe '#is_password' do
    it 'verifies a password' do
      expect(user.is_password?('123456')).to eq(true)
      expect(user.is_password?('abcdef')).to eq(false)
    end
  end

  describe '#reset_session_token!' do
    it 'resets the session token' do
      old_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).not_to eq(old_token)
    end
  end

  describe '::find_by_credentials' do
    it 'finds a user by credentials' do
      expect User.find_by_credentials(user.email, user.password).to eq(user)
      expect User.find_by_credentials('nate.festinger@gmail.com', user.password).to be_nil
    end
end
