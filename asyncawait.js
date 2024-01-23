//Eg:1=>Async Await demo Example 
async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                response("Example for SYNC/AWAIT");
            }, 1000)
        }
    );
    console.log(await(promise));
}
asAw()


//Eg:2=>Instagram post
async function commentCode() {
    return new Promise(
        function (commentvalue) {
            setTimeout(function () {
                commentvalue("This is my 1st comment icon");
            }, 1000);
        }
    )
}
async function likeCode() {
    return new Promise(function (likevalue) {
        setTimeout(function () {
            likevalue("1st like")
        }, 1000)
    })
}
async function post() {
    var post = new Promise(
        function (postresponse) {
            setTimeout(function () {
                postresponse("This is my First Post");
            }, 3000)
        }
    );
    var [feed,comment,like]=await Promise.all([post,commentCode(),likeCode()])
    console.log(feed); //if we put async you must have to put await otherwise it will print pending
    console.log(comment);
    console.log(like);
}
post()
