var url = "https://api.chucknorris.io/jokes/random?category="

module.exports.function = function getByCategoryJoke (category) {
  
  var result = http.getUrl(url + category, {format:"json"})
  
  console.log("result:", result)
    
  return [{ "joke_icon_url": result.icon_url,
          "joke_id":result.id,
          "joke_url": result.url,
          "joke_value": result.value} ]
}
