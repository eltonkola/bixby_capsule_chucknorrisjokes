var url = "https://api.chucknorris.io/jokes/random"


module.exports.function = function findRandomJoke () {
  
  var result = http.getUrl(url, {format:"json"})
    
  return [{ "joke_icon_url": result.icon_url,
          "joke_id":result.id,
          "joke_url": result.url,
          "joke_value": result.value} ]
}
