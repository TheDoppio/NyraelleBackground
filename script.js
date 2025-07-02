document.addEventListener('DOMContentLoaded', () => {
  const fireTargets = document.querySelectorAll('.fire-text');

  fireTargets.forEach((el) => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          applyFireEffect(entry.target);
          obs.unobserve(entry.target); // Non riattiva mai più
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(el);
  });
});


var count = 0;

function Shalzen(url, alt = "", larghezza = "200px"){
  count++;
  sound.play();
  if(count == 9){
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  img.style.width = larghezza;
  img.style.display = "block";
  img.style.bottom = "0%";
  img.style.position="absolute";
  img.style.margin = "40px auto"; // centrata con spazio sopra
  document.body.appendChild(img);
    
  }
}

let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.Dysperia');
  const image = document.getElementById('overlayImage');

  if (trigger && image) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && counter === 0) {  
          let sound = document.getElementById('glitchSound');
          counter = 1; // Evita future attivazioni
          image.style.display = 'block';
          sound.play();
          setTimeout(() => {
            image.style.display = 'none';
          }, 4280);

          // Se vuoi, puoi anche disconnettere l’observer:
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(trigger);
  } else {
    console.error("Elemento trigger o immagine non trovati.");
  }
});
let counterr = 0;
function applyFireEffect(element) {
  
  const alreadyMarked = element.dataset.marked === "true";
  if (alreadyMarked) return; // Evita doppia applicazione
if(counterr==2){
  setTimeout(() => {
    const nodes = Array.from(element.childNodes);
    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const spanContainer = document.createElement('span');
        spanContainer.classList.add('fire-branding');

        text.split('').forEach((char, index) => {
          const span = document.createElement('span');
          span.classList.add('letter');
          span.dataset.char = char;
          span.textContent = char === ' ' ? ' ' : char;

          spanContainer.appendChild(span);

          setTimeout(() => {
            span.classList.add('burned');
          }, index * 60);
        });

        node.replaceWith(spanContainer);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        applyFireEffect(node);
      }
    });

    element.classList.add('fuoco');
    element.dataset.marked = "true";
  }, 4000);
  
}
  else{
    const nodes = Array.from(element.childNodes);
    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const spanContainer = document.createElement('span');
        spanContainer.classList.add('fire-branding');

        text.split('').forEach((char, index) => {
          const span = document.createElement('span');
          span.classList.add('letter');
          span.dataset.char = char;
          span.textContent = char === ' ' ? ' ' : char;

          spanContainer.appendChild(span);

          setTimeout(() => {
            span.classList.add('burned');
          }, index * 60);
        });

        node.replaceWith(spanContainer);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        applyFireEffect(node);
      }
    });

    element.classList.add('fuoco');
    element.dataset.marked = "true";
    counterr++;
  }
}