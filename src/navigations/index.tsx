import { RouteProps } from "react-router-dom";
import { HomeAppScreen } from "screens/app/home-app.screen";
import { HomeScreen } from "screens/home/home.screen";
import { LoginScreen } from "screens/auth/login.screen";
import { NotFoundScreen } from "screens/common/404.screen";
import { SwapScreen } from "screens/swap/swap.screen";
import { CreatePairScreen } from "screens/pool/pair/create.pair.screen";
import { AddLiquidityScreen } from "screens/pool/liquidity/add.liquidity.screen";
import { MainPoolScreen } from "screens/pool/main/main.pool.screen";
export const AppRouter: RouteProps[] = [
  {
    path: "/login",
    exact: true,
    component: LoginScreen,
  },
  {
    exact: true,
    component: NotFoundScreen,
  },
];

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

  {
    path: "/home-app",
    exact: true,
    component: HomeAppScreen,
  },
];
