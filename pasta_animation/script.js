      function moveSalt() {
        var salt = document.getElementById("salt-space");
        salt.style.animation = "move_salt 5s ease-in-out";

        var particles = document.getElementById("salt-particles-space");
        particles.style.animation = "fallingSalt 3s 2s ease-in";
        particles.style.opacity = "0";
      }
      function movePepper() {
        var pepper = document.getElementById("pepper-space");
        pepper.style.animation = "move_pepper 5s ease-in-out";

        var particles2 = document.getElementById("pepper-particles-space");
        particles2.style.animation = "fallingPepper 3s 2s ease-in";
        particles2.style.opacity = "0";
      }