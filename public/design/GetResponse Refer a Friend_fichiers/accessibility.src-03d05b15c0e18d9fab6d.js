!function(){const t=JSON.parse(document.querySelector(".accessibility [data-translations]").innerText);document.querySelector(".accessibility #switch_contrast").addEventListener("change",(e=>{e.preventDefault(),e.stopPropagation(),document.body.classList.toggle("high-contrast"),window.localStorage&&(document.body.classList.contains("high-contrast")?(window.localStorage.setItem("high-contrast","true"),document.body.classList.add("high-contrast"),document.body.setAttribute("data-contrast","high"),document.querySelector(".accessibility label").setAttribute("title",t.highContrastOff_Label),document.querySelector(".accessibility label").setAttribute("aria-label",t.highContrastOff_Label),document.querySelector(".accessibility label").setAttribute("data-ats-accessibility-button","on"),document.getElementById("switch_contrast").checked=!0):(window.localStorage.removeItem("high-contrast"),document.body.classList.remove("high-contrast"),document.body.removeAttribute("data-contrast"),document.querySelector(".accessibility label").setAttribute("title",t.highContrastOn_Label),document.querySelector(".accessibility label").setAttribute("aria-label",t.highContrastOn_Label),document.querySelector(".accessibility label").setAttribute("data-ats-accessibility-button","off"),document.getElementById("switch_contrast").checked=!1))})),window.localStorage&&"true"===window.localStorage.getItem("high-contrast")&&(document.body.classList.add("high-contrast"),document.querySelector(".accessibility label").setAttribute("title",t.highContrastOff_Label),document.querySelector(".accessibility label").setAttribute("aria-label",t.highContrastOff_Label),document.querySelector(".accessibility label").setAttribute("data-ats-accessibility-button","on"),document.getElementById("switch_contrast").checked=!0)}();
//# sourceMappingURL=accessibility.src-03d05b15c0e18d9fab6d.js.map