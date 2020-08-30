/*LIMIT COURSE TITLE*/
window.addEventListener('load', limitAllCourseTitle);

function nodeListForEach(nodeList, callback){
    for(var i =0 ; i< nodeList.length; i++){
         callback(nodeList[i],i);
    }
}

function limitAllCourseTitle(){
    var titles = document.querySelectorAll('.card-title');
    nodeListForEach(titles, function(cur, i){
        cur.innerText = limitCourseTitle(cur.innerText);
    });
}

function limitCourseTitle(title, limit=30){
    var count = 0;
    var res = [];
    title.split(' ').forEach(function(cur){
        count += cur.length;
        if(count <= limit){
            res.push(cur);
        }else{
            return res.join(' ')+'...';
        }
    });

    return res.join(' ')+'...';
}

/*TOGGLE SIDEBAR */
var sidebar = document.querySelector('.mySidebar');
var overlay = document.querySelector('.overlay--sidebar');
var openbtn = document.getElementById('open--sidebar');
var closeBtn = document.querySelector('.closeBtn');
var body = document.querySelector('body');

openbtn.addEventListener('click', function(){
    body.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    body.classList.remove('show-sidebar');
});

/*TOGGLE SIDEBAR MINI & DARK MODE*/
var toggleBtn = document.querySelector('.sideBarMini__button');
var sideBarMini = document.querySelector('.sidebarMini');
var switchBtn = document.getElementById('checkbox');

toggleBtn.addEventListener('click',function(){
    sideBarMini.classList.toggle('active');
});

switchBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('darkMode');
});



