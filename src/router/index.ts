import { createRouter, createWebHistory } from "vue-router";

// Import delle pagine principali
import Home from "../views/Home.vue";

//Importi Corsi
import TuttiICorsi from "../views/Corsi/TuttiICorsi.vue";

// Storia e sottosezioni
import Storia from "../views/Storia/Storia.vue";
import WingChun from "../views/Storia/WingChun.vue";
import CTD from "../views/Storia/CTD.vue";
import GMWilliamCheung from "../views/Storia/GMWilliamCheung.vue";
import ShaolinTemple from "../views/Storia/ShaolinTemple.vue";
import YipMan from "../views/Storia/YipMan.vue";
import MasterLucaCampiglio from "../views/Storia/MasterLucaCampiglio.vue";
import CopertineRiviste from "../views/Storia/CopertineRiviste.vue";

// Bruce Lee e Lettere
import BruceLee from "../views/Storia/Bruce Lee/Bruce-Lee.vue";
import Lettera1 from "../views/Storia/Bruce Lee/Lettera1.vue";
import Lettera2 from "../views/Storia/Bruce Lee/Lettera2.vue";
import Lettera3 from "../views/Storia/Bruce Lee/Lettera3.vue";
import Lettera4 from "../views/Storia/Bruce Lee/Lettera4.vue";
import Lettera5 from "../views/Storia/Bruce Lee/Lettera5.vue";

// Le Nostre Scuole
import LeNostreScuole from "../views/Le Nostre Scuole/ScuoleRiconosciute.vue";
import ScuoleRiconosciute from "../views/Le Nostre Scuole/ScuoleRiconosciute.vue";
import SifuLorisVincenzi from "../views/Le Nostre Scuole/SifuLorisVincenzi.vue";

// Blog
import Blog from "../views/Blog/Blog.vue";
import Video from "../views/Blog/Video.vue";
import Foto from "../views/Blog/Foto.vue";
import Articoli from "../views/Blog/Articoli.vue";

// Definisci le rotte
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/storia", name: "Storia", component: Storia },
  { path: "/storia/wingchun", name: "WingChun", component: WingChun },
  { path: "/storia/ctd", name: "CTD", component: CTD },
  { path: "/storia/gm-william-cheung", name: "GMWilliamCheung", component: GMWilliamCheung },
  { path: "/storia/shaolin-temple", name: "ShaolinTemple", component: ShaolinTemple },
  { path: "/storia/yip-man", name: "YipMan", component: YipMan },
  { path: "/storia/master-luca-campiglio", name: "MasterLucaCampiglio", component: MasterLucaCampiglio },
  { path: "/storia/copertine-riviste", name: "CopertineRiviste", component: CopertineRiviste },

  { path: "/storia/bruce-lee", name: "BruceLee", component: BruceLee },
  { path: "/storia/bruce-lee/lettera-1", name: "Lettera1", component: Lettera1 },
  { path: "/storia/bruce-lee/lettera-2", name: "Lettera2", component: Lettera2 },
  { path: "/storia/bruce-lee/lettera-3", name: "Lettera3", component: Lettera3 },
  { path: "/storia/bruce-lee/lettera-4", name: "Lettera4", component: Lettera4 },
  { path: "/storia/bruce-lee/lettera-5", name: "Lettera5", component: Lettera5 },

  { path: "/corsi/tutti i corsi", name: "Tutti i corsi", component: TuttiICorsi },

  { path: "/le-nostre-scuole", name: "LeNostreScuole", component: LeNostreScuole },
  { path: "/le-nostre-scuole/scuole-riconosciute", name: "ScuoleRiconosciute", component: ScuoleRiconosciute },
  { path: "/le-nostre-scuole/sifu-loris-vincenzi", name: "SifuLorisVincenzi", component: SifuLorisVincenzi },

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
