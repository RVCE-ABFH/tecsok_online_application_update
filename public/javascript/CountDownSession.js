/// <reference path="../Home.aspx" />
/// <reference path="../Home.aspx" />
/*******************************************************/
/* Calendar */
/*******************************************************/
/**
 * getTime
 *   Get the current time as a user-readable text.
 *@return time string
 */
function getTime() {
    // initialize time-related variables with current time settings
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    now = null;
    var ampm = '';

    // validate hour values and set value of ampm
    if (hour >= 12) {
        hour -= 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }
    hour = (hour == 0) ? 12 : hour;

    // add zero digit to a one digit minute
    if (minute < 10) {
        minute = '0' + minute; // do not parse this number!
    }

    return hour + ':' + minute + ' ' + ampm;
}

/**
 * leapYear
 *   Basic Leap Year checking rules.
 *@param year  the numerical year
 *@return boolean  true if Leap Year, false otherwise
 */
function leapYear(year) {
    if (year % 4 == 0) {
        return true; // is leap year
    }
    return false; // is not leap year
}

/**
 * getDays
 *   Get the number of days in the month, with provision for leap year calculation.
 *@param month  number of the month with index starting at 0
 *@param year  the year used to calculate leap year to determine Feb number of days
 *@return number of days in the specified month (parameter)
 */
function getDays(month, year) {
    // create array to hold number of days in each month
    var ar = new Array(12);
    ar[0] = 31; // January
    ar[1] = (leapYear(year)) ? 29 : 28; // February
    ar[2] = 31; // March
    ar[3] = 30; // April
    ar[4] = 31; // May
    ar[5] = 30; // June
    ar[6] = 31; // July
    ar[7] = 31; // August
    ar[8] = 30; // September
    ar[9] = 31; // October
    ar[10] = 30; // November
    ar[11] = 31; // December
    return ar[month];
}

/**
 * getMonthName
 *   Converts a number to the proper English month name.
 *@param month  the number of the month which will be converted to a full English name
 *@return name  specified month name
 */
function getMonthName(month) {
    // create array to hold name of each month
    var ar = new Array(12);
    ar[0] = 'January';
    ar[1] = 'February';
    ar[2] = 'March';
    ar[3] = 'April';
    ar[4] = 'May';
    ar[5] = 'June';
    ar[6] = 'July';
    ar[7] = 'August';
    ar[8] = 'September';
    ar[9] = 'October';
    ar[10] = 'November';
    ar[11] = 'December';
    return ar[month];
}

/*******************************************************/
/* Fancy countdown clock */
/*******************************************************/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}



function initializeClock(id, endtime) {
    // create deadline 24 hrs from now

    var clock = document.getElementById(id);
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }

        if (t.total == 120000) {
            if (document.getElementById('mySessionModal')) {
                document.getElementById('mySessionModal').style.display = "block";
            }
        }

        if (t.total <= 120000 && t.total >= 10000) {
            if (document.getElementById('mySessionModaSeconds')) {
                document.getElementById('mySessionModaSeconds').innerHTML = "" + parseInt(t.total) / 1000;
            }
        }

        if (t.total == 0) {
            document.getElementById('mySessionModal').style.display = "";
            alert('Session Expired');
            window.location.href = "../../Default.aspx";
        }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
