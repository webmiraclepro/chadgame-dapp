import Website from "./pages/Index.vue";
import Dapp from "./pages/Dapp.vue";
import Dashboard from "./modules/dapp/dashboard/Dashboard.vue";
import TotalPot from "./modules/dapp/totalpot/TotalPot.vue";
import Winners from "./modules/dapp/winners/Winners.vue";
import BuyNew from "./modules/dapp/buynew/BuyNew.vue";

const routes = [
  { path: '/', component: Website },
  { 
    path: '/dapp', 
    component: Dapp,
    children:[
      {
        path: "",
        name:"Dashboard",
        component: Dashboard,
      },
      {
        path: "totalpot",
        name:"TotalPot",
        component: TotalPot,
      },
      {
        path: "winners",
        name:"Winners",
        component: Winners,
      },
      {
        path: "buynew",
        name:"BuyNew",
        component: BuyNew,
      }
    ] 
  },
];

export default routes;