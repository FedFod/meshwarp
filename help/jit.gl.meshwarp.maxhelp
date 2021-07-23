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
		"rect" : [ 34.0, 87.0, 882.0, 573.0 ],
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
						"rect" : [ 0.0, 26.0, 882.0, 547.0 ],
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
									"patching_rect" : [ 538.0, 121.0, 202.0, 33.0 ],
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
									"patching_rect" : [ 21.5, 27.0, 417.0, 33.0 ],
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
						"rect" : [ 0.0, 26.0, 882.0, 547.0 ],
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
									"patching_rect" : [ 21.5, 27.0, 609.0, 33.0 ],
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
									"patching_rect" : [ 613.0, 109.619042873382568, 33.0, 22.0 ],
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
									"patching_rect" : [ 510.0, 109.619042873382568, 34.0, 22.0 ],
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
									"midpoints" : [ 519.5, 231.0, 64.142860054969788, 231.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 622.5, 231.0, 64.142860054969788, 231.0 ],
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
						"rect" : [ 0.0, 26.0, 882.0, 547.0 ],
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
									"id" : "obj-62",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 313.666666666666742, 235.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-60",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 313.666666666666742, 268.619042873382568, 61.0, 22.0 ],
									"text" : "enable $1"
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
									"patching_rect" : [ 197.666666666666686, 239.619042873382568, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 197.666666666666686, 268.619042873382568, 62.0, 22.0 ],
									"text" : "rotatez $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 722.0, 111.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 722.0, 143.0, 97.0, 22.0 ],
									"text" : "blend_enable $1"
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
									"parameter_enable" : 1,
									"patching_rect" : [ 427.30952672163653, 100.0, 128.0, 32.0 ],
									"saturation" : 1.0,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_invisible" : 1,
											"parameter_longname" : "swatch",
											"parameter_shortname" : "swatch",
											"parameter_type" : 3
										}

									}
,
									"varname" : "swatch"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-55",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 427.30952672163653, 143.0, 82.0, 22.0 ],
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
									"patching_rect" : [ 641.142860054969788, 115.380957126617432, 55.0, 24.0 ],
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
									"parameter_enable" : 1,
									"patching_rect" : [ 589.142860054969788, 115.380957126617432, 50.0, 22.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "number[5]",
											"parameter_mmax" : 1.0,
											"parameter_shortname" : "number[5]",
											"parameter_type" : 0
										}

									}
,
									"varname" : "number[5]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-45",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 589.142860054969788, 143.0, 81.0, 22.0 ],
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
									"patching_rect" : [ 27.916666666666515, 346.119050145149231, 110.0, 22.0 ],
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
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 207.166666666666686, 333.0, 37.416666666666515, 333.0 ],
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
									"midpoints" : [ 731.5, 193.0, 37.416666666666515, 193.0 ],
									"source" : [ "obj-2", 0 ]
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
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 598.642860054969788, 192.0, 37.416666666666515, 192.0 ],
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
									"destination" : [ "obj-2", 0 ],
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
									"midpoints" : [ 436.80952672163653, 192.0, 37.416666666666515, 192.0 ],
									"source" : [ "obj-55", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 323.166666666666742, 333.0, 37.416666666666515, 333.0 ],
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
					"patching_rect" : [ 186.0, 56.0, 89.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p \"gl attributes\""
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
						"rect" : [ 0.0, 26.0, 882.0, 547.0 ],
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
									"id" : "obj-52",
									"maxclass" : "swatch",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 636.30952672163653, 140.119050145149231, 128.0, 32.0 ],
									"saturation" : 1.0,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_invisible" : 1,
											"parameter_longname" : "swatch[1]",
											"parameter_shortname" : "swatch",
											"parameter_type" : 3
										}

									}
