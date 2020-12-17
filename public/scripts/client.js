const createTweetElement = function(tweetObject) {
  
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
    
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
            ${escape(tweetObject.content.text)}
        </p>
        <span class="borderline"></span>
        <footer class="feedfooter">
          <span class="dateofpost">${new Date(tweetObject.created_at)}</span>
          <div class="reposts">
            <i class="fas fa-flag blue"></i>
            <i class="fas fa-retweet blue"></i>
            <i class="fas fa-heart blue" ></i>
          </div>
        </footer>
      </section>`);

  return $tweet;
};

const renderTweets = function(tweets) {
  for (let indtweet of tweets) {
    $('.tweets-container').prepend(createTweetElement(indtweet));
  }
};

$(document).ready(function() {

  const loadTweets = function() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/tweets'
    })
      .then((result) => {
        renderTweets(result);
      });
  };

  loadTweets();

  $("#input-form").on('submit', function(event) {

    event.preventDefault();

    const inputbox = $(this).serialize();

    if ($('#tweet-text').val().length > 140) {
      $('.error-message').css("display", "block");
      $('.error-message').text("Too much tweeting, bring it under 140 characters");

      return;
    }
    if ($('#tweet-text').val().length === 0) {
      $('.error-message').css("display", "block");
      $('.error-message').text("Nothing to tweet about? Please tweet about something");
      return;
    }
    $('.error-message').css("display", "none");
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/tweets',
      data: inputbox,
      success: function() {
        loadTweets();
        $('#input-form')[0].reset();
      }
    });
  });
});