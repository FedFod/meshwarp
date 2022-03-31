{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 3,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 1232.0, 584.0, 896.0, 639.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 2,
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
		"subpatcher_template" : "Template_Grid",
		"showrootpatcherontab" : 0,
		"showontab" : 0,
		"helpsidebarclosed" : 1,
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1232.0, 610.0, 896.0, 613.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 2,
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
						"subpatcher_template" : "Template_Grid",
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-8",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 25.0, 41.0, 383.0, 34.0 ],
									"text" : "jit.gl.meshwarp supports texture output. \nIt will output the whole scene in which a jit.gl.meshwarp plane resides."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-6",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 66.0, 134.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 66.0, 165.0, 102.0, 22.0 ],
									"text" : "output_texture $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 66.0, 198.0, 90.0, 22.0 ],
									"text" : "s to_meshwarp"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-12",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 240.142860054969788, 134.0, 110.0, 22.0 ],
									"text" : "r from_meshwarp"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-32",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 240.142860054969788, 168.095228672027588, 143.0, 22.0 ],
									"text" : "routepass jit_gl_texture"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-31",
									"maxclass" : "jit.pwindow",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "jit_matrix", "" ],
									"patching_rect" : [ 240.142860054969788, 204.0, 244.857139945030212, 175.0 ],
									"sync" : 1
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-32", 0 ],
									"source" : [ "obj-12", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-31", 0 ],
									"source" : [ "obj-32", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 196.0, 85.0, 104.0, 22.0 ],
					"presentation_linecount" : 2,
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p \"texture output\""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 896.0, 613.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 2,
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
						"subpatcher_template" : "Template_Grid",
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-1",
									"linecount" : 19,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 36.574074268341064, 22.851852118968964, 549.0, 269.0 ],
									"presentation_linecount" : 23,
									"text" : "You can use masks to mask portions of the jit.gl.meshwarp plane.\n\nTo use Masks: \n\n1 - Enable \"mask_mode\" \n2 - Press \"shift\" and double click inside the plane.  \n3 - Click and drag with the mouse on the yellow dots to move masks vertices. \n4 - Press \"ctrl / cmd\" + drag the blue dot to move the mask around in the scene.\n5 - Press \"shift\" and double click on the edges of the masks to create new vertices.\n6 - Press \"shift\" and double click on a yellow dot to delete a mask vertex. \n7 - Press \"shift\" and double click on the blue dot to delete a whole mask.\n\n8 - Enable \"apply_mask\" to apply the mask to the plane.\n9 - You can invert the mask so it will only show what you masked with the \"invert_mask 1/0\" message.\n10 - Send the \"reset_mask\" message to reset all masks.\n11 - Disable \"mask_mode\" to go back editing the jit.gl.meshwarp mesh.\n\nDANGER\nUndo / Redo for masks not working at the moment."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-33",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 320.259252071380615, 313.928568184375763, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-23",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.259252071380615, 344.928568184375763, 97.0, 22.0 ],
									"text" : "invert_mask $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-20",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 193.111115992069244, 314.928568184375763, 25.0, 25.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-22",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 193.111115992069244, 344.928568184375763, 96.0, 22.0 ],
									"text" : "apply_mask $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-12",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 445.333330273628235, 344.928568184375763, 76.0, 22.0 ],
									"text" : "reset_mask"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-17",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 76.957679629325867, 314.928568184375763, 25.0, 25.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-18",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 76.957679629325867, 344.928568184375763, 97.0, 22.0 ],
									"text" : "mask_mode $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-19",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 129.629628658294678, 422.547611057758331, 97.0, 22.0 ],
									"text" : "s to_meshwarp"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-12", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-18", 0 ],
									"source" : [ "obj-17", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-18", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-22", 0 ],
									"source" : [ "obj-20", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-22", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-23", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-23", 0 ],
									"source" : [ "obj-33", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 326.0, 85.0, 89.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p \"mask mode\""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 128.0, 288.0, 172.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "helpstarter.js",
						"parameter_enable" : 0
					}
,
					"text" : "js helpstarter.js jit.gl.meshwarp"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 896.0, 613.0 ],
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
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-33",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 404.0, 425.928571462631226, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-23",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 404.0, 456.928571462631226, 97.0, 22.0 ],
									"text" : "invert_mask $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-16",
									"maxclass" : "jit.pwindow",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "jit_matrix", "" ],
									"patching_rect" : [ 36.5, 396.928571462631226, 198.0, 178.0 ],
									"sync" : 1
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 36.5, 338.0, 133.0, 22.0 ],
									"text" : "routepass jit_gl_texture"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-30",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 264.857139945030212, 413.928571462631226, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-26",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 264.857139945030212, 440.0, 110.0, 22.0 ],
									"text" : "output_texture $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-20",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 485.0, 350.928571462631226, 25.0, 25.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-11",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 485.0, 380.928571462631226, 96.0, 22.0 ],
									"text" : "apply_mask $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-7",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 379.857139945030212, 380.928571462631226, 76.0, 22.0 ],
									"text" : "reset_mask"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-17",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 265.0, 350.928571462631226, 25.0, 25.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-18",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 265.0, 380.928571462631226, 91.0, 22.0 ],
									"text" : "mask_mode $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 518.642860054969788, 241.119050145149231, 96.0, 22.0 ],
									"text" : "r to_meshwarpB"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 69.642860054969788, 241.119050145149231, 96.0, 22.0 ],
									"text" : "r to_meshwarpA"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-13",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 553.0, 121.0, 202.0, 34.0 ],
									"text" : "use layer to control the drawing order when shapes are unselected"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 469.5, 121.0, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 469.5, 145.0, 51.0, 22.0 ],
									"text" : "layer $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 265.0, 121.0, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-6",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 265.0, 145.0, 51.0, 22.0 ],
									"text" : "layer $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 200.0, 145.0, 35.0, 22.0 ],
									"text" : "reset"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 129.5, 145.0, 61.0, 22.0 ],
									"text" : "enable $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 36.5, 95.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 36.5, 145.0, 77.0, 22.0 ],
									"text" : "automatic $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-43",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 469.5, 285.666657209396362, 355.0, 22.0 ],
									"text" : "jit.gl.meshwarp @show_ui 1 @meshdim 5 4 @layer 3 @enable 0",
									"varname" : "jit.gl.meshwarp[2]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-41",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 36.5, 285.666657209396362, 355.0, 22.0 ],
									"text" : "jit.gl.meshwarp @show_ui 1 @meshdim 5 4 @layer 2 @enable 0",
									"varname" : "jit.gl.meshwarp[1]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-38",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "jit_gl_texture", "" ],
									"patching_rect" : [ 469.5, 193.619042873382568, 391.0, 22.0 ],
									"text" : "jit.movie @output_texture 1 @vol 0 @moviefile bball.mov @automatic 0"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-22",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "jit_gl_texture", "" ],
									"patching_rect" : [ 36.5, 193.619042873382568, 417.0, 22.0 ],
									"text" : "jit.movie @output_texture 1 @vol 0 @moviefile sunflower.mp4 @automatic 0"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-12",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 36.5, 27.0, 417.0, 34.0 ],
									"text" : "You can use multiple \"jit.gl.meshwarp\" objects at the same time.\nTo select one click on the shape in the rendering window using the mouse. "
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"midpoints" : [ 479.0, 180.0, 460.0, 180.0, 460.0, 219.0, 479.0, 219.0 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-14", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-16", 0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-18", 0 ],
									"source" : [ "obj-17", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-18", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-22", 0 ],
									"midpoints" : [ 46.0, 170.0, 46.0, 170.0 ],
									"order" : 1,
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-38", 0 ],
									"midpoints" : [ 46.0, 179.0, 479.0, 179.0 ],
									"order" : 0,
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-11", 0 ],
									"source" : [ "obj-20", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-22", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-23", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-26", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"midpoints" : [ 209.5, 180.0, 21.0, 180.0, 21.0, 222.0, 46.0, 222.0 ],
									"order" : 1,
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"midpoints" : [ 209.5, 180.0, 460.0, 180.0, 460.0, 219.0, 479.0, 219.0 ],
									"order" : 0,
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-26", 0 ],
									"source" : [ "obj-30", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-23", 0 ],
									"source" : [ "obj-33", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"source" : [ "obj-38", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 0 ],
									"order" : 1,
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"order" : 0,
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-41", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"midpoints" : [ 139.0, 179.0, 23.119046568870544, 179.0, 23.119046568870544, 221.0, 46.0, 221.0 ],
									"order" : 1,
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"midpoints" : [ 139.0, 179.0, 459.119046568870544, 179.0, 459.119046568870544, 221.0, 479.0, 221.0 ],
									"order" : 0,
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"midpoints" : [ 274.5, 180.0, 21.0, 180.0, 21.0, 222.0, 46.0, 222.0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-6", 0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-10", 0 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 421.0, 85.0, 133.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p \"multiple meshwarps\""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 896.0, 613.0 ],
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
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"bubble" : 1,
									"bubbleside" : 3,
									"bubbleusescolors" : 1,
									"id" : "obj-9",
									"linecount" : 4,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 670.0, 256.619042873382568, 207.0, 66.0 ],
									"text" : "An alternative approach is to use Snapshots to save and restore multiple meshwarp configurations for all the objects in your patch"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"linecount" : 3,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 236.642860054969788, 310.119042873382568, 349.0, 48.0 ],
									"text" : "Each json file describes a single jit.gl.meshwarp configuration. These messages referencing meshwarpA and meshwarpB are sent to the meshwarp objects in the \"multiple meshwarps\" tab"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-18",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 51.642860054969788, 371.619042873382568, 177.0, 22.0 ],
									"text" : "write Desktop:/meshwarpB.json"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-19",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 236.642860054969788, 371.619042873382568, 175.0, 22.0 ],
									"text" : "read Desktop:/meshwarpB.json"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-20",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 51.642860054969788, 426.119050145149231, 98.0, 22.0 ],
									"text" : "s to_meshwarpB"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-11",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 51.642860054969788, 265.619042873382568, 177.0, 22.0 ],
									"text" : "write Desktop:/meshwarpA.json"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-13",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 236.642860054969788, 265.619042873382568, 175.0, 22.0 ],
									"text" : "read Desktop:/meshwarpA.json"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 51.642860054969788, 316.119050145149231, 98.0, 22.0 ],
									"text" : "s to_meshwarpA"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-12",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 21.5, 27.0, 609.0, 34.0 ],
									"text" : "Save all the parameters of a jit.gl.meshwarp in a JSON file using the \"save\" message.\nLoad the JSON file in the jit.gl.meshwarp object with the \"read\" message to bring the object back the saved state."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 465.0, 122.619042873382568, 33.0, 22.0 ],
									"text" : "read"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-7",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 429.0, 122.619042873382568, 34.0, 22.0 ],
									"text" : "write"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 267.0, 100.619042873382568, 112.0, 20.0 ],
									"text" : "Read from Dekstop"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 70.0, 100.619042873382568, 95.0, 20.0 ],
									"text" : "Write to dekstop"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-6",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 51.642860054969788, 122.619042873382568, 169.0, 22.0 ],
									"text" : "write Desktop:/meshwarp.json"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 236.642860054969788, 122.619042873382568, 167.0, 22.0 ],
									"text" : "read Desktop:/meshwarp.json"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 51.642860054969788, 190.119050145149231, 90.0, 22.0 ],
									"text" : "s to_meshwarp"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-14", 0 ],
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-14", 0 ],
									"midpoints" : [ 246.142860054969788, 301.0, 61.142860054969788, 301.0 ],
									"source" : [ "obj-13", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 246.142860054969788, 177.0, 61.142860054969788, 177.0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-20", 0 ],
									"source" : [ "obj-18", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-20", 0 ],
									"midpoints" : [ 246.142860054969788, 411.0, 61.142860054969788, 411.0 ],
									"source" : [ "obj-19", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 438.5, 177.0, 61.142860054969788, 177.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 474.5, 177.0, 61.142860054969788, 177.0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 576.0, 85.0, 102.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p \"save and load\""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 896.0, 613.0 ],
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
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-15",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 713.0, 344.619035601615906, 150.0, 34.0 ],
									"text" : "when scaling, preserve original aspect ratio"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-13",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 280.0, 301.0, 150.0, 20.0 ],
									"text" : "mesh structure attributes "
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-12",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 657.0, 122.0, 67.0, 20.0 ],
									"text" : "mesh color"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 183.0, 113.0, 150.0, 20.0 ],
									"text" : "mesh transform attributes "
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-11",
									"maxclass" : "flonum",
									"maximum" : 1.0,
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 496.666666666666515, 350.119035601615906, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 496.666666666666515, 389.619042873382568, 75.0, 22.0 ],
									"text" : "curvature $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-6",
									"maxclass" : "number",
									"minimum" : 1,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 420.666666666666742, 350.119035601615906, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "number",
									"minimum" : 1,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 367.166666666666742, 350.119035601615906, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 313.666666666666742, 389.619042873382568, 126.0, 22.0 ],
									"text" : "pak nurbs_order 1 1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-57",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 678.5, 349.119035601615906, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-64",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 678.5, 389.619042873382568, 105.0, 22.0 ],
									"text" : "lock_to_aspect $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-25",
									"maxclass" : "number",
									"minimum" : 2,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 237.666666666666515, 353.619042873382568, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-23",
									"maxclass" : "number",
									"minimum" : 2,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 161.666666666666515, 353.619042873382568, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 85.666666666666515, 389.619042873382568, 171.0, 22.0 ],
									"text" : "pak meshdim 4 4"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-1",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 423.666666666666686, 154.85714316368103, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 423.666666666666686, 197.119050145149231, 62.0, 22.0 ],
									"text" : "rotatez $1"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-7",
									"maxclass" : "flonum",
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 92.541666666666515, 113.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-52",
									"maxclass" : "swatch",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 560.30952672163653, 154.119050145149231, 128.0, 32.0 ],
									"saturation" : 1.0
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-55",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 560.30952672163653, 197.119050145149231, 82.0, 22.0 ],
									"text" : "prepend color"
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"id" : "obj-51",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 774.142860054969788, 169.500007271766663, 55.0, 24.0 ],
									"text" : "alpha"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-50",
									"maxclass" : "flonum",
									"maximum" : 1.0,
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 722.142860054969788, 169.500007271766663, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-45",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 722.142860054969788, 197.119050145149231, 81.0, 22.0 ],
									"text" : "color 1 1 1 $1"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-49",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 336.666666666666686, 154.85714316368103, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-47",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 273.166666666666686, 154.85714316368103, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-29",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 209.666666666666686, 197.119050145149231, 146.0, 22.0 ],
									"text" : "pak position f f"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-26",
									"maxclass" : "flonum",
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 146.166666666666515, 163.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-19",
									"maxclass" : "flonum",
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 92.541666666666515, 163.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-17",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 39.916666666666515, 197.119050145149231, 124.25, 22.0 ],
									"text" : "pak scale 1. 1."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 39.916666666666515, 463.119050145149231, 90.0, 22.0 ],
									"text" : "s to_meshwarp"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-14", 0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-9", 0 ],
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 433.166666666666686, 244.0, 49.416666666666515, 244.0 ],
									"source" : [ "obj-14", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 49.416666666666515, 222.0, 49.416666666666515, 222.0 ],
									"source" : [ "obj-17", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-17", 1 ],
									"source" : [ "obj-19", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 323.166666666666742, 434.8690465092659, 49.416666666666515, 434.8690465092659 ],
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 1 ],
									"source" : [ "obj-23", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 2 ],
									"source" : [ "obj-25", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-17", 2 ],
									"source" : [ "obj-26", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 219.166666666666686, 244.0, 49.416666666666515, 244.0 ],
									"source" : [ "obj-29", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 1 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 731.642860054969788, 243.0, 49.416666666666515, 243.0 ],
									"source" : [ "obj-45", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-29", 1 ],
									"source" : [ "obj-47", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-29", 2 ],
									"source" : [ "obj-49", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 95.166666666666515, 434.8690465092659, 49.416666666666515, 434.8690465092659 ],
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-45", 0 ],
									"source" : [ "obj-50", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-55", 0 ],
									"source" : [ "obj-52", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 569.80952672163653, 243.0, 49.416666666666515, 243.0 ],
									"source" : [ "obj-55", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-64", 0 ],
									"source" : [ "obj-57", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 2 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 688.0, 434.8690465092659, 49.416666666666515, 434.8690465092659 ],
									"source" : [ "obj-64", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"order" : 1,
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-26", 0 ],
									"order" : 0,
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 506.166666666666515, 434.8690465092659, 49.416666666666515, 434.8690465092659 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 136.0, 85.0, 48.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p mesh"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 896.0, 613.0 ],
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
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-21",
									"maxclass" : "flonum",
									"maximum" : 2.0,
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 276.5, 299.0, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-22",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 276.5, 331.0, 87.0, 22.0 ],
									"text" : "circles_size $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-13",
									"maxclass" : "swatch",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 647.30952672163653, 210.119050145149231, 128.0, 32.0 ],
									"saturation" : 1.0
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 647.30952672163653, 253.119050145149231, 184.0, 22.0 ],
									"text" : "prepend multiple_selection_color"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "swatch",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 647.30952672163653, 132.119050145149231, 128.0, 32.0 ],
									"saturation" : 1.0
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 647.30952672163653, 175.119050145149231, 136.0, 22.0 ],
									"text" : "prepend selection_color"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-12",
									"maxclass" : "flonum",
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 189.0, 299.0, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-11",
									"maxclass" : "flonum",
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 88.0, 299.0, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 189.0, 331.0, 73.0, 22.0 ],
									"text" : "grid_size $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-7",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 88.0, 331.0, 79.0, 22.0 ],
									"text" : "point_size $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-52",
									"maxclass" : "swatch",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 502.30952672163653, 132.119050145149231, 128.0, 32.0 ],
									"saturation" : 1.0
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-55",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 502.30952672163653, 175.119050145149231, 125.0, 22.0 ],
									"text" : "prepend grid_color"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"linecount" : 5,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 43.666666666666515, 32.190485954284668, 557.0, 75.0 ],
									"text" : "- Blue Circle: move the mesh.\n- Yellow Circles: scale the mesh.\n- Move individual vertices with mouse when Red Circle appears.\n- Click and Drag: select multiple vertices. \nAfter selecting the vertices you can move them all in bulk by clicking and dragging on a selected vertex."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 615.857139945030212, 296.0, 199.0, 34.0 ],
									"text" : "Use this abstraction to move single vertices by index."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-6",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 488.5, 307.119050145149231, 122.0, 22.0 ],
									"text" : "r from_meshwarp"
								}

							}
