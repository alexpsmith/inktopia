// JavaScript source code
player = {
    type: null,
    name: null,
    points: null,
    credits: null,
    politicalInfluence: null,
    soldiers: null,
    armor: null,
    aircraft: null,
    warships: null,
    nukes: null,
    section: null,
    x: null,
    y: null,

    income: null,
    influence: null,
    power: null,

    init: function(){
        player.LoadData();
        drawing.bindUpdate(player.Update);
    },

    LoadData: function () {
        player.type = x("type");
        player.name = x("name");
        player.points = x("inktopia-points");
        player.credits = x("credits");
        player.politicalInfluence = x("political-influence");
        player.soldiers = x("soldiers");
        player.armor = x("armor");
        player.aircraft = x("aircraft");
        player.warships = x("warships");
        player.nukes = x("nukes");
        player.section = x("section");
        player.x = x("x");
        player.y = x("y");
    },
    dev_displayUserInfo: function () {
        if (player.type) { $("#dev").append(player.type + "<br />"); }
        if (player.name) { $("#dev").append(player.name + "<br />"); }
        if (player.points) { $("#dev").append(player.points + "<br />"); }
        if (player.credits) { $("#dev").append(player.credits + "<br />"); }
        if (player.politicalInfluence) { $("#dev").append(player.politicalInfluence + "<br />"); }
        if (player.soldiers) { $("#dev").append(player.soldiers + "<br />"); }
        if (player.armor) { $("#dev").append(player.armor + "<br />"); }
        if (player.aircraft) { $("#dev").append(player.aircraft + "<br />"); }
        if (player.warships) { $("#dev").append(player.warships + "<br />"); }
        if (player.nukes) { $("#dev").append(player.nukes + "<br />"); }
        if (player.section) { $("#dev").append(player.section + "<br />"); }
        if (player.x) { $("#dev").append(player.x + "<br />"); }
        if (player.y) { $("#dev").append(player.y + "<br />"); }
    },
    Update: function(){
        player.updateBasicInfoMenu();
    },
    updateBasicInfoMenu: function(){
        var containers = $("#basic_info_menu").children("div");
        for (var i = 0; i < containers.length; i++) {
            var label = $(containers[i]).children("label")[1];
            switch (i) {
                case 0:
                    $(label).html(player.points);
                    break;
                case 1:
                    try
                    {
                        var raw = String(player.credits).split(".");
                        var good = raw[0] + "." + raw[1][0] + raw[1][1];
                        $(label).html("$" + good);
                    }
                    catch(e)
                    {
                        $(label).html("$" + player.credits);
                    }
                    break;
                case 2:
                    $(label).html(player.politicalInfluence + "%");
                    break;
            }
        }
    }
}