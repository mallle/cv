<template>
  <section class="section">
    <h1>Impressum</h1>

    <p>Angaben gemäß § 5 TMG:</p>
    <br />
    <p>
      Malene Klit <br />Weißsenseestr. 25a <br />81539 München <br />Deutschland
    </p>
    <br />
    <p>
      E-Mail (bevorzugt):
      <a class="link" href="mailto:hallo@sophieskartenwelt.de"
        >maleneklit@hotmail.com</a
      >
      <br />
      Telefon: 01624201615
    </p>
    <br />
    <p>
      Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle weder verpflichtet noch bereit. Die
      Europäische Kommission bietet eine Onlineplattform für Streitbeilegung an,
      die Sie hier finden:
      <a class="link" href="https://ec.europa.eu/consumers/odr/"
        >https://ec.europa.eu/consumers/odr/ </a
      >Unter diesem Link finden Sie die Kontaktdaten der offiziellen
      Streitbeilegungsstellen:
      <a
        class="link"
        href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.adr.show"
        >https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.adr.show</a
      >.
    </p>
  </section>
</template>

<script>
export default {
  layout: 'slim',
  nuxtI18n: {
    paths: {
      de: '/impressum',
      en: '/en/legal-notice',
    },
  },
  head() {
    return {
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk
          ? `${titleChunk} ${this.$t('metadata.legal')}`
          : this.$t('metadata.legal')
      },
    }
  },
}
</script>