, 							{
								"box" : 								{
									"bgmode" : 0,
									"border" : 0,
									"clickthrough" : 0,
									"enablehscroll" : 0,
									"enablevscroll" : 0,
									"frozen_box_attributes" : [ "name" ],
									"id" : "obj-4",
									"lockeddragscroll" : 0,
									"lockedsize" : 0,
									"maxclass" : "bpatcher",
									"name" : "meshwarp.vertex.edit.maxpat",
									"numinlets" : 5,
									"numoutlets" : 1,
									"offset" : [ 0.0, 0.0 ],
									"outlettype" : [ "" ],
									"patching_rect" : [ 488.5, 335.047614336013794, 313.0, 86.952385663986206 ],
									"viewvisibility" : 1
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-34",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 333.5, 140.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-35",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 333.5, 175.119050145149231, 144.0, 22.0 ],
									"text" : "show_scale_handles $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 182.5, 140.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-28",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 182.5, 175.119050145149231, 144.0, 22.0 ],
									"text" : "show_position_handle $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-20",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 93.5, 140.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 93.5, 175.119050145149231, 69.0, 22.0 ],
									"text" : "show_ui $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 43.666666666666515, 455.119050145149231, 90.0, 22.0 ],
									"text" : "s to_meshwarp"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-28", 0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 656.80952672163653, 198.0, 633.0, 198.0, 633.0, 254.0, 53.166666666666515, 254.0 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 0 ],
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"source" : [ "obj-12", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-13", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 103.0, 251.0, 53.166666666666515, 251.0 ],
									"source" : [ "obj-14", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 656.80952672163653, 276.0, 53.166666666666515, 276.0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-14", 0 ],
									"source" : [ "obj-20", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-22", 0 ],
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 286.0, 441.0, 53.166666666666515, 441.0 ],
									"source" : [ "obj-22", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 192.0, 252.0, 53.166666666666515, 252.0 ],
									"source" : [ "obj-28", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-35", 0 ],
									"source" : [ "obj-34", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 343.0, 252.0, 53.166666666666515, 252.0 ],
									"source" : [ "obj-35", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 498.0, 442.0, 53.166666666666515, 442.0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-10", 0 ],
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-55", 0 ],
									"source" : [ "obj-52", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 511.80952672163653, 253.0, 53.166666666666515, 253.0 ],
									"source" : [ "obj-55", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 97.5, 441.0, 53.166666666666515, 441.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 198.5, 441.0, 53.166666666666515, 441.0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 71.0, 85.0, 40.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p GUI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 896.0, 613.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 13.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 5.0, 5.0 ],
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
						"subpatcher_template" : "Template_Grid",
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-4",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 392.642860054969788, 462.547614336013794, 197.5, 36.0 ],
									"text" : "Open abstraction (double-click) to view current attribute state"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"linecount" : 4,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 591.382830262184143, 254.829569220542908, 182.0, 66.0 ],
									"text" : "Also undo via cmd+z or ctl+z  and redo via shift+cmd+z or ctl+y when interacting in the render window"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-62",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 228.642860054969788, 396.928571462631226, 24.0, 24.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_enum" : [ "off", "on" ],
											"parameter_initial" : [ 1 ],
											"parameter_initial_enable" : 1,
											"parameter_invisible" : 2,
											"parameter_longname" : "toggle[1]",
											"parameter_mmax" : 1,
											"parameter_shortname" : "toggle[1]",
											"parameter_type" : 2
										}

									}
,
									"varname" : "toggle[1]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-60",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 228.642860054969788, 424.0, 66.0, 23.0 ],
									"text" : "enable $1"
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubbleside" : 3,
									"id" : "obj-6",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 804.0, 298.619042873382568, 84.0, 40.0 ],
									"text" : "Snapshot support"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 49.642860054969788, 527.095228672027588, 112.0, 23.0 ],
									"text" : "s from_meshwarp"
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"id" : "obj-13",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 595.988093376159668, 207.119042873382568, 200.0, 25.0 ],
									"text" : "Undo / redo mesh GUI actions"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-27",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 554.988093376159668, 208.119042873382568, 35.0, 23.0 ],
									"text" : "redo"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-21",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 512.988093376159668, 208.119042873382568, 37.0, 23.0 ],
									"text" : "undo"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 89.642860054969788, 409.0, 94.0, 23.0 ],
									"text" : "r to_meshwarp"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 442.892860054969788, 290.119042873382568, 97.0, 23.0 ],
									"text" : "s to_meshwarp"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "jit_gl_texture", "" ],
									"patching_rect" : [ 49.642860054969788, 340.619042873382568, 362.0, 23.0 ],
									"text" : "jit.movie @output_texture 1 @vol 0 @moviefile chickens.mp4"
								}

							}
