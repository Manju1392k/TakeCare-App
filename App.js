import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Navbar}>
          <SimpleLineIcons name="menu" size={30} color="black" />

          <Feather name="search" size={35} color="black" />
        </View>

        <View style={styles.mainbox}>
          <Image
            style={styles.Oneimage}
            source={require("./assets/logocare.jpg")}
          />

          <View style={styles.BoxOne}>
            <View style={styles.Text}>
              <Text style={styles.HeadingText}>Banana Tree</Text>

              <Text style={styles.Infotext}>
                Banyan trees are mostly seen in different regions of the country
                and are the national . his huge type of tree has extensive
                branches
              </Text>
            </View>

            <Image
              style={styles.InsideImage}
              source={require("./assets/bana.jpg")}
            />
          </View>

          <View style={styles.BoxOne}>
            <View style={styles.Text}>
              <Text style={styles.HeadingText}>Neem Tree</Text>

              <Text style={styles.Infotext}>
                The most common and popular tree of probably every household is
                the neem tree that has bright leaves and goes up to the height
                of 100 feet.
              </Text>
            </View>

            <Image
              style={styles.InsideImage}
              source={require("./assets/neemtree.jpg")}
            />
          </View>

          <View style={styles.BoxOne}>
            <View style={styles.Text}>
              <Text style={styles.HeadingText}>Peepal Tree</Text>

              <Text style={styles.Infotext}>
                It is a fast-growing tree having heart-shaped leaves with a
                large crown. It sheds its leaves in the month of March and
                April.
              </Text>
            </View>

            <Image
              style={styles.InsideImage}
              source={require("./assets/peelpaltree.jpg")}
            />
          </View>

          <View style={styles.BoxOne}>
            <View style={styles.Text}>
              <Text style={styles.HeadingText}> Aloe VeraTree</Text>

              <Text style={styles.Infotext}>
                It is a fast-growing tree having heart-shaped leaves with a
                large crown. It sheds its leaves in the month of March and
                April.
              </Text>
            </View>

            <Image
              style={styles.InsideImage}
              source={require("./assets/peelpaltree.jpg")}
            />
          </View>

          <View style={styles.BoxOne}>
            <View style={styles.Text}>
              <Text style={styles.HeadingText}> Tulsi Tree</Text>

              <Text style={styles.Infotext}>
                Tulsi plant is considered as a holy and religious plant in
                India. Height reaches about 75 cm to 90 cm. The leaves are round
                oval shaped which contain essential oils.
              </Text>
            </View>

            <Image
              style={styles.InsideImage}
              source={require("./assets/peelpaltree.jpg")}
            />
          </View>
        </View>

        <Text style={styles.HeadingOnecen}>Our Section</Text>

        <View style={styles.Boxing}>
          <Image
            style={styles.infoimage}
            source={require("./assets/donatetow.jpg")}
          />

          <Image
            style={styles.infoimage}
            source={require("./assets/cup.jpg")}
          />
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },

  Navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 60,
    backgroundColor: "#80BFFF",
    marginTop: 35,
  },

  Oneimage: {
    width: "80%",
    height: 150,
    marginTop: 30,
    borderRadius: 10,
  },

  mainbox: {
    flexDirection: "column",
    alignItems: "center",
  },

  BoxOne: {
    width: "90%",
    height: 150,
    backgroundColor: "#fff",
    marginTop: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 2,
  },

  InsideImage: {
    width: "30%",
    height: 120,
    borderRadius: 6,
  },

  Text: {
    flexDirection: "column",
    width: "60%",
    height: 130,
    padding: 4,
  },

  HeadingText: {
    fontWeight: "bold",
    fontSize: 20,
  },

  Infotext: {
    marginTop: 5,
  },

  Boxing: {
    width: "100%",
    height: 170,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  HeadingOnecen: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },

  infoimage: {
    width: "35%",
    height: 130,
    backgroundColor: "#333",
    borderRadius: 5,
  },
});
