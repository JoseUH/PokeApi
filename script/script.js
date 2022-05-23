const charactersGallery$$ = document.querySelector(".characters-gallery");
const miInput$$ = document.querySelector(".miInput");


const getPokemons = async () => {


  const poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokeJSON = await poke.json();

  if (!miInput$$.value) {


    for (let i = 0; i < pokeJSON.results.length; i++) {


      //Fetch

      const pokemon = pokeJSON.results[i].url;
      const pokemon1 = await fetch(pokemon);
      const pokemon1JSON = await pokemon1.json();

      //Crear los elementos

      const divCarta$$ = document.createElement("div");
      const nombreCartas$$ = document.createElement("h2");
      const imgCartas$$ = document.createElement("img");
      const caractCartas$$ = document.createElement("p");

      //Decirles que tienen que tener dentro

      nombreCartas$$.innerText = pokemon1JSON.name;
      imgCartas$$.src = pokemon1JSON.sprites.other.dream_world.front_default;
      caractCartas$$.innerText = pokemon1JSON.id;

      //Añadirles clases

      imgCartas$$.classList.add("imgCartas");
      divCarta$$.classList.add("divCart");
      caractCartas$$.classList.add("caractCartas");
      nombreCartas$$.classList.add("nombre");

      //meterlos al cuerpo

      charactersGallery$$.appendChild(divCarta$$);
      divCarta$$.appendChild(nombreCartas$$);
      divCarta$$.appendChild(imgCartas$$);
      divCarta$$.appendChild(caractCartas$$);
    }
  } else {


    charactersGallery$$.innerHTML = ``;
    

    for (let a = 0; a < pokeJSON.results.length; a++) {


      if (pokeJSON.results[a].name.toLowerCase().includes(miInput$$.value.toLowerCase().trim())) {

        const pokemon = pokeJSON.results[a].url;
        const pokemon1 = await fetch(pokemon);
        const pokemon1JSON = await pokemon1.json();

        const divCarta$$ = document.createElement("div");
        const nombreCartas$$ = document.createElement("h2");
        const imgCartas$$ = document.createElement("img");
        const caractCartas$$ = document.createElement("p");

        nombreCartas$$.innerText = pokemon1JSON.name;
        imgCartas$$.src = pokemon1JSON.sprites.versions["generation-v"]["black-white"].animated.front_default;
        caractCartas$$.innerText = pokemon1JSON.id;

        imgCartas$$.classList.add("imgCartas");
        divCarta$$.classList.add("divCart");
        caractCartas$$.classList.add("caractCartas");
        nombreCartas$$.classList.add("nombre");

        charactersGallery$$.appendChild(divCarta$$);
        divCarta$$.appendChild(nombreCartas$$);
        divCarta$$.appendChild(imgCartas$$);
        divCarta$$.appendChild(caractCartas$$);
        setInterval("location.reload()",5000);

      }
    }
  }
};



  getPokemons();

miInput$$.addEventListener("input", getPokemons);
