(function(document){
    var s = function(){
        var d = document.querySelectorAll("[data-href-active]");
        for (let index = 0; index < d.length; index++) {
            var element = d[index];
            var path = window.location.pathname;
            var s = element.getAttribute("data-href-active");
            if (s == path) {
                element.parentNode.classList.add("active");
            }
        }
    };
    s();

    var tabs = function(){
        var p = document.querySelector("#sign-tabs");
        var c = document.querySelector(".contents");
        var f = p.querySelectorAll("[href]");
            for (let index = 0; index < f.length; index++) {
                var element = f[index];
                element.addEventListener("click",function(){
                    var e = this.parentNode.parentNode.querySelector(".active");
                        e.classList.remove("active");
                        c.querySelector(e.getAttribute("href"))
                        .classList.add("display-none");
                    this.classList.add("active");
                    c.querySelector(this.getAttribute("href"))
                    .classList.remove("display-none");
                });
            }
        var hash = window.location.hash;
        if (hash !== "") {
            for (let i = 0; i < f.length; i++) {
                s = f[i];
                if (s.getAttribute("href") == hash) {
                        var e = s.parentNode.parentNode.querySelector(".active");
                        e.classList.remove("active");
                        c.querySelector(e.getAttribute("href"))
                        .classList.add("display-none");
                    s.classList.add("active");
                    c.querySelector(s.getAttribute("href"))
                    .classList.remove("display-none");  
                }
            }
        }
    };
    tabs();

    var d = document.querySelectorAll(".form-signin");
    d.forEach(function(e){
        e.addEventListener("submit",function(){
            this.querySelector("#urlOrigin")
            .value = window.location.href;
        });
    });


})(document);