, 							{
								"box" : 								{
									"fontface" : 0,
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-16",
									"maxclass" : "jit.fpsgui",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 115.142860054969788, 222.738093018531799, 80.0, 36.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 442.892860054969788, 208.119042873382568, 37.0, 23.0 ],
									"text" : "reset"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-11",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 43.642860054969788, 146.619042873382568, 33.476186752319336, 33.476186752319336 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_enum" : [ "off", "on" ],
											"parameter_longname" : "toggle",
											"parameter_mmax" : 1,
											"parameter_shortname" : "toggle",
											"parameter_type" : 2
										}

									}
,
									"varname" : "toggle"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "jit_matrix", "bang", "" ],
									"patching_rect" : [ 43.642860054969788, 191.738093018531799, 313.0, 23.0 ],
									"text" : "jit.world @fsaa 1 @fps 1000 @displaylink 0 @sync 0"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 49.642860054969788, 469.047614336013794, 325.0, 23.0 ],
									"text" : "jit.gl.meshwarp @show_ui 1 @meshdim 10 4 @layer 0",
									"varname" : "jit.gl.meshwarp"
								}

							}
, 							{
								"box" : 								{
									"border" : 0,
									"filename" : "helpdetails.js",
									"id" : "obj-2",
									"ignoreclick" : 1,
									"jsarguments" : [ "jit.gl.meshwarp" ],
									"maxclass" : "jsui",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 10.0, 10.0, 546.238093376159668, 118.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"bgcolor" : [ 1.0, 0.788235, 0.470588, 1.0 ],
									"fontface" : 1,
									"hint" : "",
									"id" : "obj-93",
									"ignoreclick" : 1,
									"legacytextcolor" : 1,
									"maxclass" : "textbutton",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "", "", "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 80.642860054969788, 153.642863392829895, 20.0, 20.0 ],
									"rounded" : 60.0,
									"text" : "1",
									"textcolor" : [ 0.34902, 0.34902, 0.34902, 1.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-16", 0 ],
									"source" : [ "obj-15", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 522.488093376159668, 268.119042873382568, 452.392860054969788, 268.119042873382568 ],
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 564.488093376159668, 268.119042873382568, 452.392860054969788, 268.119042873382568 ],
									"source" : [ "obj-27", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"midpoints" : [ 238.142860054969788, 452.619042873382568, 59.142860054969788, 452.619042873382568 ],
									"source" : [ "obj-60", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-60", 0 ],
									"source" : [ "obj-62", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 452.392860054969788, 291.5, 452.392860054969788, 291.5 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 10.0, 85.0, 50.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"fontsize" : 13.0,
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p basic",
					"varname" : "basic_tab"
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "helpname.js",
					"id" : "obj-12",
					"ignoreclick" : 1,
					"jsarguments" : [ "jit.gl.meshwarp" ],
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 10.0, 10.0, 323.57598876953125, 57.600002288818359 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 896.0, 613.0 ],
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
						"subpatcher_template" : "Template_Grid",
						"showontab" : 1,
						"assistshowspatchername" : 0,
						"boxes" : [  ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 689.0, 85.0, 50.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p ?",
					"varname" : "q_tab"
				}

			}
 ],
		"lines" : [  ],
		"parameters" : 		{
			"obj-10::obj-11" : [ "toggle", "toggle", 0 ],
			"obj-10::obj-1::obj-8" : [ "meshwarpjs", "meshwarpjs", 0 ],
			"obj-10::obj-62" : [ "toggle[1]", "toggle[1]", 0 ],
			"obj-4::obj-41::obj-8" : [ "meshwarpjs[1]", "meshwarpjs[1]", 0 ],
			"obj-4::obj-43::obj-8" : [ "meshwarpjs[2]", "meshwarpjs[2]", 0 ],
			"parameterbanks" : 			{

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "Aspect[1]_20210728.maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../../../../Users/Federico Foderaro/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "Zigzag[1].maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../../../../Users/Federico Foderaro/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "helpdetails.js",
				"bootpath" : "C74:/help/resources",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "helpname.js",
				"bootpath" : "C74:/help/resources",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "helpstarter.js",
				"bootpath" : "C74:/help/resources",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "jit.gl.meshwarp.maxpat",
				"bootpath" : "C74:/packages/Jitter Tools/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "jit.mo.time.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "meshwarp.js",
				"bootpath" : "C74:/packages/Jitter Tools/javascript/meshwarp",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "meshwarp.vertex.edit.maxpat",
				"bootpath" : "C74:/packages/Jitter Tools/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"snapshot" : 		{
			"filetype" : "C74Snapshot",
			"version" : 2,
			"minorversion" : 0,
			"name" : "snapshotlist",
			"origin" : "jpatcher",
			"type" : "list",
			"subtype" : "Undefined",
			"embed" : 1,
			"snapshot" : 			{
				"valuedictionary" : 				{
					"parameter_values" : 					{
						"toggle" : 1.0,
						"blob" : 						{
							"meshwarpjs" : [ 								{
									"meshdim" : [ 10, 4 ],
									"nurbs_order" : [ 1, 1 ],
									"layer" : 0,
									"lock_to_aspect" : 0,
									"color" : [ 1, 1, 1, 1 ],
									"grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
									"show_ui" : 1,
									"point_size" : 10,
									"grid_size" : 3,
									"windowRatio" : 1.333333333333333,
									"positionMat" : 									{
										"scale" : [ 1.244444444444445, 0.7 ],
										"center" : [ 0, 0 ],
										"rotatez" : 0,
										"planecount" : 3,
										"type" : "float32",
										"dimensions" : [ 10, 4 ],
										"vertices" : "[[-1.244444489479065,-0.699999988079071,0],[-1.244444489479065,-0.23333333432674408,0],[-1.244444489479065,0.23333333432674408,0],[-1.244444489479065,0.699999988079071,0],[-0.9701646566390991,-0.6425103545188904,0],[-0.9701646566390991,-0.17584361135959625,0],[-0.9701646566390991,0.2908230423927307,0],[-0.9701646566390991,0.7574896216392517,0],[-0.6953189969062805,-0.5993930697441101,0],[-0.6953189969062805,-0.13272632658481598,0],[-0.6953189969062805,0.3339403569698334,0],[-0.6953189969062805,0.800606906414032,0],[-0.4199073910713196,-0.570648193359375,0],[-0.4199073910713196,-0.10398146510124207,0],[-0.4199073910713196,0.3626852333545685,0],[-0.4199073910713196,0.8293517231941223,0],[-0.14393000304698944,-0.5562757253646851,0],[-0.14393000304698944,-0.08960902690887451,0],[-0.14393000304698944,0.37705764174461365,0],[-0.14393000304698944,0.8437241911888123,0],[0.13261322677135468,-0.5562757253646851,0],[0.13261322677135468,-0.08960902690887451,0],[0.13261322677135468,0.37705764174461365,0],[0.13261322677135468,0.8437241911888123,0],[0.40972229838371277,-0.570648193359375,0],[0.40972229838371277,-0.10398146510124207,0],[0.40972229838371277,0.3626852333545685,0],[0.40972229838371277,0.8293517231941223,0],[0.6873971819877625,-0.5993930697441101,0],[0.6873971819877625,-0.13272632658481598,0],[0.6873971819877625,0.3339403569698334,0],[0.6873971819877625,0.800606906414032,0],[0.9656379222869873,-0.6425103545188904,0],[0.9656379222869873,-0.17584361135959625,0],[0.9656379222869873,0.2908230423927307,0],[0.9656379222869873,0.7574896216392517,0],[1.244444489479065,-0.699999988079071,0],[1.244444489479065,-0.23333333432674408,0],[1.244444489479065,0.23333333432674408,0],[1.244444489479065,0.699999988079071,0]]"
									}

								}
 ],
							"meshwarpjs[1]" : [ 								{
									"meshdim" : [ 5, 4 ],
									"nurbs_order" : [ 1, 1 ],
									"layer" : 2,
									"lock_to_aspect" : 0,
									"color" : [ 1, 1, 1, 1 ],
									"grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
									"show_ui" : 0,
									"point_size" : 10,
									"grid_size" : 3,
									"windowRatio" : 1,
									"positionMat" : 									{
										"scale" : [ 1, 1 ],
										"center" : [ 0, 0 ],
										"rotatez" : 0,
										"planecount" : 3,
										"type" : "float32",
										"dimensions" : [ 5, 4 ],
										"vertices" : "[[-1,-1,0],[-1,-0.3333333432674408,0],[-1,0.3333333432674408,0],[-1,1,0],[-0.5,-1,0],[-0.5,-0.3333333432674408,0],[-0.5,0.3333333432674408,0],[-0.5,1,0],[0,-1,0],[0,-0.3333333432674408,0],[0,0.3333333432674408,0],[0,1,0],[0.5,-1,0],[0.5,-0.3333333432674408,0],[0.5,0.3333333432674408,0],[0.5,1,0],[1,-1,0],[1,-0.3333333432674408,0],[1,0.3333333432674408,0],[1,1,0]]"
									}

								}
 ],
							"meshwarpjs[2]" : [ 								{
									"meshdim" : [ 5, 4 ],
									"nurbs_order" : [ 1, 1 ],
									"layer" : 3,
									"lock_to_aspect" : 0,
									"color" : [ 1, 1, 1, 1 ],
									"grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
									"show_ui" : 0,
									"point_size" : 10,
									"grid_size" : 3,
									"windowRatio" : 1,
									"positionMat" : 									{
										"scale" : [ 1, 1 ],
										"center" : [ 0, 0 ],
										"rotatez" : 0,
										"planecount" : 3,
										"type" : "float32",
										"dimensions" : [ 5, 4 ],
										"vertices" : "[[-1,-1,0],[-1,-0.3333333432674408,0],[-1,0.3333333432674408,0],[-1,1,0],[-0.5,-1,0],[-0.5,-0.3333333432674408,0],[-0.5,0.3333333432674408,0],[-0.5,1,0],[0,-1,0],[0,-0.3333333432674408,0],[0,0.3333333432674408,0],[0,1,0],[0.5,-1,0],[0.5,-0.3333333432674408,0],[0.5,0.3333333432674408,0],[0.5,1,0],[1,-1,0],[1,-0.3333333432674408,0],[1,0.3333333432674408,0],[1,1,0]]"
									}

								}
 ]
						}

					}

				}

			}
,
			"snapshotlist" : 			{
				"current_snapshot" : 0,
				"entries" : [ 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "Bendy",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"toggle" : 1.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"meshdim" : [ 10, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 0,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
												"show_ui" : 1,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1.333333333333333,
												"positionMat" : 												{
													"scale" : [ 1.244444444444445, 0.7 ],
													"center" : [ 0, 0 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 10, 4 ],
													"vertices" : "[[-1.244444489479065,-0.699999988079071,0],[-1.244444489479065,-0.23333333432674408,0],[-1.244444489479065,0.23333333432674408,0],[-1.244444489479065,0.699999988079071,0],[-0.9701646566390991,-0.6425103545188904,0],[-0.9701646566390991,-0.17584361135959625,0],[-0.9701646566390991,0.2908230423927307,0],[-0.9701646566390991,0.7574896216392517,0],[-0.6953189969062805,-0.5993930697441101,0],[-0.6953189969062805,-0.13272632658481598,0],[-0.6953189969062805,0.3339403569698334,0],[-0.6953189969062805,0.800606906414032,0],[-0.4199073910713196,-0.570648193359375,0],[-0.4199073910713196,-0.10398146510124207,0],[-0.4199073910713196,0.3626852333545685,0],[-0.4199073910713196,0.8293517231941223,0],[-0.14393000304698944,-0.5562757253646851,0],[-0.14393000304698944,-0.08960902690887451,0],[-0.14393000304698944,0.37705764174461365,0],[-0.14393000304698944,0.8437241911888123,0],[0.13261322677135468,-0.5562757253646851,0],[0.13261322677135468,-0.08960902690887451,0],[0.13261322677135468,0.37705764174461365,0],[0.13261322677135468,0.8437241911888123,0],[0.40972229838371277,-0.570648193359375,0],[0.40972229838371277,-0.10398146510124207,0],[0.40972229838371277,0.3626852333545685,0],[0.40972229838371277,0.8293517231941223,0],[0.6873971819877625,-0.5993930697441101,0],[0.6873971819877625,-0.13272632658481598,0],[0.6873971819877625,0.3339403569698334,0],[0.6873971819877625,0.800606906414032,0],[0.9656379222869873,-0.6425103545188904,0],[0.9656379222869873,-0.17584361135959625,0],[0.9656379222869873,0.2908230423927307,0],[0.9656379222869873,0.7574896216392517,0],[1.244444489479065,-0.699999988079071,0],[1.244444489479065,-0.23333333432674408,0],[1.244444489479065,0.23333333432674408,0],[1.244444489479065,0.699999988079071,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 2,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 1, 1 ],
													"center" : [ 0, 0 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1,-1,0],[-1,-0.3333333432674408,0],[-1,0.3333333432674408,0],[-1,1,0],[-0.5,-1,0],[-0.5,-0.3333333432674408,0],[-0.5,0.3333333432674408,0],[-0.5,1,0],[0,-1,0],[0,-0.3333333432674408,0],[0,0.3333333432674408,0],[0,1,0],[0.5,-1,0],[0.5,-0.3333333432674408,0],[0.5,0.3333333432674408,0],[0.5,1,0],[1,-1,0],[1,-0.3333333432674408,0],[1,0.3333333432674408,0],[1,1,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 3,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 1, 1 ],
													"center" : [ 0, 0 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1,-1,0],[-1,-0.3333333432674408,0],[-1,0.3333333432674408,0],[-1,1,0],[-0.5,-1,0],[-0.5,-0.3333333432674408,0],[-0.5,0.3333333432674408,0],[-0.5,1,0],[0,-1,0],[0,-0.3333333432674408,0],[0,0.3333333432674408,0],[0,1,0],[0.5,-1,0],[0.5,-0.3333333432674408,0],[0.5,0.3333333432674408,0],[0.5,1,0],[1,-1,0],[1,-0.3333333432674408,0],[1,0.3333333432674408,0],[1,1,0]]"
												}

											}
 ]
									}

								}

							}

						}
