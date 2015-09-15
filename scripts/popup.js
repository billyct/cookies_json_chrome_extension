function escapeForPre(e) {
  return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}

function getDomain(e) {
  if (server = e.match(/:\/\/(.[^/:#?]+)/)[1], parts = server.split("."), isip = !isNaN(parseInt(server.replace(".", ""), 10)), parts.length <= 1 || isip) domain = server;
  else {
    var o = new Array;
    for (o[0] = parts[parts.length - 1], i = 1; i < parts.length; i++)
      if (o[i] = parts[parts.length - i - 1] + "." + o[i - 1], !domainlist.hasOwnProperty(o[i])) {
        domain = o[i];
        break
      }
      "undefined" == typeof domain && (domain = server)
  }
  return domain
}



var content = "",
  downloadable = "",
  popup = "",
  jsons = [];


chrome.tabs.getSelected(null, function(e) {

  domain = getDomain(e.url);
  chrome.cookies.getAll({}, function(o) {

    for (var t in o) {
      cookie = o[t];
      if (-1 != cookie.domain.indexOf(domain)) {
        jsons.push({
          name : escapeForPre(cookie.name),
          value: escapeForPre(cookie.value),
          domain: escapeForPre(cookie.domain),
          path : escapeForPre(cookie.path),
          expires : escapeForPre(cookie.expirationDate ? cookie.expirationDate : "0")

        });

      };
    }

    content += JSON.stringify(jsons, null, 2);
    document.write('<pre>\n'+content+'</pre>');
    
  });
});