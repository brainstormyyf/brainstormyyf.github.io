(()=>{var o={fallback:"/",homes:{"zh-ch":"/"}};(()=>{let a=navigator.language||navigator.userLanguage;if(a in o.homes){window.location.href=o.homes[a];return}let e=a.split("-");for(let n in o.homes)if(n.indexOf(e[0])===0){window.location.href=o.homes[n];return}window.location.href=o.fallback})();})();
