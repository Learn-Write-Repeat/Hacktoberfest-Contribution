var quotes = [
    {
        quote: 'Whether you think you can or whether you think you can\'t, you\'re right!',
        author: "Henry Ford"
    },
    {
        quote: 'Don\'t wait for your ship to come in, swim out to it',
        author: "Unknown",
        unknown: true
    },
    {   
        quote: "The world has the habit of making room for the man whose actions show that he knows where he is going",
        author: "Napoleon Hill"
    },

    {
        quote: "Innovation distinguishes between a leader and a follower",
        author: "Steve Jobs"
    },

    {
        quote: "The future is now. It's time to grow up and be strong. Tomorrow may well be too late",
        author: "Neil LaBute"
    },

    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        author: "Bernard M. Baruch"
    },

    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "H. Jackson Brown Jr."
    },

    {
        quote: "You only live once, but if you do it right, once is enough",
        author: "Mae West"
    },

    {
        quote: "In three words I can sum up everything I've learned about life: it goes on",
        author: "Robert Frost"
    }                 

    ];    

var displayedQuote;
var currentIdx;

function updateQuote() {
    do {
      var idx = Math.floor(Math.random() * quotes.length);
    } while(currentIdx === idx);
    
    displayedQuote = quotes[idx];
    
    currentIdx = idx;
    $('#quote').html(quotes[idx].quote);
    $('#author').html(quotes[idx].author);
}

// Share quote to Twitter
function shareTweet() {
    var quoteToTweet = quotes[currentIdx].quote; 
    // encodeURI = untuk encode hasil query, contoh: Hello World = Hello%20World
    if(quoteToTweet.length > 100) {  //Untuk membatasi tweet <= 100 char
        quoteToTweet = quoteToTweet.substr(0, 100).match(/(^.+)\s/)[1] + "...";
    }

    quoteToTweet = encodeURI("\"" +quoteToTweet+ "\"");
    window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + "&hashtags=FreeCodeCamp");
}

$(function(){
    updateQuote();
    $('#twitter').click(shareTweet);
    $('#generator').click(updateQuote);
});

var colors = ["#60B494", "#60AAB4", "#6080B4", "#6A60B4", "#9460B4", "#B460AA"];

var changeColor;
var currentIdc;

document.getElementById('generator').addEventListener('click', updateColor);

function updateColor() {
    do {
        var idc=Math.floor(Math.random() * colors.length);
    } while (currentIdc === idc);

    changeColor = colors[idc];

    currentIdc = idc;
    document.getElementById('color').style.backgroundColor = colors[idc];
}