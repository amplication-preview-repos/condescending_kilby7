import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeCreate } from "./recipe/RecipeCreate";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeShow } from "./recipe/RecipeShow";
import { MiningResourceList } from "./miningResource/MiningResourceList";
import { MiningResourceCreate } from "./miningResource/MiningResourceCreate";
import { MiningResourceEdit } from "./miningResource/MiningResourceEdit";
import { MiningResourceShow } from "./miningResource/MiningResourceShow";
import { BiomeList } from "./biome/BiomeList";
import { BiomeCreate } from "./biome/BiomeCreate";
import { BiomeEdit } from "./biome/BiomeEdit";
import { BiomeShow } from "./biome/BiomeShow";
import { PlayerDataList } from "./playerData/PlayerDataList";
import { PlayerDataCreate } from "./playerData/PlayerDataCreate";
import { PlayerDataEdit } from "./playerData/PlayerDataEdit";
import { PlayerDataShow } from "./playerData/PlayerDataShow";
import { NpcList } from "./npc/NpcList";
import { NpcCreate } from "./npc/NpcCreate";
import { NpcEdit } from "./npc/NpcEdit";
import { NpcShow } from "./npc/NpcShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Lorecraft Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Recipe"
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          show={RecipeShow}
        />
        <Resource
          name="MiningResource"
          list={MiningResourceList}
          edit={MiningResourceEdit}
          create={MiningResourceCreate}
          show={MiningResourceShow}
        />
        <Resource
          name="Biome"
          list={BiomeList}
          edit={BiomeEdit}
          create={BiomeCreate}
          show={BiomeShow}
        />
        <Resource
          name="PlayerData"
          list={PlayerDataList}
          edit={PlayerDataEdit}
          create={PlayerDataCreate}
          show={PlayerDataShow}
        />
        <Resource
          name="Npc"
          list={NpcList}
          edit={NpcEdit}
          create={NpcCreate}
          show={NpcShow}
        />
      </Admin>
    </div>
  );
};

export default App;
