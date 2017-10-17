function formatElapsedTime(elapsedTime){

  if (isNaN(elapsedTime) || typeof elapsedTime !== 'number')
    return '00:00:00';
  
    const date = new Date(elapsedTime);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();

    return `${getFormattedNumbers(minutes)}:${getFormattedNumbers(seconds)}:${getFormattedNumbers(milliseconds / 10)}`;
}

function getFormattedNumbers(number){
  return number < 10 ? '0' + number : number;
}

export default formatElapsedTime;