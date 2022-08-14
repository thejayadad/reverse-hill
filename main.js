

let row = 5;

for (let i = 1; i<=row; i++){
    for (let j = 1; j<=i; j++){
        document.write(" &nbsp;")
    }
    for ( let j = i; j < row; j++){
        document.write("x");
    }

    for (let j = i; j<=row; j++){
        document.write("x");
    }

    document.write("<br/>");
}