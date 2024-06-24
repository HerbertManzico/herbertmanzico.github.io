function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,bgColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("swr=true") != -1)
	return;
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?" );
var arrURLParams = arrParams[1].split("&" );
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=" );
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>" ); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!doctype html>" );
d.write("<html lang=\"en\">" );
d.write("<head>" );
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
d.write("</head>" );
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
d.write("<div id=\"wpSearchResults\"></div>" );
d.write("<script type=\"text/javascript\">" );
d.write("var wordMap = new Array(\" revalida banco quetões domine revalida nosso banco questões você precisa esperar formar para preparar pode enquanto estuda here's heres what explained this sounds great heck you? social media mauris purus donec nunc ornare aliquet tempus dolor integer sapien nibh egestas cursus amet faucibus buying digital strategy analytics reports email marketing convinced let's lets things moving frente taviho baitola check video let's lets know each other little vantagen pellentesque tincidunt dignissim mollis justo iaculis pede lacus nisl metus fusce vitae varius tristique phasellus mattis ligula poupe tempo morbi eros malesuada convallis quis augue vestibulum ante ipsum primis orci luctus ultrices posuere cubilia curae proin aliquam maecenas condimentum lorem nulla tellus vulputate massa commodo gravida turpis aenean viverra euismod companies we've weve worked with ready time take that next step your company we're were confident online presence heights contact directly 7890 lorem habitasse platea rutrum quisque pede wp123 phone address curabitur felis erat placerat pellentesque diam class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos risus porttitor vestibulum suspendisse vivamus \",\" \" );" );
d.write("var pageMap = new Array(\"Home\",\"Search Results\" );" );
d.write("var linkMap = new Array(\"index.html\",\"searchresults.html\" );" );
d.write("var preMap = new Array(\"Revalida Banco de quetões Domine o REVALIDA com nosso banco de questões  Você não precisa esperar formar para se preparar  Você pode se preparar para o Revalida enquanto estuda Here's what we do  expl\",\"\" );" );
d.write("function doNav(ind)" );
d.write("{" );
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
else
d.write("		 parent.window.location.href=linkMap[ind];" );
d.write("}" );
d.write("function wpDoSearch(searchTerms){" );
d.write("var terms = searchTerms.split(\" \" );" );
d.write("if (terms==\"\") return;" );
d.write("var results = \"\";" );
d.write("var resultscount = 0;" );
d.write("for (var i=0; i<wordMap.length; i++)" );
d.write("{" );
d.write("			var found=true;" );
d.write("			for (var j=0; j<terms.length; j++)" );
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;" );
d.write("			if (found)" );
d.write("			{" );
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\" );\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";" );
d.write("				 resultscount++;" );
d.write("			}" );
d.write("}" );
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;" );
d.write("}" );
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","" );
};
d.write("wpDoSearch(\""+sTerms+"\" );" );
d.write("</script>" );
d.write("</body></html>" );
d.close();
}