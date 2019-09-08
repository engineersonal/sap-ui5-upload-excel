sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
  "use strict";

  return Controller.extend(
    "demo.FileUpBasic.demoFileUpBasic.controller.first",
    {
      onInit: function() {},
      onPressUpload: function() {
        this.byId("fileUploader").upload();
      }
    }
  );
});
