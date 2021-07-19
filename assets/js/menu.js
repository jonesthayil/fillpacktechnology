var urlpath = window.location.pathname
$(document).ready(function () {
	$('li.dairylink').each(function () {
		if ($(this).data("url") == urlpath) {
			$(this).addClass("current")
		}
	});
});
