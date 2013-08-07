(function($){

  var Timezone = {
    init : function(cities){
      this.cities = [];
      
      for(var key in cities) {
        this.cities.push({
          name: key,
          offset: moment.tz(key).format('Z')
        });
      }

      this.cities.sort(function(a, b){
        return parseInt(a.offset.replace(":", ""), 10) - parseInt(b.offset.replace(":", ""), 10);
      });

      this.html = this.getHTMLOptions();
      this.currentTimezone = this.getCurrentTimezoneKey();
    },
    getHTMLOptions : function(){
      var html = '';
      var offset = 0;
      var i, c = this.cities.length, city;

      for(i = 0; i < c; i++) {
        city = this.cities[i];
        html += '<option data-offset="' + city.offset + '" value="'+ city.name +'">(GMT ' + city.offset + ') ' + city.name +'</option>';
      }

      return html;
    },
    addNames : function(select){
      return $(select).empty().append($(this.html));
    },
    selectValue : function(select, value){
      value = value || this.currentTimezone;

      var match = $(select).find('option[data-offset="' + value + '"]');

      if (match.length){
        $(select).val(match.val());
      }

      return $(select);
    },
    getCurrentTimezoneKey : function(){
      return moment().format('Z');
    },
    getCurrentOffset : function(){
      return parseInt(this.currentTimezone, 10);
    }
  };

  $.fn.timezones = function(opts) {

    if(typeof opts === "string") {
      return Timezone[opts].apply(Timezone, Array.prototype.slice.call(arguments));
    }

    opts = $.extend({}, $.fn.timezones.defaults, opts);
    moment.tz.add(opts.tz);

    Timezone.init(opts.tz.zones);

    return this.each(function(){
      Timezone.addNames(this);
      Timezone.selectValue(this);
      return this;
    });
  };

  $.fn.timezones.defaults = {
    tz: {
      zones: []
    }
  };
})(jQuery);
