function unLoginTip(a,b){b||a||(b=lang_string("\u8BF7\u767B\u5F55\u540E\u518D\u63D0\u4EA4\u5DE5\u5355\u3002")),1===a&&(b=lang_string("\u8BF7\u767B\u5F55\u540E\u518D\u8054\u7CFB\u5BA2\u670D\u3002")),noty({text:"<div class='n-con'>"+b+"<br>"+lang_string("\u5982\u679C\u65E0\u6CD5\u767B\u5F55\uFF0C\u8BF7\u53D1\u9001\u90AE\u4EF6\u5230")+" <a href='mailto:support@mail.gate.io' target='_blank'>support@mail.gate.io</a> "+lang_string("\u8054\u7CFB\u6211\u4EEC")+" !</div><button class='btn btn-long' id='button-0' onclick='if(window.location.pathname !== \"/login\"){location.href=\"/login\"} else {$.noty.close(\"login_noty\");$(\"#email\").focus()}'>"+lang_string("\u7ACB\u5373\u767B\u5F55")+"</button>",type:"warning",id:"login_noty",layout:"center",closeWith:["button"],theme:"gateioNotyTheme",modal:!0})}function ticketsRoute(){is_login?"undefined"==typeof lang_prefix?location.href="/myaccount/tickets":location.href=lang_prefix+"/myaccount/tickets":unLoginTip()}window.name="main";var chatWin=null,initial=0,openChatWin=function(a,b){$("#chatFrameCon")[0]&&(chatFrameCon.className="",chatFrameCon.style="",$.cookie("chatRoomStatus",0,{path:"/"})),localStorage.setItem("chatroom_lang",g_lang);let c=new Date;if(c.setTime(c.getTime()+31536000000),document.cookie="chatroom_lang="+escape(g_lang)+";path=/;expires="+c.toGMTString(),localStorage.setItem("needclose",0),chatWin&&!chatWin.closed)return initial=0,void chatWin.focus();var d=window,e=d.innerHeight,f=d.innerWidth,g="/groupchat/chatroom?platform=web",h="height=600px,width=420px,left="+(f-420)/2+"px,top="+(e-600)/2+"px";"undefined"!=typeof a&&a&&!is_s?(g="/groupchat/call_service?platform=web",chatWin=d.open(g,"chatwin_opened",h)):"undefined"!=typeof b&&b||is_s?(g="/groupchat/service?platform=web",h="height="+(e-1)+"px,width="+(f-20)+"px,channelmode=1,directories=0,fullscreen=1,location=0,menubar=0,status=0",chatWin&&chatWin.close(),chatWin=d.open(g,"chatwin_opened")):chatWin=d.open(g,"chatwin_opened",h)};(function(){var a=function(){chatWin&&!is_s&&chatWin.close()};window.onbeforeunload=function(){a()}})();function handleActivitiesStatus(){$.ajax({url:"/json_svr/query_safe",type:"post",data:{action:"get_activities_status"},success:function(a){if(a){const{status:b}=a,c=new Date().getTime(),d=window.localStorage.getItem("close_finish_kyc_btn")||0;"1"==b&&($(".activities-gift, .register-gift-tip").show(),d?c>d&&$(".activities-cls").show():$(".activities-cls").show(),setTimeout(function(){$(".activities-gift").removeClass("init-animation")},5e3))}},error:function(){console.log("handle activities status faild")}})}$(function(){function a(a,b){window.collectEvent&&window.collectEvent("beconEvent",a,b)}function b(){k.hasClass("uc-active")&&(k.removeClass("uc-active"),n.css("opacity","1"),o.css("width","0"))}function c(){100>=document.body.scrollHeight-$(this).innerHeight()-$(this).scrollTop()?A.play():A.stop()}if(initTheme(),$(".finish-kyc").click(function(){a("home_newuser_rewards_reminder_click",{button_name:"\u5173\u95EDbenner\u63D0\u9192"});const b=new Date(new Date().setHours(23,59,59,0)).getTime();window.localStorage.setItem("close_finish_kyc_btn",b),$(".activities-cls").hide()}),$(".register-gift-tip").click(function(){ollectData("gateio_floating_widget_temp_click",{button_name:"Register and receive USDTest"}),window.open("/login/activities")}),$(".act-close").click(function(){$(".activities-cls").hide()}),$(".activities-gift").hover(function(){$(".activities-gift").removeClass("mouseleave"),$(".activities-gift").removeClass("init-animation")}),$(".activities-gift").mouseleave(function(){$(".activities-gift").addClass("mouseleave")}),$(document).ready(function(){handleActivitiesStatus()}),$("#langListBottom").on("click","li",function(){changeLanguage($(this).data("lt"),"w")}),"undefined"!=typeof pageName&&("trade"===pageName||"margin_trade"===pageName||"futures_trade"===pageName||"testnet"===pageName||"c2c"===pageName||"c2cloan"===pageName)){var d,e=$("#mainHeader"),f=$("#ctrl_show_header");f.on("mouseover",function(){clearTimeout(d),d=setTimeout(function(){e.removeClass("hide_header")},100)}).on("mouseout",function(){e.hasClass("toggle_hide")&&(clearTimeout(d),d=setTimeout(function(){e.addClass("hide_header")},100))}),e.on("click",".full_screen",function(){e.addClass("hide_header toggle_hide"),$.cookie("hideHeader",1,{expires:365,path:"/",secure:!0})}).on("click",".exit_full_screen",function(){e.removeClass("hide_header toggle_hide"),$.cookie("hideHeader",0,{expires:365,path:"/",secure:!0})}).on("mousemove",function(){clearTimeout(d)}).on("mouseleave",function(){e.hasClass("toggle_hide")&&(clearTimeout(d),d=setTimeout(function(){e.addClass("hide_header")},100))})}var g,h=$("#ProgressBar"),j=h.width(),k=$("#topLoginBar"),l=$("#tierMenu"),m=$("#pbCon"),n=m.find("i"),o=$("#proBar"),p=$("#fproBar"),q=tier_next_progress;k.on("mouseenter",function(){g&&clearTimeout(g),$(this).addClass("uc-active"),n.css("opacity","0"),o.animate({width:q+"%"},500)}).on("mouseleave",function(){g=setTimeout(function(){b()},0)}),l.css("width",j),p.animate({width:q+"%"},500),0<q&&p.addClass("has-pro-val"),$(".lang-option,#tmBox,#topLinks").on("mouseenter",function(){b(),g&&clearTimeout(g)}),$.fn.animateProgress=function(a,b){return this.each(function(){$(this).animate({width:a+"%"},{duration:800,easing:"swing",step:function(a){$(".value").text(Math.ceil(a)+"%")},complete:function(a,c,d){b&&b.call(this,c,d)}})})},q?m.animateProgress(q):m.animateProgress(0);var r=$("#veriCon"),s=r.find(".verili"),t=$(".footer"),u=localStorage.getItem("notify_close_s");if(s.length&&(t.css("padding-bottom",r.height()),u&&"undefined"!=typeof u))for(var v=0;v<s.length;v++)s[v].style.display=-1<u.indexOf(s[v].dataset.id)?"none":"flex";if("1"===show_user_notice&&r.on("click",".close",function(){var a=$(this).parent(),b=a.data("id"),c=$("#veriCon");a.remove(),c.find(".verili").length?t.css("padding-bottom",c.height()):t.css("padding-bottom","");var d=$.cookie("notify_close");if("undefined"!=typeof d){var e=$.cookie("notify_close").split(",");if(-1==$.inArray(b,e)){$.cookie("notify_close",[e,b],{expires:365,path:"/",secure:!0})}}else $.cookie("notify_close",b,{expires:365,path:"/",secure:!0});if(u&&"undefined"!=typeof u){var f=u.split(",");if(-1==$.inArray(b,f)){localStorage.setItem("notify_close_s",[f,b])}}else localStorage.setItem("notify_close_s",b)}),isMobile()){var w=$(".app-tip.tip_app"),x=$(".downloadLite");$("#bAppClose").on("click",function(){w.hide(),$.cookie("hide_ad","1",{path:"/",secure:!0})}),"undefined"==typeof $.cookie("hide_ad")?(w.show(),$(".register-gift-tip").css("bottom",104)):w.hide();var y=window.navigator.userAgent.toLowerCase();y.match(/iPhone|iPad|iPod|iOS/i)?app_type_lite?x.attr("href","https://"+hostname+"/mobileapp/downloadlite"):x.attr("href","https://"+hostname+"/mobileapp/download"):app_type_lite?x.attr("href","https://"+hostname+"/mobileapp/downloadlite"):x.attr("href",AndroidApkUrl);var z=$(".app-tip.tip_webapp");$("#webAppClose").on("click",function(){z.hide(),$.cookie("hide_webapp_tip","1",{path:"/",secure:!0})}),"undefined"==typeof $.cookie("hide_webapp_tip")&&"1"==$.cookie("pc_page")?z.show():z.hide()}var A=$.timer(function(){getVolData()},5e3,!1);setTimeout(c,1e3),$(window).on("scroll resize",c,function(){const a=72-document.body.scrollTop;0<a?$(".act-phone").css("top",a):$(".act-phone").css("top",0)}),window.downloadFile=function(a){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(window.downloadFile.isChrome||window.downloadFile.isSafari){var b=document.createElement("a");if(b.href=a,void 0!==b.download&&(b.download=a.substring(a.lastIndexOf("/")+1,a.length)),document.createEvent){var c=document.createEvent("MouseEvents");return c.initEvent("click",!0,!0),b.dispatchEvent(c),!0}}return-1===a.indexOf("?")&&(a+="?download"),window.open(a,"_self"),!0},window.downloadFile.isChrome=-1<navigator.userAgent.toLowerCase().indexOf("chrome"),window.downloadFile.isSafari=-1<navigator.userAgent.toLowerCase().indexOf("safari"),$(".gate-logo").on("click",function(){var a="/images/gate.io_logo_en.png",b="/images/gateio_en.svg",c="/images/gateio_h_en.png",d="/images/gateio_h_en.svg",e="/images/gateio_icon.png",f="/images/gateio_text.png";is_cn&&(a="/images/gate.io_logo.png",b="/images/gateio.svg",c="/images/gateio_h.png",d="/images/gateio_h.svg",e="/images/gateio_icon_white.png",f="/images/gateio_text_white.png");var g="<div class='img-modal logo-img'><div id='logoBox'><div class='pull-left footer-logo-download-left'><div class='img-box top-img-box'><img src="+d+"?0110><ul class=save-btn><li onclick=downloadFile('"+c+"')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>png</b> </li><li onclick=downloadFile('"+d+"')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>svg</b> </li></ul></div><div class='img-box middle-img-box'><img src="+b+"?0110><ul class=save-btn><li onclick=downloadFile('"+a+"')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>png</b> </li><li onclick=downloadFile('"+b+"')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>svg</b> </li></ul></div>"+(is_cn?"<div class='img-box bottom-logo-box'><img src=/images/gateio_new_h.png?0110><ul class=save-btn><li onclick=downloadFile('/images/gateio_new_h.png')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>png</b> </li><li onclick=downloadFile('/images/gateio_new_h.svg')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>svg</b> </li></ul></div>":"")+"</div><div class='pull-right footer-logo-download-right'><div class='img-box top-img-box'><img src="+f+"?0110><ul class=save-btn><li onclick=downloadFile('"+f+"')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>png</b> </li></ul></div><div class='img-box middle-img-box'><img src="+e+"?0110><ul class=save-btn><li onclick=downloadFile('"+e+"')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>png</b> </li></ul></div>"+(is_cn?"<div class='img-box bottom-logo-box'><img src=/images/gateio_new_white.png?0110><ul class=save-btn><li onclick=downloadFile('/images/gateio_new_white.png')>"+lang_string("\u4FDD\u5B58\u4E3A")+" <b>png</b> </li></ul></div>":"")+"</div><span class=img-close>\xD7</span></div></div>";$(g).prependTo("body");var h=$(".img-modal");$(".img-close").on("click",function(){$(".img-modal").remove(),$(window).off("resize")});var i=setTimeout(function(){$(".img-close").stop().animate({opacity:"0"})},1e3);h.on("mouseenter",function(){$(".img-close").stop().animate({opacity:"1"}),clearTimeout(i)}).on("mouseleave",function(){$(".img-close").stop().animate({opacity:"0"})})});var B=$(".QR-scan-box");B.length&&B.qrcode({render:"canvas",width:150,height:150,text:decodeURIComponent(window.location.origin+"/mobileapp/download?appLang="+g_lang)});var C=$(".QR-bottom-scan-box");if(C.length&&C.qrcode({render:"canvas",width:126,height:126,text:decodeURIComponent(window.location.origin+"/mobileapp/download?appLang="+g_lang)}),"undefined"!=typeof runTime&&runTime){var D=document.createElement("aside");D.id="runTime",D.textContent=runTime,document.body.appendChild(D)}});function isWeiXin(){var a=window.navigator.userAgent.toLowerCase();return!("micromessenger"!==a.match(/MicroMessenger/i))}function isQQ(){var a=window.navigator.userAgent.toLowerCase();return!!a.match(/QQBrowser/i)}function isiOS(){var a=window.navigator.userAgent.toLowerCase();return!!a.match(/iPhone|iPad|iPod|iOS/i)}function isMiui(){var a=window.navigator.userAgent.toLowerCase();return!!a.match(/MiuiBrowser/i)}function isMobile(){var a=window.navigator.userAgent.toLowerCase();return!!a.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}function iosDown(){isWeiXin()?document.getElementById("mCover").style.display="block":isiOS()?isQQ()?document.getElementById("mCover").style.display="block":window.location.href="itms-services://?action=download-manifest&url=https%3A%2F%2F"+hostForDnLoad+"%2Fdocs%2Fgateio_manifest.plist":alert(IOSAppDownloadTips)}function adrDown(a){isWeiXin()?document.getElementById("mCover").style.display="block":isiOS()?isMiui()?a?window.location.href="https://download.gateapp.org/gateio_app_v2.1.8_06041809-ninja":window.location.href=AndroidApkUrl:alert(AndroidAppDownloadTips):a?window.location.href="https://download.gateapp.org/gateio_app_v2.1.8_06041809-ninja":window.location.href=AndroidApkUrl}function getVolData(){$.ajax({url:"/json_svr/query/?u=302&c="+Math.floor(1e6*Math.random()),type:"post",data:{type:"site_vol"},success:function(a){if(a)for(var b in a)$("#"+b).text(toThousands(Math.ceil(a[b])))},error:function(){console.log("volume data load faild")}})}function initTheme(){var a,b=$.cookie("dark");b?1==b?a="dark-body":2==b&&(a="classic-dark"):a="null",changeSkin(a,1)}function addThemeCss(a){var b,c=$.cookie("dark");1==c?b=dark_version:2==c&&(b=classicDark_version);var d=document.createElement("link");d.className="theme-style",d.href="/css/theme_"+a+".css?v="+b,d.rel="stylesheet",d.id=a,document.head.appendChild(d)}function changeSkinStyleSheetHref(a){var b,c,d=$(".theme-style");"dark-body"==a?(b="dark",c=dark_version):(b="classicDark",c=classicDark_version),d.length?d.attr({disabled:!1,href:`/css/theme_${b}.css?v=`+c}):addThemeCss(b),d.prop("id",b)}$(".market_rise_color_item").on("click",function(){var a=$(this).attr("data-rise-color");changeRiseColor(a)});function changeRiseColor(a){$.cookie("market_rise_color",a,{expires:365,path:"/",secure:!0}),$("#globalSetting").find(`.market_rise_color_item[data-rise-color=${a}]`).addClass("active").siblings(".market_rise_color_item").removeClass("active"),"red"===a?$("body").removeClass("rise-green-body").addClass("rise-red-body"):"green"==a&&$("body").removeClass("rise-red-body").addClass("rise-green-body"),window.location.reload()}$(".skin_item").on("click",function(){var a=$(this).attr("data-night");changeSkin(a),setHeaderBg()});function changeSkin(a){var b,c=$(".theme-style"),d=$(".gateio-app-image");if(d[0]&&(b=d.prop("src").split("?v=")[1]),"null"==a){if(themeLight=!0,$.removeCookie("dark",{expires:365,path:"/",secure:!0}),$.removeCookie("dark"),c.length&&c.prop("disabled",!0),$("body").removeClass("dark-body").removeClass("classic-dark"),$("#globalSetting").find(".skin_item[data-night=\"null\"]").addClass("active").siblings(".skin_item").removeClass("active"),"trade"===pageName||"margin_trade"===pageName){var e=get_element("lightChart");e&&e.click(),$("#tradelist").removeClass("dark-tradelist")}$($(".skinIcon")[0]).show().siblings(".skinIcon").hide(),$("#openSesame_light").removeClass("night_icon"),$("#topsection-bg").prop("src","/images/home_bg_light.png?v=1"),$(".gateio-app-image").attr("src",`/images/home/homeicon/${is_phone?"appimage_v0530":"appimage"}.png?v=${b}`)}else if("dark-body"==a){if(themeLight=!1,$.cookie("dark",1,{expires:365,path:"/",secure:!0}),changeSkinStyleSheetHref(a),$("body").addClass("dark-body").removeClass("classic-dark"),$(".gateio-app-image").attr("src",`/images/home/homeicon/${is_phone?"appimage_dark_v0531":"appimageDark"}.png?v=${b}`),$("#globalSetting").find(".skin_item[data-night=\"dark-body\"]").addClass("active").siblings(".skin_item").removeClass("active"),"trade"===pageName||"margin_trade"===pageName){var f=get_element("darkChart");f&&f.click(),$("#tradelist").addClass("dark-tradelist")}$($(".skinIcon")[1]).show().siblings(".skinIcon").hide(),$("#openSesame_light").addClass("night_icon"),$("#topsection-bg").prop("src","/images/home_bg_dark.png?v=1")}else if("classic-dark"==a){if(themeLight=!1,$.cookie("dark",2,{expires:365,path:"/",secure:!0}),changeSkinStyleSheetHref(a),$("body").addClass("classic-dark").removeClass("dark-body"),$("#globalSetting").find(".skin_item[data-night=\"classic-dark\"]").addClass("active").siblings(".skin_item").removeClass("active"),"trade"===pageName||"margin_trade"===pageName){var f=get_element("darkChart");f&&f.click(),$("#tradelist").addClass("dark-tradelist")}$($(".skinIcon")[2]).show().siblings(".skinIcon").hide(),$("#openSesame_light").addClass("night_icon"),$("#topsection-bg").prop("src","/images/home_bg_dark.png?v=1"),$(".gateio-app-image").attr("src",`/images/home/homeicon/${is_phone?"appimage_dark_v0531":"appimageDark"}.png?v=${b}`)}if("undefined"!=typeof refreshGridChartTheme&&refreshGridChartTheme(),"undefined"!=typeof setColorScheme&&setColorScheme("null"===a?"light":"dark"),0<$("#tradeGuide").length){var g=$("#tradeGuide").find(".tradeguide-box img"),h=g.attr("src").split("/"),i="/images/home/tradeguide/";i+=(is_cn?themeLight?"":"dark/":"en/")+h[h.length-1],g.attr("src",i)}}$("#header-chart").on("click",function(){$.cookie("chatRoomStatus",1,{path:"/"}),window.location.href="/trade/BTC_USDT"}),$("#header-trade-etf").on("click",function(){window.location.href="/etf"});var $runTime=$("#runTimeInfo");$("#footerDate").hover(function(){$runTime.show()},function(){$runTime.hide()}),$runTime.hover(function(){$(this).show()});function updateOnlineStatus(){var a=navigator.onLine?"online":"offline",b=get_element("line_status_tip");"offline"==a?(b.innerHTML=lang_string("<div class=\"load8\"><div class=\"loader\">Loading</div></div>\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC"),b.style.display="flex"):(b.innerHTML=lang_string("\u7F51\u7EDC\u5DF2\u8FDE\u63A5"),b.style.display="none")}updateOnlineStatus(),window.addEventListener("online",updateOnlineStatus),window.addEventListener("offline",updateOnlineStatus);var skinType=$.cookie("dark");(1==skinType||2==skinType)&&$("#activities-main-content").toggleClass("activities-cls-dark"),$("#theme").click(function(){$("#activities-main-content").toggleClass("activities-cls-dark")});