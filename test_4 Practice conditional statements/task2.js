/*
- Code the days of the week program as a switch statement
1. On the next line, define a new variable, name it day, and set its value to "Sunday".

2. Start coding a switch statement, passing the day variable as the expression to evaluate.

3. Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

4. At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

5. Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

*/
var day = 'Monday';
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       console.log('There is no such day');
}

//End of task2 code



//diff ex
var TimeZone = 'Maghrib';
switch(TimeZone) {
   case 'Fazar':
       console.log('Tilawat after salah');
       break;
   case 'Zohar':
       console.log('Rest after salah');
       break;
   case 'Asar':
       console.log('Dhikr after salah');
       break;
   case 'Maghrib':
       console.log('Work Packup after salah');
       break;
   case 'Isha':
       console.log('Go back to home after salah');
       break;
   case 'Juma':
       console.log('Socialize');
       break;
   default:
       console.log('nothing');
}