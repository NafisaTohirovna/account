
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




  const image_input = document.querySelector("#image_input");
  let updownload_image = "";
  
  image_input.addEventListener("change" , function(){
      const reader = new FileReader();
      reader.addEventListener("load", () => {
          updownload_image = reader.result;
          document.querySelector("#disply_image").style.backgroundImage = `url(${updownload_image})`;
      })
      reader.readAsDataURL(this.files[0]);
  })
