/* Activity Viewer data file — format v1
   window.ACTIVITY_DATA.<source> = {
     version: 1, source, label (shown under the title), timeNote (optional),
     activities: [{
       t:  type code (1 running, 6 walking, 9 cycling, 16 free training)
       s:  start, local time "YYYY-MM-DDTHH:MM:SS"
       d:  moving time, s        m: distance, m        c: calories, kcal
       ap: avg pace, s/m         fp: best pace, s/m    sp: slowest pace, s/m
       hr: [[sec, bpm], ...]  heart rate outside a GPS track (optional)
       st: steps (optional)
       trk: GPS track, parallel arrays sampled every ~5 s (optional):
            {t: sec, la/lo: lat/lon x1e5, e: elevation m, h: bpm, d: cumulative m}
       map: offline background for the route (optional):
            {c: [lat, lon] centre, v: [half-width, half-height] m, land, water: SVG paths in m, place}
     }]
   } */
window.ACTIVITY_DATA = window.ACTIVITY_DATA || {};
window.ACTIVITY_DATA.garmin = {"version":1,"source":"Garmin","label":"Garmin Connect","activities":[]};
