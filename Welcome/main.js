// hink of a way to store the languages as a database.
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting
//  It should default to English if the language is not in the database, or in the event of an invalid input

function greet(language) {
	let greeting = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  if (language == 'english'){
    return greeting.english
  }else if (language == 'czech'){
    return greeting.czech
  }else if (language == 'danish'){
    return greeting.danish
  }else if (language == 'dutch'){
    return greeting.dutch
  }else if (language == 'estonian'){
    return greeting.estonian
  }else if (language == 'finnish'){
    return greeting.finnish
  }else if (language == 'flemish'){
    return greeting.flemish
  }else if (language == 'french'){
    return greeting.french
  }else if (language == 'german'){
    return greeting.german
  }else if (language == 'irish'){
    return greeting.irish
  }else if (language == 'italian'){
    return greeting.italian
  }else if (language == 'latvian'){
    return greeting.latvian
  }else if (language == 'lithuanian'){
    return greeting.lithuanian
  }else if (language == 'polish'){
    return greeting.polish
  }else if (language == 'spanish'){
    return greeting.spanish
  }else if (language == 'swedish'){
    return greeting.swedish
  }else if (language == 'welsh'){
    return greeting.welsh
  } else{
    return greeting.english
  }
