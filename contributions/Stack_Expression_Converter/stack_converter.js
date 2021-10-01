// INFIX TO All
document.getElementById("infix").onclick = function() {
    //Infix To POstFix
    document.getElementById("postfix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            function precedency(pre) {

                if (pre == '+' || pre == '-') {
                    return 1;
                } else if (pre == '/' || pre == '*') {
                    return 2;
                } else if (pre == '^') {
                    return 3;
                } else
                    return 0;
            }


            function InfToPost(infix) {
                let s = [];

                let postfix = "";

                let inf_length = infix.length;

                s.push("#");

                for (let i = 0; i < inf_length; i++) {
                    if ((infix[i] >= 'A' && infix[i] <= 'Z') || (infix[i] >= 'a' && infix[i] <= 'z') || (infix[i] >= 1 && infix[i] <= 9)) {

                        postfix += infix[i];

                    } else if (infix[i] == "(") {

                        s.push("(");

                    } else if (infix[i == "^"]) {
                        s.push("^");

                    } else if (infix[i] == ")") {

                        while (s[s.length - 1] != "#" && s[s.length - 1] != "(") {

                            postfix += s[s.length - 1];
                            s.pop();
                        }
                        s.pop();

                    } else {

                        if (precedency(infix[i]) > precedency(s[s.length - 1])) {

                            s.push(infix[i]);

                        } else {

                            while (s[s.length - 1] != "#" && (precedency(infix[i]) <= precedency(s[s.length - 1]))) {

                                postfix += s[s.length - 1];
                                s.pop();
                            }
                            s.push(infix[i]);

                        }
                    }

                }
                while (s[s.length - 1] != "#") {

                    postfix += s[s.length - 1];
                    s.pop();
                }
                return postfix;
            }
            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = InfToPost(base);

        }

    }

    // Infix To Prefix
    document.getElementById("prefix1").onclick = function() {

        document.getElementById("submit").onclick = function() {


            function isOperator(x) {

                switch (x) {
                    case '+':
                    case '-':
                    case '/':
                    case '*':
                    case '^':
                        return true;
                }
                return false;

            }

            function precedency(pre) {

                if (pre == '+' || pre == '-') {
                    return 1;
                } else if (pre == '/' || pre == '*') {
                    return 2;
                } else if (pre == '^') {
                    return 3;
                } else
                    return 0;
            }

            function infToPre(inf_exp) {

                let s = [];

                let inf_length = inf_exp.length - 1;

                prefix = "";

                s.push("#");

                for (let i = inf_length; i >= 0; i--) {

                    if ((inf_exp[i] >= 'A' && inf_exp[i] <= 'Z') || (inf_exp[i] >= 'a' && inf_exp[i] <= 'z') || (inf_exp[i] >= 1 && inf_exp[i] <= 9)) {

                        prefix += inf_exp[i];

                    } else if (inf_exp[i] == ")") {

                        s.push(inf_exp[i]);

                    } else if (inf_exp[i == "^"]) {

                        s.push("^");

                    } else if (inf_exp[i] == "(") {

                        while (s[s.length - 1] != "#" && s[s.length - 1] != ")") {

                            prefix += s[s.length - 1];
                            s.pop();
                        }
                        s.pop();

                    } else {

                        console.log(prefix);
                        console.log(s);

                        if (precedency(inf_exp[i]) > precedency(s[s.length - 1])) {

                            s.push(inf_exp[i]);
                        } else {

                            while (s[s.length - 1] != "#" && (precedency(inf_exp[i]) <= precedency(s[s.length - 1]))) {

                                prefix += s[s.length - 1];
                                s.pop();
                            }
                            s.push(inf_exp[i]);

                        }

                    }
                }
                while (s[s.length - 1] != "#") {

                    prefix += s[s.length - 1];
                    s.pop();
                }

                let curt_prefix = "";

                let curt_way = prefix.length - 1;

                for (let i = curt_way; i >= 0; i--) {

                    curt_prefix += prefix[i];
                }
                return curt_prefix;
            }

            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = infToPre(base);
        }

    }

    // Infix To Infix
    document.getElementById("infix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = base;
        }
    }

}



