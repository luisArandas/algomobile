{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 7,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"rect" : [ 260.0, 182.0, 720.0, 558.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-68",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 483.0, 365.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-67",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 682.0, 580.0, 50.5, 22.0 ],
					"saved_object_attributes" : 					{
						"embed" : 0
					}
,
					"style" : "",
					"text" : "coll"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-66",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "dictionary", "", "", "" ],
					"patching_rect" : [ 416.0, 511.0, 50.5, 22.0 ],
					"saved_object_attributes" : 					{
						"embed" : 0,
						"parameter_enable" : 0
					}
,
					"style" : "",
					"text" : "dict"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-65",
					"linecount" : 145,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 216.0, 552.0, 434.0, 1952.0 ],
					"style" : "",
					"text" : "\"<!DOCTYPE html>\n\n<head>\n  <meta charset=\\\"utf-8\\\">\n  <title>Algo Mobile</title>\n  <script src=\\\"../javascripts/dropzone.js\\\"></script>\n  <link rel=\\\"stylesheet\\\" href=\\\"/stylesheets/style.css\\\" />\n  <link rel=\\\"stylesheet\\\" href=\\\"/stylesheets/dropzone.css\\\" />\n  <link rel=\\\"stylesheet\\\" href=\\\"/stylesheets/dropzone_edit.css\\\" />\n</head>\n\n<body>\n  <div class=\\\"entranceDiv\\\" id=\\\"entranceDiv\\\">okok\n    <button type=\\\"button\\\" onClick=\\\"nextPage()\\\">getContent</button>\n\n    <button onclick=\\\"document.getElementById('id01').style.display='block'\\\" style=\\\"width:auto;\\\">Login</button>\n    <div id=\\\"id01\\\" class=\\\"modal\\\">\n      <form class=\\\"modal-content animate\\\" action=\\\"/action_page.php\\\">\n        <div class=\\\"container\\\" style=\\\"background-color:#101010\\\">\n        </div>\n        <div class=\\\"imgcontainer\\\">\n          <!--<img src=\\\"img/avatar.png\\\" id=\\\"img\\\" alt=\\\"Avatar\\\" class=\\\"avatar\\\">-->\n          <img class=\\\"imge\\\" id=\\\"img\\\" alt=\\\"Avatar\\\" class=\\\"avatar\\\">\n\n        </div>\n\n        <div class=\\\"container\\\">\n          <label for=\\\"uname\\\"><b>Username</b></label>\n          <input type=\\\"text\\\" placeholder=\\\"Enter Username\\\" name=\\\"uname\\\" required>\n\n          <label for=\\\"psw\\\"><b>Password</b></label>\n          <input type=\\\"password\\\" placeholder=\\\"Enter Password\\\" name=\\\"psw\\\" required>\n\n          <button type=\\\"submit\\\">Login</button>\n          <label>\n            <input type=\\\"checkbox\\\" checked=\\\"checked\\\" name=\\\"remember\\\"> Remember me\n          </label>\n        </div>\n\n        <div class=\\\"container\\\" style=\\\"background-color:#101010\\\">\n        </div>\n      </form>\n    </div>\n  </div>\n\n\n\n  <div class=\\\"bodyPlace\\\" id=\\\"bodyPlace\\\">\n    <div class=\\\"imageupload\\\" id=\\\"imageupload\\\"><br><br><em>Image Uploader</em>\n    </div>\n    <br>\n    <div class=\\\"myId\\\" id=\\\"imageupload\\\">\n      <form id=\\\"myId\\\" class=\\\"dropzone\\\" enctype=\\\"multipart/form-data\\\">\n        <span class=\\\"glyphicon glyphicon-download\\\"></span><br />\n      </form>\n    </div>\n    <div class=\\\"mobileorient\\\" id=\\\"mobileorient\\\"><em>Mobile Orientation\n        <div class=\\\"orientationalpha\\\" id=\\\"orientationalpha\\\">Orientation Alpha</div>\n        <div class=\\\"orientationbeta\\\" id=\\\"orientationbeta\\\">Orientation Beta</div>\n        <div class=\\\"orientationgamma\\\" id=\\\"orientationgamma\\\">Orientation Gamma</div>\n        <div class=\\\"orientationabs\\\" id=\\\"orientationabs\\\">Orientation ABS</div>\n\n        <div class=\\\"x\\\" id=\\\"x\\\">Motion_acc_x</div>\n        <div class=\\\"y\\\" id=\\\"y\\\">Motion_acc_y</div>\n        <div class=\\\"z\\\" id=\\\"z\\\">Motion_acc_z</div>\n        <div class=\\\"zz\\\" id=\\\"zz\\\">Event Rotation XYZ</div>\n        <button id=\\\"send\\\">Send Message OSC</button>\n    </div>\n\n    <div class=\\\"content\\\">\n      <section class=\\\"demo\\\">\n        <span>\n          User connected to\n          <div id=\\\"loggedIn\\\">\n            <h2>No platform</h2>\n            <br><br><br>\n          </div>\n        </span>\n      </section>\n    </div>\n\n    <br>\n\n    <div class=\\\"battery\\\" id=\\\"battery\\\">\n      <div id=\\\"charging\\\">(charging state unknown)</div>\n      <div id=\\\"level\\\">(battery level unknown)</div>\n      <div id=\\\"dischargingTime\\\">(discharging time unknown)</div>\n    </div>\n\n    <!--\n  The form for writing\n    <form action=\\\"/action_page.php\\\">\n      experiment:<br>\n      <input type=\\\"text\\\" name=\\\"firstname\\\">\n      <br>\n      <input type=\\\"submit\\\" onclick=\\\"submit()\\\">\n    </form> -->\n  </div>\n\n\n  <script src=\\\"https://cdn.socket.io/socket.io-1.4.5.js\\\"></script>\n  <script src=\\\"../javascripts/osc.min.js\\\"></script>\n  <script src=\\\"../javascripts/upload.js\\\"></script>\n  <script>\n    var isFirstLoggedIn = true;\n\n    function displayResult(network, loggedIn) {\n      var id = loggedIn ? 'loggedIn' : 'notLoggedIn';\n      var favicon = faviconUri(network);\n      var url = network.domain + network.redirect;\n      var el = '<a target=\\\"_blank\\\" href=\\\"' + url + '\\\" target=\\\"_blank\\\" class=network><img src=' + favicon + '><span>' + network.name + '</span></a>';\n      if (loggedIn && isFirstLoggedIn) {\n        isFirstLoggedIn = false;\n        document.getElementById(id).innerHTML = el;\n      } else {\n        document.getElementById(id).innerHTML += el;\n      }\n    }\n    leakSocialMediaAccounts(displayResult);\n\n    function faviconUri(network) {\n      var favicon = network.domain + '/favicon.ico';\n      if (network.name === 'Dropbox') {\n        favicon = 'https://www.dropbox.com/static/images/favicon.ico';\n      }\n      if (network.name === 'Youtube') {\n        favicon = 'https://www.youtube.com/favicon.ico';\n      }\n      if (network.name === 'Gmail') {\n        favicon = 'https://mail.google.com/favicon.ico';\n      }\n      return favicon;\n    }\n  </script>\n</body>\""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-63",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 616.0, 358.0, 109.0, 22.0 ],
					"style" : "",
					"text" : "getpeopledataTwo"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 607.0, 432.0, 150.0, 47.0 ],
					"style" : "",
					"text" : "write in a div my vars and print here. do same to everyone"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-60",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 541.0, 404.0, 87.0, 22.0 ],
					"style" : "",
					"text" : "getpeopledata"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-58",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 541.0, 457.0, 57.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "algo.js",
						"parameter_enable" : 0
					}
