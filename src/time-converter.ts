class Time {
  hr: number
  min: number
  constructor(hr: number, min: number) {
    if (min >= 60 || hr >= 24) {
      console.log("invalid input x_x")
      process.exit(1)
    }
    else {
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
  display() {
    console.log(`${this.hr}:${this.min}`)
  }
}

var t2 = new Time(10, 50)
var x, t1: Time

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}) 

readline.question('Enter time: ', (x: string) => {
  let [hr, min] = x.split(/\s+/)
  t2.hr = Number(hr)
  t2.min = Number(min)
  if (t2.min >= 60 || t2.hr >= 24) {
    console.log("invalid time x_x")
    process.exit(1)
  }
  t2.display()

  readline.question('Enter the time-zone: ', (time: string) => {
    time = time.toLowerCase()
    if(time != null){
      switch (time) {
        case "pst":
          t1 = new Time(-8, 0)
          break
        case "cst":
          t1 = new Time(-6, 0)
          break 
        case "mst":
          t1 = new Time(-7, 0)
          break 
        case "ist":
          t1 = new Time(5, 30)
          break 
        case "gmt":
          t1 = new Time(0, 0)
          break   
        default:
          throw new Error("invalid time-zone x_x")
          break 
      }
      console.log(`Time in ${time.toUpperCase()}: `)
      var result = t1.add(t2)
      result.display()
    }
    readline.close() 
  })
})