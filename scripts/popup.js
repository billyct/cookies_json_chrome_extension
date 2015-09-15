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

  //下面就是修改自cookies.txt插件的版本

  domain = getDomain(e.url);
  chrome.cookies.getAll({}, function(o) {

    for (var t in o) {
      cookie = o[t];

      if (-1 != cookie.domain.indexOf(domain)) {
        //变成json的地方，可以在这里添加更多关于json的属性
        jsons.push({
          name : escapeForPre(cookie.name),
          value: escapeForPre(cookie.value),
          domain: escapeForPre(cookie.domain),
          path : escapeForPre(cookie.path),
          expires : escapeForPre(cookie.expirationDate ? cookie.expirationDate : "0")

        });

      };
    }

    //变成可以看的json string
    content += JSON.stringify(jsons, null, 2);

    //下载链接
    var downloadLinkContent = "data:application/octet-stream;base64," + btoa(content);
    var downloadLink = "<a href=" + downloadLinkContent + ' download="cookies.json">download as json file</a>';

    document.write('<pre>\n'+ downloadLink +'\n\n'+content+'</pre>');
    
  });
});