function time(step, length, speed){
    let distance = step * length;
    let time = distance / 1000 / speed + Math.floor(distance / 500)/60;
    let hours = Math.floor(time);
    time -= hours;
    time *= 60;
    let minutes = Math.floor(time)
    time -= minutes;
    let seconds = time * 60;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    hours = hours < 10 ? '0'+hours : hours;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    console.log(`${hours}:${minutes}:${Math.round(seconds)}`)
}