,
									"varname" : "swatch"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-55",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 636.30952672163653, 183.119050145149231, 125.0, 22.0 ],
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
									"patching_rect" : [ 37.166666666666515, 27.190485954284668, 557.0, 74.0 ],
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
									"patching_rect" : [ 592.357139945030212, 273.119050145149231, 199.0, 33.0 ],
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
									"patching_rect" : [ 458.0, 285.119050145149231, 122.0, 22.0 ],
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
									"name" : "change_vertex_pos_bpatcher.maxpat",
									"numinlets" : 5,
									"numoutlets" : 1,
									"offset" : [ 0.0, 0.0 ],
									"outlettype" : [ "" ],
									"patching_rect" : [ 458.0, 313.047614336013794, 313.0, 86.952385663986206 ],
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
									"patching_rect" : [ 297.5, 285.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-35",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 297.5, 320.119050145149231, 144.0, 22.0 ],
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
									"patching_rect" : [ 488.5, 148.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-28",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 488.5, 183.119050145149231, 144.0, 22.0 ],
									"text" : "show_position_handle $1"
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
									"patching_rect" : [ 276.5, 148.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-64",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 276.5, 184.119050145149231, 105.0, 22.0 ],
									"text" : "lock_to_aspect $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-20",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 417.5, 148.119050145149231, 24.0, 24.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_enum" : [ "off", "on" ],
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
									"id" : "obj-14",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 417.5, 183.119050145149231, 69.0, 22.0 ],
									"text" : "show_ui $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 20.666666666666515, 417.119050145149231, 110.0, 22.0 ],
									"text" : "s to_meshwarp_01"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-32",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 166.666666666666515, 125.0, 69.0, 20.0 ],
									"text" : "vertical dim"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-31",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 80.166666666666515, 125.023820519447327, 83.0, 20.0 ],
									"text" : "horizontal dim"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-25",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 172.666666666666515, 148.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-23",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 96.666666666666515, 148.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 20.666666666666515, 184.119050145149231, 171.0, 22.0 ],
									"text" : "pak meshdim 4 4"
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
									"midpoints" : [ 427.0, 259.0, 30.166666666666515, 259.0 ],
									"source" : [ "obj-14", 0 ]
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
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 498.0, 260.0, 30.166666666666515, 260.0 ],
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
									"midpoints" : [ 307.0, 386.0, 30.166666666666515, 386.0 ],
									"source" : [ "obj-35", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 467.5, 408.0, 30.166666666666515, 408.0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 30.166666666666515, 209.0, 30.166666666666515, 209.0 ],
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
									"midpoints" : [ 645.80952672163653, 261.0, 30.166666666666515, 261.0 ],
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
									"destination" : [ "obj-4", 0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 286.0, 261.0, 30.166666666666515, 261.0 ],
									"source" : [ "obj-64", 0 ]
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
						"rect" : [ 34.0, 113.0, 882.0, 547.0 ],
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
									"id" : "obj-17",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 429.0, 372.0, 92.0, 22.0 ],
									"text" : "write_ctl_matrix"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-18",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 351.142860054969788, 177.619042873382568, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 351.142860054969788, 201.619042873382568, 90.0, 22.0 ],
									"text" : "nurbs_order $1"
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
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 578.0, 139.119042873382568, 153.0, 37.0 ],
									"text" : "Undo latest GUI action. \nAlso with: ctrl/cmd + z"
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"id" : "obj-11",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 578.0, 180.738093018531799, 196.0, 37.0 ],
									"text" : "Redo latest undone GUI action. \nAlso with: ctrl/cmd + y"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-27",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 534.238093376159668, 188.238093018531799, 33.0, 22.0 ],
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
									"patching_rect" : [ 534.238093376159668, 146.619042873382568, 35.0, 22.0 ],
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
									"patching_rect" : [ 21.0, 70.0, 516.0, 33.0 ],
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
									"patching_rect" : [ 21.0, 19.0, 241.0, 42.0 ],
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
									"patching_rect" : [ 80.642860054969788, 428.0, 108.0, 22.0 ],
									"text" : "r to_meshwarp_01"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 464.142860054969788, 245.619042873382568, 110.0, 22.0 ],
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
									"patching_rect" : [ 115.142860054969788, 222.738093018531799, 80.0, 35.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 464.142860054969788, 146.619042873382568, 35.0, 22.0 ],
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
										"rect" : [ 951, 44, 1591, 524 ]
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
									"patching_rect" : [ 51.642860054969788, 468.047614336013794, 438.0, 22.0 ],
									"text" : "jit.gl.meshwarp @show_ui 1 @meshdim 5 4 @layer 0 @show_position_handle 1",
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
									"destination" : [ "obj-3", 0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-17", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-18", 0 ]
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
									"midpoints" : [ 543.738093376159668, 177.0, 510.0, 177.0, 510.0, 228.0, 473.642860054969788, 228.0 ],
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 543.738093376159668, 228.0, 473.642860054969788, 228.0 ],
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
									"midpoints" : [ 473.642860054969788, 230.0, 473.642860054969788, 230.0 ],
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
			"obj-1::obj-20" : [ "toggle[1]", "toggle[1]", 0 ],
			"obj-1::obj-52" : [ "swatch[1]", "swatch", 0 ],
			"obj-2::obj-50" : [ "number[5]", "number[5]", 0 ],
			"obj-2::obj-52" : [ "swatch", "swatch", 0 ],
			"obj-4::obj-41::obj-8" : [ "meshwarpjs[1]", "meshwarpjs[1]", 0 ],
			"obj-4::obj-43::obj-8" : [ "meshwarpjs[2]", "meshwarpjs[2]", 0 ],
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
				"patcherrelativepath" : "../../../../Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "jit.gl.meshwarp.maxhelp[2].maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "straight[1].maxsnap",
				"bootpath" : "~/Documents/Max 8/Snapshots",
				"patcherrelativepath" : "../../../../Documents/Max 8/Snapshots",
				"type" : "mx@s",
				"implicit" : 1
			}
