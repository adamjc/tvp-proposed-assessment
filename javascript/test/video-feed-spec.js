const expect = require('chai').expect
const nock = require('nock')
const request = require('supertest')

const app = require('../app.js').app
const videoMeta = require('./mock/video-meta.json')

const baseUrl = 'http://localhost:3000'

describe('/get-all-meta', (done) => {
  it('returns the entire list in video-meta.json', (done) => {
    var scope = nock('http://www.example.com')
      .get('/video-meta')
      .reply(200, JSON.stringify(videoMeta))

    request(app)
      .get('/get-all-meta')
      .then(function (res) {
        expect(JSON.parse(res.text)).to.deep.equal(videoMeta)
        done()
      }).catch(e => console.log(e))
  })
})
