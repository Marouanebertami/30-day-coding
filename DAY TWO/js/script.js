var working = false;
$('.login').on('submit', function(e) {
	e.preventDefault();
	if (working) return;
  	working = true;
  	var $this = $(this);
  	$this.addClass('loading');
	//alert('ok');
});