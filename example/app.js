//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

define(function (route) {
    var hash = route.parameters;
    switch (hash[0]) {
        case '0':
        case '1':
        case '2':
            modular(hash[0]);
            break;
        case 'post':
            post(hash[1]);
            break;
        default:
            modular();
            break;
    }
})

function modular(now) {
    var nav = document.getElementById('n').children;
    var about = document.getElementById('About');
    if (!now) {
        now = 0;
    }
    for (var i = 0, t; t = nav[i]; i++) {
        t.className = 'blog-nav-item';
        if (i == now) {
            t.className = 'blog-nav-item active';

        }
    }
    about.innerHTML = SimulationData['modular'][now]['about'];

    var list = document.getElementById('list');
    var data = SimulationData['list'];
    list.innerHTML = "";
    for (var i = 0, t; t = data[i]; i++) {
        if (t.mid == now) {
            list.innerHTML += '<div class="blog-post">' +
              '<h2 class="blog-post-title"><a href="#!post/' + t.id + '">' + t.title + '</a></h2>' +
              '<p class="blog-post-meta">' + t.date + '<a href=>' + t.author + '</a></p>' +
              '<p>' + t.depiction + '</p>' +
              '</div>';
        }
    }
}

function post(now) {
    var about = document.getElementById('About');

    var list = document.getElementById('list');
    var data = SimulationData['post'];
    var isOn = false;
    list.innerHTML = "";
    for (var i = 0, t; t = data[i]; i++) {
        if (t.tid == now) {
            list.innerHTML += '<div class="blog-post">' +
              '<h2 class="blog-post-title"><a href="#!post/' + t.id + '">' + t.title + '</a></h2>' +
              '<p class="blog-post-meta">' + t.date + '<a href=>' + t.author + '</a></p>' +
              '<p>' + t.value + '</p>' +
              '</div>';

            about.innerHTML = t.title;
            isOn = true;
        }
    }
    if (!isOn) {
        list.innerHTML += '<div class="blog-post">' +
        '<h4>不好意思，数据库数据有些没完善.</h4>' +
        '</div>';
    }
    list.innerHTML += ['<nav>',
      '<ul class="pager">',
      '<li><a href="#!post/' + (!parseInt(now) ? parseInt(now) : parseInt(now) - 1) + '">Previous</a></li>',
      '<li><a href="#!post/' + (parseInt(now) + 1) + '">Next</a></li>',
      '</ul>',
      '</nav>'
    ].join('');
    window.scrollTo(0, 0);
}