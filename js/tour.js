var tourDates = [
  {
    date: 'Saturday March 3',
    city: 'Reno, NV',
    venue: 'Silver Legacy Casino',
    url: 'https://www1.ticketmaster.com/imomsohard-reno-nevada-03-03-2018/event/17005354E2D359F6'
  },
  {
    date: 'Wednesday April 18',
    city: 'Nashville, TN',
    venue: 'Ryman Auditorium',
    url: 'https://www1.ticketmaster.com/event/1B005387CED6A3B9'
  },
  {
    date: 'Friday April 27',
    city: 'Scottsdale, AZ',
    venue: 'Talking Stick Resort',
    url: 'https://www1.ticketmaster.com/event/19005432FC3A54E5#efeat4212'
  },
  {
    date: 'Saturday April 28',
    city: 'Scottsdale, AZ',
    venue: 'Talking Stick Resort',
    url: 'http://www.ticketmaster.com/event/190054286E580F57'
  },
  {
    date: 'Thursday May 3',
    city: 'Norfolk, VA',
    venue: 'Chrysler Hall',
    url: 'http://www.ticketmaster.com/event/01005456F100BE7C'
  },
  {
    date: 'Saturday May 5',
    city: 'Raleigh, NC',
    venue: 'Raleigh Memorial Auditorium',
    url: 'http://www.ticketmaster.com/event/0E00544ECB6FB8FE'
  },
  {
    date: 'Sunday May 6',
    city: 'Charlotte, NC',
    venue: 'Ovens Auditorium',
    url: 'http://www.ticketmaster.com/event/0E00544E011CDAAE'
  },
  {
    date: 'Tuesday May 8',
    city: 'Rosemont, IL',
    venue: 'Rosemont Theatre',
    url: ''
  },
  {
    date: 'Wednesday May 9',
    city: 'Peoria, IL',
    venue: 'Peoria Civic Center',
    url: 'http://www.ticketmaster.com/event/0700544ECFBE6984'
  },
  {
    date: 'Thursday May 10',
    city: 'Toledo, OH',
    venue: 'Stranahan Theatre & Great Hall',
    url: 'http://www.etix.com/ticket/p/5153454/imomsohardmoms-night-out-round-2-toledo-stranahan-theater'
  },
  {
    date: 'Saturday May 12',
    city: 'Milwaukee, WI',
    venue: 'Riverside Theater',
    url: 'http://pabsttheater.org/event/IMOMSOHARD2018/'
  },
  {
    date: 'Thursday May 31',
    city: 'Kansas City, MO',
    venue: 'Starlight Theater',
    url: 'http://tickets.kcstarlight.com/single/psdetail.aspx?psn=2508'
  },
  {
    date: 'Friday June 1',
    city: 'Lincoln, NE',
    venue: 'Pinewood Bowl Ampitheater',
    url: 'http://www.ticketmaster.com/event/06005456F8B8CCB4'
  },
  {
    date: 'Saturday June 2',
    city: 'Cedar Rapids, IA',
    venue: 'McGrath Ampitheatre',
    url: 'http://www.ticketmaster.com/event/06005456A904A30E'
  },
  {
    date: 'Friday June 15',
    city: 'Saratoga, CA',
    venue: 'Mountain Winery',
    url: 'http://www.mountainwinery.com/'
  },
  {
    date: 'Saturday June 16',
    city: 'Paso Robles, CA',
    venue: 'Vina Robles Ampitheatre',
    url: 'http://www.ticketmaster.com/event/0900544FBAEF749D'
  },
  {
    date: 'Saturday July 7',
    city: 'Las Vegas, NV',
    venue: 'Green Valley Ranch Resort & Spa',
    url: 'http://www.ticketmaster.com/event/1700544FD3F27157'
  },
]

document.addEventListener("DOMContentLoaded", 
  function() {
    var v = document.getElementsByClassName("tour-dates");
    var li, p, a, button;
    var datesToParse = moment() < moment.tz("2018-02-26 10:00:00", "America/New_York") ? tourDates.slice(0, 4) : tourDates;
    datesToParse.filter(function(data, idx) {
      var t = data.date.split(' ');
      return new Date(t[1] + ' ' + t[2] +', 2018 23:59:59') > Date.now();
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