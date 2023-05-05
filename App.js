import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

const Data = [
  {
    _id: "53d2e0d14ce076e9ad3b1a38",

    index: 0,

    guid: "a016b52a-63fe-423c-af34-a8caf4b2e2b1",

    isActive: true,

    balance: "$2,097.91",

    age: 45,

    eyeColor: "brown",

    name: "Webster Gibbs",

    email: "webstergibbs@gonkle.com",

    about:
      "Reprehenderit labore nostrud ea nulla in laborum non amet tempor. Esse dolore non Lorem sint. Et voluptate ullamco ea enim in quis sit voluptate. Dolore consequat voluptate labore ipsum fugiat Lorem sint officia. Commodo enim consectetur veniam veniam dolor ullamco commodo magna ullamco. Amet labore officia nulla enim non dolore veniam. Ipsum ea quis ex consequat aliquip ullamco consequat.\r\n",

    registered: "2014-08-07T06:51:45 +06:00",

    favoriteFruit: "strawberry",
  },

  {
    _id: "63ba4c21dc01cfa32b83e4a3d",

    index: 1,

    guid: "df94e6e8-e5cb-40c8-81c2-a88b4b0c09ae",

    isActive: false,

    balance: "$3,964.78",

    age: 42,

    eyeColor: "green",

    name: "Bradford Bauer",

    email: "bradfordbauer@gonkle.com",

    about:
      "Est duis laborum Lorem ad Lorem laborum labore consequat aute. Aliqua velit in velit sit veniam nisi enim incididunt. Elit ex ex qui ullamco sit sunt labore do elit ullamco. Irure ipsum mollit elit aliquip culpa adipisicing anim cillum cillum laborum sit sunt fugiat. Labore tempor minim duis consequat pariatur et voluptate laborum ex officia ea. Nostrud officia sunt ullamco consequat laboris consequat consequat ex incididunt ex. Minim eiusmod laborum cillum ad.\r\n",

    registered: "2022-06-18T07:45:21 +06:00",

    favoriteFruit: "strawberry",
  },

  {
    _id: "63d181c16f0df186e1b1c2a5",

    index: 2,

    guid: "a16e7c42-ec80-43a2-b3c5-a5c9d54b7ac5",

    isActive: true,

    balance: "$2,747.07",

    age: 55,

    eyeColor: "blue",

    name: "Kline Pruitt",

    email: "klinepruitt@gonkle.com",

    about:
      "Laboris laboris consequat cillum commodo minim laborum. Commodo ad do dolor in do irure. Nulla labore sint voluptate officia amet Lorem nisi aliquip est voluptate irure. Do dolor aliqua magna in eu dolor. Proident mollit officia eu labore dolore ullamco nisi Lorem ad et.\r\n",

    registered: "2017-02-11T07:05:02 +07:00",

    favoriteFruit: "strawberry",
  },

  {
    _id: "63d130c113a64798e5eb6b2e",

    index: 3,

    guid: "a4ce92c7-df18-46d7-a2b0-af78a38c2389",

    isActive: false,

    balance: "$1,753.71",

    age: 47,

    eyeColor: "blue",

    name: "Albert Abbott",

    email: "albertabbott@gonkle.com",

    about:
      "Ad qui laboris duis mollit. Ullamco aliquip cupidatat commodo dolore id elit reprehenderit quis proident. Labore ullamco ut tempor esse.\r\n",

    registered: "2019-06-19T02:52:37 +06:00",

    favoriteFruit: "strawberry",
  },

  {
    _id: "66d12bd1cf493c874d734756",

    index: 4,

    guid: "d50f84ce-47bd-4ed5-8bfa-ab1ec0c2a218",

    isActive: false,

    balance: "$2,187.80",

    age: 40,

    eyeColor: "blue",

    name: "Goldie Weber",

    email: "goldieweber@gonkle.com",

    about:
      "Ex do minim incididunt aliqua. Laborum qui elit officia elit. Dolor eu nostrud voluptate eiusmod dolor. Proident dolore duis nostrud dolore enim excepteur aliqua excepteur et.\r\n",

    registered: "2014-12-30T07:23:22 +07:00",

    favoriteFruit: "apple",
  },

  {
    _id: "62c1e0d1734af6c439db2ca5",

    index: 5,

    guid: "e26d7c32-80c6-4c4f-9ec3-36a0725b4b32",

    isActive: false,

    balance: "$1,462.15",

    age: 53,

    eyeColor: "green",

    name: "Kara Marsh",

    email: "karamarsh@gonkle.com",

    about:
      "Ipsum exercitation velit est nulla velit nostrud nostrud ex cillum ad proident quis consectetur. Cupidatat ea minim consectetur proident ut. Officia proident consectetur adipisicing dolor adipisicing dolor consequat irure irure exercitation deserunt. Deserunt adipisicing nulla sunt et culpa ex eiusmod.\r\n",

    registered: "2018-06-14T05:16:31 +06:00",

    favoriteFruit: "banana",
  },

  {
    _id: "43a1b01de34752ba4a0d8d45",

    index: 6,

    guid: "ac9e8757-93e6-4c97-b81a-2b2d6cf71628",

    isActive: true,

    balance: "$3,053.13",

    age: 39,

    eyeColor: "blue",

    name: "Salas Lopez",

    email: "salaslopez@gonkle.com",

    about:
      "Dolor dolore aliqua adipisicing id culpa nulla tempor non. Do aliqua eiusmod in labore reprehenderit laboris id consectetur culpa veniam dolore. Sint qui laborum ut aliqua voluptate fugiat ea. Deserunt deserunt est magna eu adipisicing et ipsum anim sunt nulla amet reprehenderit. In excepteur aliquip esse aliquip eu laborum consectetur. Irure ad ullamco ut ut veniam.\r\n",

    registered: "2018-07-27T08:33:24 +06:00",

    favoriteFruit: "banana",
  },

  {
    _id: "68d1b0d172ca0c86e92b4d3c",

    index: 7,

    guid: "fa18ced1-fb81-4de4-a74b-242c94c163fe",

    isActive: false,

    balance: "$963.15",

    age: 49,

    eyeColor: "blue",

    name: "Slater Chang",

    email: "slaterchang@gonkle.com",

    about:
      "Pariatur ex ex exercitation dolore. Exercitation sit sint excepteur non ipsum consectetur fugiat cupidatat ea laboris proident sint ipsum sint. Incididunt proident duis minim qui consectetur eu in officia laboris fugiat consequat enim aute. Laboris voluptate qui aliqua non veniam duis esse amet anim sint ullamco culpa cupidatat. Irure quis ea dolor minim laborum occaecat esse veniam velit et veniam. Dolore veniam dolor dolore cupidatat.\r\n",

    registered: "2022-10-21T07:24:31 +06:00",

    favoriteFruit: "apple",
  },

  {
    _id: "64d2b0d1724b8c93b1ab26b3",

    index: 8,

    guid: "34c19c51-5c45-5430-bc45-25a5c324be42",

    isActive: true,

    balance: "$3,377.06",

    age: 20,

    eyeColor: "brown",

    name: "Bryan Randall",

    email: "bryanrandall@gonkle.com",

    about:
      "Dolor nostrud aliquip id non ex. Esse labore magna nostrud voluptate labore sit cupidatat pariatur ut duis officia officia dolor. Nostrud reprehenderit ipsum tempor mollit nulla ad dolor deserunt. Occaecat adipisicing amet tempor anim exercitation dolor eu nostrud officia. Ad consequat culpa aliquip nulla elit incididunt elit ea veniam do.\r\n",

    registered: "2017-05-12T10:11:12 +06:00",

    favoriteFruit: "strawberry",
  },
];

const Item = ({ item }) => (
  <TouchableOpacity onPress={() => alert(item.about)}>
    <View style={item.isActive ? styles.activeItem : styles.inactiveItem}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.details}>{item.balance}</Text>
      <Text style={styles.details}>{item.age}</Text>
      <Text style={styles.details}>{item.email}</Text>
    </View>
  </TouchableOpacity>
);


const App_fl = () => {
  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  activeItem: {
    backgroundColor: "#90ee90",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  inactiveItem: {
    backgroundColor: "#ff0000",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: "#0000000",
  },
  details: {
    fontSize: 16,
    color: "#0000000",
  },
});

export default App_fl;
