/*!
 * timezone-select - A jQuery plugin to turn a select box into a timezone selector
 * v0.1.0
 * https://github.com/jgallen23/timezone-select
 * copyright Greg Allen 2013
 * MIT License
*/
//timezone-select.js
(function($){
  var cities = [
    {value: "-10.0", name: "Honolulu - HST UTC-10"},
    {value: "-7.0", name: "San Francisco - PDT UTC-7"},
    {value: "-6.0", name: "Denver - MDT UTC-6"},
    {value: "-5.0", name: "Chicago - CDT UTC-5"},
    {value: "-4.0", name: "New York - EDT UTC-4"},
    {value: "-3.0", name: "Rio de Janeiro - BRT UTC-3"},
    {value: "1.0", name: "London - BST UTC+1"},
    {value: "2.0", name: "Vienna - CEST UTC+2"},
    {value: "5.5", name: "Mumbai - IST UTC+5.5"},
    {value: "8.0", name: "Singapore - SGT UTC+8"},
    {value: "9.0", name: "Tokyo - JST UTC+9"},
    {value: "10.0", name: "Sydney - EST UTC+10"},
    {value: "12.0", name: "Auckland - NZST UTC+12"}
  ];
  var Timezone = {
    init : function(cities){
      this.cities = cities;
      this.html = this.getHTMLOptions();
      this.currentTimezone = this.getCurrentTimezoneKey();
    },
    getHTMLOptions : function(){
      var html = '';

      $.each(this.cities,function(i,obj){
        html += '<option value="'+ obj.value +'">' + obj.name +'</option>';
      });

      return html;
    },
    addNames : function(select){
      return $(select).empty().append($(this.html));
    },
    selectValue : function(select, value){
      value = value || this.currentTimezone;

      var match = $.grep(this.cities,function(obj){
        return obj.value == value;
      });

      if (match.length){
        $(select).val(value);
      }

      return $(select);
    },
    getCurrentTimezoneKey : function(){
      var date = new Date();

      return (date.getTimezoneOffset() / - 60).toFixed(1);
    }
  };

  $.fn.timezone = function(paramCities) {
    Timezone.init(paramCities || cities);

    return this.each(function(){
      Timezone.addNames(this);
      Timezone.selectValue(this);
      return this;
    });
  };

  $.fn.timezone.defaults = {

  };
})(jQuery);