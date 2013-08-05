var testx = function() {};

suite('timezones', function() {
  var select;
  suiteSetup(function(){
    select = $('<select>');
    select.timezones({tz: momentTZData});
  });
  suite('general',function(){
    test('jQuery element should have timezone function',function(){
      assert.equal(typeof select.timezones, "function");
    });
    test('Timezone should return array of jQuery object to allow chaining',function(){
      assert.deepEqual(select.timezones({tz: momentTZData}), select);
    });
    test('jQuery element should have options',function(){
      assert.equal(select.find('option').length > 1, true);
    });
    testx('jQuery element should have current timezone selected or first one if no available',function(){
      var currentTimezoneKey = moment().format('Z');
      var isValueInside = (function(){
        var is = false;

        select.find('option').each(function(){
          if ($(this).data('offset') == currentTimezoneKey){
            is = true;
            return;
          }
        });

        return is;
      })();
      if (isValueInside){
        assert.equal(select.find('option[value="' + select.val() + '"]').data('offset'), currentTimezoneKey);
      }
      else {
        assert.equal(select.val(), select.find('option').first().val());
      }
    });
  });
});
