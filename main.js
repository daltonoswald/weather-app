(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(n){e(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function a(t){e(1,arguments);var r=n(t),a=r.getUTCDay(),o=(a<1?7:0)+a-1;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function o(t){e(1,arguments);var r=n(t),o=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(o+1,0,4),i.setUTCHours(0,0,0,0);var u=a(i),d=new Date(0);d.setUTCFullYear(o,0,4),d.setUTCHours(0,0,0,0);var s=a(d);return r.getTime()>=u.getTime()?o+1:r.getTime()>=s.getTime()?o:o-1}var i={};function u(){return i}function d(t,a){var o,i,d,s,c,l,m,f;e(1,arguments);var h=u(),g=r(null!==(o=null!==(i=null!==(d=null!==(s=null==a?void 0:a.weekStartsOn)&&void 0!==s?s:null==a||null===(c=a.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==d?d:h.weekStartsOn)&&void 0!==i?i:null===(m=h.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=n(t),v=w.getUTCDay(),y=(v<g?7:0)+v-g;return w.setUTCDate(w.getUTCDate()-y),w.setUTCHours(0,0,0,0),w}function s(t,a){var o,i,s,c,l,m,f,h;e(1,arguments);var g=n(t),w=g.getUTCFullYear(),v=u(),y=r(null!==(o=null!==(i=null!==(s=null!==(c=null==a?void 0:a.firstWeekContainsDate)&&void 0!==c?c:null==a||null===(l=a.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==s?s:v.firstWeekContainsDate)&&void 0!==i?i:null===(f=v.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==o?o:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(w+1,0,y),b.setUTCHours(0,0,0,0);var p=d(b,a),C=new Date(0);C.setUTCFullYear(w,0,y),C.setUTCHours(0,0,0,0);var T=d(C,a);return g.getTime()>=p.getTime()?w+1:g.getTime()>=T.getTime()?w:w-1}function c(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const l=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return c("yy"===e?r%100:r,e.length)},m=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):c(n+1,2)},f=function(t,e){return c(t.getUTCDate(),e.length)},h=function(t,e){return c(t.getUTCHours()%12||12,e.length)},g=function(t,e){return c(t.getUTCHours(),e.length)},w=function(t,e){return c(t.getUTCMinutes(),e.length)},v=function(t,e){return c(t.getUTCSeconds(),e.length)},y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return c(Math.floor(r*Math.pow(10,n-3)),e.length)};var b={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return l(t,e)},Y:function(t,e,n,r){var a=s(t,r),o=a>0?a:1-a;return"YY"===e?c(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){return c(o(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return m(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,a,o,i){var l=function(t,a){e(1,arguments);var o=n(t),i=d(o,a).getTime()-function(t,n){var a,o,i,c,l,m,f,h;e(1,arguments);var g=u(),w=r(null!==(a=null!==(o=null!==(i=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(f=g.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==a?a:1),v=s(t,n),y=new Date(0);return y.setUTCFullYear(v,0,w),y.setUTCHours(0,0,0,0),d(y,n)}(o,a).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===a?o.ordinalNumber(l,{unit:"week"}):c(l,a.length)},I:function(t,r,i){var u=function(t){e(1,arguments);var r=n(t),i=a(r).getTime()-function(t){e(1,arguments);var n=o(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),a(r)}(r).getTime();return Math.round(i/6048e5)+1}(t);return"Io"===r?i.ordinalNumber(u,{unit:"week"}):c(u,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):f(t,e)},D:function(t,r,a){var o=function(t){e(1,arguments);var r=n(t),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=a-r.getTime();return Math.floor(o/864e5)+1}(t);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):c(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):g(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):v(t,e)},S:function(t,e){return y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return C(a);case"XXXX":case"XX":return T(a);default:return T(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return C(a);case"xxxx":case"xx":return T(a);default:return T(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+p(a,":");default:return"GMT"+T(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+p(a,":");default:return"GMT"+T(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return c(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return c((r._originalDate||t).getTime(),e.length)}};function p(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+c(o,2)}function C(t,e){return t%60==0?(t>0?"-":"+")+c(Math.abs(t)/60,2):T(t,e)}function T(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+c(Math.floor(a/60),2)+n+c(a%60,2)}const M=b;var D=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},k={p:x,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return D(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",D(a,e)).replace("{{time}}",x(o,e))}};const E=k;var S=["D","DD"],U=["YY","YYYY"];function P(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var N,O={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},B={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function q(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function F(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return i=t.valueCallback?t.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const I={code:"en-US",formatDistance:function(t,e,n){var r,a=W[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:function(t,e,n,r){return B[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(N={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(N.matchPattern);if(!n)return null;var r=n[0],a=t.match(N.parsePattern);if(!a)return null;var o=N.valueCallback?N.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:F({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:F({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:F({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:F({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,j=/^'([^]*?)'?$/,z=/''/g,Q=/[a-zA-Z]/;function A(a,o,i){var d,s,c,l,m,f,h,g,w,v,y,b,p,C,T,D,x,k;e(2,arguments);var W=String(o),Y=u(),N=null!==(d=null!==(s=null==i?void 0:i.locale)&&void 0!==s?s:Y.locale)&&void 0!==d?d:I,O=r(null!==(c=null!==(l=null!==(m=null!==(f=null==i?void 0:i.firstWeekContainsDate)&&void 0!==f?f:null==i||null===(h=i.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:Y.firstWeekContainsDate)&&void 0!==l?l:null===(w=Y.locale)||void 0===w||null===(v=w.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==c?c:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var B=r(null!==(y=null!==(b=null!==(p=null!==(C=null==i?void 0:i.weekStartsOn)&&void 0!==C?C:null==i||null===(T=i.locale)||void 0===T||null===(D=T.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==p?p:Y.weekStartsOn)&&void 0!==b?b:null===(x=Y.locale)||void 0===x||null===(k=x.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==y?y:0);if(!(B>=0&&B<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!N.localize)throw new RangeError("locale must contain localize property");if(!N.formatLong)throw new RangeError("locale must contain formatLong property");var q=n(a);if(!function(r){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(r)&&"number"!=typeof r)return!1;var a=n(r);return!isNaN(Number(a))}(q))throw new RangeError("Invalid time value");var F=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(q),A=function(t,a){return e(2,arguments),function(t,a){e(2,arguments);var o=n(t).getTime(),i=r(a);return new Date(o+i)}(t,-r(a))}(q,F),G={firstWeekContainsDate:O,weekStartsOn:B,locale:N,_originalDate:q};return W.match(L).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,E[e])(t,N.formatLong):t})).join("").match(H).map((function(t){if("''"===t)return"'";var e,n,r=t[0];if("'"===r)return(n=(e=t).match(j))?n[1].replace(z,"'"):e;var u,d=M[r];if(d)return null!=i&&i.useAdditionalWeekYearTokens||(u=t,-1===U.indexOf(u))||P(t,o,String(a)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==S.indexOf(t)}(t)||P(t,o,String(a)),d(A,t,N.localize,G);if(r.match(Q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return t})).join("")}const G=document.querySelector("body"),X=document.getElementById("newCity");async function $(){let t=document.getElementById("search").value;""===t&&(t="pittsburgh");const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=aa0ef9be1aa2424cb66162618231609&q=${t}&days=3`),n=await e.json();console.log(n),document.getElementById("city").textContent=`${n.location.name}, ${n.location.region}`,document.getElementById("currentDate").textContent=A(new Date(`${n.location.localtime}`),"MM/dd/yyyy"),document.getElementById("currentCondition").textContent=`${n.current.condition.text}`,document.getElementById("currentConditionIcon").src=n.current.condition.icon,document.getElementById("currentTemperature").textContent=`It's currently ${n.current.temp_f} °F`,n.current.temp_f>="72"?(G.classList.add("hot"),G.classList.remove("cold")):(G.classList.add("cold"),G.classList.remove("hot")),document.getElementById("currentHumidity").textContent=`Humidity ${n.current.humidity}%`,document.getElementById("day2Date").textContent=A(new Date(`${n.forecast.forecastday[1].date}`),"EEEE"),document.getElementById("day2ConditionIcon").src=n.forecast.forecastday[1].day.condition.icon,document.getElementById("day2Condition").textContent=n.forecast.forecastday[1].day.condition.text,document.getElementById("day2High").textContent=`${n.forecast.forecastday[1].day.maxtemp_f} °F`,document.getElementById("day2Low").textContent=`${n.forecast.forecastday[1].day.mintemp_f} °F`,document.getElementById("day3Date").textContent=A(new Date(`${n.forecast.forecastday[2].date}`),"EEEE"),document.getElementById("day3ConditionIcon").src=n.forecast.forecastday[2].day.condition.icon,document.getElementById("day3Condition").textContent=n.forecast.forecastday[2].day.condition.text,document.getElementById("day3High").textContent=`${n.forecast.forecastday[2].day.maxtemp_f} °F`,document.getElementById("day3Low").textContent=`${n.forecast.forecastday[2].day.mintemp_f} °F`}document.getElementById("unitToggle"),A(new Date(1,11,2014),"MM-dd-yyyy"),X.addEventListener("click",$),document.getElementById("search").addEventListener("keypress",(t=>{"Enter"===t.key&&$()})),$()})();