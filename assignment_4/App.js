import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";
import {
  Entypo,
  Fontisto,
  MaterialIcons,
  FontAwesome6,
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { moin, vivek } from "./images";

const postData = [
  {
    id: 1,
    username: "Moin Khan",
    userheading: "App developer || Backend Developer || Frontend devel...",
    useruploaded: "6h",
    text: "Are you done with the learning react.js or you have to learn more about props and many more",
    url: "https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png",
    image: moin,
  },
  {
    id: 2,
    username: "Vivek Rajak",
    userheading: "Financial Advisor || Share Market || Trading...",
    useruploaded: "11h",
    text: "The share market, also known as the stock market, is where buying, selling, and trading of shares of publicly listed companies occur. It serves as a platform for investors to participate in the ownership of these companies, aiming to profit from the rise in share prices or dividends.",
    url: "https://media.istockphoto.com/id/1471974259/photo/trader-investor-analyst-using-mobile-phone-app-for-cryptocurrency-stock-market-analyzing.jpg?s=1024x1024&w=is&k=20&c=Xw4KRYPuECFA4MwEO3037OgbQDryhCaIlRgKC0RYCVo=",
    image: vivek,
  },
];

const Post = ({ posts, showFullText, toggleShowFullText }) => {
  return (
    <View style={styles.post}>
      <View style={styles.postHead}>
        <View style={styles.postHeadImg}>
          <Image style={styles.postImg} source={{ uri: posts.image }} />
        </View>
        <View style={styles.postHeadInfo}>
          <Text style={styles.postUserName}>{posts.username}</Text>
          <Text style={styles.postUserHeading}>{posts.userheading}</Text>
          <Text style={styles.postUploadedTime}>
            {posts.useruploaded} •{" "}
            <Fontisto name="world" size={10} color="grey" />{" "}
          </Text>
        </View>
        <View style={styles.postHeadConnect}>
          <FontAwesome6 name="user-plus" size={13} color="#39A7FF" />
          <Text style={styles.postConnectBtn}>Connect</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Text style={{ color: "white" }}>
          {showFullText ? posts.text : `${posts.text.slice(0, 30)}...`}
        </Text>
        {!showFullText && (
          <Pressable onPress={toggleShowFullText}>
            <Text style={styles.seeMore}>See more</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.postContentImgView}>
        <Image
          style={styles.postContentImg}
          resizeMethod="cover"
          source={{
            uri: posts.url,
          }}
        />
      </View>
      <View style={styles.postReactionIconView}>
        <View style={styles.postReactionIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <SimpleLineIcons name="like" size={18} color="gainsboro" />
            <Text style={styles.iconText}>Like</Text>
          </Pressable>
        </View>
        <View style={styles.postReactionIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <FontAwesome name="commenting-o" size={18} color="gainsboro" />
            <Text style={styles.iconText}>Comment</Text>
          </Pressable>
        </View>
        <View style={styles.postReactionIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <FontAwesome6 name="recycle" size={18} color="gainsboro" />
            <Text style={styles.iconText}>Repost</Text>
          </Pressable>
        </View>
        <View style={styles.postReactionIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <FontAwesome name="send" size={18} color="gainsboro" />
            <Text style={styles.iconText}>Send</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={[styles.navView, { width: "12%" }]}>
          <Image style={styles.dp} source={require("./assets/moin.jpg")} />
        </View>
        <View style={[styles.navView, { width: "70%" }]}>
          <FontAwesome
            name="search"
            size={16}
            color="darkgrey"
            style={{ position: "absolute", top: 12, left: 9, zIndex: 2 }}
          />
          <TextInput
            placeholder={"Search"}
            placeholderTextColor={"darkgrey"}
            style={{
              width: "100%",
              height: "80%",
              color: "white",
              paddingLeft: 35,
              zIndex: 1,
              backgroundColor: "#39424F",
              borderRadius: 5,
            }}
          />
        </View>
        <View style={[styles.navView, { width: "12%" }]}>
          <MaterialCommunityIcons
            name="message-processing"
            size={26}
            color="gainsboro"
          />
        </View>
      </View>

      <FlatList
        data={postData}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 8,
              backgroundColor: "black",
            }}
          />
        )}
        renderItem={({ item }) => (
          <Post
            posts={item}
            showFullText={showFullText}
            toggleShowFullText={toggleShowFullText}
          />
        )}
        keyExtractor={(post) => post.id.toString()}
      />

      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <Entypo name="home" size={25} color="gainsboro" />
            <Text style={styles.iconText}>Home</Text>
          </Pressable>
        </View>
        <View style={styles.footerIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <Fontisto name="persons" size={22} color="gainsboro" />
            <Text style={styles.iconText}>My Network</Text>
          </Pressable>
        </View>
        <View style={styles.footerIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <MaterialIcons name="add-box" size={27} color="gainsboro" />
            <Text style={styles.iconText}>Post</Text>
          </Pressable>
        </View>
        <View style={styles.footerIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <MaterialIcons name="notifications" size={25} color="gainsboro" />
            <Text style={styles.iconText}>Notifications</Text>
          </Pressable>
        </View>
        <View style={styles.footerIcon}>
          <Pressable
            style={({ pressed }) => [
              styles.press,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <FontAwesome6 name="bag-shopping" size={22} color="gainsboro" />
            <Text style={styles.iconText}>Jobs</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1F22",
    paddingTop: 40,
    paddingBottom: 20,
  },
  navbar: {
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 4,
  },
  navView: {
    alignItems: "center",
    justifyContent: "center",
  },
  dp: {
    width: "80%",
    height: "80%",
    borderRadius: "50%",
  },
  footer: {
    height: 50,
    borderWidth: 0.3,
    borderTopColor: "grey",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footerIcon: {
    width: "18%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "white",
    fontSize: 8,
  },
  press: {
    justifyContent: "center",
    alignItems: "center",
  },
  post: {
    padding: 5,
  },
  postHead: {
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  postHeadImg: {
    width: "15%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  postHeadInfo: {
    width: "55%",
    height: "100%",
  },
  postHeadConnect: {
    width: "25%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  postImg: {
    width: "80%",
    height: "80%",
    borderRadius: "50%",
  },
  postUserName: {
    color: "white",
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "500",
  },
  postUserHeading: { color: "white", fontSize: 11 },
  postUploadedTime: { color: "white", fontSize: 12, lineHeight: 22 },
  postConnectBtn: {
    color: "#39A7FF",
    fontSize: 13,
    fontWeight: "500",
  },
  seeMore: {
    color: "grey",
    fontSize: 14,
    marginLeft: 10,
  },
  postContentImgView: {
    height: 250,
    borderWidth: 0.3,
    borderColor: "grey",
    marginTop: 10,
  },
  postContentImg: {
    width: "100%",
    height: "100%",
  },
  postReactionIconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 3,
    paddingTop: 10,
    borderTopWidth: 0.3,
    borderTopColor: "grey",
  },
  postReactionIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
