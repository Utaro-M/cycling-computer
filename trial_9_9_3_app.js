/*
てんぷれ
参考
https://app.codegrid.net/entry/2018-web-api-1
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURI

const request = axios.create({
  baseURL: 'https://api.github.com'
})

request.get('/users/Utaro-M') // ***部分を自分のアカウント名に置き換える
  .then(res => res.data)
  .then(console.log)
*/

/*札幌のデータを取得できた*/
const request=axios.create({
  baseURL: 'http://overpass-api.de/api'
})

var uri='interpreter?data=[out:json];node(50.746,7.154,50.748,7.157);out body;'
var encoded = encodeURI(uri);
console.log(encoded)
//console.log(request.get(encoded))
request.get(encoded)
.then(res=>res.data)
.then(console.log)
