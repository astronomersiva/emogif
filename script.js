$(document).ready(function(){
    var x = new AutoSuggestControl("emotion");        
});
$('#emotionSearch').keypress(function(event) { 

    //Stop page reload on pressing Enter
      
 
	if (event.keyCode == 13) {
    	var emotionText = $('#emotion').val();
        var tag = encodeURI(emotionText);
        var apiEndpoint = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag;
        console.log(apiEndpoint);
        //get gif from giphy
        $.get(apiEndpoint, function(json) {
            $('#gif').attr('src', json["data"]["image_url"]);
            $('#gif-url').html(json["data"]["image_url"]);
            //copy to clipboard
            var urlToCopy = $('#gif-url').html();
            if (urlToCopy != "") {
                var copyDiv = document.getElementById('gif-url');
                copyDiv.style.opacity = 0;
                copyDiv.contentEditable = true;
                copyDiv.focus();
                document.execCommand('SelectAll');
                document.execCommand("Copy", false, null);
            };
        });    
	}
    return event.keyCode != 13;
});