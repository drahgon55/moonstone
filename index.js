'use strict';

// Many moonstone controls require ilib components but do not directly require the base module which
// is necessary to include the locale assets.
import 'enyo-ilib';

import platform from 'enyo/src/platform.js';
import dispatcher from 'enyo/src/dispatcher.js';
import gesture from 'enyo/src/gesture/gesture.js';

import options from './src/options.js';

options.version = '2.7.0';

// Override the default holdpulse config to account for greater delays between keydown and keyup
// events in Moonstone with certain input devices.
gesture.drag.configureHoldPulse({
	events: [{name: 'hold', time: 400}],
	endHold: 'onLeave'
});

/**
* Registers key mappings for webOS-specific device keys related to media control.
*
* @private
*/
if (platform.webos >= 4) {
	// Table of default keyCode mappings for webOS device
	dispatcher.registerKeyMap({
		415 : 'play',
		413 : 'stop',
		19  : 'pause',
		412 : 'rewind',
		417 : 'fastforward',
		461 : 'back'
	});
}

// ensure that these are registered
import './src/resolution.js';
import './src/fonts.js';

export const version = '2.7.0';
export default options;
