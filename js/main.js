
//  darktheme start
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  
  function toggleTheme() {
    if (localStorage.getItem('theme') == 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
  }
  (function () {
    if (localStorage.getItem('theme') == 'theme-dark') {
        setTheme('theme-dark');
        // document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      // document.getElementById('slider').checked = true;
    }
  })();
  //  darktheme end 


//   function gender(num){
//     if(num){
//        document.getElementById('gen-girl').style.background = "#6137F8";
//        document.getElementById('gen-boy').style.background = "#4F4C77";
//     }else{
//       document.getElementById('gen-boy').style.background = "#6137F8";
//       document.getElementById('gen-girl').style.background = "#4F4C77";
//     }
//   }


// const fileInput = document.getElementById("file");
// const img = document.getElementById("img");

// fileInput.addEventListener( 'change' , (e)=> {
//   console.log(e);
  
//   img.src = e.target.value;
// }) 


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

var node = document.getElementById('my-node');
var btn = document.getElementById('dl');

btn.onclick = function() {  domtoimage.toBlob(document.getElementById('my-node'))
    .then(function(blob) {
      window.saveAs(blob, 'nuc_creative.jpg');
    });
}