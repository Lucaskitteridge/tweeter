/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function(tweetObject) {
    
  const $tweet = $(`<section class="tweet-container">
        <header class="header">
          <span class= "namehandle">
            <div class="nameandimage">
              <img src=${tweetObject.user.avatars}>
              <span class="realname">${tweetObject.user.name}</span> 
            </div>
            <span class="handle">${tweetObject.user.handle}</span>
          </span>
        </header>
        <p class="actualtweet">
            ${tweetObject.content.text}
        </p>
        <span class="borderline"></span>
        <footer class="feedfooter">
          <span class="dateofpost">${tweetObject.created_at}</span>
          <div class="reposts">
            <i class="fas fa-flag blue"></i>
            <i class="fas fa-retweet blue"></i>
            <i class="fas fa-heart blue" ></i>
          </div>
        </footer>
      </section>`)

  return $tweet
}

const renderTweets = function(tweets) {
  // loops through tweets
  for(let indtweet of tweets) {
    $('.tweets-container').prepend(createTweetElement(indtweet))
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

$(document).ready(function() {
  renderTweets(data)
})

