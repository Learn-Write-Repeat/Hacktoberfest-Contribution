/*F=k+ [(13*m-1)/5] +D+ [D/4] +[C/4]-2*C where

k is  the day of the month.
m is the month number.
D is the last two digits of the year.
C is the first two digits of the year. */

var date_grid = document.querySelectorAll('#calender .date');
var image = document.getElementById('monthstats');
// console.log(date_grid);

var date = new Date();
var month = date.getMonth();
var month_img = ["jan.jpeg", "feb.jpeg", "Mar.jpeg", "april.jpeg", "may.jpeg", "june.jpeg", "july.jpeg", "aug.jpeg", "sep.jpeg", "oct.jpeg", "nov.jpeg", "Dec.jpeg"];
var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = date.getFullYear();

var day = date.getDay();
var month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_no = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var day_no = [0, 1, 2, 3, 4, 5, 6];

document.getElementById('left').addEventListener('click',()=>{
    month-=1;
    if(month==-1)
    {
        year-=1;
        month=11;
    }
});
document.getElementById('right').addEventListener('click',()=>{
    month+=1;
    if(month==12)
    {
        year+=1;
        month=0;
    }
});
setInterval(() => {
    var year_last = year % 100;
    if(month==0 || month==1)
    {
        year_last-=1;
    }
var year_first = (Math.floor(year / 100)) % 100;
    var F = (1 + Math.floor((2.6 * month_no[month] - 0.2)) + year_last + Math.floor(year_last / 4) + Math.floor(year_first / 4) - 2 * year_first) % 7;
    if(F<0)
    {
        F+=7;
    }
    var starting_day = day_no[F] + 7;
    document.querySelector('#monthstats p').textContent = `${month_name[month]},${year}`;
image.style.backgroundImage = `url(${month_img[month]})`;

    // console.log(month,year_first,year_last,day,F);
    if (((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) && month == 1) {
        var x = 1;
        for(let j=7;j<49;j++)
        {
            date_grid[j].textContent="";
            if(date_grid[j].classList.contains('active'))
            {
                date_grid[j].classList.remove('active');
            }
        }
        for (var i = starting_day; i < starting_day + month_day[month] + 1; i++) {
            date_grid[i].textContent = `${x}`;
            if (month == date.getMonth() && year == date.getFullYear() && x == date.getDate()) {
                if (!date_grid[i].classList.contains('active')) {
                    date_grid[i].classList.add('active');
                }
            }
            else {
                if (date_grid[i].classList.contains('active')) {
                    date_grid[i].classList.remove('active');
                }
            }
            x += 1;
        }
    }
    else {
        var x = 1;
        for(let j=7;j<49;j++)
        {
            date_grid[j].textContent="";
            if(date_grid[j].classList.contains('active'))
            {
                date_grid[j].classList.remove('active');
            }
        }
        // console.log(starting_day,starting_day + month_day[month])
        for (var i = starting_day; i < starting_day + month_day[month]; i++) {
            date_grid[i].textContent = `${x}`;
            if (month == date.getMonth() && year == date.getFullYear() && x == date.getDate()) {

                if (!date_grid[i].classList.contains('active')) {
                    date_grid[i].classList.add('active');
                }
            }
            else {
                if (date_grid[i].classList.contains('active')) {
                    date_grid[i].classList.remove('active');
                }
            }
            x += 1;
        }
    }
}, 50)