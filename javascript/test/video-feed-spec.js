const expect = require('chai').expect
const nock = require('nock')
const fetch = require('node-fetch')
const videoMeta = require('./mock/video-meta.json')

const baseUrl = 'http://localhost:8080'

describe('/get-all-meta', () => {
  before(function() {
    // Start server
  });

  it('returns the entire list in video-meta.json', (done) => {
    var scope = nock('http://www.example.com')
    .get('/video-meta')
    .reply(200, 'path matched');

    fetch(`${baseUrl}/get-all-meta`).then(res => {
      expect(res).to.deep.equal(videoMeta)
      done()
    }).catch(e => console.log(e))
  })
})
