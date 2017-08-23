class UserController < ActionController::Base

  def index
    urls = ShortenedUrl.all.reduce('') do |str, url|
      str << "#{url.long_url}: #{url.short_url}<br>"
    end
    render :html => urls
  end
end
