{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 2,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 128.0, 377.0, 964.0, 573.0 ],
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
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 2,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 964.0, 547.0 ],
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
									"id" : "obj-13",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 538.0, 121.0, 202.0, 34.0 ],
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
									"patching_rect" : [ 454.5, 121.0, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 454.5, 145.0, 51.0, 22.0 ],
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
									"patching_rect" : [ 250.0, 121.0, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-6",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 250.0, 145.0, 51.0, 22.0 ],
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
									"patching_rect" : [ 185.0, 145.0, 35.0, 22.0 ],
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
									"patching_rect" : [ 114.5, 145.0, 61.0, 22.0 ],
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
									"patching_rect" : [ 21.5, 95.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 21.5, 145.0, 77.0, 22.0 ],
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
									"patching_rect" : [ 454.5, 226.666657209396362, 355.0, 22.0 ],
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
									"patching_rect" : [ 21.5, 226.666657209396362, 355.0, 22.0 ],
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
									"patching_rect" : [ 454.5, 193.619042873382568, 391.0, 22.0 ],
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
									"patching_rect" : [ 21.5, 193.619042873382568, 417.0, 22.0 ],
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
									"patching_rect" : [ 21.5, 27.0, 417.0, 34.0 ],
									"text" : "You can use multiple \"jit.gl.meshwarp\" objects at the same time.\nTo select one click on the shape in the rendering window using the mouse. "
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"midpoints" : [ 464.0, 180.0, 445.0, 180.0, 445.0, 219.0, 464.0, 219.0 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-22", 0 ],
									"midpoints" : [ 31.0, 170.0, 31.0, 170.0 ],
									"order" : 1,
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-38", 0 ],
									"midpoints" : [ 31.0, 179.0, 464.0, 179.0 ],
									"order" : 0,
									"source" : [ "obj-2", 0 ]
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
									"midpoints" : [ 194.5, 180.0, 6.0, 180.0, 6.0, 222.0, 31.0, 222.0 ],
									"order" : 1,
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"midpoints" : [ 194.5, 180.0, 445.0, 180.0, 445.0, 219.0, 464.0, 219.0 ],
									"order" : 0,
									"source" : [ "obj-3", 0 ]
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
									"destination" : [ "obj-41", 0 ],
									"midpoints" : [ 124.0, 179.0, 8.119046568870544, 179.0, 8.119046568870544, 221.0, 31.0, 221.0 ],
									"order" : 1,
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"midpoints" : [ 124.0, 179.0, 444.119046568870544, 179.0, 444.119046568870544, 221.0, 464.0, 221.0 ],
									"order" : 0,
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"midpoints" : [ 259.5, 180.0, 6.0, 180.0, 6.0, 222.0, 31.0, 222.0 ],
									"source" : [ "obj-6", 0 ]
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
					"patching_rect" : [ 421.0, 56.0, 133.0, 22.0 ],
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
							"minor" : 2,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 964.0, 547.0 ],
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
									"id" : "obj-12",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 21.5, 27.0, 609.0, 34.0 ],
									"text" : "Save all the parameters of a jit.gl.meshwarp on a JSON file using the \"save\" message.\nLoad the JSON file in the jit.gl.meshwarp object with the \"read\" message to bring the object back the saved state."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 468.0, 113.619042873382568, 33.0, 22.0 ],
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
									"patching_rect" : [ 432.0, 113.619042873382568, 34.0, 22.0 ],
									"text" : "write"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 270.0, 91.619042873382568, 112.0, 20.0 ],
									"text" : "Read from Dekstop"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 73.0, 91.619042873382568, 95.0, 20.0 ],
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
									"patching_rect" : [ 54.642860054969788, 113.619042873382568, 169.0, 22.0 ],
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
									"patching_rect" : [ 239.642860054969788, 113.619042873382568, 167.0, 22.0 ],
									"text" : "read Desktop:/meshwarp.json"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 54.642860054969788, 244.119050145149231, 110.0, 22.0 ],
									"text" : "s to_meshwarp_01"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 249.142860054969788, 231.0, 64.142860054969788, 231.0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 64.142860054969788, 138.0, 64.142860054969788, 138.0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 441.5, 231.0, 64.142860054969788, 231.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 477.5, 231.0, 64.142860054969788, 231.0 ],
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
					"patching_rect" : [ 294.0, 56.0, 102.0, 22.0 ],
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
							"minor" : 2,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 128.0, 403.0, 964.0, 547.0 ],
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
									"id" : "obj-11",
									"maxclass" : "flonum",
									"maximum" : 1.0,
									"minimum" : 0.0,
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 484.666666666666515, 256.119035601615906, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 484.666666666666515, 295.619042873382568, 75.0, 22.0 ],
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
									"patching_rect" : [ 408.666666666666742, 256.119035601615906, 50.0, 22.0 ]
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
									"patching_rect" : [ 355.166666666666742, 256.119035601615906, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 301.666666666666742, 295.619042873382568, 126.0, 22.0 ],
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
									"patching_rect" : [ 601.5, 255.119035601615906, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-64",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 601.5, 295.619042873382568, 105.0, 22.0 ],
									"text" : "lock_to_aspect $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-32",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 219.666666666666515, 236.499992728233337, 69.0, 20.0 ],
									"text" : "vertical dim"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-31",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 133.166666666666515, 236.523813247680664, 83.0, 20.0 ],
									"text" : "horizontal dim"
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
									"patching_rect" : [ 225.666666666666515, 259.619042873382568, 50.0, 22.0 ]
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
									"patching_rect" : [ 149.666666666666515, 259.619042873382568, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 73.666666666666515, 295.619042873382568, 171.0, 22.0 ],
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
									"patching_rect" : [ 411.666666666666686, 103.85714316368103, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 411.666666666666686, 146.119050145149231, 62.0, 22.0 ],
									"text" : "rotatez $1"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-7",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 80.541666666666515, 62.119050145149231, 50.0, 22.0 ]
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
									"patching_rect" : [ 548.30952672163653, 103.119050145149231, 128.0, 32.0 ],
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
									"patching_rect" : [ 548.30952672163653, 146.119050145149231, 82.0, 22.0 ],
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
									"patching_rect" : [ 762.142860054969788, 118.500007271766663, 55.0, 24.0 ],
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
									"patching_rect" : [ 710.142860054969788, 118.500007271766663, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-45",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 710.142860054969788, 146.119050145149231, 81.0, 22.0 ],
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
									"patching_rect" : [ 324.666666666666686, 103.85714316368103, 50.0, 22.0 ]
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
									"patching_rect" : [ 261.166666666666686, 103.85714316368103, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-29",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 197.666666666666686, 146.119050145149231, 146.0, 22.0 ],
									"text" : "pak position f f"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-26",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 134.166666666666515, 112.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-19",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 80.541666666666515, 112.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-17",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 27.916666666666515, 146.119050145149231, 124.25, 22.0 ],
									"text" : "pak scale 1. 1."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 27.916666666666515, 396.119050145149231, 110.0, 22.0 ],
									"text" : "s to_meshwarp_01"
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
									"midpoints" : [ 421.166666666666686, 193.0, 37.416666666666515, 193.0 ],
									"source" : [ "obj-14", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 37.416666666666515, 171.0, 37.416666666666515, 171.0 ],
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
									"midpoints" : [ 311.166666666666742, 367.8690465092659, 37.416666666666515, 367.8690465092659 ],
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
									"midpoints" : [ 207.166666666666686, 193.0, 37.416666666666515, 193.0 ],
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
									"midpoints" : [ 719.642860054969788, 192.0, 37.416666666666515, 192.0 ],
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
									"midpoints" : [ 83.166666666666515, 367.8690465092659, 37.416666666666515, 367.8690465092659 ],
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
									"midpoints" : [ 557.80952672163653, 192.0, 37.416666666666515, 192.0 ],
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
									"midpoints" : [ 611.0, 367.8690465092659, 37.416666666666515, 367.8690465092659 ],
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
									"midpoints" : [ 494.166666666666515, 367.8690465092659, 37.416666666666515, 367.8690465092659 ],
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
					"patching_rect" : [ 186.0, 56.0, 48.0, 22.0 ],
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
							"minor" : 2,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 964.0, 547.0 ],
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
									"id" : "obj-23",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 472.0, 498.0, 68.0, 22.0 ],
									"text" : "jit.gl.sketch"
								}

							}
