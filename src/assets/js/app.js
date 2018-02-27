// import $ from 'jquery';
// import whatInput from 'what-input';

// window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// $(document).foundation();

import Countdown from './countdown';

let deadline = new Date('2018-03-01T00:00:00+01:00');
let remaningTime = Date.parse(deadline) - Date.parse(new Date());

if (remaningTime > 0) {
  document.getElementById('pre-registration').style.display = 'block';
  new Countdown('countdown', deadline);
} else {
  document.getElementById('registration').style.display = 'block';;
}