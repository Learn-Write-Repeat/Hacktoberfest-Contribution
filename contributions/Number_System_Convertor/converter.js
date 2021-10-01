// Decimal To All

document.getElementById("decimal").onclick = function() {
    // Deciaml To Decimal
    document.getElementById("decimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base;
        }
    }

    // Deciaml To HexaDecimal
    document.getElementById("hexadecimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base.toString(16).toUpperCase();
        }
    }

    // Deciaml To Binary
    document.getElementById("binary2").onclick = function() {

            document.getElementById("submit").onclick = function() {

                var base = Number(document.getElementById("base").value);
                document.getElementById("result").innerHTML = base.toString(2);
            }
        }
        // Deciaml To Octal
    document.getElementById("octal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base.toString(8);
        }
    }

}

//Binary To All

document.getElementById("binary").onclick = function() {

    //Binary To Decimal
    document.getElementById("decimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            var dec = parseInt((base + '').replace(/[^01]/gi, ''), 2);
            document.getElementById("result").innerHTML = dec;
        }
    }

    //Binary To HexaDecimal
    document.getElementById("hexadecimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 2).toString(16).toUpperCase();
        }
    }

    //Binary To Binary
    document.getElementById("binary2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base;
        }
    }

    // Binary To Octal

    document.getElementById("octal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 2).toString(8);
        }
    }
}

//HexaDecimal To All

document.getElementById("hexadecimal").onclick = function() {

    // HexaDecimal To Decimal
    document.getElementById("decimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = parseInt(base, 16)
        }
    }

    // HexaDecimal To Hexadecimal
    document.getElementById("hexadecimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = base;

        }
    }

    // HexaDecimal To Binary
    document.getElementById("binary2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = parseInt(base, 16).toString(2);
        }
    }

    // HexaDecimal To Octal
    document.getElementById("octal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = parseInt(base, 16).toString(8);
        }
    }

}

// Octal To All

document.getElementById("octal").onclick = function() {

    //Octal To Decimal
    document.getElementById("decimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 8);
        }

    }

    //Octal To HexaDecimal
    document.getElementById("hexadecimal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 8).toString(16).toUpperCase();
        }
    }

    //Octal To Binary
    document.getElementById("binary2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 8).toString(2);
        }
    }

    //Octal To Octal
    document.getElementById("octal2").onclick = function() {

        document.getElementById("submit").onclick = function() {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base;
        }
    }
}