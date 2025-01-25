
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.lien');
    links.forEach(link => {
      if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add('active');
      }
    });
  });

let somme = (a,b)=>{
  a+b;
}

console.log(2,3)

function LPS(P = []) {
  let i = 1; // i commence à 1 car LPS[0] est toujours 0
  let j = 0; // j pointe sur la longueur du préfixe/suffixe
  let m = P.length;
  let LPS = Array(m).fill(0); // Initialisation avec des 0

  while (i < m) {
    if (P[i] === P[j]) {
      j++;
      LPS[i] = j;
      i++;
    } else {
      if (j === 0) {
        LPS[i] = 0;
        i++;
      } else {
        j = LPS[j - 1]; // Reculer pour vérifier le préfixe précédent
      }
    }
  }

  console.log(LPS);
  return LPS;
}

// Exemple d'utilisation
LPS("ababaca"); // Affichera [0, 0, 1, 2, 3, 0, 1]
