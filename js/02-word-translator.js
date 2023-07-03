let language = prompt('Enter one of the following language code: es, de, en, fr')

if (language === 'es') console.log('Hello World translated in Spanish is: Hola Mundo')
if (language === 'de') console.log('Hello World translated in Deutsch is: Hallo Welt')
if (language === 'fr') console.log('Hello World translated in French is: Bonjour le monde')

if ((language === 'en') || (language !== 'es' && language !== 'de' && language !== 'fr')) console.log('Hello World translated in English is: Hello World')