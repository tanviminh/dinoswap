import { RouteProps } from "react-router-dom";
import { HomeAppScreen } from "screens/app/home/home.app.screen";
import { HomeScreen } from "screens/home/home.screen";
import { FarmScreen } from "screens/app/farm/farm.screen";
import { LoginScreen } from "screens/auth/login.screen";
import { NotFoundScreen } from "screens/common/404.screen";
import { SwapScreen } from "screens/swap/swap.screen";
import { SwapScreen as SwapAppScreen } from "screens/app/swap/swap.screen";
import { CreatePairScreen } from "screens/pool/pair/create.pair.screen";
import { AddLiquidityScreen } from "screens/pool/liquidity/add.liquidity.screen";
import { MainPoolScreen } from "screens/pool/main/main.pool.screen";
import { DetailFarmScreen } from "screens/app/farm/detail.farm.screen";
import { DinoPoolScreen } from "screens/app/pool/dino.pool.screen";
import { DocScreen } from "screens/app/doc/ doc.screen";
import { GovernanceScreen } from "screens/app/gorvernance/governance.screen";

export const PoolRouter: RouteProps[] = [
  {
    path: "/swap",
    exact: true,
    component: SwapScreen,
  },
  {
    path: "/pool",
    exact: true,
    component: MainPoolScreen,
  },
  {
    path: "/pool/add-liquidity",
    exact: true,
    component: AddLiquidityScreen,
  },

  {
    path: "/pool/create-pair",
    exact: true,
    component: CreatePairScreen,
  },
];

export const MainRouter: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: HomeScreen,
  },
  {
    path: "/home",
    exact: true,
    component: HomeScreen,
  },
];

export const AppRouter: RouteProps[] = [
  {
    path: "/app",
    exact: true,
    component: HomeAppScreen,
  },
  {
    path: "/farm",
    exact: true,
    component: FarmScreen,
  },
  {
    path: "/farm/see-pair",
    exact: true,
    component: DetailFarmScreen,
  },

  {
    path: "/app/dino-pool",
    exact: true,
    component: DinoPoolScreen,
  },

  {
    path: "/app/swap",
    exact: true,
    component: SwapAppScreen,
  },
  {
    path: "/doc",
    exact: true,
    component: DocScreen,
  },
  {
    path: ["/governance", "/governance/forum"],
    exact: true,
    component: GovernanceScreen,
  },
];
