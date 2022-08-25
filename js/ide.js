// let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/cobalt");
    editor.session.setMode("ace/mode/python");
    editor.setValue("#Python compiler by Adarsh\n\n#Note : for command line arguments use the below syntax : \nimport sys\na=sys.argv[1] #input is in string format (use specific type declaration for variables before the statement)\n\n", 12); 
    editor.setPrintMarginColumn(112);
}

function executeCode() {
    $(".output").text("compiling please wait...");

    

// ajax to send code to compiler.php
    $.ajax({

        url: "/ide/compiler.php",

        method: "POST",

        data: {
            code: editor.getSession().getValue(),
            argl: document.getElementById('arg').value
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}

function myFunction() {
    var copyText = editor.getSession().getValue();
    // console.log(copyText);
    
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  
    $(".output").text("copied !");
  } 