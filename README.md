# Procesverslag

## Jort Broekhof

<details>

### Auteur:

Jort Broekhof

#### Je startniveau:

Zwart

#### Je focus:

Responsiveness

</details>

## De website

<details>

### Je opdracht:

Ik ga beide pagina's verbeteren, semantisch, responsive en toegankelijk maken. Deze complete website is ook een echte opdracht waar ik op dit moment mee bezig ben voor Archimedes. <br>
[Archimedes medisch centrum hoofdpagina](https://archimedes-mc.nl/) <br>
[Archimedes medisch centrum praktijk informatie Broekhof](https://archimedes-mc.nl/huisartsen/broekhof/praktijk-informatie/)

#### Screenshot(s) van de eerste pagina (small screen):

Archimedes hoofdpagina
<br>
<img src="readme-images/archimedes.png" width="375px" alt="Archimedes hoofdpagina">

#### Screenshot(s) van de tweede pagina (small screen):

Praktijk pagina Broekhof
<br>
<img src="readme-images/praktijk-broekhof.png" width="375px" alt="Praktijk Broekhof pagina">

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>Toegankelijkheid Archimedes</summary>

### Bevindingen

#### Screenreader

Er zijn veel link elementen onzichtbaar voor de gebruiker en screenreader.
<br>
Alt tekst bij afbeeldingen is erg onduidelijk of simpelweg ontbrekend.
<br>
Carrousel is niet duidelijk voor voiceover.

#### Muis en Toetsenbord

Links in navigatie zijn tab navigatie toegankelijk.
<br>
Er zijn veel link elementen onzichtbaar voor de gebruiker, deze weet niet waar hij op gefocused is.
<br>

#### Motoriek (shocks, elastiekjes)

Bij slechte motoriek is de website nog steeds te navigeren alleen kost het meer moeite.
<br>

#### Visueel (brillen, contrast, kleurenblind, dark/light).

Website heeft hoog contrast niveau, conflicting kleuren die impact kunnen hebben op kleurenblindheid
<br>

Slecht zicht maakt de website slecht toegankelijk door onder andere kleine tekst en knoppen.
<br>
Tekst boven op afbeeldingen in de carrousel verandert de tekst op de afbeeldingen naar wit waardoor de tekst heel slecht te lezen is.
<br>
Automatisch dark mode via chrome extension werkt erg goed.
<br>

</details>

## Breakdownschets (week 1)

<details>

### Home pagina:

<img src="readme-images/home.png" width="375px" alt="Archimedes hoofdpagina">

## Huisartsen pagina

<img src="readme-images/huisarts.png" width="375px" alt="Archimedes Huisartsen pagina">

</details>

## Voortgang 1 (week 2)

### In verband met ziekte niet gedaan.

## Voortgang 2 (week 3)

<details open>
  <summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken

Website besproken met Sanne.
Hierbij gekeken hoe ik vooral focus kan leggen op toegankelijkheid en hoe ik dit kan testen tegenover officiele organisaties.

</details>

## Toegankelijkheidstest 2/2 (week 4)

<details>

#### Screenreader

The old HTML code was not semantic and made using the screenreader uncomfortable.
<br/>
Empty elements did not provide any information to the screenreader which made it unclear for the user.

<br/>
<br/>
The way to fix this is by using ARIA and semantically correct HTML. Providing screenreaders with plenty of information and attribute values.
<br/>
<img src="readme-images/semantic-html.png" width="375px" alt="Example of semantic correct HTML">

#### Visueel (brillen, contrast, kleurenblind, dark/light).

Website was bright and didn't have the best contrast on some elements. In addition the website did not have a dark mode or contrast mode.

<br/>
<br/>
To fix this and make the website accesible I added a dark mode and contrast mode which are saved into the local storage.

<br/>
<img src="readme-images/home-highcontrast.png" width="375px" alt="High contrast home page">

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>
  Tijdens het 3e voortgangsgesprek heb ik met Jeffrey gezeten en gekeken naar  mijn huidige website. Hier kwam al snel naar boven dat ik niet goed had begrepen dat classes en id's niet toegestaan waren en dat mijn HTML niet altijd semantisch correct was.
  <br/>
  Daarnaast liep ik achter bij een paar documentatie punten die nog moesten worden aangevuld.
  <br/>

</details>

## Eindgesprek (week 5)

<details>

### Je uitkomst - karakteristiek screenshots:

  <img src="readme-images/home-light.png" width="375px" alt="uitomst opdracht 1">

  <img src="readme-images/home-dark.png" width="375px" alt="uitomst opdracht 1">

### Dit ging goed/Heb ik geleerd:

Ik heb me de afgelopen bezig gehouden met toegankelijkheid de website. Denk hierbij aan gebruikers die slecht kunnen zien of blind zijn en daarbij een screenreader gebruiken. Hierbij heb ik onder andere gebruikt gemaakt van ARIA.
<br/>
<br/>
ARIA (Accessible Rich Internet Applications) is een set van attributen die kunnen worden toegevoegd aan HTML-elementen om de toegankelijkheid van een website te verbeteren. Het helpt bijvoorbeeld screenreaders om de inhoud en de interactiviteit van de pagina beter te begrijpen.

  <img src="readme-images/home-highcontrast.png" width="375px">

### Dit was lastig/Is niet gelukt:

Ik had waarschijnlijk iets meer moeite in dit project mogen stoppen, echter ben ik uiteindelijk wel tevreden met het resultaat.

</details>

## Bronnenlijst

<details open>

1. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

</details>
