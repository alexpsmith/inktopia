// JavaScript source code
function Property(type, worth, image, rectangle) {
    this.type = type;
    this.worth = worth;
    this.image = image;
    this.rectangle = rectangle;

    this.hover = false;
    lord.addToMap(this.rectangle, "property", this);
    

    this.Update = function (o) {
        var mouseRec = new Rectangle(drawing.mouse.x, drawing.mouse.y, 10, 10);
        
        if (mouseRec.Intersects(mouseRec, o.rectangle)) {
            o.hover = true;
            console.log("hover");
        }
        else {
            o.hover = false;
        }
    }
    this.Draw = function (o) {
        if (o.hover) { drawing.ExactDraw(o.image, o.rectangle.x, o.rectangle.y, null, 0.7); }
        else { drawing.ExactDraw(o.image, o.rectangle.x, o.rectangle.y, null, 1); }
    }


}