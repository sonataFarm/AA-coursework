json.partial! 'party', party: @party
json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts do |gift|
    json.title gift.title
  end
end
