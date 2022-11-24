Blockly.JavaScript['gauge_iot'] = function(block) {
	var dropdown_gauge_selection = block.getFieldValue('GAUGE_SELECTION');
	var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	//var code = 'kbiot_setValue_float("'+ dropdown_gauge_selection +'", '+ argument0 +');\n';
  var code;
  if(dropdown_gauge_selection == 'G1'){
    code = 'kb_iot.gauge_Value1('+ argument0 +');\n';
  }
  else {
    code = 'kb_iot.gauge_Value2('+ argument0 +');\n';
  }
	return code;
};


Blockly.JavaScript['gauge_title'] = function(block) {
  var text_title = block.getFieldValue('TITLE');
  var dropdown_gauge_selection = block.getFieldValue('GAUGE_SELECTION');

  //var code = 'IOT_CONFIG{"topic":"'+ dropdown_gauge_selection +'","data":"' + '\\"ti\\":\\"' + text_title + '\\\"' +'"}\n';
  var code;

  if(dropdown_gauge_selection == 'G1'){
    code = 'kb_iot.gauge_title1("'+ text_title +'");\n';
  }
  else {
    code = 'kb_iot.gauge_title2("'+ text_title +'");\n';
  }

  
  return code;
};

Blockly.JavaScript['gauge_unit'] = function(block) {
  var text_title = block.getFieldValue('UNIT');
  var dropdown_gauge_selection = block.getFieldValue('GAUGE_SELECTION');

  //var code = 'IOT_CONFIG{"topic":"'+ dropdown_gauge_selection +'","data":"' + '\\"u\\":\\"' + text_title + '\\"' +'"}\n';
  var code;
  if(dropdown_gauge_selection == 'G1'){
    code = 'kb_iot.gauge_unit1("'+ text_title +'");\n';
  }
  else {
    code = 'kb_iot.gauge_unit2("'+ text_title +'");\n';
  }

  
  return code;
};

Blockly.JavaScript['gauge_color'] = function(block) {
  var color = block.getFieldValue('COLOR');
  var dropdown_gauge_selection = block.getFieldValue('GAUGE_SELECTION');

  //var code = 'IOT_CONFIG{"topic":"'+ dropdown_gauge_selection +'","data":"' + '\\"clr\\":\\"' + color + '\\"' +'"}\n';
  var code;
  if(dropdown_gauge_selection == 'G1'){
    code = 'kb_iot.gauge_color1("'+ color.substring(1, 7) +'");\n';
  }
  else {
    code = 'kb_iot.gauge_color2("'+ color.substring(1, 7) +'");\n';
  }

  return code;
};

Blockly.JavaScript['gauge_minmax'] = function(block) {
  var number_min_value = 0; //block.getFieldValue('MIN_VALUE');
  var number_max_value = block.getFieldValue('MAX_VALUE');
  var dropdown_gauge_selection = block.getFieldValue('GAUGE_SELECTION');

  //var code = 'IOT_CONFIG{"topic":"'+ dropdown_gauge_selection +'","data":"' + '\\"min\\":\\"' + number_min_value + '\\",\\"max\\":\\"' + number_max_value  +'\\""}\n';
  var code;
  if(dropdown_gauge_selection == 'G1'){
    code = 'kb_iot.gauge_max1('+ number_max_value +');\n';
  }
  else {
    code = 'kb_iot.gauge_max2('+ number_max_value +');\n';
  }

  return code;
};

Blockly.JavaScript['feed_iot'] = function(block) {
	var dropdown_feed_selection = block.getFieldValue('FEED_SELECTION');
	var argument0 = Blockly.JavaScript.valueToCode(block, 'FEED_DATA', Blockly.JavaScript.ORDER_ATOMIC);
	//var code = 'kbiot_writeFeed(KBSERIAL, "' + dropdown_feed_selection + '",' + argument0 + ');\n';
  var code;
  if(dropdown_feed_selection == 'F1'){
    code = 'kb_iot.feed_Value1('+ argument0 +');\n';
  }
  else {
    code = 'kb_iot.feed_Value2('+ argument0 +');\n';
  }
	return code;
};

Blockly.JavaScript['feed_title'] = function(block) {
  var text_title = block.getFieldValue('TITLE');
  var dropdown_feed_selection = block.getFieldValue('FEED_SELECTION');

  var code = 'IOT_CONFIG{"topic":"'+ dropdown_feed_selection +'","data":"' + '\\"ti\\":\\"' + text_title + '\\\"' +'"}\n';
  return code;
};

Blockly.JavaScript['feed_main_title'] = function(block) {
  var text_title = block.getFieldValue('TITLE');

  var code;
  //var code = 'IOT_CONFIG{"topic":"F","data":"' + '\\"ti\\":\\"' + text_title + '\\\"' +'"}\n';

  code = 'kb_iot.feed_title("'+ text_title +'");\n';
  return code;
};

Blockly.JavaScript['feed_unit'] = function(block) {
  var text_title = block.getFieldValue('UNIT');
  var dropdown_feed_selection = block.getFieldValue('FEED_SELECTION');

  var code = 'IOT_CONFIG{"topic":"'+ dropdown_feed_selection +'","data":"' + '\\"u\\":\\"' + text_title + '\\\"' +'"}\n';
  return code;
};

Blockly.JavaScript['feed_color'] = function(block) {
  var color = block.getFieldValue('COLOR');
  var dropdown_feed_selection = block.getFieldValue('FEED_SELECTION');

  //var code = 'IOT_CONFIG{"topic":"'+ dropdown_feed_selection +'","data":"' + '\\"clr\\":\\"' + color + '\\\"' +'"}\n';
  var code;
  if(dropdown_feed_selection == 'F1'){
    code = 'kb_iot.feed_color1("'+ color.substring(1, 7) +'");\n';
  }
  else {
    code = 'kb_iot.feed_color2("'+ color.substring(1, 7) +'");\n';
  }
  return code;
};

Blockly.JavaScript['feed_minmax'] = function(block) {
  var number_min_value = block.getFieldValue('MIN_VALUE');
  var number_max_value = block.getFieldValue('MAX_VALUE');
  var dropdown_feed_selection = block.getFieldValue('FEED_SELECTION');

  var code = 'IOT_CONFIG{"topic":"'+ dropdown_feed_selection +'","data":"' + '\\"min\\":\\"' + number_min_value + '\\",\\"max\\":\\"' + number_max_value  +'\\""}\n';
  return code;
};
Blockly.JavaScript['push_notification'] = function(block) {
  var text_topic_msg = block.getFieldValue('topic_msg');
  var text_message_msg = block.getFieldValue('message_msg');
  var code = 'kbiot_push("'+ text_topic_msg +'", "' + text_message_msg + '");\n';
  return code;
};

