document.addEventListener('DOMContentLoaded', () => {
    console.log('hi')
    var user = document.getElementById('user');
    var usertop = 73;
    var userleft = 9.5;
    var comptop = 76;
    var compleft = 12.5;
    var dice = document.getElementById('dice');
    var comp = document.getElementById('comp');
    var info = document.getElementById('info');
    var role = document.getElementById('role');
    var replay = document.getElementById('replay');
    var flag = 1;
    var chk = 0;
    var chk2=0;
    var pointer_user = 1;
    var pointer_comp = 1;
    var allow=1;
    replay.addEventListener('click', () => {
        if(chk2==1)
        {
            pointer_user=1;
            pointer_comp=1;
            user.style.top=usertop+'vh';
            user.style.left=userleft+'vw';
            comp.style.top=comptop+'vh';
            comp.style.left=compleft+'vw';
            info.innerHTML='User\'s Turn';
            dice.style.backgroundImage=`url(start3.gif)`;
            flag=1;
            allow=1;
            chk=1;
        } 
     });
    document.getElementById('start').addEventListener('click',()=>{
        chk=1;
        chk2=1;
        document.getElementById('Menu').style.display='none';
    });
    document.getElementById('quit').addEventListener('click',()=>{
        window.close();
    });
    document.getElementById('close').addEventListener('click',()=>{
        if(chk2==1)
        {

            window.close();
        }
    });
    function movecomp(x) {
        comp.classList.add('animate');
        setTimeout(() => {
            let l = pointer_comp % 10;
            let h = Math.ceil(pointer_comp / 10);
            if (h % 2 == 0) {
                comp.style.top = `${comptop - (h - 1) * 8}` + 'vh';
                if (l != 0) { comp.style.left = `${compleft + (10 - l) * 8}` + 'vw'; }
                else {
                    comp.style.left = `${compleft}` + 'vw';
                }

            }
            else {
                comp.style.top = `${comptop - (h - 1) * 8}` + 'vh';
                if (l != 0) { comp.style.left = `${compleft + (l - 1) * 8}` + 'vw'; }
                else {
                    comp.style.left = `${compleft + 9 * 8}` + 'vw';
                }
            }
        }, 100)
        setTimeout(() => {
            comp.classList.remove('animate');
            if (pointer_comp == 2) {
                pointer_comp = 23;
                movecomp(x);
            }
            else if (pointer_comp == 6) {
                pointer_comp = 45;
                movecomp(x);
            }
            else if (pointer_comp == 20) {
                pointer_comp = 59;
                movecomp(x);
            }
            else if (pointer_comp == 57) {
                pointer_comp = 96;
                movecomp(x);
            }
            else if (pointer_comp == 52) {
                pointer_comp = 72;
                movecomp(x);
            }
            else if (pointer_comp == 71) {
                pointer_comp = 92;
                movecomp(x);
            }
            else if (pointer_comp == 43) {
                pointer_comp = 17;
                movecomp(x);
            }
            else if (pointer_comp == 50) {
                pointer_comp = 5;
                movecomp(x);
            }
            else if (pointer_comp == 56) {
                pointer_comp = 8;
                movecomp(x);
            }
            else if (pointer_comp == 73) {
                pointer_comp = 15;
                movecomp(x);
            }
            else if (pointer_comp == 84) {
                pointer_comp = 58;
                movecomp(x);
            }
            else if (pointer_comp == 87) {
                pointer_comp = 49;
                movecomp(x);
            }
            else if (pointer_comp == 98) {
                pointer_comp = 40;
                movecomp(x);
            }
            else if (pointer_comp == 100) { info.innerHTML = 'Computer is Winner'; chk = 0; }
            else if (x == 6) { info.innerHTML = 'Computer\'s Turn'; flag = 0; chkcomp(); }
            else { info.innerHTML = 'User\'s Turn'; flag = 1;allow=1; }
        }, 1511);


    }

    function chkcomp() {
        if (flag == 0 && chk == 1) {

            let x = Math.floor(Math.random() * 6 + 1);
            // let x=6;

            dice.style.backgroundImage = `url('rolling.gif')`;
            setTimeout(() => {
                if (x == 1) {
                    dice.style.backgroundImage = `url('1.png')`;

                }
                else if (x == 2) {
                    dice.style.backgroundImage = `url('2.jpg')`;

                }
                else if (x == 3) {
                    dice.style.backgroundImage = `url('3.png')`;

                }
                else if (x == 4) {
                    dice.style.backgroundImage = `url('4.png')`;

                }
                else if (x == 5) {
                    dice.style.backgroundImage = `url('5.png')`;

                }
                else if (x == 6) {
                    dice.style.backgroundImage = `url('6.png')`;

                }
                if (pointer_comp + x <= 100) {

                    pointer_comp += x;

                    movecomp(x);
                }
                else {
                    movecomp(0);
                }
            }, 1500);



        }
    }

    function moveuser(x) {
        user.classList.add('animate');
        setTimeout(() => {
            let l = pointer_user % 10;
            let h = Math.ceil(pointer_user / 10);
            if (h % 2 == 0) {
                user.style.top = `${usertop - (h - 1) * 8}` + 'vh';
                if (l != 0) { user.style.left = `${userleft + (10 - l) * 8}` + 'vw'; }
                else {
                    user.style.left = `${userleft}` + 'vw';
                }

            }
            else {
                user.style.top = `${usertop - (h - 1) * 8}` + 'vh';
                if (l != 0) { user.style.left = `${userleft + (l - 1) * 8}` + 'vw'; }
                else {
                    user.style.left = `${userleft + 9 * 8}` + 'vw';
                }
            }
        }, 100)
        setTimeout(() => {
            user.classList.remove('animate');
            if (pointer_user == 2) {
                pointer_user = 23;
                moveuser(x);
            }
            else if (pointer_user == 6) {
                pointer_user = 45;
                moveuser(x);
            }
            else if (pointer_user == 20) {
                pointer_user = 59;
                moveuser(x);
            }
            else if (pointer_user == 57) {
                pointer_user = 96;
                moveuser(x);
            }
            else if (pointer_user == 52) {
                pointer_user = 72;
                moveuser(x);
            }
            else if (pointer_user == 71) {
                pointer_user = 92;
                moveuser(x);
            }
            else if (pointer_user == 43) {
                pointer_user = 17;
                moveuser(x);
            }
            else if (pointer_user == 50) {
                pointer_user = 5;
                moveuser(x);
            }
            else if (pointer_user == 56) {
                pointer_user = 8;
                moveuser(x);
            }
            else if (pointer_user == 73) {
                pointer_user = 15;
                moveuser(x);
            }
            else if (pointer_user == 84) {
                pointer_user = 58;
                moveuser(x);
            }
            else if (pointer_user == 87) {
                pointer_user = 49;
                moveuser(x);
            }
            else if (pointer_user == 98) {
                pointer_user = 40;
                moveuser(x);
            }
            else if (pointer_user == 100) { info.innerHTML = 'User is Winner'; chk = 0; }
            else if (x == 6) { info.innerHTML = 'User\'s Turn'; flag = 1; allow=1;}
            else { info.innerHTML = 'Computer\'s Turn'; flag = 0; chkcomp(); }
        }, 1511);


    }

    role.addEventListener('click', () => {

        if (flag == 1 && chk == 1 && allow==1) {
            // flag=0;
            allow=0;
            let x = Math.floor(Math.random() * 6 + 1);
            // var x=6;
            dice.style.backgroundImage = `url('rolling.gif')`;
            setTimeout(() => {
                if (x == 1) {
                    dice.style.backgroundImage = `url('1.png')`;

                }
                else if (x == 2) {
                    dice.style.backgroundImage = `url('2.jpg')`;

                }
                else if (x == 3) {
                    dice.style.backgroundImage = `url('3.png')`;

                }
                else if (x == 4) {
                    dice.style.backgroundImage = `url('4.png')`;

                }
                else if (x == 5) {
                    dice.style.backgroundImage = `url('5.png')`;

                }
                else if (x == 6) {
                    dice.style.backgroundImage = `url('6.png')`;

                }
                if (pointer_user + x <= 100) {
                    pointer_user += x;
                    moveuser(x);

                }
                else {
                    moveuser(0);
                }


            }, 1500);


        }


    });





});