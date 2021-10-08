var socialMedia = {
    facebook: 'http://facebook.com/viewsource',
    twitter: 'http://twitter.com/planetoftheweb',
    flickr: 'http://flickr.com/planetotheweb',
    youtube: 'http://youtube.com/planetoftheweb'
};


function socialIconsMedia() {
    /*var facebook = document.getElementById('socialicons');
    var twitter = document.getElementById('socialicons');
    var flickr = document.getElementById('socialicons');
    var youtube = document.getElementById('socialicons');*/
    //if (document.getElementById('socialicons')) {
    var facebook = new Image();
    facebook.src = './images/facebook.png';
    facebook.width = facebook.naturalHeight;
    facebook.height = facebook.naturalHeight;

    var twitter = new Image();
    twitter.src = './images/twitter.png';
    twitter.width = twitter.naturalHeight;
    twitter.height = twitter.naturalHeight;

    var flickr = new Image();
    flickr.src = './images/flickr.png';
    flickr.width = flickr.naturalHeight;
    flickr.height = flickr.naturalHeight;

    var youtube = new Image();
    youtube.src = './images/youtube.png';
    youtube.width = youtube.naturalHeight;
    youtube.height = youtube.naturalHeight;

    document.getElementById("socialicons").innerHTML = '<img src= "images/' + facebook + '.png" />';
    document.getElementById("socialicons").innerHTML = '<img src= "images/' + twitter + '.png" />';
    document.getElementById("socialicons").innerHTML = '<img src= "images/' + flickr + '.png" />';
    document.getElementById("socialicons").innerHTML = '<img src= "images/' + youtube + '.png" />';

    //document.getElementById('socialicons').appendChild(facebook);
    //}


    /*var iconos = {
        "width": 300,
        "Height": 300,
        "imagenes": [
            ["/images/facebook.png"],
            ["/images/twitter.png"],
            ["/images/flickr.png"],
            ["/images/youtube.png"]
        ],
    }

    document.getElementById('socialicons').append(iconos);*/

    //document.getElementById("socialicons").innerHTML="<"
}