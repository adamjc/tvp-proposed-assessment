const expect = require('chai').expect
const request = require('request-promise-native')
const nock = require('nock')
const videoMeta = require('./mock/video-meta.json')
const app = require('../app.js')

const baseUrl = 'http://localhost:3000'

describe('/get-all-meta', () => {
  before(function() {
    app.start()
  })

  it('returns the entire list in video-meta.json', (done) => {
    var scope = nock('http://www.example.com')
      .get('/video-meta')
      .reply(200, videoMeta)

    request(`${baseUrl}/get-all-meta`)
      .then(function (res) {
        expect(JSON.parse(res)).to.deep.equal(videoMeta)
        done()
      }).catch(e => console.log(e))
  })
})