,
						"fileref" : 						{
							"name" : "Bendy",
							"filename" : "Aspect[1].maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "24b5445f5e0eb7cd06f82f56904d35ee"
						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "Zigzag",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"toggle" : 1.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 0,
												"lock_to_aspect" : 1,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
												"show_ui" : 1,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1.333333333333333,
												"positionMat" : 												{
													"scale" : [ 1, 1 ],
													"center" : [ 0, 0 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1,-1,0],[-0.8041666746139526,-0.3333333432674408,0],[-1.3083332777023315,0.34166666865348816,0],[-1,1,0],[-0.5,-1,0],[-0.30416667461395264,-0.3333333432674408,0],[-0.8083332777023315,0.34166666865348816,0],[-0.5,1,0],[0,-1,0],[0.19583332538604736,-0.3333333432674408,0],[-0.30833327770233154,0.34166666865348816,0],[0,1,0],[0.5,-1,0],[0.6958333253860474,-0.3333333432674408,0],[0.19166672229766846,0.34166666865348816,0],[0.5,1,0],[1,-1,0],[1.1958335638046265,-0.3333333432674408,0],[0.6916667222976685,0.34166666865348816,0],[1,1,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 2,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 1, 1 ],
													"center" : [ 0, 0 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1,-1,0],[-1,-0.3333333432674408,0],[-1,0.3333333432674408,0],[-1,1,0],[-0.5,-1,0],[-0.5,-0.3333333432674408,0],[-0.5,0.3333333432674408,0],[-0.5,1,0],[0,-1,0],[0,-0.3333333432674408,0],[0,0.3333333432674408,0],[0,1,0],[0.5,-1,0],[0.5,-0.3333333432674408,0],[0.5,0.3333333432674408,0],[0.5,1,0],[1,-1,0],[1,-0.3333333432674408,0],[1,0.3333333432674408,0],[1,1,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 3,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 1, 1 ],
													"center" : [ 0, 0 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1,-1,0],[-1,-0.3333333432674408,0],[-1,0.3333333432674408,0],[-1,1,0],[-0.5,-1,0],[-0.5,-0.3333333432674408,0],[-0.5,0.3333333432674408,0],[-0.5,1,0],[0,-1,0],[0,-0.3333333432674408,0],[0,0.3333333432674408,0],[0,1,0],[0.5,-1,0],[0.5,-0.3333333432674408,0],[0.5,0.3333333432674408,0],[0.5,1,0],[1,-1,0],[1,-0.3333333432674408,0],[1,0.3333333432674408,0],[1,1,0]]"
												}

											}
 ]
									}

								}

							}

						}
