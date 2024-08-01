let title,data,time,card,timer,success;
let now,targetDateString,targetDate,diff,second;
let leftTimeDays,leftTimeHours,leftTimeMinutes,leftTimeSeconds,interval;

function deleteInterval(e){
    clearInterval(e);
    timer.style.display = 'none';
    success.style.display = 'flex';
    success.style.flexDirection = 'column';
    success.style.alignItems = 'center';
    success.style.justifyContent = 'center';

    document.getElementById('subtitle').innerHTML = title.value + ' finished on ' + data.value;
}

function reset(e)
{
    console.log('clicked');
    deleteInterval(e);
    card.style.display = 'block';
    success.style.display = 'none';
    timer.style.display = 'none';
    title='',data=null,time=null,leftTimeDays=0,leftTimeHours=0,leftTimeMinutes=0,leftTimeSeconds=0;
    diff=0;
    document.getElementById('title').value='';
    document.getElementById('date').value=null;
    document.getElementById('time').value=null;
}

document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    
     title = document.getElementById('title');
     data = document.getElementById('date');
     time = document.getElementById('time');
     card = document.getElementById('card');
     timer = document.getElementById('timer');
     success = document.getElementById('success');

     now = new Date();
     targetDateString = data.value + 'T' + time.value;
     targetDate = new Date(targetDateString);
     diff = targetDate - now;
     second = 1000,minute=60*second,hour=60*minute,day=24*hour;

     leftTimeDays = Math.floor(diff/day);
     leftTimeHours = Math.floor((diff%day)/hour);
     leftTimeMinutes = Math.floor((diff%hour)/minute);
     leftTimeSeconds = Math.floor((diff%minute)/second);

    document.getElementById('titleSwapped').innerHTML=title.value;
    document.getElementById('days').innerHTML=leftTimeDays;
    document.getElementById('hours').innerHTML=leftTimeHours;
    document.getElementById('minutes').innerHTML=leftTimeMinutes;
    document.getElementById('seconds').innerHTML=leftTimeSeconds;
    

    interval = setInterval(function myTimer(){
        if(diff > 1000)
            {
        diff -= 1000;
        leftTimeDays = Math.floor(diff/day);
        leftTimeHours = Math.floor((diff%day)/hour);
        leftTimeMinutes = Math.floor((diff%hour)/minute);
        leftTimeSeconds = Math.floor((diff%minute)/second);
    
        document.getElementById('days').innerHTML=leftTimeDays;
        document.getElementById('hours').innerHTML=leftTimeHours;
        document.getElementById('minutes').innerHTML=leftTimeMinutes;
        document.getElementById('seconds').innerHTML=leftTimeSeconds;
        }
    
    else 
    deleteInterval(interval);
    
    },1000);


    card.style.display = 'none';
    timer.style.display = 'block';
});

document.getElementById('reset').addEventListener('click',()=>{
    reset(interval);
});

document.getElementById('newCountdown').addEventListener('click',()=>{
    reset(interval)
});