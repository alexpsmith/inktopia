// JavaScript source code
function Property(type, worth, image, rectangle) {
    this.type = type;
    this.worth = worth;
    this.image = image;
    this.rectangle = rectangle;
    this.click = function (o) { ui.displayPropertyInformation(o); };
    this.mouseover = function (o) { o.hover = true; }
    this.mouseleave = function (o) { o.hover = false; }
    lord.addToMap(this.rectangle, "property", this);
    cevent.bind(this);

    this.Update = function (o) {

    }
    this.Draw = function (o) {
        if (o.hover) { drawing.ExactDraw(o.image, o.rectangle.x, o.rectangle.y, null, 0.7); }
        else { drawing.ExactDraw(o.image, o.rectangle.x, o.rectangle.y, null, 1); }
    }


}