, 							{
								"box" : 								{
									"format" : 6,
									"id" : "obj-21",
									"maxclass" : "flonum",
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
									"text" : "prepend ui_grid_color"
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
									"text" : "r from_meshwarp_01"
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
									"patching_rect" : [ 43.666666666666515, 455.119050145149231, 110.0, 22.0 ],
									"text" : "s to_meshwarp_01"
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
					"patching_rect" : [ 121.0, 56.0, 40.0, 22.0 ],
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
					"id" : "obj-51",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 2,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 26.0, 964.0, 547.0 ],
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
									"id" : "obj-14",
									"linecount" : 4,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 569.238093376159668, 201.619042873382568, 169.0, 62.0 ],
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
									"parameter_enable" : 0,
									"patching_rect" : [ 314.666666666666742, 143.619042873382568, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-60",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 314.666666666666742, 169.619042873382568, 61.0, 22.0 ],
									"text" : "enable $1"
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubbleside" : 3,
									"id" : "obj-6",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 760.0, 271.738093018531799, 120.0, 24.0 ],
									"text" : "Snapshot support"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 51.642860054969788, 497.095228672027588, 124.0, 22.0 ],
									"text" : "s from_meshwarp_01"
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"id" : "obj-13",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 556.238093376159668, 169.619042873382568, 174.0, 24.0 ],
									"text" : "Undo / redo mesh GUI edits"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-27",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 521.238093376159668, 169.619042873382568, 33.0, 22.0 ],
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
									"patching_rect" : [ 484.238093376159668, 169.619042873382568, 35.0, 22.0 ],
									"text" : "undo"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-12",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 21.0, 69.0, 516.0, 34.0 ],
									"text" : "The jit.gl.meshwarp allows to deform visual material projected on a two-dimensional mesh.\nIt can be used either for video-mapping or as a creative tool."
								}

							}
