(function($){

  var Timezone = {
    init : function(cities){
      this.cities = cities;
      this.html = this.getHTMLOptions();
      this.currentTimezone = this.getCurrentTimezoneKey();
    },
    getHTMLOptions : function(){
      var html = '';
      var offset = 0;

      $.each(this.cities,function(name, obj){
        offset = moment.tz(name).format('Z');
        html += '<option data-offset="' + offset + '" value="'+ name +'">(GMT ' + offset + ') ' + name +'</option>';
      });

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
