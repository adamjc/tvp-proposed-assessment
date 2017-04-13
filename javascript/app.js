const express = require('express')
const app = express()
const request = require('request-promise-native')

const data = require('./test/mock/video-meta.json')

app.get('/get-all-meta', (req, res) => {
  request('http://www.example.com/video-meta').then(body => {
    res.send(body)
  }).catch(e => console.log(e))
})

function start () {
  app.listen(3000, function () {
    console.log('App running...')
  })
}

module.exports = {
  app,
  start
}
