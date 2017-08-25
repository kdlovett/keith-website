---
layout: post
title: "[Project] Boston Farms Versus GHG Emissions"
date: 2017-05-20
category: computer-science
---

<link rel="stylesheet" type="text/css"  href="/keiths-site/css/main.css">

(Updated May 21, 2017, June 2, 2017, and July 29, 2017)

## Description:
Here is another Google Maps based project I have been working on. Essentially, this map is can be used to visualize the placement of Boston's farms, and their distances to buildings with various Greenhouse gas emissions. The heat map is created with a set of data points corresponding to each buildings' latitude and longitude, and a corresponding weight centered at this location based on the level of Greenhouse gas that the building emits. According to the process of [carbon sequestration](https://en.wikipedia.org/wiki/Carbon_sequestration#Agriculture), it seems that placing the farms close enough to the data produced by the heat map such that the crops there absorb the greatest amount of carbon dioxide without harming the crops would enhance the process of carbon removal. As the user zooms out, the heat map becomes increasingly general. Zoom closer in for a more precise approximation of GHG emissions.

Update (July 29, 2017) So it looks like the json data that was used to find the GHG is being hosted by a different site and in a different format soon, unfortunately, and therefore, the map might not generate in the coming future. If this is the case, here's a pretty comprehensive image of the result.

![ghgMap](/keiths-site/images/ghgMap.png)

<script async src="//jsfiddle.net/kdlovett/t7brz2Ls/embed/js,html,css,result/dark/"></script>

## Possible sources of error:
When I created markers not just for the farms, but also for each address used to create the heat map, (to enable this, uncomment lines 59 through 63 in the javascript) it appeared that the heat map seemed to take into account the density of the addresses, more than the weight of the ghg_emmissions alone. For example, Boston College, which has a ghg_emission value of roughly 23000, seems to barely sway the heat map, whereas a nearby cluster of addresses with ghg_emmission values in the 0-1000 range resulted in a much more intense mapping. This does not seem entirely accurate nor "fair".
* Update (May 21, 2017): Furthermore, unfortunately it appears that sometimes the heat map layer does not properly render in its entirety or at all (particularly on mobile devices). Perhaps this has something to do with a limit to the number of API requests that can be made by a particular device? In any case, one can still get a sense of the data by enabling the markers for the ghg_emmissions. In the meantime I think I'd like to work on other projects rather than trying to perfect this. Onwards!
* Update (June 2, 2017): Okay! I think I figured out why I wasn't as accurate results as I was originally getting - it's because I changed the denominator of the fraction on line 56 of the Javascript, which essentially is adjusting how "visible" the carbon is... If the denominator is too small (at first it was just 1) then there is just a ton of red covering the Northeast, but if it's too large, as it was before I updated it, the heat map doesn't really tell much. Much better!

## Runtime:
This program runs at O(n^2) runtime.

## Attribution:
* [Google Maps Geocoder](https://maps.googleapis.com/maps/api/geocode/json) was used to plot the data used for the heat map.
* [More info on Google's Geocoder](https://developers.google.com/maps/documentation/geocoding/intro)
* [Javascript tutorial on how to print data to the console](https://www.w3schools.com/js/js_output.asp). Useful for testing purposes.
* [Tutorial on getting json data](http://api.jquery.com/jquery.getjson/)
* [Energy data used](https://data.cityofboston.gov/Facilities/Building-Energy-and-Water-Use-Metrics/n9us-mq2b)
* [Tutorial on heatmaps](https://developers.google.com/maps/documentation/javascript/earthquakes#heatmaps)
* [Help on heatmaps](http://stackoverflow.com/questions/20861906/google-maps-heatmap-not-showing)
* [Here](https://data.cityofboston.gov/dataset/Urban-Farms/byxy-288e) is the farm data that I used.
