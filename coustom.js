// practice get info user of githun with java script
const getbtn= document.querySelector(".btn-show");
const maintext = document.querySelector(".box-user-info");

function loaduser() {
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://api.github.com/users",true);

    xhr.onload=function(){

        xhr.onprogress=function () {
            if(xhr.readyState==3){
                document.querySelector(".test").innerText="Loading please wate";
            }
        };

        if(this.status==200){
            var users = JSON.parse(this.responseText);
            console.log(users);
            for (var i in users) {
                var li = document.createElement("li");
                li.className="box-li";

                var img = document.createElement("img");
                img.className="box-img rounded-circle";
                img.setAttribute("src",users[i].avatar_url);
                li.append(img);

                var h3= document.createElement("h3");
                var a = document.createElement("a");
                a.className="text-center";
                a.innerText=users[i].login;
                a.setAttribute("href",users[i].html_url);
                a.setAttribute("target","_blacnk");
                h3.append(a);


                img.after(h3);
                

                document.querySelector(".box-ul").append(li);
            }

        }else{;
            maintext.innerText="som ting wrong can upload user";
        };
    };

    xhr.send();
}

getbtn.addEventListener("click",loaduser);