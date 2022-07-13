const UrlManager = {
  updateURLParameter: function(url, param, paramVal) {
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
      tempArray = additionalURL.split("&");
      for (var i = 0; i < tempArray.length; i++) {
        if (tempArray[i].split('=')[0] != param) {
          newAdditionalURL += temp + tempArray[i];
          temp = "&";
        }
      }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
  },

  updateCurrentURLsParameter: function(parameter, newParameterValue) {
    window.history.replaceState('', '',
      UrlManager.updateURLParameter(window.location.href, parameter, newParameterValue)
    );
  },

  updateColorParameter: function(color) {
    UrlManager.updateCurrentURLsParameter("color", color);
  },
};
