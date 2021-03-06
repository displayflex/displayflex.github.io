'use strict';

(function () {
	var pictureTemplate = document.querySelector('#picture')
		.content
		.querySelector('.picture');

	var renderPicture = function (picture) {
		var pictureElement = pictureTemplate.cloneNode(true);

		pictureElement.querySelector('img').src = picture.url;
		pictureElement.querySelector('.picture__likes').textContent = picture.likes;
		pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

		return pictureElement;
	};

	window.preview = {
		render: renderPicture
	};
})();