,
						"fileref" : 						{
							"name" : "Aspect[1]",
							"filename" : "Aspect[1]_20210728.maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "9708ab7c39548c7f5236ddca36b43906"
						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "Squares",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"toggle" : 1.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 0,
												"lock_to_aspect" : 1,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
												"show_ui" : 1,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1.333333333333333,
												"positionMat" : 												{
													"scale" : [ 0.358333349227905, 0.358333349227905 ],
													"center" : [ -0.845833322033286, -0.499999998137355 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1.2041665315628052,-0.8583332896232605,0],[-1.2041665315628052,-0.6194444298744202,0],[-1.2041665315628052,-0.38055554032325745,0],[-1.2041665315628052,-0.14166665077209473,0],[-1.024999976158142,-0.8583332896232605,0],[-1.024999976158142,-0.6194444298744202,0],[-1.024999976158142,-0.38055554032325745,0],[-1.024999976158142,-0.14166665077209473,0],[-0.8458333015441895,-0.8583332896232605,0],[-0.8458333015441895,-0.6194444298744202,0],[-0.8458333015441895,-0.38055554032325745,0],[-0.8458333015441895,-0.14166665077209473,0],[-0.6666666865348816,-0.8583332896232605,0],[-0.6666666865348816,-0.6194444298744202,0],[-0.6666666865348816,-0.38055554032325745,0],[-0.6666666865348816,-0.14166665077209473,0],[-0.48749998211860657,-0.8583332896232605,0],[-0.48749998211860657,-0.6194444298744202,0],[-0.48749998211860657,-0.38055554032325745,0],[-0.48749998211860657,-0.14166665077209473,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 2,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
												"show_ui" : 1,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1.333333333333333,
												"positionMat" : 												{
													"scale" : [ 0.370833337306976, 0.370833337306976 ],
													"center" : [ -0.033333379775286, 0.474999903701246 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-0.4041667580604553,0.10416656732559204,0],[-0.4041667580604553,0.3513887822628021,0],[-0.4041667580604553,0.5986109972000122,0],[-0.4041667580604553,0.8458331823348999,0],[-0.2187500298023224,0.10416656732559204,0],[-0.2187500298023224,0.3513887822628021,0],[-0.2187500298023224,0.5986109972000122,0],[-0.2187500298023224,0.8458331823348999,0],[-0.03333337977528572,0.10416656732559204,0],[-0.03333337977528572,0.3513887822628021,0],[-0.03333337977528572,0.5986109972000122,0],[-0.03333337977528572,0.8458331823348999,0],[0.15208330750465393,0.10416656732559204,0],[0.15208330750465393,0.3513887822628021,0],[0.15208330750465393,0.5986109972000122,0],[0.15208330750465393,0.8458331823348999,0],[0.3374999165534973,0.10416656732559204,0],[0.3374999165534973,0.3513887822628021,0],[0.3374999165534973,0.5986109972000122,0],[0.3374999165534973,0.8458331823348999,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 3,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
												"show_ui" : 1,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1.333333333333333,
												"positionMat" : 												{
													"scale" : [ 0.362500011920929, 0.362500011920929 ],
													"center" : [ 0.787499845027924, -0.491666704416275 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[0.42499983310699463,-0.8541667461395264,0],[0.42499983310699463,-0.6125000715255737,0],[0.42499983310699463,-0.3708333671092987,0],[0.42499983310699463,-0.12916669249534607,0],[0.6062498092651367,-0.8541667461395264,0],[0.6062498092651367,-0.6125000715255737,0],[0.6062498092651367,-0.3708333671092987,0],[0.6062498092651367,-0.12916669249534607,0],[0.7874998450279236,-0.8541667461395264,0],[0.7874998450279236,-0.6125000715255737,0],[0.7874998450279236,-0.3708333671092987,0],[0.7874998450279236,-0.12916669249534607,0],[0.9687498807907104,-0.8541667461395264,0],[0.9687498807907104,-0.6125000715255737,0],[0.9687498807907104,-0.3708333671092987,0],[0.9687498807907104,-0.12916669249534607,0],[1.1499998569488525,-0.8541667461395264,0],[1.1499998569488525,-0.6125000715255737,0],[1.1499998569488525,-0.3708333671092987,0],[1.1499998569488525,-0.12916669249534607,0]]"
												}

											}
 ]
									}

								}

							}

						}
