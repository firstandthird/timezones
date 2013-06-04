
suite('timezone-select', function() {
  var select;
  suiteSetup(function(){
    select = $('<select>');
    select.timezone();
  });
  suite('general',function(){
    test('jQuery element should have timezone function',function(){
      assert.equal(typeof select.timezone, "function");
    });
    test('Timezone should return array of jQuery object to allow chaining',function(){
      assert.deepEqual(select.timezone(), select);
    });
    test('jQuery element should have 13 options by default',function(){
      assert.equal(select.find('option').length, 13);
    });
    test('jQuery element should have current timezone selected or first one if no available',function(){
      var currentTimezoneKey = ((new Date()).getTimezoneOffset() / - 60).toFixed(1);
      var isValueInside = (function(){
        var is = false;

        select.find('option').each(function(){
          if ($(this).val() == currentTimezoneKey){
            is = true;
            return;
          }
        });

        return is;
      })();
      if (isValueInside){
        assert.equal(select.val(),currentTimezoneKey);
      }
      else {
        assert.equal(select.val(),select.find('option').first().val());
      }
    });
    test('Given a number of cities, should same number of options',function(){
      var mock = [{value: "-10.0", name: "Honolulu - HST UTC-10"},
        {value: "-7.0", name: "San Francisco - PDT UTC-7"}];

      select.timezone(mock);
      assert.equal(mock.length,select.find('option').length);
    });
  });
});
