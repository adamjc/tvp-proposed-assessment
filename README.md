# Proposal For New TVP Assessment

## Problem

Many candidates get stuck in the current game of life assessment where they have to implement a function that generates the next state of the game. This scenario is quite a jump from the previous four (if/else conditionals), which do not test the candidates problem solving capabilities.

It is also not an accurate representation of the work we currently do in TVP.

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
`/get-all-meta => [{title: a, duration: 90, ...}, ...]`
* We can use this as a sample answer to give the candidate an example of what is expected of them

### Scenario 1
`/get-meta/a => {title :a, duration: 90, ...}`
* Simple question to ease the candidate in

### Scenario 2
`/get-mean-duration => 92`
* Did they use reduce?

### Scenario 3
`/get-all-categories => ['comedy', 'thriller', 'action']`
* Did they use map?

### Scenario 4
`/get-categories?categories=comedy,action => [{title: c}]`
* A slightly more complicated query, get all films that satisfy both categories

### Scenario 5
`/get-related?related=a,c => [{title: b}]`
* A slightly more complicated query, get all films that are related to both a and c

### Scenario 6
`/get-video/a => [{title: a, duration: 100, videoId: "1f88f3", categories: ['action']}]`
* Combining two json feeds together, more complicated query.

### Scenario 7
`/get-all-videos => [{title: a, videoId: "1f88f3", duration: 100}, ...]`
* Same as above, but for all videos
