!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.stopBtn.disabled=!0;var n=null,e=!1;t.startBtn.addEventListener("click",(function(){e||(e=!0,t.stopBtn.disabled=!1,t.startBtn.disabled=!0,n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),t.stopBtn.addEventListener("click",(function(){e=!1,t.stopBtn.disabled=!0,t.startBtn.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.59514baf.js.map