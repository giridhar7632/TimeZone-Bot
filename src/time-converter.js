var Time = /** @class */ (function () {
    function Time(hr, min) {
        if (min >= 60 || hr >= 24) {
            throw new Error("invalid input x_x");
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
    Time.prototype.display = function () {
        console.log(this.hr + ":" + this.min);
    };
    return Time;
}());
var t2 = new Time(10, 50);
var x, t1;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter time: ', function (x) {
    var _a = x.split(/\s+/), hr = _a[0], min = _a[1];
    t2.hr = Number(hr);
    t2.min = Number(min);
    t2.display();
    readline.question('Enter the time-zone: ', function (time) {
        time = time.toLowerCase();
        if (time != null) {
            switch (time) {
                case "pst":
                    t1 = new Time(-8, 0);
                    break;
                case "cst":
                    t1 = new Time(-6, 0);
                    break;
                case "mst":
                    t1 = new Time(-7, 0);
                    break;
                case "ist":
                    t1 = new Time(5, 30);
                    break;
                case "gmt":
                    t1 = new Time(0, 0);
                    break;
                default:
                    throw new Error("invalid time-zone x_x");
                    break;
            }
            console.log("Time in " + time.toUpperCase() + ": ");
            var result = t1.add(t2);
            result.display();
        }
        readline.close();
    });
});
