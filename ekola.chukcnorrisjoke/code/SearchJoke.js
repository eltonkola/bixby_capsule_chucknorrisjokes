var url = "https://api.chucknorris.io/jokes/search?query="


module.exports.function = function searchJoke (term) {
  
  var result = http.getUrl(url + term, {format:"json"})
    
  var index = Math.floor(Math.random() * result.total);
  var joke = result.result[index]
  
  return [{ "joke_icon_url": joke.icon_url,
          "joke_id": joke.id,
          "joke_url": joke.url,
          "joke_value": joke.value} ]
}