, 			{
				"name" : "jit.gl.meshwarp.maxpat",
				"bootpath" : "~/dev/cycling/meshwarp/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "meshwarp.js",
				"bootpath" : "~/dev/cycling/meshwarp/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "change_vertex_pos_bpatcher.maxpat",
				"bootpath" : "~/dev/cycling/meshwarp/patchers",
				"patcherrelativepath" : "../patchers",
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
						"number[5]" : 0.0,
						"toggle" : 1.0,
						"toggle[1]" : 0.0,
						"blob" : 						{
							"meshwarpjs" : [ 								{
									"show_ui" : 0,
									"windowRatio" : 1.54635761589404,
									"use_nurbs" : 1,
									"mesh_color" : [ 1, 1, 1, 1 ],
									"positionMat" : 									{
										"scale" : [ 1.1597255203459, 0.520309090614319 ],
										"center" : [ -0.033333310857415, 0.191666603088379 ],
										"planecount" : 3,
										"type" : "float32",
										"dimensions" : [ 30, 4 ],
										"nurbs_order" : [ 1, 1 ],
										"vertices" : "[[-1.3466310501098633,-0.6824366450309753,0],[-1.2618900537490845,0.018230199813842773,0],[-1.193058967590332,0.36510300636291504,0],[-1.1423600912094116,0.6009924411773682,0],[-1.2424678802490234,-0.6494749188423157,0],[-1.1403729915618896,0.020028620958328247,0],[-1.114501953125,0.3969067931175232,0],[-1.0889301300048828,0.7356008887290955,0],[-1.1383048295974731,-0.616513192653656,0],[-1.0342586040496826,0.021558046340942383,0],[-1.035944938659668,0.42871057987213135,0],[-1.005933403968811,0.7840165495872498,0],[-1.0341416597366333,-0.5835515260696411,0],[-0.952881932258606,-0.004574835300445557,0],[-0.9573879241943359,0.4605143666267395,0],[-0.9229364991188049,0.8324320316314697,0],[-0.929978609085083,-0.5505898594856262,0],[-0.8658248782157898,0.01140071451663971,0],[-0.8788310289382935,0.49231818318367004,0],[-0.8399396538734436,0.880847692489624,0],[-0.8258154988288879,-0.5176281332969666,0],[-0.7485803961753845,0.026134327054023743,0],[-0.8002740740776062,0.5241219401359558,0],[-0.756942868232727,0.929263174533844,0],[-0.7216523289680481,-0.48466652631759644,0],[-0.6750508546829224,0.028406009078025818,0],[-0.7217170596122742,0.555925726890564,0],[-0.6739461421966553,0.9776788353919983,0],[-0.6166122555732727,-0.45365530252456665,0],[-0.6291344165802002,0.026150479912757874,0],[-0.6428415179252625,0.5846806764602661,0],[-0.5932690501213074,1.0123136043548584,0],[-0.49264535307884216,-0.38275837898254395,0],[-0.5509163737297058,0.038773104548454285,0],[-0.5635350346565247,0.6093107461929321,0],[-0.5157303214073181,1.0283039808273315,0],[-0.3697781562805176,-0.38059568405151367,0],[-0.44717973470687866,-0.011688068509101868,0],[-0.4835539758205414,0.6274843215942383,0],[-0.4431037902832031,1.0151114463806152,0],[-0.33561185002326965,-0.39511531591415405,0],[-0.3848367929458618,0.09355417639017105,0],[-0.40357285737991333,0.6456579566001892,0],[-0.37047725915908813,1.0019190311431885,0],[-0.1861342191696167,-0.44578057527542114,0],[-0.28110015392303467,0.08479925245046616,0],[-0.32359182834625244,0.6638315916061401,0],[-0.2978507876396179,0.9887265563011169,0],[-0.07805042713880539,-0.44639819860458374,0],[-0.19510367512702942,0.12331143766641617,0],[-0.24361076951026917,0.6820051670074463,0],[-0.22522428631782532,0.9755340814590454,0],[0.030033357441425323,-0.44701582193374634,0],[-0.11206395924091339,0.11455652117729187,0],[-0.1636296510696411,0.7001788020133972,0],[-0.1525978147983551,0.9623417258262634,0],[0.14167794585227966,-0.4521082639694214,0],[-0.03287245333194733,0.08406969159841537,0],[-0.08084961771965027,0.7083435654640198,0],[-0.07881622016429901,0.9467005133628845,0],[0.2632930278778076,-0.469730019569397,0],[0.011890444904565811,0.17957745492458344,0],[0.009767621755599976,0.6884839534759521,0],[-0.0018004067242145538,0.9242023825645447,0],[0.39487841725349426,-0.4998810887336731,0],[0.06953182071447372,0.1369400918483734,0],[0.10822203010320663,0.6405999064445496,0],[0.07844966650009155,0.8948474526405334,0],[0.5300246477127075,-0.5345070958137512,0],[0.1233249381184578,0.08369240164756775,0],[0.20947536826133728,0.5827069282531738,0],[0.15985476970672607,0.8630436062812805,0],[0.6651709079742432,-0.5691329836845398,0],[0.17711806297302246,0.030444741249084473,0],[0.3107288181781769,0.5248141884803772,0],[0.24125996232032776,0.8312398791313171,0],[0.8003171682357788,-0.6037589311599731,0],[0.2309112250804901,-0.02280294895172119,0],[0.4119822084903717,0.46692129969596863,0],[0.32266512513160706,0.799436092376709,0],[0.9354633688926697,-0.6383848190307617,0],[0.2847043573856354,-0.07605060935020447,0],[0.5132356286048889,0.40902847051620483,0],[0.40407025814056396,0.7676323056221008,0],[1.07060968875885,-0.6730107069015503,0],[0.33849748969078064,-0.12929826974868774,0],[0.614488959312439,0.35113558173179626,0],[0.48547542095184326,0.7358285188674927,0],[1.2512568235397339,-0.6823537349700928,0],[0.41272640228271484,-0.1376763880252838,0],[0.7046213746070862,0.3296143114566803,0],[0.5662059783935547,0.7190897464752197,0],[1.1692570447921753,-0.6033350229263306,0],[0.5000114440917969,-0.11738783121109009,0],[0.7876486778259277,0.33133041858673096,0],[0.6465057134628296,0.7119757533073425,0],[1.167087197303772,-0.5268189907073975,0],[0.5969467163085938,-0.07591089606285095,0],[0.865424394607544,0.3502219319343567,0],[0.7264868021011353,0.7119757533073425,0],[1.1649174690246582,-0.45030301809310913,0],[0.6938820481300354,-0.034433916211128235,0],[0.9431999921798706,0.3691135048866272,0],[0.8064679503440857,0.7119757533073425,0],[1.139876365661621,-0.37074655294418335,0],[0.7908173203468323,0.007043033838272095,0],[1.0209758281707764,0.38800501823425293,0],[0.8864489793777466,0.7119757533073425,0],[1.1948847770690918,-0.2881496846675873,0],[0.8877527117729187,0.04851999878883362,0],[1.0987515449523926,0.40689659118652344,0],[0.966430127620697,0.7119757533073425,0],[1.1584079265594482,-0.22075477242469788,0],[0.9846880435943604,0.08999694138765335,0],[1.1765272617340088,0.42578810453414917,0],[1.0464112758636475,0.7119757533073425,0],[1.156238079071045,-0.14423871040344238,0],[1.0816231966018677,0.13147389888763428,0],[1.254302978515625,0.44467970728874207,0],[1.1263923645019531,0.7119757533073425,0]]"
									}

								}
 ],
							"meshwarpjs[1]" : [ 								{
									"show_ui" : 1,
									"windowRatio" : 1.54635761589404,
									"use_nurbs" : 1,
									"mesh_color" : [ 1, 1, 1, 1 ],
									"positionMat" : 									{
										"scale" : [ 0.582781374454498, 0.139072716236115 ],
										"center" : [ -0.158940225839615, -0.675496697425842 ],
										"planecount" : 3,
										"type" : "float32",
										"dimensions" : [ 5, 4 ],
										"nurbs_order" : [ 1, 1 ],
										"vertices" : "[[-1.3444840908050537,-0.7704731822013855,0],[-1.0714091062545776,-0.6879341006278992,0],[-0.9115605354309082,-0.6020029783248901,0],[-0.7417212724685669,-0.5364239811897278,0],[-0.45033106207847595,-0.8145694732666016,0],[-0.45033106207847595,-0.7218542695045471,0],[-0.45033106207847595,-0.6291391253471375,0],[-0.4736422300338745,-0.3939591646194458,0],[-0.15894019603729248,-0.8145694732666016,0],[-0.15894019603729248,-0.7218542695045471,0],[-0.15894019603729248,-0.6291391253471375,0],[-0.18891187012195587,-0.45501548051834106,0],[0.1324504315853119,-0.8145694732666016,0],[0.1324504315853119,-0.7218542695045471,0],[0.1324504315853119,-0.6291391253471375,0],[0.14577114582061768,-0.47875964641571045,0],[1.195364236831665,-0.8642383813858032,0],[1.192052960395813,-0.8178808093070984,0],[1.192052960395813,-0.7715232372283936,0],[1.1887227296829224,-0.6859151124954224,0]]"
									}

								}
 ],
							"meshwarpjs[2]" : [ 								{
									"show_ui" : 1,
									"windowRatio" : 1.54635761589404,
									"use_nurbs" : 1,
									"mesh_color" : [ 1, 1, 1, 1 ],
									"positionMat" : 									{
										"scale" : [ 0.413907110691071, 0.228476762771606 ],
										"center" : [ 1.049668814986944, 0.738410711521283 ],
										"planecount" : 3,
										"type" : "float32",
										"dimensions" : [ 5, 4 ],
										"nurbs_order" : [ 1, 1 ],
										"vertices" : "[[0.31788089871406555,0.8278147578239441,0],[0.31788089871406555,0.980132520198822,0],[0.41390731930732727,0.9801324009895325,0],[0.4900662302970886,0.9801326394081116,0],[0.581125795841217,0.741722047328949,0],[0.591059684753418,0.8178809285163879,0],[0.5579468607902527,0.9139073491096497,0],[0.5579470992088318,0.9801325798034668,0],[0.7483443021774292,0.7251657843589783,0],[0.735099196434021,0.8112582564353943,0],[0.8211920261383057,0.8774834871292114,0],[0.7649006843566895,0.9801325798034668,0],[0.9453639984130859,0.7218545079231262,0],[0.9420523643493652,0.8112582564353943,0],[0.9685426950454712,0.8774833679199219,0],[0.9718542098999023,0.9801325798034668,0],[1.1324498653411865,0.708609402179718,0],[1.135761022567749,0.7913908362388611,0],[1.1556286811828613,0.9139072895050049,0],[1.1788077354431152,0.9801325798034668,0]]"
									}

								}
 ],
							"swatch" : [ 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0 ],
							"swatch[1]" : [ 0.819940634071827, 0.0, 0.011896572018789, 1.0, 0.997581822487215, 1.0, 0.409970317035913 ]
						}

					}

				}

			}
