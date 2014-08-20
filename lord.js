// JavaScript source code
lord = {
    player: null,
    npc: [],
    map: [],
    mapIndex: 0,

    baseMonetaryGain: 0.00016, //aprox 2 minutes to get a dollar
    increaseMonetaryGain: 0,

    basePoliticalGain: 0,
    increasePoliticalGain: 0,

    init: function (player) {
        lord.player = player;
        drawing.bindUpdate(lord.Update);
    },

    Update: function(){
        lord.fluxMoney();
        lord.fluxInfluence();
        //lord.updateMap();
    },

    fluxMoney: function () {
        //standard is one credit a minute
        lord.player.credits = parseFloat(lord.player.credits);
        lord.player.credits += (lord.baseMonetaryGain + lord.increaseMonetaryGain);
    },
    fluxInfluence: function () {
        lord.player.politicalInfluence = parseFloat(lord.player.politicalInfluence);
        lord.player.politicalInfluence += lord.basePoliticalGain;
    },
    addToMap: function (rectangle, objectType, t) {
        var pos = { x: rectangle.x, y: rectangle.y }
        //if (lord.map[pos]) { console.log("FAILED TO ADD TO MAP: OVERLAP"); return false; }
        lord.map[lord.mapIndex++] = { Rectangle: rectangle, ObjectType: objectType, add: t };
        console.log("added to map");

        var x = rectangle.x;
        var y = rectangle.y;
        var width = rectangle.width;
        var height = rectangle.height;

        x *= 0.4; y *= 0.4; width *= 0.4; height *= 0.4;
        var point = document.createElement("circle");
        $(point).attr("cx", x);
        $(point).attr("cy", y);
        $(point).attr("r", 5);
        $(point).attr("stroke-width", 4);
        $(point).attr("stroke", "red");
        $(point).attr("fill", "red");
        $("#map").append(point);
    },
    updateMap: function(){
        for (var i = 0; i < lord.map.length; i++) {
            if (!lord.map[i]) { return; }
            $("#map").empty();
            console.log("updating point");
            var map = lord.map[i];
            var x = map.Rectangle.x;
            var y = map.Rectangle.y;
            var width = map.Rectangle.width;
            var height = map.Rectangle.height;

            x *= 0.4; y *= 0.4; width *= 0.4; height *= 0.4;
            var point = document.createElement("circle");
            $(point).attr("cx", x);
            $(point).attr("cy", y);
            $(point).attr("r", 5);
            $(point).attr("stroke-width", 4);
            $(point).attr("fill", "red");

            $("#map").append(point);
        }
    }
}