$(document).ready(function(){

$("#btn").on("click", function() {
  $.ajaxSetup({ cache: false });
  $("#quote").css("background", "#2196F3");
  $.getJSON(
    "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    function(data) {
      $("#quote").append(data[0].content + "<p>— " + data[0].title + "</p>");
      
        
    }
  );
});
});
