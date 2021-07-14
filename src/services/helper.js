module.exports.timestamp = function(timestamp) {
  // 获取当前时间戳（毫秒）(new Date()).getTime()
  // 毫秒->秒 /1000
  let date = Math.floor(new Date().getTime() / 1000);
  let time = date - timestamp;
  if (time == 0) {
    return 0;
  } else if (time < 60) {
    return time + "秒";
  } else if (time / 60 < 60) {
    return Math.round(time / 60) + "分钟前";
  } else if (time / 60 / 60 < 24) {
    return Math.round(time / 60 / 60) + "小时前";
  } else if (time / 60 / 60 / 24 < 24) {
    return Math.round(time / 60 / 60 / 24) + "天前";
  } else if (time / 60 / 60 / 24 / 7 < 7) {
    return Math.round(time / 60 / 60 / 24) + "周前";
  }
};
module.exports.enqueuedtimes = function(finishedtime, starttime) {
  let time = finishedtime - starttime;
  if (time < 60 && time > 0) {
    return time + "秒";
  } else if (time / 60 < 60 && time > 0) {
    return parseInt(time / 60) + "分钟" + (time % 60) + "秒";
  } else if (time < 0) {
    return "--";
  }
};
module.exports.yuntimes = function(finishedtime, starttime) {
  if (!finishedtime || !starttime) {
    return "00:00";
  }
  let time = finishedtime - starttime;
  var str = "";
  if (time < 60 && time > 0) {
    str += "00:";
    if (time < 10) {
      str += "0" + time;
    } else {
      str += time;
    }
  } else {
    var minute = parseInt(time / 60);
    var seconds = time % 60;
    console.log("m==>", minute, "| s==>", seconds);
    if (minute < 10) {
      str += "0" + minute;
    } else {
      str += minute;
    }
    str += ":";
    if (seconds < 10) {
      str += "0" + seconds;
    } else {
      str += seconds;
    }
  }
  return str;
};
module.exports.dateFormat = function(fmt, timestamp) {
  let date = new Date(timestamp);
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};
module.exports.GetProperty = function(obj, prop) {
  if (!obj) return null;
  let res = obj;
  if (prop) {
    let props = prop.split(".");
    for (let i = 0; i < props.length; i++) {
      res = res[props[i]];
      if (typeof res == "undefined" || res == null) {
        return null;
      }
    }
  }
  return res;
};

module.exports.GetTimeDifference = function(stop_date) {
  let nowdate = new Date();
  let stoopdate = new Date(stop_date);
  return nowdate > stoopdate;
};

module.exports.dateStringTransform = function(date) {
  /* 
    input: 2020-06-12T16:38:11+08:00
    output: 2020-06-12 16:38:11
  */
  if (String(date).indexOf("T") != -1) {
    let arr = date.split("T");
    let t = arr[1];
    let tarr = t.split(".000");
    let marr = tarr[0].split(":");
    let h =
      parseInt(marr[0]) >= 10 ? parseInt(marr[0]) : "0" + parseInt(marr[0]);
    let m =
      parseInt(marr[1]) >= 10 ? parseInt(marr[1]) : "0" + parseInt(marr[1]);
    let s =
      parseInt(marr[2]) >= 10 ? parseInt(marr[2]) : "0" + parseInt(marr[2]);
    let dd = arr[0] + " " + h + ":" + m + ":" + s;
    return dd;
  } else {
    return date;
  }
};

module.exports.getLangDate = function(date) {
  var dateObj = new Date(date); //表示当前系统时间的Date对象
  var year = dateObj.getFullYear(); //当前系统时间的完整年份值
  var month = dateObj.getMonth() + 1; //当前系统时间的月份值
  var date = dateObj.getDate(); //当前系统时间的月份中的日
  var day = dateObj.getDay(); //当前系统时间中的星期值
  var weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  var week = weeks[day]; //根据星期值，从数组中获取对应的星期字符串
  var hour = dateObj.getHours(); //当前系统时间的小时值
  var minute = dateObj.getMinutes(); //当前系统时间的分钟值
  var second = dateObj.getSeconds(); //当前系统时间的秒钟值
  //如果月、日、小时、分、秒的值小于10，在前面补0
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  var newDate =
    year +
    "年" +
    month +
    "月" +
    date +
    "日  " +
    week
  var newTime = hour +":" +minute
    

    return [newDate,newTime]
};
