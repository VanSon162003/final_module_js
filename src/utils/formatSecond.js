function formatSeconds(totalSeconds, roundUp = false) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (roundUp && seconds > 0) {
        minutes += 1;
        seconds = 0;
    }

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default formatSeconds;
