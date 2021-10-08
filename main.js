// CHART 1 - LINECHART INFEKTIONSVERLAUF
new Chart(document.getElementById("chart1"), {
    type: 'bar',
    data: {
      labels: ["M", "J", "J", "A", "S", "O", "N", "D"],
      datasets: [
        {
          backgroundColor: ["rgb(250,0,0)", "rgb(250,0,0)","rgb(250,0,0)","rgb(250,0,0)", "rgb(250,0,0)", "rgb(250,0,0)","rgb(250,0,0)","rgb(250,0,0)"],
          data: [125,18,30,36,49,185,1489,2833]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Infektionsverlauf in Brandenburg'
      }
    }
});
// CHART 2 - BARCHART INFIZIERT NACH ALTER
new Chart(document.getElementById("chart2"), {
    type: 'bar',
    data: {
      labels: ["M", "J", "J", "A", "S", "O", "N", "D"],
      datasets: [
        {
          backgroundColor: ["rgb(250,0,0)", "rgb(250,0,0)","rgb(250,0,0)","rgb(250,0,0)", "rgb(250,0,0)", "rgb(250,0,0)","rgb(250,0,0)","rgb(250,0,0)"],
          data: [374,135,151,299,460,925,6689,7368]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Infektionsverlauf in Dtl. Mittelwert'
      }
    }
});
// CHART 3 - BARCHART VERSTORBEN NACH ALTER
new Chart(document.getElementById("chart3"), {
    type: 'bar',
    data: {
      labels: ["M", "J", "J", "A", "S", "O", "N", "D"],
      datasets: [
        {
          backgroundColor: ["rgb(250,0,0)", "rgb(250,0,0)","rgb(250,0,0)","rgb(250,0,0)", "rgb(250,0,0)", "rgb(250,0,0)","rgb(250,0,0)","rgb(250,0,0)"],
          data: [5980,2160,2422,4783,7352,14803,107030,117880]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Infektionsverlauf in Deutschland'
      }
    }
});
// UPCOUNTER
// https://jshakespeare.com/simple-count-up-number-animation-javascript-react/
// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );

// The animation function, which takes an Element
const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	// Start the animation running 60 times per second
	const counter = setInterval( () => {
		frame++;
		// Calculate our progress as a value between 0 and 1
		// Pass that value to our easing function to get our
		// progress on a curve
		const progress = easeOutQuad( frame / totalFrames );
		// Use the progress value to calculate the current count
		const currentCount = Math.round( countTo * progress );

		// If the current count has changed, update the element
		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		// If we’ve reached our last frame, stop the animation
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

// Run the animation on all elements with a class of ‘countup’
window.onload = function() {
	const countupEls = document.querySelectorAll( '#countup' );
	countupEls.forEach( animateCountUp );
};
