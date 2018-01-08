// import $ from 'jquery';
// import whatInput from 'what-input';

// window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import Countdown from './countdown';

// $(document).foundation();

let deadline = new Date('2018-02-15T00:00:00+01:00');
new Countdown('countdown', deadline);
