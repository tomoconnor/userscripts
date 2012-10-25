// ==UserScript==
// @name       Guardian Comment Killer
// @namespace  https://github.com/tomoconnor/userscripts
// @version    0.1
// @description  A thing to remove Guardian Comments.  For Caspar. 
// @match      http://*guardian.co.uk/*
// @copyright  2012+, You
// ==/UserScript==
// class="eight-col discussion content-comment-list"

var jQuery = unsafeWindow.jQuery;
var commentsDiv = jQuery("div.discussion");
commentsDiv.empty();

