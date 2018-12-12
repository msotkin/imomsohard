// Be aware of 2019 logic below!!
var tourDates = [
  {
    date: 'Tuesday November 13',
    city: 'Seattle, WA',
    venue: 'The Paramount',
    url: 'http://www.ticketmaster.com/event/0F0054DC01DF6D0C'
  },
  {
    date: 'Wednesday November 14',
    city: 'Santa Rosa, CA',
    venue: 'Luther Burbank Center for the Arts',
    url: 'https://lutherburbankcenter.org/event/imomsohard-round-2/'
  },
  {
    date: 'Thursday November 15',
    city: 'Anaheim, CA',
    venue: 'City National Grove of Anaheim',
    url: 'http://axs.com/events/357423/imomsohard-tickets?skin=cngoa'
  },
  {
    date: 'Friday November 16',
    city: 'Las Vegas, NV',
    venue: 'Treasure Island Hotel',
    url: 'https://ti.eventshopper.com/shopobt/?skin=treasureisland&fac=TIM#2d6bf11f-605a-49a8-880c-b347e86f8191'
  },
  {
    date: 'Saturday November 17',
    city: 'San Diego, CA',
    venue: 'The Balboa Theatre',
    url: 'http://www.ticketmaster.com/event/0A0054E2FC743643'
  },
  {
    date: 'Sunday November 18',
    city: 'Thousand Oaks, CA',
    venue: 'Kavli Theatre',
    url: 'http://www.ticketmaster.com/event/0B0054DCCDE02AB5'
  },
  {
    date: 'Friday December 7',
    city: 'Mashantucket, CT',
    venue: 'Foxwoods Casino',
    url: 'http://www.ticketmaster.com/event/1D0054EAD5A13B73'
  },
  {
    date: 'Saturday December 8',
    city: 'Bethlehem, PA',
    venue: 'Sands Bethlehem Event Center',
    url: 'http://www.ticketmaster.com/event/020054E5064FD5A3'
  },
  {
    date: 'Sunday December 9',
    city: 'Boston, MA',
    venue: 'Chevalier Theatre',
    url: 'http://chevaliertheatre.com/artist/imomsohard/'
  },
  {
    date: 'Thursday March 7',
    city: 'Milwaukee, WI',
    venue: 'The Pabst Theater',
    url: 'http://pabsttheater.org/event/imomsohard2019'
  },
  {
    date: 'Friday March 8 - 7PM',
    city: 'Milwaukee, WI',
    venue: 'The Pabst Theater',
    url: 'http://pabsttheater.org/event/imomsohard2019'
  },
  {
    date: 'Friday March 8 - 9:30PM',
    city: 'Milwaukee, WI',
    venue: 'The Pabst Theater',
    url: 'http://pabsttheater.org/event/imomsohard2019'
  },
]

document.addEventListener("DOMContentLoaded", 
  function() {
    var v = document.getElementsByClassName("tour-dates");
    var li, p, a, button;
    var datesToParse = moment() < moment.tz("2018-02-26 10:00:00", "America/New_York") ? tourDates.slice(0, 4) : tourDates;
    datesToParse.filter(function(data, idx) {
      var t = data.date.split(' ');
      // Temp solution for 2019 shows
      var year = t[1] === 'March' ? '2019' : '2018'
      return new Date(t[1] + ' ' + t[2] +', ' + year + ' 23:59:59') > Date.now();
    }).forEach(function(tourDate) {
      li = document.createElement("li");
      a = document.createElement("a");
      button = document.createElement("button");

      tourDate.soldOut ? button.innerHTML = "SOLD OUT!" : button.innerHTML = "TICKETS!";
      if (!tourDate.url) button.innerHTML = "Coming Soon!";
      a.setAttribute("href", tourDate.url);
      a.setAttribute("target", "_blank");
      a.appendChild(button);
      
      li.innerHTML = "<h4>"+tourDate.date + "</h4><p><span>" + tourDate.city + "</span></p><p>" + tourDate.venue + "</p>";

      li.appendChild(a);
      v[0].appendChild(li);
    });
  })