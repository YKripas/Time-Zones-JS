/*
   New Perspectives on HTML, XHTML, and DHTML
   Tutorial 11
   Case Problem 3

   Author: Juozas Kripas
   Date:   4/7/2016

   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/

function addTime(oldTime, milliSeconds){
    var newTime = new Date();
    var newValue= oldTime.getTime + milliSeconds;
    var newTime=newValue.setTime();
    return newTime;
}





