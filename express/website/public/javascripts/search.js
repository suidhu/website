$(".button").click(function(){
  var search=$(".go").val();
  if(search){
    $.getJSON("/search",{"words":search},function(json){
      document.write(json.result);
    });
  }
  else{
    alert("请输入查找内容");
  }
});
