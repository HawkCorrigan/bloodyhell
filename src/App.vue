<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-items>
        <v-menu offset-y v-for="item in specs" :key="clas">
          <v-btn slot="activator" flat v-bind:class="item.color+'--text'" class="headline">{{item.clas}}</v-btn>
          <v-list v-for="val in item.specs" :key="i">
            <v-list-tile>
              <router-link :to="{path: 'trinkets', query: { clas: item.clas, spec: val}}">
                <v-btn flat v-bind:class="item.color+'--text'" class="headline">{{val}}</v-btn>
              </router-link>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app height="auto" v-for="val in links" :key="name">
      <v-btn :href="val.link" class="headline">
        <span :class="val.icon"/>
        {{val.text}}
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      specs: [
        {
          clas: 'Death Knight',
          color: 'red',
          specs: [
            'Frost',
            'Unholy',
          ],
        }, {
          clas: 'Demon Hunter',
          color: 'purple',
          specs: [
            'Havoc',
          ],
        }, {
          clas: 'Hunter',
          color: 'green',
          specs: [
            'Beast Mastery',
            'Survival',
            'Marksmanship',
          ],
        }, {
          clas: 'Warrior',
          color: 'brown',
          specs: [
            'Arms',
            'Fury',
          ],
        }, {
          clas: 'Rogue',
          color: 'yellow',
          specs: [
            'Subtlety',
            'Assassination',
            'Outlaw',
          ],
        }, {
          clas: 'Mage',
          color: 'blue',
          specs: [
            'Arcane',
            'Fire',
            'Frost',
          ],
        }, {
          clas: 'Warlock',
          color: 'deep-purple',
          specs: [
            'Affliction',
            'Demonology',
            'Destruction',
          ],
        }, {
          clas: 'Druid',
          color: 'orange',
          specs: [
            'Feral',
            'Balance',
          ],
        }, {
          clas: 'Monk',
          color: 'green',
          specs: [
            'Windwalker',
          ],
        }, {
          clas: 'Paladin',
          color: 'pink',
          specs: [
            'Retribution',
          ],
        }, {
          clas: 'Priest',
          color: 'white',
          specs: [
            'Shadow',
            'Holy',
          ],
        }, {
          clas: 'Shaman',
          color: 'blue',
          specs: [
            'Enhancement',
            'Elemental',
          ],
        },
      ],
      links: [
        {
          name: 'faq',
          text: 'FAQ',
          icon: 'icon-none',
          link: 'faq',
        },
        {
          name: 'github',
          text: 'Report an error',
          icon: 'icon-github',
          link: 'https://github.com',
        },
        {
          name: 'patreon',
          text: 'Patreon',
          icon: 'icon-patreon',
          link: 'https;//patreon.com',
        },
        {
          name: 'twitter',
          text: '@bloodmallet',
          icon: 'icon-twitter',
          link: 'https://twitter.com',
        },
        {
          name: 'discord',
          text: 'bloodmallet.com',
          icon: 'icon-discord',
          link: 'https://discord.com',
        },
      ],
    };
  },
  name: 'App',
};
</script>

<style>
  @font-face {
    font-family: 'icomoon';
    src:  url('fonts/icomoon.eot?stkc4n');
    src:  url('fonts/icomoon.eot?stkc4n#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?stkc4n') format('truetype'),
    url('fonts/icomoon.woff?stkc4n') format('woff'),
    url('fonts/icomoon.svg?stkc4n#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-discord:before {
    content: "\e901";
    color: #7289da;
  }
  .icon-patreon:before {
    content: "\e900";
    color: #f96854;
  }
  .icon-twitter:before {
    content: "\ea96";
  }
  .icon-github:before {
    content: "\eab0";
  }

</style>
