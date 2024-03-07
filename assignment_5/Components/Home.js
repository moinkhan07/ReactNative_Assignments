import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import {
  Fontisto,
  FontAwesome6,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { moin, vivek, abdul } from "../images.js";

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
  {
    id: 3,
    username: "Abdul Shaikh",
    userheading: "Expert Legal Counsel || Lawyer for Justice",
    useruploaded: "9h",
    text: "Law is a system of rules established by a society to govern behavior, ensure justice, and maintain order. It encompasses statutes, regulations, and judicial decisions. It provides a framework for resolving disputes and protecting rights. Legal principles evolve through interpretation, precedent, and legislation, shaping societal norms and individual conduct.",
    url: "https://cdn.pixabay.com/photo/2020/12/05/14/08/man-5806013_1280.jpg",
    image: abdul,
  },
];

const Post = ({ posts }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };
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
          resizeMethod="auto"
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

const Home = () => {
  return (
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
      renderItem={({ item }) => <Post posts={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#1A1F22",
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
  press: {
    justifyContent: "center",
    alignItems: "center",
  },
  postImg: {
    width: "80%",
    height: "80%",
    borderRadius: 50,
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
  iconText: {
    color: "white",
    fontSize: 8,
  },
  seeMore: {
    color: "grey",
    fontSize: 14,
    marginLeft: 10,
  },
  postContentImgView: {
    height: 250,
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

export default Home;
