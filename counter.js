export default function CountdownTimer({ selector, targetDate }) {
   
  this.selector = selector;
  this.targetDate = targetDate;
  this.timerID = '';

  this.timeOutput = () => {
    let time = this.targetDate.getTime() - Date.now();
    if (time <= 0) {
      this.stop();
      return
    }
    const times = filterTimes(time);
    const valuesElem = document.querySelectorAll(`${this.selector} .value`);
    valuesElem.forEach(valueElem => {
      const key = valueElem.dataset.value;
      
      
      const addZero = (n) => n < 10 ? '0' : '';
      const labelElem = valueElem.nextElementSibling;
      let label = labelElem.textContent;
      if (times[key] === 1 && label[label.length - 1] == 's') {
        label = label.slice(0, -1);
      }
      if (times[key] === 0 && label[label.length - 1] != 's') {
        label += 's';
      }
      labelElem.textContent = label;
      let newText = addZero(times[key]) + times[key];
      if (valueElem.textContent !== newText ) {
        valueElem.classList.add('animate__fadeIn');
      setTimeout(() => {valueElem.classList.remove('animate__fadeIn')}, 300)
      }
      valueElem.textContent = newText ;
    });
     
    function filterTimes(time) {
      const DAY = 1000 * 60 * 60 * 24;
      const HOUR = 3600 * 1000;
      const MIN = 60 * 1000;
      const SEC = 1000;
      const days = Math.floor(time / DAY);
      let rest = time - days * DAY;
      const hours = Math.floor(rest / HOUR);
      rest = rest - hours * HOUR;
      const mins = Math.floor(rest / MIN);
      rest = rest - mins * MIN;
      const secs = Math.floor(rest / SEC);
      return { days, hours, mins, secs }
    }
  }

  this.start = () => {
    this.timerID = setInterval(this.timeOutput, 1000)
  }
  this.stop = () => {
    clearInterval(this.timerID);
  }
}
    
    
    
  
      
    
    
    
    
    
    
