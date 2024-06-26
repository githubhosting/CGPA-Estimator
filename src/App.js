import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import {
  UserList,
  UserShow,
  UserCreate,
  UserEdit,
  calciList,
  calciShow,
  calciCreate,
  calciEdit,
  imageCreate,
  imageShow,
  imageList,
} from "./users";
import {
  Admin,
  CustomRoutes,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Route } from "react-router-dom";
import MyPage from "./MyPage";
import Calci from "./Calci";
import Dashboard from "./Dashboard";
import MyLayout from "./MyLayout";
import Calculator from "./Calculator";

import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

import firebase from "firebase/compat/app";
import styles from "./styles.css";

import UserIcon from "@material-ui/icons/People";
import CommentIcon from "@material-ui/icons/Comment";

import * as Posts from "./posts";
import * as Users from "./users";
import * as Comments from "./comments";

import CustomLoginPage from "./CustomLoginPage";
import EventMonitor from "./EventMonitor";

import { firebaseConfig } from "./FIREBASE_CONFIG";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  app: firebaseApp,
  persistence: "local",
  disableMeta: false,
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});
class App extends React.Component {
  render() {
    return (
      <>
        <Admin
          title="Calci 2.0"
          dataProvider={dataProvider}
          authProvider={authProvider}
          layout={MyLayout}
          dashboard={Dashboard}
          loginPage={CustomLoginPage}
        >
          <Resource
            name="calci"
            list={calciList}
            show={calciShow}
            create={calciCreate}
            edit={calciEdit}
          />
          {/* <Resource
            name="images"
            list={imageList}
            show={imageShow}
            create={imageCreate}
            edit={Users.imageEdit}
          />
          <Resource
            name="categories"
            list={Users.categoryList}
            show={Users.categoryShow}
            create={Users.categoryCreate}
            edit={Users.categoryEdit}
          />
          <Resource
            name="cseaiml"
            list={Users.cseaimlList}
            show={Users.cseaimlShow}
            create={Users.cseaimlCreate}
            edit={Users.cseaimlEdit}
          /> */}
          <Resource
            name="otherlinks"
            list={Users.otherlinksList}
            show={Users.otherlinksShow}
            create={Users.otherlinksCreate}
            edit={Users.otherlinksEdit}
          />

          <CustomRoutes>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/calculator" element={<Calculator />} />
          </CustomRoutes>
        </Admin>
        <EventMonitor />
      </>
    );
  }
}

export default App;
