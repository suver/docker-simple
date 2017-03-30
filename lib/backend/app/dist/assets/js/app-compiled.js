"use strict";

if ("undefined" == typeof jQuery) throw new Error("Requires jQuery");$(function () {
  "use strict";

  var t = new SimpleFARPSE({ pageSize: { targetSelector: ".content-wrapper", rulerSelector: "body" } });t.MenuTogle({ toggleButtonSelector: "#mainMenuToggle", targetSelector: "body", activeClass: "ob_slim" }), t.ControlPanel({ toggleButtonSelector: "#controlPanelToggle", targetSelector: "body", activeClass: "ob_cp_show" }), t.PopUpPanel({ toggleButtonSelector: "#popUpToggle", targetSelector: "body", activeClass: "ob_popup_show" });
});var SimpleFARPSE = function () {
  function t(t) {
    this.stat = t, this.PageSize();
  }return t.prototype.PageSize = function () {
    $(window).resize(function () {}), $(this.stat.pageSize.targetSelector).height($(this.stat.pageSize.rulerSelector).height());
  }, t.prototype.MenuTogle = function (t) {
    return new MenuTogle(t);
  }, t.prototype.ControlPanel = function (t) {
    return new ControlPanel(t);
  }, t.prototype.PopUpPanel = function (t) {
    return new PopUpPanel(t);
  }, t;
}(),
    MenuTogle = function () {
  function t(t) {
    this.stat = t, this.events();
  }return t.prototype.events = function () {
    $(document).on("click", this.stat.toggleButtonSelector, this.stat, this.eventClick);
  }, t.prototype.eventClick = function (t) {
    $(t.data.targetSelector).hasClass(t.data.activeClass) ? $(t.data.targetSelector).removeClass(t.data.activeClass) : $(t.data.targetSelector).addClass(t.data.activeClass);
  }, t;
}(),
    ControlPanel = function () {
  function t(t) {
    this.stat = t, this.events();
  }return t.prototype.events = function () {
    $(document).on("click", this.stat.toggleButtonSelector, this.stat, this.eventClick);
  }, t.prototype.eventClick = function (t) {
    $(t.data.targetSelector).hasClass(t.data.activeClass) ? $(t.data.targetSelector).removeClass(t.data.activeClass) : $(t.data.targetSelector).addClass(t.data.activeClass);
  }, t;
}(),
    PopUpPanel = function () {
  function t(t) {
    this.stat = t, this.events();
  }return t.prototype.events = function () {
    $(document).on("click", this.stat.toggleButtonSelector, this.stat, this.eventClick);
  }, t.prototype.eventClick = function (t) {
    $(t.data.targetSelector).hasClass(t.data.activeClass) ? $(t.data.targetSelector).removeClass(t.data.activeClass) : $(t.data.targetSelector).addClass(t.data.activeClass);
  }, t;
}();

//# sourceMappingURL=app-compiled.js.map