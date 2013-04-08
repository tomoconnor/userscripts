// ==UserScript==
// @name           Dethatcherator
// @description    Filters Facebook feed items based on regex for thatcher-death-related stuff
// @description    Stolen from something else here http://userscripts.org/scripts/review/151967
// @comment		   Original by Smalltalk80, http://userscripts.org/scripts/show/70439
// @include        *.facebook.com/*
// @author         devopstom
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js
// @version 1.18
// ==/UserScript==

var patterns = {
		"thatcher" : /\b[tT]hatcher/,
		"maggie": /\b[mM]ag(gie|gs)/,
		"hitler" : /\b[hH]itler\b/,
		"witch" : /\b[wW]itch\w+is\w+[dD]ead\b/,
		"ironlady": /\b[iI]ron.+[lL]ady\b/,

		"dingdong": /\b[dD]ing.+[dD]ong\b/
		
	};

function repeat() {
	$(".uiStreamPassive").each(function() {
			var str = $(this).html();
			for (var key in patterns) {
				if (patterns[key] == "") {
					continue;
				}
				if (patterns[key].test(str)) {
					$(this).parents(".uiStreamStory").hide();
					break;
				}
			}
		});
		// Content in posted text
		$(".uiStreamMessage").each(function() {
			var str = $(this).html();
			for (var key in patterns) {
				if (patterns[key] == "") {
					continue;
				}
				if (patterns[key].test(str)) {
					$(this).parents(".uiStreamStory").hide();
					break;
				}
			}
		});

		//Attached stuff 
		$(".uiStreamAttachments").each(function() {
			var str = $(this).html();
			for (var key in patterns) {
				if (patterns[key] == "") {
					continue;
				}
				if (patterns[key].test(str)) {
					$(this).parents(".uiStreamStory").hide();
					break;
				}
			}
		});
		//Comments
		$(".UFICommentContent").each(function() {
			var str = $(this).html();
			for (var key in patterns) {
				if (patterns[key] == "") {
					continue;
				}
				if (patterns[key].test(str)) {
					$(this).parents(".UFIComment").hide();
					break;
				}
			}
		});

		


	setTimeout(repeat, 5000);
}

$(document).ready(function() {
	repeat();
});
