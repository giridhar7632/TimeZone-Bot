class Time {
  hr: number
  min: number
  constructor(hr: number, min: number) {
    if (min >= 60 || hr >= 24) {
      throw new Error('invalid input x_x')
    } else {
      this.hr = hr
      this.min = min
    }
  }
  add(zone: Time) {
    var x: number
    var y: number
    y = this.min + zone.min
    y = Math.abs(y)
    x = 0
    if (y >= 60) {
      y -= 60
      x++
    }
    x += this.hr + zone.hr
    x = Math.abs(x)
    x %= 24
    return new Time(x, y)
  }

  subtract(zone: Time) {
    var x: number
    var y: number
    y = this.min - zone.min
    y = Math.abs(y)
    x = 0
    if (y >= 60) {
      y -= 60
      x++
    }
    x += this.hr - zone.hr
    x = Math.abs(x)
    x %= 24
    return new Time(x, y)
  }

  display() {
    return `${this.hr}:${this.min}`
  }
}

var ip = new Time(10, 50)
var temp: Time

function requireTime(text: string) {
  if (text != null) {
    var t1: Time
    switch (text) {
      case 'pst':
        t1 = new Time(-8, 0)
        break
      case 'cst':
        t1 = new Time(-6, 0)
        break
      case 'mst':
        t1 = new Time(-7, 0)
        break
      case 'ist':
        t1 = new Time(5, 30)
        break
      case 'gmt':
        t1 = new Time(0, 0)
        break
      default:
        throw new Error('invalid time-zone x_x')
        break
    }
    return t1
  }
}

function converter (a: string) {
  let [fromZone, time, toZone] = a.split(/\s+/)
    let [hr, min] = time.split(':')
    ip.hr = Number(hr)
    ip.min = Number(min)
    //ip.display()

    if (fromZone || toZone) {
      fromZone = fromZone.toLowerCase()
      temp = <Time>requireTime(fromZone)
      const gmt = ip.subtract(temp)

      toZone = toZone.toLowerCase()
      //console.log(`Time in ${toZone.toUpperCase()}`)
      temp = <Time>requireTime(toZone)
      const result = gmt.add(temp)
      var disp = result.display()
      return `It's ${disp} in ${toZone.toUpperCase()}`
    } else{
      console.log("x_x")
      return `⚠ Something worng x_x`
    }
}

export { converter }