'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
   return new Date(value);
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
   return new Date(value);
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
   var year = date.getFullYear();
   var leapYearstatus=false;
   if (year % 4 == 0) {
      if (year % 400 == 0) {
         leapYearstatus=true;
      }
      else if (year % 100 == 0){
         leapYearstatus=false;
      }
      else{
         leapYearstatus=true;
      }
      
   }
   return leapYearstatus;
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
   var milliseconds=endDate-startDate;
   var HH=calculateHours(milliseconds);
   var H,M,S,mm;
   if(HH%10==HH){
      H="0"+HH;
   }
   else{
      H=HH;
   }
   console.log(HH);
   milliseconds=milliseconds%(HH*60*60*1000);
   var MM=calculateMinutes(milliseconds);
   if(MM%10==MM){
      M="0"+MM;
   }
   else{
      M=MM;
   }
   console.log(MM);
   if(MM!=0){
      milliseconds=milliseconds%(MM*60*1000);
      var SS=calculateSeconds(milliseconds);
      console.log("SS",SS);
      if(SS%10==SS){
         S="0"+SS;
      }
      else{
         S=SS;
      }
      console.log(SS);
      milliseconds=milliseconds%(SS*1000);
   }
   
return H+":"+M+":"+S+"."+milliseconds;
}
function calculateHours(milliseconds){
return Math.floor(milliseconds/(60*60*1000));
}
function calculateMinutes(milliseconds){
   return Math.floor(milliseconds/(60*1000));
}
function calculateSeconds(milliseconds){
   console.log(milliseconds);
   return Math.floor(milliseconds/1000);
}
/**
 * Returns the angle (in radians) between the hands of an analog clock for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 * 
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {
   console.log(new Date(date));
  let thetaHour=date.getHours();
  let thetaMin=date.getMinutes();
  console.log(thetaHour,thetaMin);
  let thetaDegreeHour=(60*thetaHour+thetaMin)/2;
  let thetaDegreeMin=6*thetaMin;
  console.log(thetaDegreeHour,thetaDegreeMin);
let delta=Math.abs(thetaDegreeHour-thetaDegreeMin);
return delta*Math.PI/180;
}


module.exports = {
   parseDataFromRfc2822: parseDataFromRfc2822,
   parseDataFromIso8601: parseDataFromIso8601,
   isLeapYear: isLeapYear,
   timeSpanToString: timeSpanToString,
   angleBetweenClockHands: angleBetweenClockHands
};
