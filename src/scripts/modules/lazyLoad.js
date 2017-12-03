
define(['jquery', 'intersectionObserver', 'modernizr'], function($) {
	

	if ('IntersectionObserver' in window &&
			'IntersectionObserverEntry' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
			!('isIntersecting' in IntersectionObserverEntry.prototype)) {

			Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
				get: function () {
					return this.intersectionRatio > 0
				}
			})
	}

	var webp = false;

	if($('html').hasClass('webp')) webp = true;

	const imgElements = [ ...document.querySelectorAll( '.lazyload' ) ];

	var observer = new IntersectionObserver( onChange, {
		threshold: [ 0.0 ],
	});

	function onChange( changes ) {

		changes.forEach( change => {

			if ( change.isIntersecting ) {

				change.target.classList.add( 'visible' );
				if(!webp)
					change.target.src = change.target.dataset.src;
				else
					change.target.src = change.target.dataset.webp;

				observer.unobserve( change.target );
			}
		});
	}


	const createObserver = function () {

		imgElements.forEach( img => {

			observer.observe( img );
		});
	};


	window.addEventListener("load", () => {
		createObserver();
	}, false);
	return {
		init: function() {
			createObserver();
		}
	}
})