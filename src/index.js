import WocViz from './WocViz';

/**
 * @summary
 * where all data is hardcoded
 */
import { data } from './data.js';

/**
 * @type {WocViz}
 * @param {object} data JSON or Object to use as Database
 * @param {number} width of the canvas
 * @param {number} height of the canvas
 * @param {boolean} autoRender whether or not to use internal loop to render the scene
 * @param {object} canvasContainer where to add the canvas dom element
 * @param {boolean} showDebug show debug UI
 * @param {boolean} forceCanvas whether to use the Canvas renderer instead of letting the system set whether to use WebGL or Canvas
 */
const app = new WocViz({
  data,
	width: window.innerWidth,
	height: window.innerHeight,
  autoRender: true,
  canvasContainer: document.body,
  showDebug: false,
  forceCanvas: false,
});

/**
 * @method update
 * if {boolean} autoRender set as false
 * you need to update the view manually inside a loop
 * using the following method
 */
// app.update().bind(app);

/**
 * @summary
 * add your event listeners here
 */
window.onresize = () => { app.onResize(window.innerWidth, window.innerHeight) };
window.onkeyup = app.onKeyUp.bind(app);
