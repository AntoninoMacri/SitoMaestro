import { createRouter, createWebHistory } from "vue-router";

// Import delle pagine principali
import Home from "../views/Home.vue";

//Importi Corsi
import TuttiICorsi from "../views/Corsi/TuttiICorsi.vue";
import Wingchun from "../views/Corsi/Wingchun.vue";
import WingchunAdvanced from "../views/Corsi/WingchunAdvanced.vue";
import CTD from "../views/Corsi/CTD.vue";

// Storia e sottosezioni
import Storia from "../views/Storia/Storia.vue";
import WingChun from "../views/Storia/WingChun.vue";
import CTDStoria from "../views/Storia/CTDStoria.vue";
import GMWilliamCheung from "../views/Storia/GMWilliamCheung.vue";
import ShaolinTemple from "../views/Storia/ShaolinTemple.vue";
import YipMan from "../views/Storia/YipMan.vue";
import MasterLucaCampiglioStoria from "../views/Storia/MasterLucaCampiglioStoria.vue";
import CopertineRiviste from "../views/Storia/CopertineRiviste.vue";

// Bruce Lee e Lettere
import BruceLee from "../views/Storia/Bruce-Lee.vue";

// Le Nostre Scuole
import LeNostreScuole from "../views/Le Nostre Scuole/ScuoleRiconosciute.vue";
import ScuoleRiconosciute from "../views/Le Nostre Scuole/ScuoleRiconosciute.vue";
import SifuLorisVincenzi from "../views/Le Nostre Scuole/SifuLorisVincenzi.vue";
import GlobalAssociation from "../views/Le Nostre Scuole/GlobalAssociation.vue";
import MasterLucaCampiglio from "../views/Le Nostre Scuole/MasterLucaCampiglio.vue";

// Blog
import Blog from "../views/Blog/Blog.vue";
import Video from "../views/Blog/Video.vue";
import Foto from "../views/Blog/Foto.vue";
import Articoli from "../views/Blog/Articoli.vue";

// Definisci le rotte
const routes = [
  { path: "/SitoMaestroPage/", name: "Home", component: Home },
  { path: "/", name: "Home", component: Home },
  { path: "/storia", name: "Storia", component: Storia },
  { path: "/storia/wingchun", name: "WingChun", component: WingChun },
  { path: "/storia/ctdStoria", name: "ctdStoria", component: CTDStoria },
  { path: "/storia/gm-william-cheung", name: "GMWilliamCheung", component: GMWilliamCheung },
  { path: "/storia/shaolin-temple", name: "ShaolinTemple", component: ShaolinTemple },
  { path: "/storia/YipMan", name: "YipMan", component: YipMan },
  { path: "/storia/master-luca-campiglio", name: "MasterLucaCampiglio", component: MasterLucaCampiglioStoria },
  { path: "/storia/copertine-riviste", name: "CopertineRiviste", component: CopertineRiviste },

  { path: "/storia/bruce-lee", name: "BruceLee", component: BruceLee },

  { path: "/corsi/tutti i corsi", name: "Tutti i corsi", component: TuttiICorsi },
  { path: "/corsi/Wingchun", name: "Wingchun", component: Wingchun },
  { path: "/corsi/WingchunAdvanced", name: "WingchunAdvanced", component: WingchunAdvanced },
  { path: "/corsi/CTD", name: "CTD", component: CTD },

  { path: "/le-nostre-scuole", name: "CTD Wing Chun Academy", component: LeNostreScuole },
  { path: "/le-nostre-scuole/GlobalAssociation", name: "GlobalAssociation", component: GlobalAssociation },
  { path: "/le-nostre-scuole/scuole-riconosciute", name: "ScuoleRiconosciute", component: ScuoleRiconosciute },
  { path: "/le-nostre-scuole/sifu-loris-vincenzi", name: "SifuLorisVincenzi", component: SifuLorisVincenzi },
  { path: "/le-nostre-scuole/MasterLucaCampiglio", name: "MasterLucaCampiglio", component: MasterLucaCampiglio },

  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog/video", name: "Video", component: Video },
  { path: "/blog/foto", name: "Foto", component: Foto },
  { path: "/blog/articoli", name: "Articoli", component: Articoli },
];

// Configurazione del router
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL), //l'URL di base per la configurazione dinamica
  routes,
});

export default router;
