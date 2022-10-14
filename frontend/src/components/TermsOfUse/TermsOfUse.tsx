import React from "react";
import "./TermsOfUse.scss";
import { FiPaperclip } from "react-icons/fi";
const TermsOfUse = () => {
  window.scrollTo(0, 0);
  return (
    <div className="card-container">
      <div className="card-icon-top">
        <FiPaperclip color="#dc0000" size={50} />
      </div>
      <h3 className="card-headline lift-title">
        Uutiset -liiketoimintayksikön digitaalisten palveluiden käyttöehdot
      </h3>
      <h3 className="card-headline">1. Yleistä</h3>
      <p>
        Palvelun käyttöön liittyy seuraavat käyttöehdot (jäljempänä
        ”Käyttöehdot”), joihin käyttäjän tulee tutustua huolellisesti ennen
        Palvelun käyttämistä. Palvelun osat voivat sisältää Käyttöehtojen
        lisäksi sovellettavia erityisiä ehtoja, kuten tilausehtoja. Käyttäjä voi
        tilata Palveluntarjoajan mobiili- tai taulutietokonesovelluksen
        Palveluntarjoajan sijaan esimerkiksi Applen App Storen tai Google Playn
        kautta. Tällöin Palvelun käyttöön sovelletaan Käyttöehtojen ja
        tilausehtojen lisäksi myös kyseisen palveluntarjoajan ehtoja.
      </p>
      <p>
        Internet-palvelut ovat käytettävissä kaikkien yleisimpien
        käyttöjärjestelmien ja selainten uusimmilla versioilla. Sivustot ovat
        pääosin responsiivisia eli skaalautuvat päätelaitteen koon mukaisesti.
        Mikäli näin ei ole, tämä pyritään ilmoittamaan Palvelun yhteydessä.
        Tiettyjä Palveluja voidaan käyttää myös sovellusten avulla. Sovellukset
        ovat käytettävissä alustoilla, joista on määritelty erikseen
        vaatimustaso
      </p>
      <p>
        Palvelun käyttö on osoitus siitä, että käyttäjä hyväksyy ja sitoutuu
        noudattamaan kulloinkin voimassa olevia Käyttöehtoja. Palvelun
        käyttäminen on kielletty, mikäli käyttäjä ei hyväksy Käyttöehtoja tai
        jotain osaa niistä.
      </p>
      <p>
        Käyttäjän osalta Palveluntarjoajan ja käyttäjän välinen sopimus astuu
        voimaan, kun käyttäjä Palvelua käyttämällä hyväksyy nämä Käyttöehdot.
        Rekisteröitymistä edellyttävien osioiden osalta sopimus astuu
        Palveluntarjoajan osalta voimaan, kun Palveluntarjoaja on hyväksynyt
        käyttäjän rekisteröitymisen. Mikäli Palveluntarjoaja ei myönnä
        rekisteröitymistä hakevalle käyttöoikeutta Palveluun, ei käyttäjä saa
        käyttää rekisteröitymistä edellyttäviä osia Palvelusta. Jollei muuta ole
        sovittu, käyttäjätunnus ja salasana ovat käyttäjäkohtaisia, eikä niitä
        saa luovuttaa toiselle. Antaessaan organisaatio- tai oppilaitoskohtaisen
        käyttöoikeuden Palveluntarjoaja voi sallia Palvelun käytön
        IP-osoitetunnistautumisen perusteella, jolloin Palvelun käyttäminen
        vaatii lisäksi organisaatio- tai oppilaitoskohtaisen käyttäjätunnuksen
        ja salasanan.
      </p>
      <p>
        Maksullisten palvelujen osalta Palveluntarjoajan ja käyttäjän välinen
        sopimus astuu Asiakkaan osalta voimaan, kun Palveluntarjoaja on
        lähettänyt käyttäjälle tämän tilausta koskevan tilausvahvistuksen.
        Palveluntarjoaja pidättää oikeuden olla hyväksymättä maksullisen
        Palvelun tilausta. Palveluntarjoajaa sitova tilaus syntyy, kun Asiakkaan
        maksutapahtuma on hyväksytty. Maksullisten palveluiden käyttäminen
        edellyttää Palvelun yhteydessä ilmoitetun hinnan suorittamista.
      </p>
      <p>
        Palvelu on tarkoitettu vain informatiivisiin tarkoituksiin ja suunnattu
        yksinomaan Suomeen, ellei erikseen ole nimenomaisesti muuta sovittu tai
        ilmoitettu. Palvelussa annettua informaatiota ei voida pitää sen antajaa
        sitovana tarjouksena, ellei nimenomaisesti ole toisin ilmoitettu.
      </p>
      <p>
        Palveluntarjoaja myöntää käyttäjälle rajoitetun käyttöoikeuden käyttää
        Palvelua ja sen sisältämää aineistoa. Palveluntarjoaja myöntää
        käyttäjälle oikeuden katsella ja ladata Palvelun sisältämiä aineistoja
        sekä tulostaa niitä vain käyttäjän omaa, henkilökohtaista ja
        ei-kaupallista käyttöä varten. Tämä käyttöoikeuden myöntäminen ei ole
        osoitus aineiston ja sen kopioiden omistusoikeuden siirtämisestä.
        Käyttöoikeuteen liittyy seuraavat rajoitukset:
      </p>
      <p>
        1) käyttäjällä ei ole oikeutta muokata aineistoa millään tavalla eikä
        jäljentää, esittää julkisesti tai muulla tavoin julkistaa aineistoa tai
        käyttää sitä kaupallisessa tarkoituksessa;
      </p>
      <p>
        2) käyttäjä on velvollinen säilyttämään kaikissa lataamansa aineiston
        tulosteissa ja kopioissa kaikki kyseisen aineiston sisältämät
        tekijänoikeus- ja muut oikeuksiin liittyvät ilmoitukset;
      </p>
      <p>
        3) käyttäjä on velvollinen noudattamaan Käyttöehtojen lisäksi kaikkia
        Palvelussa ilmeneviä tuote- tai palvelukohtaisia lisäehtoja.
      </p>
      <p>
        Palveluntarjoaja ei myönnä käyttäjälle mitään muita kuin Käyttöehdoissa
        erikseen mainitut oikeudet.
      </p>
    </div>
  );
};

export default TermsOfUse;
