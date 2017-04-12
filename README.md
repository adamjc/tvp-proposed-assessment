# Proposal For New TVP Assessment

## Problem

Many candidates get stuck in the current game of life assessment where they have to implement a function that generates the next state of the game. This scenario is quite a jump from the previous four (they are simple if/else conditionals).

This is a problem because of the following reasons:

- At this point in the exercise we have not really challenged the candidate
- We do not get a look into how they would approach the 'actual' scenarios algorithmically (we have to ask them this at the end of the assessment, and we only get 5 minutes for this section)
- It is not an accurate representation of the work we currently do in TVP.

## Proposal

A new test, that uses a pre-made boiler-plate webserver (e.g. Express/Spring Boot/Rails/Flask). We will ask the candidate to implement a web server that ingests some data, performs some operations on said data and returns it.

We can make this non-trivial, in such a way that the candidate should have to write down what they think will solve the problem (on a sheet of paper), or say to their pair, and then implement the solution.

These notes the candidate makes will have the advantage of giving us more evidence to assess the candidate in the Wash Up session.

# Proposed Implementation

**Work in Progress**

```
// video-meta.json
[{
  title: a,
  duration: 100,
  categories: ['comedy', 'thriller'],
  related: ['c']
}, {
  title: b,
  duration: 90,
  categories: ['action'],
  related: ['a', 'c']
}, {
  title: c,
  duration: 86,
  categories: ['comedy', 'action'],
  related: ['b']
}]
```

```
// video-ids.json
[{
  title: a,
  videoId: "1f88f3",
}, {
  title: b,
  videoId: "a98378",
}, {
  title: c,
  videoId: "eaef6c"
}]
```

### Example Given
- Given a video service
- When I go to /get-all-meta
- I get a list of all the meta data available

`api: /get-all-meta => [{title: a, duration: 90, ...}, ...]`

* We can use this as a sample answer to give the candidate an example of what is expected of them

### Scenario 1
- Given a video service
- When I go to /get-meta/a
- I get the meta data for item a

`api: /get-meta/a => {title :a, duration: 90, ...}`

*This should be a simple question to ease the candidate in*

### Scenario 2
- Given a video service
- When I go to /get-mean-duration
- I should receive the mean duration of all videos

`api: /get-mean-duration => 92`

*Did they use reduce?*

### Scenario 3
- Given a video service
- When I go to /get-all-categories
- I should receive a list of all of the categories available

`api: /get-all-categories => ['comedy', 'thriller', 'action']`

*Did they use map?*

### Scenario 4
- Given a video service
- When I go to /get-categories?categories=comedy,action
- I should get a list of all videos that satisfy all categories

`api: /get-categories?categories=comedy,action => [{title: c}]`

*A slightly more complicated query, get all films that satisfy both categories*

### Scenario 5
- Given a video service
- When I go to /get-related?related=a,c
- I should get a list of videos that are related to all video ids in the query

`api: /get-related?related=a,c => [{title: b}]`

*A slightly more complicated query, get all films that are related to both a and c*

### Scenario 6
- Given a video service
- When I go to /get-video/a
- And the video id is available in both feeds
- I should receive all information relating to video a, from both the video-meta and video-ids feed

`api: /get-video/a => [{title: a, duration: 100, videoId: "1f88f3", categories: ['action']}]`

*Combining two json feeds together, more complicated query.*

### Scenario 7
- Given a video service
- When I go to /get-all-videos
- I should receive a list of all information for all videos available in both the video-meta and video-ids feed

`api: /get-all-videos => [{title: a, videoId: "1f88f3", duration: 100}, ...]`

*Same as above, but for all videos*
