## Projekt - Restaurang Bistro Norr
Denna del av projektet går ut på att skapa en webbplats för en restaurang där de kan marknadsföra sig, visa menyn dynamiskt från en REST-webbtjänst som
jag har skapat, information om företaget. Med hjälp av Fetch API hämtar jag in data från databasen.

## Upplägg för webbplatsen
- **Startsida**: Kort text om företaget samt en knapp mitt på sidan för att enkelt komma till menyn.
- **Menysida**: Menyn visas dynamiskt från API:et och hamnar på rätt plats antingen under förrätt, varmrätt eller efterrätt.
- **Om oss-sida**: Information om företaget samt kontaktinformation.

## Funktioner
Mina funktioner har jag i en js fil som jag döpt till main.js och innehåller dessa funktioner:

- `getData`- med hjälp av Fetch() hämtar jag in data från API:et.
- `writeMenu`- funktion för att skriva ut menyn i innerHTML.

### Av
Hanna Angeria, haan2402@student.miun.se
