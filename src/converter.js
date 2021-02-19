"use strict";
exports.__esModule = true;
exports.converter = void 0;
var Time = /** @class */ (function () {
    function Time(hr, min) {
        if (min >= 60 || hr >= 24) {
            throw new Error('invalid input x_x');
        }
        else {
            this.hr = hr;
            this.min = min;
        }
    }
    Time.prototype.add = function (zone) {
        var x;
        var y;
        y = this.min + zone.min;
        y = Math.abs(y);
        x = 0;
        if (y >= 60) {
            y -= 60;
            x++;
        }
        x += this.hr + zone.hr;
        x = Math.abs(x);
        x %= 24;
        return new Time(x, y);
    };
    Time.prototype.subtract = function (zone) {
        var x;
        var y;
        y = this.min - zone.min;
        y = Math.abs(y);
        x = 0;
        if (y >= 60) {
            y -= 60;
            x++;
        }
        x += this.hr - zone.hr;
        x = Math.abs(x);
        x %= 24;
        return new Time(x, y);
    };
    Time.prototype.display = function () {
        return this.hr + ":" + this.min;
    };
    return Time;
}());
var ip = new Time(10, 50);
var temp;
function requireTime(text) {
    if (text != null) {
        var t1;
        switch (text) {
            case 'pst':
                t1 = new Time(-8, 0);
                break;
            case 'cst':
                t1 = new Time(-6, 0);
                break;
            case 'mst':
                t1 = new Time(-7, 0);
                break;
            case 'ist':
                t1 = new Time(5, 30);
                break;
            case 'gmt':
                t1 = new Time(0, 0);
                break;
            default:
                throw new Error('invalid time-zone x_x');
                break;
        }
        return t1;
    }
}
function converter(a) {
    var _a = a.split(/\s+/), fromZone = _a[0], time = _a[1], toZone = _a[2];
    var _b = time.split(':'), hr = _b[0], min = _b[1];
    ip.hr = Number(hr);
    ip.min = Number(min);
    //ip.display()
    if (fromZone || toZone) {
        fromZone = fromZone.toLowerCase();
        temp = requireTime(fromZone);
        var gmt = ip.subtract(temp);
        toZone = toZone.toLowerCase();
        //console.log(`Time in ${toZone.toUpperCase()}`)
        temp = requireTime(toZone);
        var result = gmt.add(temp);
        var disp = result.display();
        return "It's " + disp + " in " + toZone.toUpperCase();
    }
    else {
        console.log("x_x");
        return null;
    }
}
exports.converter = converter;
