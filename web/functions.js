function PlayList(){
	document.getElementById("jp-playlist").style.display = "block";
	document.getElementById("download-playlist").style.display = "none";
	document.getElementById("youtube-playlist").style.display = "none";
}
function DownloadList(){
	document.getElementById("jp-playlist").style.display = "none";
	document.getElementById("download-playlist").style.display = "block";
	document.getElementById("youtube-playlist").style.display = "none";
}
function YoutubeList(){
	document.getElementById("jp-playlist").style.display = "none";
	document.getElementById("download-playlist").style.display = "none";
	document.getElementById("youtube-playlist").style.display = "block";
}