// Postfix to All

document.getElementById("postfix").onclick = function() {

    //Postfix to Infix
    document.getElementById("infix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            function isOperator(x) {

                switch (x) {
                    case '+':
                    case '-':
                    case '/':
                    case '*':
                    case '^':
                        return true;
                }
                return false;

            }

            function PosToInf(pos_exp) {

                let s = [];

                let pos_length = pos_exp.length;

                for (let i = 0; i <= pos_length; i++) {

                    if (!isOperator(pos_exp[i])) {

                        s.push(pos_exp[i] + "");
                    } else if (isOperator(pos_exp[i])) {

                        let op1 = s[s.length - 1];
                        s.pop();
                        let op2 = s[s.length - 1];
                        s.pop();

                        let temp = "(" + op2 + pos_exp[i] + op1 + ")";

                        s.push(temp);
                    }
                }
                return s[0];

            }

            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = PosToInf(base);
        }
    }

    // Postfix To PostFix
    document.getElementById("postfix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = base;
        }
    }

    //Postfix To Prefix
    document.getElementById("prefix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            function isOperator(x) {

                switch (x) {
                    case '+':
                    case '-':
                    case '/':
                    case '*':
                        return true;
                }
                return false;
            }

            function postToPre(post_exp) {
                let s = [];

                let pos_length = post_exp.length;


                for (let i = 0; i < pos_length; i++) {


                    if (isOperator(post_exp[i])) {

                        let op1 = s[s.length - 1];
                        s.pop();
                        let op2 = s[s.length - 1];
                        s.pop();

                        let temp = post_exp[i] + op2 + op1;

                        s.push(temp);
                    } else {

                        s.push(post_exp[i] + "");
                    }
                }

                let ans = "";
                while (s.length > 0)
                    ans += s.pop();
                return ans;
            }

            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = postToPre(base);
        }
    }
}


//Prefix To all
document.getElementById("prefix").onclick = function() {

    // Prefix To Infix
    document.getElementById("infix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            function isOperator(x) {

                switch (x) {
                    case '+':
                    case '-':
                    case '/':
                    case '*':
                    case '^':
                        return true;
                }
                return false;

            }

            function preToInf(pre_exp) {

                let s = [];

                let pre_length = pre_exp.length - 1;

                for (let i = pre_length; i >= 0; i--) {

                    if (!isOperator(pre_exp[i])) {

                        s.push(pre_exp[i] + "");
                    } else if (isOperator(pre_exp[i])) {

                        let op1 = s[s.length - 1];
                        s.pop();
                        let op2 = s[s.length - 1];
                        s.pop();

                        let temp = "(" + op1 + pre_exp[i] + op2 + ")";

                        s.push(temp);
                    }
                }
                return s;
            }
            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = preToInf(base);
        }
    }

    // Prefix To Prefix
    document.getElementById("prefix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = base;
        }
    }

    // Prefix To Postfix
    document.getElementById("postfix1").onclick = function() {

        document.getElementById("submit").onclick = function() {

            function isOperator(x) {

                switch (x) {
                    case '+':
                    case '-':
                    case '/':
                    case '*':
                    case '^':
                        return true;
                }
                return false;

            }

            function preToPost(pre_exp) {

                let s = [];

                let pre_length = pre_exp.length - 1;

                for (let i = pre_length; i >= 0; i--) {

                    if (!isOperator(pre_exp[i])) {

                        s.push(pre_exp[i] + " ");
                    } else if (isOperator(pre_exp[i])) {

                        let op1 = s[s.length - 1];
                        s.pop();
                        let op2 = s[s.length - 1];
                        s.pop();

                        let temp = op1 + op2 + pre_exp[i];

                        s.push(temp);
                    }
                }
                return s[s.length - 1];
            }

            var base = document.getElementById("base").value.split(" ").join("");
            document.getElementById("result").innerHTML = preToPost(base);
        }
    }
}