,
						"fileref" : 						{
							"name" : "Zigzag[1]",
							"filename" : "Zigzag[1].maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "0b73c2baef6b41a3733da291b70ee3cd"
						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "Coopwarp",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"toggle" : 1.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 0,
												"lock_to_aspect" : 1,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
												"show_ui" : 1,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1.333333333333333,
												"positionMat" : 												{
													"scale" : [ 1.244444444444444, 0.7 ],
													"center" : [ 0, 0 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1.244444489479065,-0.699999988079071,0],[-1.244444489479065,-0.23333333432674408,0],[-1.244444489479065,0.23333333432674408,0],[-1.244444489479065,0.699999988079071,0],[-0.6222222447395325,-0.699999988079071,0],[-0.6222222447395325,-0.23333333432674408,0],[-0.6222222447395325,0.23333333432674408,0],[-0.6222222447395325,0.699999988079071,0],[0,-0.699999988079071,0],[0,-0.23333333432674408,0],[0,0.23333333432674408,0],[0,0.699999988079071,0],[0.6222222447395325,-0.699999988079071,0],[0.6222222447395325,-0.23333333432674408,0],[0.6222222447395325,0.23333333432674408,0],[0.6222222447395325,0.699999988079071,0],[1.244444489479065,-0.699999988079071,0],[1.244444489479065,-0.23333333432674408,0],[1.244444489479065,0.23333333432674408,0],[1.244444489479065,0.699999988079071,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"meshdim" : [ 2, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 2,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 0.454166620969772, 0.179166674613953 ],
													"center" : [ 0.225000062957406, -0.262499988079071 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 2, 4 ],
													"vertices" : "[[-0.25416654348373413,-0.46666663885116577,0],[-0.2555556297302246,-0.38333332538604736,0],[-0.04027777910232544,-0.23333331942558289,0],[0.23333343863487244,-0.05416667461395264,0],[0.6500002145767212,-0.5833333134651184,0],[0.6569446325302124,-0.3999999761581421,0],[0.6513890624046326,-0.2499999850988388,0],[0.6500002145767212,-0.04583335667848587,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"meshdim" : [ 2, 2 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 3,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 0.175000131130219, 0.291666597127914 ],
													"center" : [ 0.595833299681544, 0.399999916553497 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 2, 2 ],
													"vertices" : "[[0.4083330035209656,-0.0375000536441803,0],[0.4124997854232788,0.7000000476837158,0],[0.6583333611488342,-0.03750000149011612,0],[0.6541667580604553,0.6958333253860474,0]]"
												}

											}
 ]
									}

								}

							}

						}