, 							{
								"box" : 								{
									"fontface" : 1,
									"fontsize" : 32.0,
									"id" : "obj-7",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 21.0, 19.0, 241.0, 43.0 ],
									"text" : "jit.gl.meshwarp"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 90.642860054969788, 394.0, 108.0, 22.0 ],
									"text" : "r to_meshwarp_01"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 414.142860054969788, 268.619042873382568, 110.0, 22.0 ],
									"text" : "s to_meshwarp_01"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "jit_gl_texture", "" ],
									"patching_rect" : [ 51.642860054969788, 346.619042873382568, 335.0, 22.0 ],
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
									"id" : "obj-8",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 414.142860054969788, 169.619042873382568, 35.0, 22.0 ],
									"text" : "reset"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
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
									"frozen_object_attributes" : 									{
										"rect" : [ 952, 53, 1592, 533 ]
									}
,
									"id" : "obj-2",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "jit_matrix", "bang", "" ],
									"patching_rect" : [ 43.642860054969788, 191.738093018531799, 162.0, 22.0 ],
									"text" : "jit.world @fsaa 1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 51.642860054969788, 446.047614336013794, 300.0, 22.0 ],
									"text" : "jit.gl.meshwarp @show_ui 1 @meshdim 10 4 @layer 0",
									"varname" : "jit.gl.meshwarp"
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
									"destination" : [ "obj-16", 0 ],
									"source" : [ "obj-2", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 493.738093376159668, 229.619042873382568, 423.642860054969788, 229.619042873382568 ],
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 530.738093376159668, 229.619042873382568, 423.642860054969788, 229.619042873382568 ],
									"source" : [ "obj-27", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 324.166666666666742, 233.619042873382568, 423.642860054969788, 233.619042873382568 ],
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
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 423.642860054969788, 253.0, 423.642860054969788, 253.0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 0 ],
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
					"patching_rect" : [ 43.0, 56.0, 47.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p basic",
					"varname" : "basic"
				}

			}
 ],
		"lines" : [  ],
		"parameters" : 		{
			"obj-4::obj-41::obj-8" : [ "meshwarpjs[1]", "meshwarpjs[1]", 0 ],
			"obj-4::obj-43::obj-8" : [ "meshwarpjs[2]", "meshwarpjs[3]", 0 ],
			"obj-51::obj-1::obj-8" : [ "meshwarpjs", "meshwarpjs", 0 ],
			"obj-51::obj-9" : [ "toggle", "toggle", 0 ],
			"parameterbanks" : 			{

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "jit.gl.meshwarp.maxhelp.maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "Aspect[1]_20210728.maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "Zigzag[1].maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "jit.gl.meshwarp.maxhelp[2].maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "jit.gl.meshwarp.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/meshwarp/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "meshwarp.js",
				"bootpath" : "~/Documents/Max 8/Packages/meshwarp/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "meshwarp.vertex.edit.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/meshwarp/patchers",
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
									"meshdim" : [ 5, 4 ],
									"nurbs_order" : [ 1, 1 ],
									"layer" : 0,
									"lock_to_aspect" : 1,
									"color" : [ 1, 1, 1, 1 ],
									"ui_grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
									"show_ui" : 1,
									"point_size" : 10,
									"grid_size" : 3,
									"windowRatio" : 1.333333333333333,
									"positionMat" : 									{
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
							"meshwarpjs[1]" : [ 								{
									"meshdim" : [ 5, 4 ],
									"nurbs_order" : [ 1, 1 ],
									"layer" : 2,
									"lock_to_aspect" : 0,
									"color" : [ 1, 1, 1, 1 ],
									"ui_grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
									"show_ui" : 1,
									"point_size" : 10,
									"grid_size" : 3,
									"windowRatio" : 1.333333333333333,
									"positionMat" : 									{
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
							"meshwarpjs[2]" : [ 								{
									"meshdim" : [ 5, 4 ],
									"nurbs_order" : [ 1, 1 ],
									"layer" : 3,
									"lock_to_aspect" : 0,
									"color" : [ 1, 1, 1, 1 ],
									"ui_grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
									"show_ui" : 1,
									"point_size" : 10,
									"grid_size" : 3,
									"windowRatio" : 1.333333333333333,
									"positionMat" : 									{
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
			"snapshotlist" : 			{
				"current_snapshot" : 3,
				"entries" : [ 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "jit.gl.meshwarp.maxhelp",
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
												"ui_grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
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
													"dimensions" : [ 5, 4 ],
													"vertices" : "[[-1.244444489479065,-0.699999988079071,0],[-1.244444489479065,-0.23333333432674408,0],[-1.244444489479065,0.23333333432674408,0],[-1.244444489479065,0.699999988079071,0],[-0.6222222447395325,-0.699999988079071,0],[-0.6222222447395325,-0.23333333432674408,0],[-0.6222222447395325,0.23333333432674408,0],[-0.6222222447395325,0.699999988079071,0],[0,-0.699999988079071,0],[0,-0.23333333432674408,0],[0,0.23333333432674408,0],[0,0.699999988079071,0],[0.6222222447395325,-0.699999988079071,0],[0.6222222447395325,-0.23333333432674408,0],[0.6222222447395325,0.23333333432674408,0],[0.6222222447395325,0.699999988079071,0],[1.244444489479065,-0.699999988079071,0],[1.244444489479065,-0.23333333432674408,0],[1.244444489479065,0.23333333432674408,0],[1.244444489479065,0.699999988079071,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"meshdim" : [ 5, 4 ],
												"nurbs_order" : [ 1, 1 ],
												"layer" : 2,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"ui_grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
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
												"ui_grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
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
							"name" : "jit.gl.meshwarp.maxhelp",
							"filename" : "jit.gl.meshwarp.maxhelp.maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "fc3a50681efa11820184747794183978"
						}

					}
, 					{
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
												"nurbs_order" : [ 9, 3 ],
												"layer" : 0,
												"lock_to_aspect" : 0,
												"color" : [ 1, 1, 1, 1 ],
												"ui_grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
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
												"ui_grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
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
												"ui_grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
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
												"ui_grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
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
												"ui_grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
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
												"ui_grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
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
												"ui_grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
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
												"ui_grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
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
												"ui_grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
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
												"ui_grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
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
												"ui_grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
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
												"ui_grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
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
												"ui_grid_color" : [ 0.761174128706606, 0.551500914033326, 0.239160861127834, 1 ],
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
												"ui_grid_color" : [ 0.527467168596617, 0.572063340247159, 0.822540228100381, 1 ],
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
												"ui_grid_color" : [ 0.610534554316207, 0.972926125300246, 0.967845341685442, 1 ],
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
						"name" : "jit.gl.meshwarp.maxhelp[2]",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 0,
						"fileref" : 						{
							"name" : "jit.gl.meshwarp.maxhelp[2]",
							"filename" : "jit.gl.meshwarp.maxhelp[2].maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "4082200465cf287508e1e68d1bb2e6d2"
						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "jit.gl.meshwarp.maxhelp",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 0,
						"fileref" : 						{
							"name" : "jit.gl.meshwarp.maxhelp",
							"filename" : "jit.gl.meshwarp.maxhelp.maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "0e9c7d4d0916d1bebe103ade4eaffa6d"
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
