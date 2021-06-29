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
		"rect" : [ 93.0, 84.0, 1020.0, 702.0 ],
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
						"rect" : [ 0.0, 26.0, 1020.0, 676.0 ],
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
									"id" : "obj-5",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 154.380953431129456, 119.0, 61.0, 22.0 ],
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
									"patching_rect" : [ 61.380953431129456, 89.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 61.380953431129456, 119.0, 77.0, 22.0 ],
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
									"patching_rect" : [ 545.380953431129456, 200.666657209396362, 352.0, 22.0 ],
									"text" : "jit.gl.meshwarp @show_ui1 @meshdim 5 4 @layer 3 @enable 0",
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
									"patching_rect" : [ 61.380953431129456, 200.666657209396362, 355.0, 22.0 ],
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
									"patching_rect" : [ 545.380953431129456, 167.619042873382568, 391.0, 22.0 ],
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
									"patching_rect" : [ 61.380953431129456, 167.619042873382568, 417.0, 22.0 ],
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
									"patching_rect" : [ 21.5, 27.0, 609.0, 34.0 ],
									"text" : "You can use multiple \"jit.gl.meshwarp\" objects at the same time.\nTo select one click on the shape in the rendering window using the mouse. "
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-22", 0 ],
									"midpoints" : [ 70.880953431129456, 144.0, 70.880953431129456, 144.0 ],
									"order" : 1,
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-38", 0 ],
									"midpoints" : [ 70.880953431129456, 153.0, 554.880953431129456, 153.0 ],
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
									"midpoints" : [ 163.880953431129456, 153.0, 48.0, 153.0, 48.0, 195.0, 70.880953431129456, 195.0 ],
									"order" : 1,
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"midpoints" : [ 163.880953431129456, 153.0, 531.0, 153.0, 531.0, 195.0, 554.880953431129456, 195.0 ],
									"order" : 0,
									"source" : [ "obj-5", 0 ]
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
					"patching_rect" : [ 390.0, 56.0, 128.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p multiple_meshwarps"
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
						"rect" : [ 0.0, 26.0, 1020.0, 676.0 ],
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
					"patching_rect" : [ 294.0, 56.0, 73.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p save_load"
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
						"rect" : [ 0.0, 26.0, 1020.0, 676.0 ],
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
									"patching_rect" : [ 345.666666666666742, 205.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-60",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 345.666666666666742, 238.619042873382568, 61.0, 22.0 ],
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
									"patching_rect" : [ 229.666666666666686, 209.619042873382568, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 229.666666666666686, 238.619042873382568, 62.0, 22.0 ],
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
									"patching_rect" : [ 754.0, 81.0, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 754.0, 113.0, 97.0, 22.0 ],
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
									"patching_rect" : [ 46.0, 82.119050145149231, 50.0, 22.0 ]
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
									"patching_rect" : [ 459.30952672163653, 70.0, 128.0, 32.0 ],
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
									"patching_rect" : [ 459.30952672163653, 113.0, 82.0, 22.0 ],
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
									"patching_rect" : [ 673.142860054969788, 85.380957126617432, 55.0, 24.0 ],
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
									"patching_rect" : [ 621.142860054969788, 85.380957126617432, 50.0, 22.0 ],
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
									"patching_rect" : [ 621.142860054969788, 113.0, 81.0, 22.0 ],
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
									"patching_rect" : [ 356.666666666666686, 73.85714316368103, 50.0, 22.0 ]
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
									"patching_rect" : [ 293.166666666666686, 73.85714316368103, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-29",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 229.666666666666686, 116.119050145149231, 146.0, 22.0 ],
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
									"patching_rect" : [ 166.166666666666515, 82.119050145149231, 50.0, 22.0 ]
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
									"patching_rect" : [ 112.541666666666515, 82.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-17",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 59.916666666666515, 116.119050145149231, 124.25, 22.0 ],
									"text" : "pak scale 1. 1."
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 59.916666666666515, 316.119050145149231, 110.0, 22.0 ],
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
									"midpoints" : [ 239.166666666666686, 303.0, 69.416666666666515, 303.0 ],
									"source" : [ "obj-14", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 69.416666666666515, 141.0, 69.416666666666515, 141.0 ],
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
									"midpoints" : [ 763.5, 163.0, 69.416666666666515, 163.0 ],
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
									"midpoints" : [ 239.166666666666686, 163.0, 69.416666666666515, 163.0 ],
									"source" : [ "obj-29", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 630.642860054969788, 162.0, 69.416666666666515, 162.0 ],
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
									"midpoints" : [ 468.80952672163653, 162.0, 69.416666666666515, 162.0 ],
									"source" : [ "obj-55", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 355.166666666666742, 303.0, 69.416666666666515, 303.0 ],
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
									"destination" : [ "obj-17", 2 ],
									"order" : 0,
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-17", 1 ],
									"order" : 1,
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
					"patching_rect" : [ 186.0, 56.0, 84.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p gl_attributes"
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
						"rect" : [ 0.0, 26.0, 1020.0, 676.0 ],
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
									"patching_rect" : [ 725.30952672163653, 149.119050145149231, 128.0, 32.0 ],
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
									"patching_rect" : [ 725.30952672163653, 192.119050145149231, 125.0, 22.0 ],
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
									"patching_rect" : [ 16.166666666666515, 10.190485954284668, 557.0, 75.0 ],
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
									"patching_rect" : [ 752.0, 271.190485954284668, 199.0, 34.0 ],
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
									"patching_rect" : [ 617.642860054969788, 283.190485954284668, 122.0, 22.0 ],
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
									"patching_rect" : [ 617.642860054969788, 311.119050145149231, 313.0, 86.952385663986206 ],
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
									"patching_rect" : [ 419.0, 284.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-35",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 419.0, 319.119050145149231, 144.0, 22.0 ],
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
									"patching_rect" : [ 419.0, 157.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-28",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 419.0, 193.119050145149231, 144.0, 22.0 ],
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
									"patching_rect" : [ 588.0, 157.119050145149231, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-64",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 588.0, 193.119050145149231, 105.0, 22.0 ],
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
									"patching_rect" : [ 319.380953431129456, 157.119050145149231, 24.0, 24.0 ],
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
									"patching_rect" : [ 319.380953431129456, 193.119050145149231, 69.0, 22.0 ],
									"text" : "show_ui $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 60.666666666666515, 426.119050145149231, 110.0, 22.0 ],
									"text" : "s to_meshwarp_01"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-32",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 206.666666666666515, 134.0, 69.0, 20.0 ],
									"text" : "vertical dim"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-31",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 120.166666666666515, 134.023820519447327, 83.0, 20.0 ],
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
									"patching_rect" : [ 212.666666666666515, 157.119050145149231, 50.0, 22.0 ]
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
									"patching_rect" : [ 136.666666666666515, 157.119050145149231, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 60.666666666666515, 193.119050145149231, 171.0, 22.0 ],
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
									"midpoints" : [ 328.880953431129456, 268.0, 70.166666666666515, 268.0 ],
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
									"midpoints" : [ 428.5, 269.0, 70.166666666666515, 269.0 ],
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
									"midpoints" : [ 428.5, 395.0, 70.166666666666515, 395.0 ],
									"source" : [ "obj-35", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 627.142860054969788, 407.0, 70.166666666666515, 407.0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 70.166666666666515, 218.0, 70.166666666666515, 218.0 ],
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
									"midpoints" : [ 734.80952672163653, 270.0, 70.166666666666515, 270.0 ],
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
									"midpoints" : [ 597.5, 270.0, 70.166666666666515, 270.0 ],
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
						"rect" : [ 93.0, 110.0, 1020.0, 676.0 ],
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
									"patching_rect" : [ 598.0, 213.738093018531799, 153.0, 38.0 ],
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
									"patching_rect" : [ 593.0, 260.738093018531799, 196.0, 38.0 ],
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
									"patching_rect" : [ 556.238093376159668, 268.738093018531799, 33.0, 22.0 ],
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
									"patching_rect" : [ 556.238093376159668, 222.738093018531799, 35.0, 22.0 ],
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
									"patching_rect" : [ 21.0, 70.0, 516.0, 34.0 ],
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
									"patching_rect" : [ 486.142860054969788, 333.619042873382568, 110.0, 22.0 ],
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
									"patching_rect" : [ 486.142860054969788, 234.619042873382568, 35.0, 22.0 ],
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
									"id" : "obj-2",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "jit_matrix", "bang", "" ],
									"patching_rect" : [ 43.642860054969788, 191.738093018531799, 162.0, 22.0 ],
									"text" : "jit.world @fsaa 1 @floating 1"
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
									"destination" : [ "obj-16", 0 ],
									"source" : [ "obj-2", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 565.738093376159668, 247.0, 532.0, 247.0, 532.0, 316.0, 495.642860054969788, 316.0 ],
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 565.738093376159668, 316.0, 495.642860054969788, 316.0 ],
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
									"midpoints" : [ 495.642860054969788, 318.0, 495.642860054969788, 318.0 ],
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
				"name" : "jit.gl.meshwarp.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/meshwarp/patchers",
				"patcherrelativepath" : "../../../../../Documents/Max 8/Packages/meshwarp/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "meshwarp.js",
				"bootpath" : "~/Documents/Max 8/Packages/meshwarp/code",
				"patcherrelativepath" : "../../../../../Documents/Max 8/Packages/meshwarp/code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "change_vertex_pos_bpatcher.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/meshwarp/patchers",
				"patcherrelativepath" : "../../../../../Documents/Max 8/Packages/meshwarp/patchers",
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
						"toggle[4]" : 1.0,
						"toggle[5]" : 0.0,
						"blob" : 						{
							"meshwarpjs" : [ 								{
									"show_ui" : 1,
									"windowRatio" : 1.333333333333333,
									"use_nurbs" : 1,
									"mesh_color" : [ 1, 1, 1, 1 ],
									"positionMat" : 									{
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
							"meshwarpjs[1]" : [ 								{
									"show_ui" : 1,
									"windowRatio" : 1.333333333333333,
									"use_nurbs" : 1,
									"mesh_color" : [ 1, 1, 1, 1 ],
									"positionMat" : 									{
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
							"meshwarpjs[2]" : [ 								{
									"show_ui" : 1,
									"windowRatio" : 1.333333333333333,
									"use_nurbs" : 1,
									"mesh_color" : [ 1, 1, 1, 1 ],
									"positionMat" : 									{
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
			"snapshotlist" : 			{
				"current_snapshot" : 0,
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
 ]
			}

		}

	}

}
