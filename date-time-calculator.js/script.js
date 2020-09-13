function convertDate(d)
{
	  var d1 = d.split("/");
    var date = new Array();
    date.push(parseInt(d1[0]));
    date.push(parseInt(d1[1]));
    date.push(parseInt(d1[2]));
    return date;
}

function dateCalc(file)
{
	//var d2 = document.getElementById("date");
	//var f2 = document.getElementById("func");


  var d1 = document.getElementById("date1");
  var s1 = convertDate(d1.value);
  if (file === "differenceDates") {
      //console.log(file);
    var d2 = document.getElementById("date2");
    var s2 = convertDate(d2.value);
    date_diff(s1, s2);
  }
  else if (file === "addDate") {
    var n = document.getElementById("n").value;
    console.log(n);
    date_add(s1,parseInt(n));
  }
  else {
    var value = document.querySelector('#natural').value;
    //console.log(typeof(value));
    naturalLanguage(s1,value);
  }
}


function countLeapYears(d) {
	var years = d[2];
	if (d[1] <= 2) {
	years--;
	}
	return Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400);
}


function date_diff(dt1,dt2)
{
		console.log(dt1);
		console.log(dt2);
		var monthDays  = [31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];
	    var n1 = dt1[2] * 365 + dt1[0];
        for (var i = 0; i < dt1[1] - 1; i++)
        {
            n1 += monthDays[i];
        }
        n1 += countLeapYears(dt1);
        var n2 = dt2[2] * 365 + dt2[0];
        for (var i = 0; i < dt2[1] - 1; i++)
        {
            n2 += monthDays[i];
        }
        n2 += countLeapYears(dt2);
        document.getElementById("out").textContent = n2-n1 + " Days";
}


function date_add(d,n) {
	var date = new Date(d);
	console.log(d + " " + n);
  date.setDate(date.getDate() + n);
  console.log(date);
  console.log(date.getDay());
  document.getElementById("out").textContent = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}

function naturalLanguage(d,word) {
  if(word === "nd")
    date_add(d,1);
  else if(word === "tom")
    date_add(d,1);
  else if(word == "y")
    date_add(d,-1);
  else if(word === "nw")
    date_add(d,7);
  else if(word === "lw")
    date_add(d,-7);
  else if(word === "ny")
    date_add(d,365);
  else if(word === "ly")
    date_add(d,-365);
  else if(word === "nm")
    date_add(d,30);
  else if(word === "lm")
    date_add(d,-30);
  else
    alert("wrong input");
}
