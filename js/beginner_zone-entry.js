"use strict";(function(){if($('#beginner_zone_entry')){(function isEntry(){let isEntry=sessionStorage.getItem('isEntry')&&JSON.parse(sessionStorage.getItem('isEntry'));if(!nickName)return;if(!isEntry&&isEntry!=null){$('#beginner_zone_entry').css('display','none');return}if(isEntry!=null)return;$.ajax({url:'/beginner-zone/get_entry',data:{},type:'get',dataType:'json',success:function(res){if(!res.data){$('#beginner_zone_entry').css('display','none')}if(res.data!=undefined){sessionStorage.setItem('isEntry',res.data)}},error:function(){}})})()}if(location.pathname===lang_prefix+'/login'){sessionStorage.removeItem('isEntry');$('#beginner_zone_entry').css('display','block')}})()