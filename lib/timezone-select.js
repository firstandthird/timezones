//timezone-select.js
(function($){

  var cities = [
    {"key": "America/Adak", "name": "Aleutian Islands"},
    {"key": "Pacific/Honolulu", "name": "Hawaii"},
    {"key": "America/Anchorage", "name": "Alaska Time"},
    {"key": "America/Juneau", "name": "Alaska Time - Alaska panhandle"},
    {"key": "America/Nome", "name": "Alaska Time - west Alaska"},
    {"key": "America/Sitka", "name": "Alaska Time - southeast Alaska panhandle"},
    {"key": "America/Yakutat", "name": "Alaska Time - Alaska panhandle neck"},
    {"key": "America/Los_Angeles", "name": "Pacific Time"},
    {"key": "America/Metlakatla", "name": "Metlakatla Time - Annette Island"},
    {"key": "America/Boise", "name": "Mountain Time - south Idaho & east Oregon"},
    {"key": "America/Denver", "name": "Mountain Time"},
    {"key": "America/Phoenix", "name": "Mountain Standard Time - Arizona"},
    {"key": "America/Chicago", "name": "Central Time"},
    {"key": "America/Indiana/Knox", "name": "Central Time - Indiana - Starke County"},
    {"key": "America/Indiana/Tell_City", "name": "Central Time - Indiana - Perry County"},
    {"key": "America/Menominee", "name": "Central Time - Michigan - Dickinson, Gogebic, Iron & Menominee Counties"},
    {"key": "America/North_Dakota/Beulah", "name": "Central Time - North Dakota - Mercer County"},
    {"key": "America/North_Dakota/Center", "name": "Central Time - North Dakota - Oliver County"},
    {"key": "America/North_Dakota/New_Salem", "name": "Central Time - North Dakota - Morton County (except Mandan area)"},
    {"key": "America/Detroit", "name": "Eastern Time - Michigan - most locations"},
    {"key": "America/Indiana/Indianapolis", "name": "Eastern Time - Indiana - most locations"},
    {"key": "America/Indiana/Marengo", "name": "Eastern Time - Indiana - Crawford County"},
    {"key": "America/Indiana/Petersburg", "name": "Eastern Time - Indiana - Pike County"},
    {"key": "America/Indiana/Vevay", "name": "Eastern Time - Indiana - Switzerland County"},
    {"key": "America/Indiana/Vincennes", "name": "Eastern Time - Indiana - Daviess, Dubois, Knox & Martin Counties"},
    {"key": "America/Indiana/Winamac", "name": "Eastern Time - Indiana - Pulaski County"},
    {"key": "America/Kentucky/Louisville", "name": "Eastern Time - Kentucky - Louisville area"},
    {"key": "America/Kentucky/Monticello", "name": "Eastern Time - Kentucky - Wayne County"},
    {"key": "America/New_York", "name": "Eastern Time"}
  ];

  var Timezone = {
    init : function(cities){
      this.cities = cities;
      this.html = this.getHTMLOptions();
      this.currentTimezone = this.getCurrentTimezoneKey();
    },
    getHTMLOptions : function(){
      var html = '';
      var offset = 0;

      $.each(this.cities,function(i,obj){
        offset = moment.tz(obj.key).format('Z');
        html += '<option data-offset="' + offset + '" value="'+ obj.key +'">(GMT ' + offset + ') ' + obj.name +'</option>';
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