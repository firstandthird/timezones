#timezone-select

A jQuery plugin to turn a select box into a timezone selector

##Installation

###Bower

`bower install timezone-select`

###Manual Download

- [Development]()
- [Production]()

##Usage

jQuery.timezone is a simple plugin to populate a `select` element with Current Timezones.

Usage is really simple

```js
$('select').timezone();
```

This will populate the select with the current values by default:

<table border="0" cellspacing="5" cellpadding="5">
  <tr><th>Option label</th><th>Value</th></tr>
  <tr><td>Honolulu - HST UTC-10</td><td>-10.0</td></tr>
  <tr><td>San Francisco - PDT UTC-7</td><td>-7.0</td></tr>
  <tr><td>Denver - MDT UTC-6</td><td>-6.0</td></tr>
  <tr><td>Chicago - CDT UTC-5</td><td>-5.0</td></tr>
  <tr><td>New York - EDT UTC-4</td><td>-4.0</td></tr>
  <tr><td>Rio de Janeiro - BRT UTC-3</td><td>-3.0</td></tr>
  <tr><td>London - BST UTC+1</td><td>1.0</td></tr>
  <tr><td>Vienna - CEST UTC+2</td><td>2.0</td></tr>
  <tr><td>Mumbai - IST UTC+5.5</td><td>5.5</td></tr>
  <tr><td>Singapore - SGT UTC+8</td><td>8.0</td></tr>
  <tr><td>Tokyo - JST UTC+9</td><td>9.0</td></tr>
  <tr><td>Sydney - EST UTC+10</td><td>10.0</td></tr>
  <tr><td>Auckland - NZST UTC+12</td><td>12.0</td></tr>
  <tr><td>Honolulu - HST UTC-10</td><td>-10.0</td></tr>
  <tr><td>San Francisco - PDT UTC-7</td><td>-7.0</td></tr> 
</table>

The plugin will try as well to guess your current timezone from [`Date.getTimezoneOffset`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FDate%2FgetTimezoneOffset)

### Overwriting cities

When you init the select, you can pass an array of objects with `value`, `name` keys to overwrite the default ones.

```js
var myCities = [
  {value: "-10.0", name: "Honolulu"},
  {value: "-7.0", name: "San Francisco"}
];

$('select').timezone(myCities);
```

You can see the [demo][] now.

[demo]: http://projects.jga.me/timezone-select/ "View the demo now!"

##Development

###Requirements

- node and npm
- bower `npm install -g bower`
- grunt `npm install -g grunt-cli`

###Setup

- `npm install`
- `bower install`

###Run

`grunt dev`

or for just running tests on file changes:

`grunt ci`

###Tests

`grunt mocha`