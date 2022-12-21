function refreshTime() {
    const showTime = document.getElementById("time-el")
    const showDate = document.getElementById("date-el")

    let date = new Date()
    let liveDate = date.getDate()
    let liveYear = date.getFullYear()
    let liveDay = date.getDay()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let session = "AM"
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    if (hour == 0) {
        hour = 12
    }
    if (hour > 12) {
        hour = hour - 12
        session = "PM"
    }


    if (hour < 10) { hour = `0${hour}` }
    if (min < 10) { min = `0${min}` }
    if (sec < 10) { sec = `0${sec}` }

    for (let i = 0; i < days.length - 1; i++) {
        liveDay = days[i]
    }

    let showLiveDate = `${liveDay}, ${liveDate}, ${liveYear}`
    let time = `${hour}:${min}:${sec} ${session} `
    showTime.innerHTML = time
    showDate.innerHTML = showLiveDate
    setTimeout(refreshTime, 1000)
}
refreshTime()