,
						"fileref" : 						{
							"name" : "Aspect[1]",
							"filename" : "Aspect[1]_20210728_1.maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "7a0ab5bb4e4ae38e70670e1f06b5a9bc"
						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "Chknfish",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"toggle" : 1.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"meshdim" : [ 11, 4 ],
												"nurbs_order" : [ 10, 3 ],
												"layer" : 0,
												"lock_to_aspect" : 1,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
												"show_ui" : 1,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1.481481481481481,
												"positionMat" : 												{
													"scale" : [ 1.173333333333333, 0.66 ],
													"center" : [ -0.087, 0 ],
													"rotatez" : 3.69,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 11, 4 ],
													"vertices" : "[[-1.183983325958252,-0.05509668588638306,0],[-1.1633172035217285,0.22093580663204193,0],[-1.0193628072738647,0.525052011013031,0],[-0.831389844417572,0.6894121766090393,0],[-1.1737687587738037,-0.4565686285495758,0],[-0.8253625631332397,0.13957074284553528,0],[-0.6730226874351501,0.41075822710990906,0],[-0.564643383026123,0.7891485095024109,0],[-0.9060613512992859,-0.7774853706359863,0],[-0.6210620999336243,0.07384853810071945,0],[-0.44632601737976074,0.3461261987686157,0],[-0.2565416097640991,0.66544109582901,0],[-0.7059374451637268,-0.803180456161499,0],[-0.39755934476852417,-0.006005377043038607,0],[-0.25042426586151123,0.30974945425987244,0],[-0.10226639360189438,0.5337753891944885,0],[-0.3998594880104065,-0.5747862458229065,0],[-0.16786101460456848,-0.08542127162218094,0],[-0.080884650349617,0.28973856568336487,0],[0.03280520439147949,0.4048328995704651,0],[-0.19413170218467712,-0.4093836545944214,0],[0.0029685497283935547,-0.13578808307647705,0],[0.010327242314815521,0.12271749973297119,0],[0.08477011322975159,0.2560743987560272,0],[0.1368427872657776,-0.21331050992012024,0],[0.1488969773054123,-0.035152632743120193,0],[0.1480211317539215,0.14667443931102753,0],[0.19011808931827545,0.23804934322834015,0],[0.3301844596862793,0.018514154478907585,0],[0.31379562616348267,-0.016079578548669815,0],[0.3151787519454956,0.09081975370645523,0],[0.3417207598686218,0.2026475965976715,0],[0.7906458377838135,-0.08786550164222717,0],[0.7862879633903503,0.03271632641553879,0],[0.818487286567688,0.11203261464834213,0],[0.737615704536438,0.2729264795780182,0],[1.047420859336853,-0.2615993320941925,0],[0.9666397571563721,-0.02562234364449978,0],[0.9272819757461548,0.13086265325546265,0],[0.9313256740570068,0.38069722056388855,0],[1.3152966499328613,-0.7982709407806396,0],[0.996220588684082,0.12459283322095871,0],[0.9863826036453247,0.1423817127943039,0],[1.2224698066711426,0.9777719378471375,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 2,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 0.370833337306976, 0.370833337306976 ],
													"center" : [ -0.033333379775286, 0.474999903701246 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-0.4041667580604553,0.10416656732559204,0],[-0.4041667580604553,0.3513887822628021,0],[-0.4041667580604553,0.5986109972000122,0],[-0.4041667580604553,0.8458331823348999,0],[-0.2187500298023224,0.10416656732559204,0],[-0.2187500298023224,0.3513887822628021,0],[-0.2187500298023224,0.5986109972000122,0],[-0.2187500298023224,0.8458331823348999,0],[-0.03333337977528572,0.10416656732559204,0],[-0.03333337977528572,0.3513887822628021,0],[-0.03333337977528572,0.5986109972000122,0],[-0.03333337977528572,0.8458331823348999,0],[0.15208330750465393,0.10416656732559204,0],[0.15208330750465393,0.3513887822628021,0],[0.15208330750465393,0.5986109972000122,0],[0.15208330750465393,0.8458331823348999,0],[0.3374999165534973,0.10416656732559204,0],[0.3374999165534973,0.3513887822628021,0],[0.3374999165534973,0.5986109972000122,0],[0.3374999165534973,0.8458331823348999,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 3,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
												"show_ui" : 0,
												"point_size" : 10,
												"grid_size" : 3,
												"windowRatio" : 1,
												"positionMat" : 												{
													"scale" : [ 0.362500011920929, 0.362500011920929 ],
													"center" : [ 0.787499845027924, -0.491666704416275 ],
													"rotatez" : 0,
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[0.42499983310699463,-0.8541667461395264,0],[0.42499983310699463,-0.6125000715255737,0],[0.42499983310699463,-0.3708333671092987,0],[0.42499983310699463,-0.12916669249534607,0],[0.6062498092651367,-0.8541667461395264,0],[0.6062498092651367,-0.6125000715255737,0],[0.6062498092651367,-0.3708333671092987,0],[0.6062498092651367,-0.12916669249534607,0],[0.7874998450279236,-0.8541667461395264,0],[0.7874998450279236,-0.6125000715255737,0],[0.7874998450279236,-0.3708333671092987,0],[0.7874998450279236,-0.12916669249534607,0],[0.9687498807907104,-0.8541667461395264,0],[0.9687498807907104,-0.6125000715255737,0],[0.9687498807907104,-0.3708333671092987,0],[0.9687498807907104,-0.12916669249534607,0],[1.1499998569488525,-0.8541667461395264,0],[1.1499998569488525,-0.6125000715255737,0],[1.1499998569488525,-0.3708333671092987,0],[1.1499998569488525,-0.12916669249534607,0]]"
												}

											}
 ]
									}

								}

							}

						}
,
						"fileref" : 						{
							"name" : "Chknfish",
							"filename" : "Aspect[1]_20210728_2.maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "bf78636150be0ed0ab4db74ac8f937c4"
						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "Zigzag",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 0,
						"fileref" : 						{
							"name" : "Zigzag",
							"filename" : "Aspect[1]_20210728.maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "702c95b617335e4d15f13ce0bbcfdf15"
						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "Squares",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 0,
						"fileref" : 						{
							"name" : "Squares",
							"filename" : "Zigzag[1].maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "594b9a14dc7b2604ba9a24d306a1d169"
						}

					}
 ]
			}

		}

	}

}
