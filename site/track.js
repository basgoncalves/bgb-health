(function(){try{
 if(location.protocol==="file:"||navigator.doNotTrack==="1")return;
 var k="bgb_v_"+location.pathname;if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,"1");
 var page=(location.pathname.split("/").pop()||"index.html").replace(".html","")||"index";
 var src="";try{var r=document.referrer?new URL(document.referrer).hostname:"";src=r&&r!==location.hostname?r.replace(/^www\./,""):(new URLSearchParams(location.search).get("utm_source")||"")}catch(e){}
 fetch("https://gfzqvaumziuiwfrwhhes.supabase.co/rest/v1/page_views",{method:"POST",keepalive:true,
  headers:{apikey:"sb_publishable_NxmiKUulD7hNH6CkUsEwIA_ki8EDWyC","Content-Type":"application/json",Prefer:"return=minimal"},
  body:JSON.stringify({page:page.slice(0,40),source:(src||"direct").slice(0,60),device:matchMedia("(max-width:760px)").matches?"mobile":"desktop"})}).catch(function(){});
}catch(e){}})();
