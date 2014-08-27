// JavaScript source code
var ui = {
    backgroundTextures: [],
    propertyMenuTrigger: false,
    displayPropertyInformation: function(trigger) {
        drawing.DrawImage(ui.backgroundTextures["property"], trigger.rectangle.x, trigger.rectangle.y);
    },
    LoadImages: function() {
        ui.backgroundTextures["property"] = drawing.LoadImage("note.png");
    }
}