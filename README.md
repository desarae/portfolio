# Portfolio

Looking for a responsive theme for BlogSpot? Look no further. There are four in one. The toggle in the bottom left hand corner switches between themes. 

* bg-0 The first is a dark blue with a left menu. 
* bg-1 The second is a sunny blue theme with semi transparent background. 
* bg-2 The third is a dark night complete with swiveling moon and twinkling stars. 
* bg-3 The fourth theme is a wide purple and gold theme. It is simple with a nav at the top of the page. 

## Sections

* About
* Beta Testing
* Responsive
* Accessibility Friendly
* Scripts


## About
This is a site built for Desarae Veit's work. The site uses the Bootstrap framework and Blogger.

* The main site is hosted at: http://desaraev.com and the beta site is under beta subdomain.
* Pattern library: http://www.desaraev.com/p/pattern-library.html
* Documentation on Github: http://desaraevdotcom.github.io/portfolio (editable by admin under settings)

## Beta Testing

* The beta site is located at beta.desaraev.com
* The CSS Change for beta is <code> link href='https://rawgit.com/Desaraevdotcom/portfolio/blogger/stylesheets/beta.min.css' media='all' rel='stylesheet' type='text/css'/ </code>

## Responsive

All the themes are responsive and include a secondary hamburger menu.

## Accessibility Friendly

Level AA/508 compliance has not been fully tested on these themes but they are built with accessibility in mind. The main template includes a skip nav and details on color contrast testing.

## Scripts

Header scripts are loaded asyncronously using the async="async" attribute. If Blogger didn't require XML it could be written as just async. This is only neccessary for scripts using the src tag and is an HTML5 specific attribute.

For older browser support add:

<code>
  var resource = document.createElement('script'); 
  resource.src = "https://third-party.com/resource.js";
  var script = document.getElementsByTagName('script')[0];
  script.parentNode.insertBefore(resource, script);
</code>

OR

<code>
(function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'https://third-party.com/resource.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));</code>

Details here: https://css-tricks.com/thinking-async/
