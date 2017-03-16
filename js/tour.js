const tourDates = [
  {
    date: 'Monday June 12',
    city: 'Modesto, CA',
    venue: 'Gallo Center',
    url: ''
  },
  {
    date: 'Tuesday June 13',
    city: 'San Jose, CA',
    venue: 'Center for the Performing Arts',
    url: ''
  },
  {
    date: 'Wednesday June 14',
    city: 'Santa Rosa, CA',
    venue: 'Luther Burbank Center for the Arts',
    url: ''
  },
  {
    date: 'Thursday June 15',
    city: 'Fresno, CA',
    venue: 'William Saroyan Theatre',
    url: ''
  },
  {
    date: 'Friday June 16',
    city: 'Thousand Oaks, CA',
    venue: 'Thousand Oaks Civic Arts Plaza',
    url: ''
  },
  {
    date: 'Saturday June 17',
    city: 'Los Angeles, CA',
    venue: 'The Theatre at Ace Hotel',
    url: ''
  },
  {
    date: 'Monday June 19',
    city: 'Riverside, CA',
    venue: 'The Fox',
    url: ''
  },
  {
    date: 'Wednesday June 21',
    city: 'Denver, CO',
    venue: 'Paramount Theatre',
    url: ''
  },
  {
    date: 'Thursday June 22',
    city: 'Fort Collins',
    venue: 'Lincoln Center',
    url: ''
  },
  {
    date: 'Saturday June 24',
    city: 'Omaha, NE',
    venue: 'Kiewit Concert Hall',
    url: ''
  },
  {
    date: 'Sunday June 25',
    city: 'Kansas City, MO',
    venue: 'The Midland By AMC',
    url: ''
  },
  {
    date: 'Tuesday June 27',
    city: 'St Louis, MO',
    venue: 'Touhill Performing Arts Center',
    url: ''
  },
  {
    date: 'Thursday June 29',
    city: 'Indianapolis, IN',
    venue: 'Murat',
    url: ''
  },
  {
    date: 'Friday June 30',
    city: 'Peoria, IL',
    venue: 'Civic Center',
    url: ''
  },
  {
    date: 'Thursday July 6',
    city: 'Green Bay, WI',
    venue: 'Meyer',
    url: ''
  },
  {
    date: 'Friday July 7',
    city: 'Chicago, IL',
    venue: 'Vic Theatre',
    url: ''
  },
  {
    date: 'Saturday July 8',
    city: 'Flint, MI',
    venue: 'The Whiting',
    url: ''
  },
  {
    date: 'Sunday July 9',
    city: 'Grand Rapids, MI',
    venue: 'DeVos Performance Hall',
    url: ''
  },
  {
    date: 'Tuesday July 11',
    city: 'Columbus, OH',
    venue: 'Southern Theatre',
    url: ''
  },
  {
    date: 'Wednesday July 12',
    city: 'Akron, OH',
    venue: '',
    url: ''
  },
  {
    date: 'Thursday July 13',
    city: 'Pittsburgh, PA',
    venue: 'Byham Theater',
    url: ''
  },
  {
    date: 'Friday July 14',
    city: 'York, PA',
    venue: 'Pullo Center',
    url: ''
  },
  {
    date: 'Saturday July 15',
    city: 'Baltimore, MD',
    venue: 'Lyric Opera House',
    url: ''
  },
  {
    date: 'Sunday July 16',
    city: 'Englewood, NJ',
    venue: 'Bergen PAC',
    url: ''
  },
  {
    date: 'Monday July 17',
    city: 'Red Bank, NJ',
    venue: 'Count Basie Theatre',
    url: ''
  },
  {
    date: 'Wednesday July 19',
    city: 'New York, NY',
    venue: 'Town Hall',
    url: ''
  },
  {
    date: 'Thursday July 20',
    city: 'Boston, MA',
    venue: 'Wilbur Theatre',
    url: ''
  },
  {
    date: 'Saturday July 22',
    city: 'Providence, RI',
    venue: 'Veterans Memorial Auditorium',
    url: ''
  },
  {
    date: 'Sunday July 23',
    city: 'Washington, DC',
    venue: 'Warner Theatre',
    url: ''
  },
  {
    date: 'Tuesday July 25',
    city: 'Atlanta, GA',
    venue: 'Cobb Energy Performing Arts Centre',
    url: ''
  },
  {
    date: 'Thursday July 27',
    city: 'San Antonio, TX',
    venue: 'Tobin',
    url: ''
  },
  {
    date: 'Friday July 28',
    city: 'Dallas, TX',
    venue: 'Long Center',
    url: ''
  },
  {
    date: 'Saturday July 29',
    city: 'Dallas, TX',
    venue: 'Majestic',
    url: ''
  },
  {
    date: 'Sunday July 30',
    city: 'Houston, TX',
    venue: 'Cullen',
    url: ''
  },
  {
    date: 'Monday July 31',
    city: 'Oklahoma City, OK',
    venue: 'Rose State',
    url: ''
  },
  {
    date: 'Tuesday August 1',
    city: 'Tulsa, OK',
    venue: 'Ballroom/ Cox Business Center',
    url: ''
  }
]

document.addEventListener("DOMContentLoaded", 
  function() {
    const v = document.getElementsByClassName("tour-dates");
    let li, p, a, button;
    for (let i = 0; i < tourDates.length; i++) {
      li = document.createElement("li");
      p = document.createElement("p");
      a = document.createElement("a");
      button = document.createElement("button");

      button.innerHTML = "Tickets";
      a.setAttribute("href", tourDates[i].url);
      a.setAttribute("target", "_blank");
      a.appendChild(button);
      
      p.innerHTML = tourDates[i].date + " <span>" + tourDates[i].city + "</span> " + tourDates[i].venue;
      
      li.appendChild(p);
      li.appendChild(a);
      v[0].appendChild(li);
    }
  })