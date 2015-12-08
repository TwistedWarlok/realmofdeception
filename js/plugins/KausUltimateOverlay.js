 /* ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin lets you add overlay images on your map. 
 * You have a choice of 5 different layers on the map to put your custom images
 * 
 * ============================================================================
 * Filename and Use Instructions
 * ============================================================================
 * By Default:
 * All images must be saved in img/Parallaxes Folder.
 * ground,par,shadow and light overlays must be named designated to their mapID
 * For example: display a parallax map and light in MapID:002
 * Name your files par2 and light 2 and save it in img/Parallaxes Folder
 *
 * If Parameter Option: Organized Folders is set to true
 * Create the ff. new folders:
 * (img/overlays/grounds)
 * (img/overlays/pars)
 * (img/overlays/shadows)
 * (img/overlays/lights)
 * (img/overlays/fogs)
 * And all the overlay images you will use should be inside those folders
 * specific to their layer type.
 *
 * ============================================================================
 * Notetags Instructions
 * ============================================================================
 * Note: Input your notetags inside the map properties. The following notetags 
 *       is case sensitive and space sensitive.
 * 
 *  <all>               display all 3 overlays (ground,par,light)
 *  <ground>            display ground layer.
 *  <par>               display parallax layer.
 *  <light>             display light layer.
 *  <shadow>            display shadow layer.
 *  <fogName:filename>  display the chosen fog.
 *  <fogBlend:number>   (OPTIONAL) changes the blend type of fog 0:NORMAL 1:ADD
 *  <fogDuration:number>(OPTIONAL) makes a transition depending on value = frames.before completing opacity.
 *  <xMove:number>      (OPTIONAL) moves the fog left or right (+ moves right, - moves left)
 *  <yMove:number>      (OPTIONAL) moves the fog up or down (+ moves down, - moves up)
 *
 *
 * LAYERS:
 * Light Layer    is the highest layer and used for creating Light Effects such as Sunlight Rays, or Street Lights, etc.
 * Fog Layer      is used for creating a Fog Effect in much that is moving automatically by settings. Used for Mists Clouds etc.
 * Shadow Layer   is used for creating shadow effects.
 * Parallax Layer is used for adding an image in the map that will be OVER the character. 
 * Ground Layer   like Parallax Layer it is used for creating custom images but UNDER your characters.
 *
 *
 *
 * ============================================================================
 * Plugin Command Instructions
 * ============================================================================
 * To change the layer in current map use this Plugin Command;
 * Call Plugin Command thru event then type the following Arguments:
 *
 * Overlay layertype filename
 *      for example: Overlay light light2-1
 *
 * Layer Types:
 * ground = for ground layer
 * par = for parallax layer
 * shadow = for shadow layer
 * light = for light layer
 * fog = for fog layer
 *
 * Calling a new fog has its own arguments: (blendmode and duration is optional and doesnt need to have a value)
 * 
 * Arguments:  Overlay fog filename opacity xMove yMove blendmode duration
 * Examples:
 *             Overlay fog mist2 155 1 -0.5   //Displays 'mist2' fog in 155 Opacity that moves position x to 1 and y to -0.5 every frame. 
 *             Overlay fog shade 130 0 0 1 60 //Displays 'shade' fog in 130 Opacity, additive blend, doesnt move, fades in w/in 60 frames.
 *
 * 1.07 New Feature: Fog Fade Out
 * Function:  Fades out the current fog displayed over the duration.
 * Arguments: Overlay fadeout duration
 * Examples:  Overlay fadeout 120       //Fades out the current fog over 120 frames.
 *
 * NOTE: -Changing Layer Images DOESN'T REQUIRE notetags in the map to display BUT REQUIRES switches.
 *       -DO NOT USE Overlay fadeout if you have map notetags exist in a map as it will not work and map notetags will persist 
 *        to display its function. USE fog switches to turn off the display of the fog completely.