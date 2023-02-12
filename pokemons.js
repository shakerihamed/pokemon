
const POKEMONS = [
    {
      name: "Bulbasaur",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg",
      type: "grass",
    },
    {
      name: "Ivysaur",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/2.svg",
      type: "grass",
    },
    {
      name: "Venusaur",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/3.svg",
      type: "grass",
    },
    {
      name: "Charmander",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg",
      type: "fire",
    },
    {
      name: "Charmeleon",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/5.svg",
      type: "fire",
    },
    {
      name: "Charizard",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
      type: "fire",
    },
    {
      name: "Squirtle",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg",
      type: "water",
    },
    {
      name: "Wartortle",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/8.svg",
      type: "water",
    },
    {
      name: "Blastoise",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/9.svg",
      type: "water",
    },
    {
      name: "Caterpie",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/10.svg",
      type: "bug",
    },
    {
      name: "Metapod",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/11.svg",
      type: "bug",
    },
    {
      name: "Butterfree",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/12.svg",
      type: "bug",
    },
    {
      name: "Weedle",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/13.svg",
      type: "bug",
    },
    {
      name: "Kakuna",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/14.svg",
      type: "bug",
    },
    {
      name: "Beedrill",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/15.svg",
      type: "bug",
    },
    {
      name: "Pidgey",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/16.svg",
      type: "normal",
    },
    {
      name: "Pidgeotto",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/17.svg",
      type: "normal",
    },
    {
      name: "Pidgeot",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/18.svg",
      type: "normal",
    },
    {
      name: "Rattata",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/19.svg",
      type: "normal",
    },
    {
      name: "Raticate",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/20.svg",
      type: "normal",
    },
    {
      name: "Spearow",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/21.svg",
      type: "normal",
    },
    {
      name: "Fearow",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/22.svg",
      type: "normal",
    },
    {
      name: "Ekans",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/23.svg",
      type: "poison",
    },
    {
      name: "Arbok",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/24.svg",
      type: "poison",
    },
    {
      name: "Pikachu",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg",
      type: "electric",
    },
    {
      name: "Raichu",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/26.svg",
      type: "electric",
    },
    {
      name: "Sandshrew",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/27.svg",
      type: "ground",
    },
    {
      name: "Sandslash",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/28.svg",
      type: "ground",
    },
    {
      name: "Nidoran-f",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/29.svg",
      type: "poison",
    },
    {
      name: "Nidorina",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/30.svg",
      type: "poison",
    },
    {
      name: "Nidoqueen",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/31.svg",
      type: "poison",
    },
    {
      name: "Nidoran-m",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/32.svg",
      type: "poison",
    },
    {
      name: "Nidorino",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/33.svg",
      type: "poison",
    },
    {
      name: "Nidoking",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/34.svg",
      type: "poison",
    },
    {
      name: "Clefairy",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/35.svg",
      type: "fairy",
    },
    {
      name: "Clefable",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/36.svg",
      type: "fairy",
    },
    {
      name: "Vulpix",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/37.svg",
      type: "fire",
    },
    {
      name: "Ninetales",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/38.svg",
      type: "fire",
    },
    {
      name: "Jigglypuff",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/39.svg",
      type: "normal",
    },
    {
      name: "Wigglytuff",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/40.svg",
      type: "normal",
    },
    {
      name: "Zubat",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/41.svg",
      type: "poison",
    },
    {
      name: "Golbat",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/42.svg",
      type: "poison",
    },
    {
      name: "Oddish",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/43.svg",
      type: "grass",
    },
    {
      name: "Gloom",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/44.svg",
      type: "grass",
    },
    {
      name: "Vileplume",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/45.svg",
      type: "grass",
    },
    {
      name: "Paras",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/46.svg",
      type: "bug",
    },
    {
      name: "Parasect",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/47.svg",
      type: "bug",
    },
    {
      name: "Venonat",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/48.svg",
      type: "bug",
    },
    {
      name: "Venomoth",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/49.svg",
      type: "bug",
    },
    {
      name: "Diglett",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/50.svg",
      type: "ground",
    },
    {
      name: "Dugtrio",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/51.svg",
      type: "ground",
    },
    {
      name: "Meowth",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/52.svg",
      type: "normal",
    },
    {
      name: "Persian",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/53.svg",
      type: "normal",
    },
    {
      name: "Psyduck",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/54.svg",
      type: "water",
    },
    {
      name: "Golduck",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/55.svg",
      type: "water",
    },
    {
      name: "Mankey",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/56.svg",
      type: "fighting",
    },
    {
      name: "Primeape",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/57.svg",
      type: "fighting",
    },
    {
      name: "Growlithe",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/58.svg",
      type: "fire",
    },
    {
      name: "Arcanine",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/59.svg",
      type: "fire",
    },
    {
      name: "Poliwag",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/60.svg",
      type: "water",
    },
    {
      name: "Poliwhirl",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/61.svg",
      type: "water",
    },
    {
      name: "Poliwrath",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/62.svg",
      type: "water",
    },
    {
      name: "Abra",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/63.svg",
      type: "psychic",
    },
    {
      name: "Kadabra",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/64.svg",
      type: "psychic",
    },
    {
      name: "Alakazam",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/65.svg",
      type: "psychic",
    },
    {
      name: "Machop",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/66.svg",
      type: "fighting",
    },
    {
      name: "Machoke",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/67.svg",
      type: "fighting",
    },
    {
      name: "Machamp",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/68.svg",
      type: "fighting",
    },
    {
      name: "Bellsprout",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/69.svg",
      type: "grass",
    },
    {
      name: "Weepinbell",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/70.svg",
      type: "grass",
    },
    {
      name: "Victreebel",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/71.svg",
      type: "grass",
    },
    {
      name: "Tentacool",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/72.svg",
      type: "water",
    },
    {
      name: "Tentacruel",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/73.svg",
      type: "water",
    },
    {
      name: "Geodude",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/74.svg",
      type: "rock",
    },
    {
      name: "Graveler",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/75.svg",
      type: "rock",
    },
    {
      name: "Golem",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/76.svg",
      type: "rock",
    },
    {
      name: "Ponyta",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/77.svg",
      type: "fire",
    },
    {
      name: "Rapidash",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/78.svg",
      type: "fire",
    },
    {
      name: "Slowpoke",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/79.svg",
      type: "water",
    },
    {
      name: "Slowbro",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/80.svg",
      type: "water",
    },
    {
      name: "Magnemite",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/81.svg",
      type: "electric",
    },
    {
      name: "Magneton",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/82.svg",
      type: "electric",
    },
    {
      name: "Farfetchd",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/83.svg",
      type: "normal",
    },
    {
      name: "Doduo",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/84.svg",
      type: "normal",
    },
    {
      name: "Dodrio",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/85.svg",
      type: "normal",
    },
    {
      name: "Seel",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/86.svg",
      type: "water",
    },
    {
      name: "Dewgong",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg",
      type: "water",
    },
    {
      name: "Grimer",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/88.svg",
      type: "poison",
    },
    {
      name: "Muk",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/89.svg",
      type: "poison",
    },
    {
      name: "Shellder",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/90.svg",
      type: "water",
    },
    {
      name: "Cloyster",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/91.svg",
      type: "water",
    },
    {
      name: "Gastly",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/92.svg",
      type: "ghost",
    },
    {
      name: "Haunter",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/93.svg",
      type: "ghost",
    },
    {
      name: "Gengar",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/94.svg",
      type: "ghost",
    },
    {
      name: "Onix",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/95.svg",
      type: "rock",
    },
    {
      name: "Drowzee",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/96.svg",
      type: "psychic",
    },
    {
      name: "Hypno",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/97.svg",
      type: "psychic",
    },
    {
      name: "Krabby",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/98.svg",
      type: "water",
    },
    {
      name: "Kingler",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/99.svg",
      type: "water",
    },
    {
      name: "Voltorb",
      image:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/100.svg",
      type: "electric",
    },
  ];

const div = document.createElement("div");
div.className = "bord";

POKEMONS.forEach(item => {
    const box = document.createElement("div");
    box.className = "box"
    const img = document.createElement("img");
    img.src = item.image;
    const name = document.createElement("h3");
    const p = document.createElement("p");

    img.innerHTML = `${item.image}`
    name.innerHTML = `${item.name}`
    p.innerHTML = `${item.type}`

    box.appendChild(img)
    box.appendChild(name)
    box.appendChild(p)

    div.appendChild(box)

    if(item.type === "grass"){
        box.style.backgroundColor = 'lightgreen';
    }else if(item.type === "fire"){
        box.style.backgroundColor = 'lightcoral';
    }else if(item.type === "water"){
        box.style.backgroundColor = 'lightblue';
    }else{
        box.style.backgroundColor = 'lightsalmon';
    }

})



document.querySelector('.container').appendChild(div)
