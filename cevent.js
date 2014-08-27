
//DOM-like events for canvas objects
// call cevent.bind on an object
// assign events like so: cevent.bind(object, event);
//relies on drawing.js

var cevent = {
    obj: [],

    bind: function(object) {
        cevent.obj[cevent.obj.length] = {object:object, mouseDownTrigger:false, mouseOverTrigger: false}

    },
    RunEvents: function() {
        for (var i = 0; i < cevent.obj.length; i++) {
            var o = cevent.obj[i].object;
            if (o.click) {
                if (drawing.mouse.down && o.rectangle.Intersects(o.rectangle, new Rectangle(drawing.mouse.x, drawing.mouse.y, 5, 5))) {
                    cevent.obj[i].mouseDownTrigger = true;
                }
                if (drawing.mouse.down == false && cevent.obj[i].mouseDownTrigger == true) {
                    cevent.obj[i].mouseDownTrigger = false;
                    o.click(o);
                }
            }
            if (o.mouseover) {
                if (o.rectangle.Intersects(o.rectangle, new Rectangle(drawing.mouse.x, drawing.mouse.y, 5, 5))) {
                    o.mouseover(o);
                    cevent.obj[i].mouseOverTrigger = true;
                }
            }
            if (o.mouseleave) {
                if (!o.rectangle.Intersects(o.rectangle, new Rectangle(drawing.mouse.x, drawing.mouse.y, 5, 5)) && cevent.obj[i].mouseOverTrigger) {
                    cevent.obj[i].mouseOverTrigger = false;
                    o.mouseleave(o);
                }
            }
        }
    }
}
setInterval(function () {
    cevent.RunEvents();
}, 1000 / 60);