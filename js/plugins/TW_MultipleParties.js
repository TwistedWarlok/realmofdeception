//==============================================================================
// Twisted_Warlok Multiple Parties Script - TW_MultipleParties.js
//==============================================================================

/*:
* @plugindesc Add multiple party support.
* @author Twisted_Warlok

* @param Numbers of Parties
* @desc Max number of different Parties
* @default 5

*/

(function() {
	var parameters = PluginManager.parameters('TW_MultipleParties');

	var partyOne = activeParty;

	var partyTwo = new function ($gameParty) { };
	var partyThree = new function ($gameParty) { };

	var activeParty = $gameParty;

	var maxParties = Number(parameters['Max Parties'] || 5);

	partyTwo = function () {
	    $gameParty.targetActorId(22);
	    $gameParty.addActor(22);
	    $gameActors.actor(22).setup(22;
	};

	partyThree = function () {
	    $gameParty.targetActorId(702);
	    $gameParty.addActor(702);
	    $gameActors.actor(702).setup(702);
	};


   // activeParty
/*	var mParty = new Array(5);
	mParty[0] = "Party 1";
	mParty[1] = "Party 2";
	mParty[2] = "Party 3";
	mParty[3] = "Party 4";
	mParty[4] = "Party 5";
  
*/  

	switch (activeParty) {

	    case partyTwoIsActive:
	        partyTwo = activeParty;
	        break;

	    case partyThreeIsActive:
	        partyThree = activeParty;
	        break;

	    default:
	        partyOne = activeParty;

	}

	
/*	if (partyOne != activeParty) {

        $gameParty.actors

	}

    */

	Game_Party.prototype.maxParties = function () {

	    return maxParties;
	};




})();