,
			"snapshotlist" : 			{
				"current_snapshot" : 1,
				"entries" : [ 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "straight",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"number[5]" : 0.0,
									"toggle" : 1.0,
									"toggle[1]" : 0.0,
									"toggle[4]" : 1.0,
									"toggle[5]" : 0.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"show_ui" : 1,
												"windowRatio" : 1.333333333333333,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.566666603088379, 0.354166686534882 ],
													"center" : [ -0.608333349227905, 0.416666626930237 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[-1.1749999523162842,0.062499940395355225,0],[-1.1749999523162842,0.298611044883728,0],[-1.1749999523162842,0.5347222089767456,0],[-1.1749999523162842,0.7708333730697632,0],[-0.8916667103767395,0.062499940395355225,0],[-0.8916667103767395,0.298611044883728,0],[-0.8916667103767395,0.5347222089767456,0],[-0.8916667103767395,0.7708333730697632,0],[-0.60833340883255,0.062499940395355225,0],[-0.60833340883255,0.298611044883728,0],[-0.60833340883255,0.5347222089767456,0],[-0.60833340883255,0.7708333730697632,0],[-0.3250001072883606,0.062499940395355225,0],[-0.3250001072883606,0.298611044883728,0],[-0.3250001072883606,0.5347222089767456,0],[-0.3250001072883606,0.7708333730697632,0],[-0.04166676104068756,0.062499940395355225,0],[-0.04166676104068756,0.298611044883728,0],[-0.04166676104068756,0.5347222089767456,0],[-0.04166676104068756,0.7708333730697632,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"show_ui" : 1,
												"windowRatio" : 1.333333333333333,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.495833218097687, 0.362500041723251 ],
													"center" : [ -0.020833417773247, -0.479166684672236 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[-0.516666829586029,-0.8416666984558105,0],[-0.516666829586029,-0.6000000238418579,0],[-0.516666829586029,-0.3583333492279053,0],[-0.516666829586029,-0.11666667461395264,0],[-0.26875001192092896,-0.8416666984558105,0],[-0.26875001192092896,-0.6000000238418579,0],[-0.26875001192092896,-0.3583333492279053,0],[-0.26875001192092896,-0.11666667461395264,0],[-0.020833391696214676,-0.8416666984558105,0],[-0.020833391696214676,-0.6000000238418579,0],[-0.020833391696214676,-0.3583333492279053,0],[-0.020833391696214676,-0.11666667461395264,0],[0.2270832061767578,-0.8416666984558105,0],[0.2270832061767578,-0.6000000238418579,0],[0.2270832061767578,-0.3583333492279053,0],[0.2270832061767578,-0.11666667461395264,0],[0.47499993443489075,-0.8416666984558105,0],[0.47499993443489075,-0.6000000238418579,0],[0.47499993443489075,-0.3583333492279053,0],[0.47499993443489075,-0.11666667461395264,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"show_ui" : 1,
												"windowRatio" : 1.333333333333333,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.491666495800018, 0.39166671782732 ],
													"center" : [ 0.708333073183894, 0.416666597127914 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[0.21666660904884338,0.024999886751174927,0],[0.21666660904884338,0.2861109972000122,0],[0.21666660904884338,0.5472222566604614,0],[0.21666660904884338,0.8083332777023315,0],[0.46249985694885254,0.024999886751174927,0],[0.46249985694885254,0.2861109972000122,0],[0.46249985694885254,0.5472222566604614,0],[0.46249985694885254,0.8083332777023315,0],[0.7083330750465393,0.024999886751174927,0],[0.7083330750465393,0.2861109972000122,0],[0.7083330750465393,0.5472222566604614,0],[0.7083330750465393,0.8083332777023315,0],[0.95416659116745,0.024999886751174927,0],[0.95416659116745,0.2861109972000122,0],[0.95416659116745,0.5472222566604614,0],[0.95416659116745,0.8083332777023315,0],[1.200000286102295,0.024999886751174927,0],[1.200000286102295,0.2861109972000122,0],[1.200000286102295,0.5472222566604614,0],[1.200000286102295,0.8083332777023315,0]]"
												}

											}
 ],
										"swatch" : [ 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0 ]
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
						"name" : "bendy",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"fileref" : 						{
							"name" : "jit.gl.meshwarp.maxhelp[2]",
							"filename" : "jit.gl.meshwarp.maxhelp[2].maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "91755cfe2176b3b5f9b366b7afcd11f7"
						}
