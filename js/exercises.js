/*
selecting and traversing exercises
 
- get the third list item (hint: eq())
	var li3=$("li").eq(3);
- change its color to red:
	li3.css({'color' : 'red'});
- change the color of the rest of the list items to blue
	li3.nextAll().css({'color' : 'blue'});
- *without doing another selection*, find the div.module
and remove the class module
	$(".without.doing.another.selection")("div").removeClass();
	$("div").removeClass();
 
- get the h1
	$("h1");
- store its text in a variable (hint: text())
	var cim = $("h1").text();
- use the stored text as the text for the first
list item
	$("li:first").text(cim);
bonus points:
- change the background color of *every other*
table row (hint: use :odd or :even)
	$("table tr:even").css({'background-color' : 'lightgray'});
*/


/* 
manipulation exercises
 
- add five new list items to the end of the unordered list (hint: for (i=0; i<5; i++) { ... } )

$("#myList").function () {
	var this = $(this);
	for (var i=1; i<6; i++) {
		this.append("<li>List item new " + i + "</li>");
	}
};
- remove the odd list items (hint: .remove())
- add another h2 and another paragraph to div.module
- add a new div.module to the page after the existing one; put a copy of the existing unordered list inside it.
 
*/
 
 
/*
 
first: create a .js file in the js directory. include it in the index.html file at the bottom of the file, after jQuery is included
 
animation exercise: slideshow
 
- use index.html
- move ul#hero to the top of the page, above the h1
- cycle through the list items in ul#hero: fade one in, display it for a few seconds, then fade it out and fade in the next one
- bonus: create a nav item under the slideshow showing how many images there are and which image you're on (2 of 3, e.g.)
 
 
animation exercise: reveal
 
- use index.html; working with div#blog (you may want to add a couple of headline/excerpt items to the div)
- write css to initially hide #blog p (you can just do this in the head)
- make it so that clicking on a headline in div#blog slides down the excerpt
- make it so that clicking on another headline slides down its excerpt, and slides up any currently showing excerpt
 
*/
 
 
/*
 
first: create a .js file in the js directory. include it in the menu.html file at the bottom of the file, after jQuery is included
 
ajax exercise: menu
- use menu.html; working with ul#menus
- create a container div where you'll put an html response (up to you where this goes; you may want to make one for the lunch section, one for the dinner section, etc.)
- bind an event to #menus a
- this event will need to get the "hash" portion of the URL of the clicked <a> (hint: get the href attribute, then .split('#'), then use the second element of the resulting array (myUrl.split('#')[1]) )
- use the hash to build a URL for the ajax request: html/stirfry.html, for example
- send an ajax request to the URL
- use the response of the request to populate the container div you created
 
ajax exercise: specials
- use index.html; working with div#specials
- append a div after the form; this will be where you put information about the special once you receive it
- write code so that changing the choice in the select menu sends an ajax request
- the ajax request should point to json/specials.json
- the ajax request should expect to receive json back from the server
- use the json response you receive to add some elements to the div
- you may want to look at json/specials.json to see the format of the data you'll receive
 
*/
/* 
var $label = $("label").text();
$("input.input_text").val($label);
$("input.input_text").addClass("hint");
$("label").remove();
$("input.input_text").bind("focus", function() {
	$(this).removeClass("hint");
    $(this).val("");
});
$("input.input_text").bind("blur", function() {
	if ($(this).val()=="") {
		$(this).addClass("hint");
   		$(this).val($label);	
}
});



$("div").hide();
$("div").first().before("<ul></ul>");
$("h2").each(function(){
	$("ul").first().append("<li>" + $(this).text() + "</li>");
});

*/