,
					"style" : "",
					"text" : "js algo.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-44",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 524.0, 163.0, 82.0, 22.0 ],
					"style" : "",
					"text" : "maxmessage"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-42",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "dictionary", "" ],
					"patching_rect" : [ 577.0, 296.0, 47.0, 22.0 ],
					"style" : "",
					"text" : "maxurl"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-40",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 202.0, 66.0, 207.0, 22.0 ],
					"style" : "",
					"text" : "url https://algomobile.herokuapp.com"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-38",
					"linecount" : 3,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 121.0, 394.0, 154.0, 49.0 ],
					"style" : "",
					"text" : "url https://algomobile.herokuapp.com/"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 1.0, 1.0, 1.0, 1.0 ],
					"id" : "obj-36",
					"maxclass" : "jweb",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 107.0, 112.0, 320.0, 240.0 ],
					"rendermode" : 0,
					"url" : "https://algomobile.herokuapp.com/"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-35",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 7,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"rect" : [ 59.0, 104.0, 640.0, 480.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-6",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 78.0, 265.0, 135.0, 22.0 ],
									"style" : "",
									"text" : "0.511097"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 194.0, 229.0, 108.0, 22.0 ],
									"style" : "",
									"text" : "route /test/random"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 59.5, 200.0, 182.0, 22.0 ],
									"style" : "",
									"text" : "/test/random 0.511097"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 169.0, 156.0, 99.0, 22.0 ],
									"style" : "",
									"text" : "udpreceive 9129"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 1 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-6", 1 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-4", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 107.0, 68.0, 41.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"style" : "",
						"tags" : ""
					}
,
					"style" : "",
					"text" : "p udp"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-36", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-36", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-65", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-63", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-68", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "algo.js",
				"bootpath" : "~/Desktop/GitHub/akson/external",
				"patcherrelativepath" : "../akson/external",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"embedsnapshot" : 0
	}

}