,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"number[5]" : 0.0,
									"toggle" : 1.0,
									"toggle[1]" : 0.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"show_ui" : 0,
												"windowRatio" : 1.54635761589404,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 1.1597255203459, 0.520309090614319 ],
													"center" : [ -0.033333310857415, 0.191666603088379 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 30, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[-1.3466310501098633,-0.6824366450309753,0],[-1.2618900537490845,0.018230199813842773,0],[-1.193058967590332,0.36510300636291504,0],[-1.1423600912094116,0.6009924411773682,0],[-1.2424678802490234,-0.6494749188423157,0],[-1.1403729915618896,0.020028620958328247,0],[-1.114501953125,0.3969067931175232,0],[-1.0889301300048828,0.7356008887290955,0],[-1.1383048295974731,-0.616513192653656,0],[-1.0342586040496826,0.021558046340942383,0],[-1.035944938659668,0.42871057987213135,0],[-1.005933403968811,0.7840165495872498,0],[-1.0341416597366333,-0.5835515260696411,0],[-0.952881932258606,-0.004574835300445557,0],[-0.9573879241943359,0.4605143666267395,0],[-0.9229364991188049,0.8324320316314697,0],[-0.929978609085083,-0.5505898594856262,0],[-0.8658248782157898,0.01140071451663971,0],[-0.8788310289382935,0.49231818318367004,0],[-0.8399396538734436,0.880847692489624,0],[-0.8258154988288879,-0.5176281332969666,0],[-0.7485803961753845,0.026134327054023743,0],[-0.8002740740776062,0.5241219401359558,0],[-0.756942868232727,0.929263174533844,0],[-0.7216523289680481,-0.48466652631759644,0],[-0.6750508546829224,0.028406009078025818,0],[-0.7217170596122742,0.555925726890564,0],[-0.6739461421966553,0.9776788353919983,0],[-0.6166122555732727,-0.45365530252456665,0],[-0.6291344165802002,0.026150479912757874,0],[-0.6428415179252625,0.5846806764602661,0],[-0.5932690501213074,1.0123136043548584,0],[-0.49264535307884216,-0.38275837898254395,0],[-0.5509163737297058,0.038773104548454285,0],[-0.5635350346565247,0.6093107461929321,0],[-0.5157303214073181,1.0283039808273315,0],[-0.3697781562805176,-0.38059568405151367,0],[-0.44717973470687866,-0.011688068509101868,0],[-0.4835539758205414,0.6274843215942383,0],[-0.4431037902832031,1.0151114463806152,0],[-0.33561185002326965,-0.39511531591415405,0],[-0.3848367929458618,0.09355417639017105,0],[-0.40357285737991333,0.6456579566001892,0],[-0.37047725915908813,1.0019190311431885,0],[-0.1861342191696167,-0.44578057527542114,0],[-0.28110015392303467,0.08479925245046616,0],[-0.32359182834625244,0.6638315916061401,0],[-0.2978507876396179,0.9887265563011169,0],[-0.07805042713880539,-0.44639819860458374,0],[-0.19510367512702942,0.12331143766641617,0],[-0.24361076951026917,0.6820051670074463,0],[-0.22522428631782532,0.9755340814590454,0],[0.030033357441425323,-0.44701582193374634,0],[-0.11206395924091339,0.11455652117729187,0],[-0.1636296510696411,0.7001788020133972,0],[-0.1525978147983551,0.9623417258262634,0],[0.14167794585227966,-0.4521082639694214,0],[-0.03287245333194733,0.08406969159841537,0],[-0.08084961771965027,0.7083435654640198,0],[-0.07881622016429901,0.9467005133628845,0],[0.2632930278778076,-0.469730019569397,0],[0.011890444904565811,0.17957745492458344,0],[0.009767621755599976,0.6884839534759521,0],[-0.0018004067242145538,0.9242023825645447,0],[0.39487841725349426,-0.4998810887336731,0],[0.06953182071447372,0.1369400918483734,0],[0.10822203010320663,0.6405999064445496,0],[0.07844966650009155,0.8948474526405334,0],[0.5300246477127075,-0.5345070958137512,0],[0.1233249381184578,0.08369240164756775,0],[0.20947536826133728,0.5827069282531738,0],[0.15985476970672607,0.8630436062812805,0],[0.6651709079742432,-0.5691329836845398,0],[0.17711806297302246,0.030444741249084473,0],[0.3107288181781769,0.5248141884803772,0],[0.24125996232032776,0.8312398791313171,0],[0.8003171682357788,-0.6037589311599731,0],[0.2309112250804901,-0.02280294895172119,0],[0.4119822084903717,0.46692129969596863,0],[0.32266512513160706,0.799436092376709,0],[0.9354633688926697,-0.6383848190307617,0],[0.2847043573856354,-0.07605060935020447,0],[0.5132356286048889,0.40902847051620483,0],[0.40407025814056396,0.7676323056221008,0],[1.07060968875885,-0.6730107069015503,0],[0.33849748969078064,-0.12929826974868774,0],[0.614488959312439,0.35113558173179626,0],[0.48547542095184326,0.7358285188674927,0],[1.2512568235397339,-0.6823537349700928,0],[0.41272640228271484,-0.1376763880252838,0],[0.7046213746070862,0.3296143114566803,0],[0.5662059783935547,0.7190897464752197,0],[1.1692570447921753,-0.6033350229263306,0],[0.5000114440917969,-0.11738783121109009,0],[0.7876486778259277,0.33133041858673096,0],[0.6465057134628296,0.7119757533073425,0],[1.167087197303772,-0.5268189907073975,0],[0.5969467163085938,-0.07591089606285095,0],[0.865424394607544,0.3502219319343567,0],[0.7264868021011353,0.7119757533073425,0],[1.1649174690246582,-0.45030301809310913,0],[0.6938820481300354,-0.034433916211128235,0],[0.9431999921798706,0.3691135048866272,0],[0.8064679503440857,0.7119757533073425,0],[1.139876365661621,-0.37074655294418335,0],[0.7908173203468323,0.007043033838272095,0],[1.0209758281707764,0.38800501823425293,0],[0.8864489793777466,0.7119757533073425,0],[1.1948847770690918,-0.2881496846675873,0],[0.8877527117729187,0.04851999878883362,0],[1.0987515449523926,0.40689659118652344,0],[0.966430127620697,0.7119757533073425,0],[1.1584079265594482,-0.22075477242469788,0],[0.9846880435943604,0.08999694138765335,0],[1.1765272617340088,0.42578810453414917,0],[1.0464112758636475,0.7119757533073425,0],[1.156238079071045,-0.14423871040344238,0],[1.0816231966018677,0.13147389888763428,0],[1.254302978515625,0.44467970728874207,0],[1.1263923645019531,0.7119757533073425,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"show_ui" : 1,
												"windowRatio" : 1.54635761589404,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.582781374454498, 0.139072716236115 ],
													"center" : [ -0.158940225839615, -0.675496697425842 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[-1.3444840908050537,-0.7704731822013855,0],[-1.0714091062545776,-0.6879341006278992,0],[-0.9115605354309082,-0.6020029783248901,0],[-0.7417212724685669,-0.5364239811897278,0],[-0.45033106207847595,-0.8145694732666016,0],[-0.45033106207847595,-0.7218542695045471,0],[-0.45033106207847595,-0.6291391253471375,0],[-0.4736422300338745,-0.3939591646194458,0],[-0.15894019603729248,-0.8145694732666016,0],[-0.15894019603729248,-0.7218542695045471,0],[-0.15894019603729248,-0.6291391253471375,0],[-0.18891187012195587,-0.45501548051834106,0],[0.1324504315853119,-0.8145694732666016,0],[0.1324504315853119,-0.7218542695045471,0],[0.1324504315853119,-0.6291391253471375,0],[0.14577114582061768,-0.47875964641571045,0],[1.195364236831665,-0.8642383813858032,0],[1.192052960395813,-0.8178808093070984,0],[1.192052960395813,-0.7715232372283936,0],[1.1887227296829224,-0.6859151124954224,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"show_ui" : 1,
												"windowRatio" : 1.54635761589404,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.413907110691071, 0.228476762771606 ],
													"center" : [ 1.049668814986944, 0.738410711521283 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[0.31788089871406555,0.8278147578239441,0],[0.31788089871406555,0.980132520198822,0],[0.41390731930732727,0.9801324009895325,0],[0.4900662302970886,0.9801326394081116,0],[0.581125795841217,0.741722047328949,0],[0.591059684753418,0.8178809285163879,0],[0.5579468607902527,0.9139073491096497,0],[0.5579470992088318,0.9801325798034668,0],[0.7483443021774292,0.7251657843589783,0],[0.735099196434021,0.8112582564353943,0],[0.8211920261383057,0.8774834871292114,0],[0.7649006843566895,0.9801325798034668,0],[0.9453639984130859,0.7218545079231262,0],[0.9420523643493652,0.8112582564353943,0],[0.9685426950454712,0.8774833679199219,0],[0.9718542098999023,0.9801325798034668,0],[1.1324498653411865,0.708609402179718,0],[1.135761022567749,0.7913908362388611,0],[1.1556286811828613,0.9139072895050049,0],[1.1788077354431152,0.9801325798034668,0]]"
												}

											}
 ],
										"swatch" : [ 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0 ],
										"swatch[1]" : [ 0.819940634071827, 0.0, 0.011896572018789, 1.0, 0.997581822487215, 1.0, 0.409970317035913 ]
									}

								}

							}

						}

					}
