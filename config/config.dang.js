/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-AssistantMk2",
			position: "top_right",
			config: {
				useWelcomeMessage: "weather today",
				record: { // Full values are in `FOR EXPERTS` section.
					recordProgram: "rec",  // Defaults to "arecord" - also supports "rec" and "sox"
					threshold: 0
				},

				play: { // Full values are in `FOR EXPERTS` section.
					playProgram: "afplay", // recommended.
				},
			},
		},
		{
			module: "MMM-Hotword",
			position: "bottom_right",
			config: {
				chimeOnFinish:null,
				mic: {
					recordProgram : "rec",
				},
				models: [
					{
						hotwords    : "smart_mirror",
						file        : "smart_mirror.umdl",
						sensitivity : "0.5",
					},
				],
				defaultCommand: {
					notificationExec: {
						notification: "ASSISTANT_ACTIVATE",
						payload: (detected, afterRecord) => {
							return {profile:"default"}
						}
					},
					afterRecordLimit:0,
					restart:false,
				},
			},
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
