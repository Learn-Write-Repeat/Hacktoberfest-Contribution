console.log("hello");
let genratepassword = function(){
    let newpassword = $('#newpassword');
    newpassword.submit(function(e){
        e.preventDefault();
        console.log('here');
        $.ajax({
            type :'post',
            url : '/genrate',
            data : newpassword.serialize(),
            success: function(data){
                console.log(data.data);
            }

        })
    })

}
genratepassword();

let genrate = function(){
    console.log("here");
    let newpassword = $('#newpassword');

}