, 					{
						"filetype" : "C74Snapshot",
						"version" : 2,
						"minorversion" : 0,
						"name" : "zigzag",
						"origin" : "jit.gl.meshwarp.maxhelp",
						"type" : "patcher",
						"subtype" : "Undefined",
						"embed" : 1,
						"snapshot" : 						{
							"valuedictionary" : 							{
								"parameter_values" : 								{
									"number[5]" : 0.0,
									"toggle" : 1.0,
									"toggle[1]" : 0.0,
									"blob" : 									{
										"meshwarpjs" : [ 											{
												"show_ui" : 0,
												"windowRatio" : 1.333333333333333,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.812499804422259, 0.412500023841858 ],
													"center" : [ -0.016666729468852, -0.145833387970924 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[-0.4583336114883423,-0.8208334445953369,0],[-1.0958331823349,-0.30833345651626587,0],[-0.5874997973442078,0.20833329856395721,0],[-1.1666669845581055,0.7749998569488525,0],[-0.05208328366279602,-0.8208334445953369,0],[-0.6895832419395447,-0.30833345651626587,0],[-0.18124988675117493,0.20833329856395721,0],[-0.7604166269302368,0.7749998569488525,0],[0.3541664183139801,-0.8208334445953369,0],[-0.283333420753479,-0.30833345651626587,0],[0.22499997913837433,0.20833329856395721,0],[-0.35416674613952637,0.7749998569488525,0],[0.7604164481163025,-0.8208334445953369,0],[0.12291651219129562,-0.30833345651626587,0],[0.6312498450279236,0.20833329856395721,0],[0.05208311975002289,0.7749998569488525,0],[1.1666662693023682,-0.8208334445953369,0],[0.5291662812232971,-0.30833345651626587,0],[1.0374996662139893,0.20833329856395721,0],[0.45833322405815125,0.7749998569488525,0]]"
												}

											}
 ],
										"meshwarpjs[1]" : [ 											{
												"show_ui" : 1,
												"windowRatio" : 1,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.495833218097687, 0.362500041723251 ],
													"center" : [ -0.637500014156103, -0.600000021979212 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[-1.1333335638046265,-0.9624999165534973,0],[-1.1333335638046265,-0.7208332419395447,0],[-1.1333335638046265,-0.4791666865348816,0],[-1.1333335638046265,-0.23750001192092896,0],[-0.8854166865348816,-0.8083332180976868,0],[-0.8854166865348816,-0.5666666626930237,0],[-0.8854166865348816,-0.32499998807907104,0],[-0.8854166865348816,-0.08333331346511841,0],[-0.6375001072883606,-0.9624999165534973,0],[-0.6375001072883606,-0.7208332419395447,0],[-0.6375001072883606,-0.4791666865348816,0],[-0.6375001072883606,-0.23750001192092896,0],[-0.39374998211860657,-0.8041666150093079,0],[-0.39374998211860657,-0.5625000596046448,0],[-0.39374998211860657,-0.32083338499069214,0],[-0.39374998211860657,-0.0791667103767395,0],[-0.14166666567325592,-0.9624999165534973,0],[-0.14166666567325592,-0.7208332419395447,0],[-0.14166666567325592,-0.4791666865348816,0],[-0.14166666567325592,-0.23750001192092896,0]]"
												}

											}
 ],
										"meshwarpjs[2]" : [ 											{
												"show_ui" : 1,
												"windowRatio" : 1,
												"use_nurbs" : 1,
												"mesh_color" : [ 1, 1, 1, 1 ],
												"positionMat" : 												{
													"scale" : [ 0.491666495800018, 0.39166671782732 ],
													"center" : [ 0.708333073183894, 0.416666597127914 ],
													"planecount" : 3,
													"type" : "float32",
													"dimensions" : [ 5, 4 ],
													"nurbs_order" : [ 1, 1 ],
													"vertices" : "[[0.21666660904884338,0.024999886751174927,0],[0.06666667014360428,0.29027771949768066,0],[0.06666667014360428,0.5513889789581299,0],[0.21666660904884338,0.8083332777023315,0],[0.46249985694885254,0.024999886751174927,0],[0.370833158493042,0.2902776002883911,0],[0.370833158493042,0.5513888597488403,0],[0.46249985694885254,0.8083332777023315,0],[0.7083330750465393,0.024999886751174927,0],[0.6166663765907288,0.2902776002883911,0],[0.6166663765907288,0.5513888597488403,0],[0.7083330750465393,0.8083332777023315,0],[0.95416659116745,0.024999886751174927,0],[0.858333170413971,0.3986109495162964,0],[0.858333170413971,0.6597222089767456,0],[0.95416659116745,0.8083332777023315,0],[1.200000286102295,0.024999886751174927,0],[1.200000286102295,0.2861109972000122,0],[1.200000286102295,0.5472222566604614,0],[1.200000286102295,0.8083332777023315,0]]"
												}

											}
 ],
										"swatch" : [ 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0 ],
										"swatch[1]" : [ 0.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.5 ]
									}

								}

							}

						}
,
						"fileref" : 						{
							"name" : "zigzag",
							"filename" : "straight[1].maxsnap",
							"filepath" : "~/Documents/Max 8/Snapshots",
							"filepos" : -1,
							"snapshotfileid" : "c455d7169967d6e31515d2e1f3e88d96"
						}

					}
 ]
			}

		}

	}

}
