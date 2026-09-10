import React, {useEffect,useRef} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import {
  selectedInterests,
} from "../store/preferencesStore";
import * as Linking from "expo-linking";

export default function DashboardScreen() {
  const openPersonalizedFeed = () => {
  const reelDatabase: Record<
    string,
    string[]
  > = {
    AI: [
      "https://www.instagram.com/reel/DZKfObsMb_0/?igsh=MzYzZ253OTFhcWpz",
      "https://www.instagram.com/reel/DV86LIpE3V4/?igsh=dGNxYWY2b3dsZnZz",
      "https://www.instagram.com/reel/DYVaTjES_5E/?igsh=YWRqaTZyNGU4amFr",
    ],

    Technology: [
      "https://www.instagram.com/reel/DV9aD64EtvB/?igsh=MWxhcmFvZG15bDA0eQ==",
      "https://www.instagram.com/reel/DQLM7e2kWo9/?igsh=a2tyOGw3ZTluMDlx",
      "https://www.instagram.com/reel/DX7zRLmkk4s/?igsh=MTFtbjE3MDFkOWt6cw==",
    ],

    Startups: [
      "https://www.instagram.com/reel/DX78w_thwv2/?igsh=YXU2M280N3FvcXU=",
      "https://www.instagram.com/reel/Cx8n_sCMKcB/?igsh=MWRhanQ1b2NuYXhuaQ==",
      "https://www.instagram.com/reel/DZA4zqADmTv/?igsh=MTlscXkzaDB1MDRjaw==",
    ],

    Business: [
      "https://www.instagram.com/reel/DPTuVAbkyKm/?igsh=MTZzdG5vOHJjc3d5Mg==",
      "https://www.instagram.com/reel/DZQ2WD1vyJ8/?igsh=dTJ3MG51b3J3bGRw",
      "https://www.instagram.com/reel/DZNZOw9EqLK/?igsh=MWIybWloM254aGhtMg==",
    ],

    Finance: [
      "https://www.instagram.com/reel/DZf_m8pvQRi/?igsh=YzFiNXl5ZjR4bHQ4",
      "https://www.instagram.com/reel/DZaG_taCQFP/?igsh=eDVyeGdqejVyamZv",
      "https://www.instagram.com/reel/DZPzzQ4GQ9p/?igsh=ZXNmb3JoaTh1MXdo",
    ],

    Gaming: [
      "https://www.instagram.com/reel/DXeTtGiDQKx/?igsh=ajJ0YXNiejBjd290",
      "https://www.instagram.com/reel/DZfWkhQDc00/?igsh=MXYweGFxbmw4emN1aA==",
      "https://www.instagram.com/reel/DZf81HVk9Ec/?igsh=MTlkcDYyc2lpOGliaA==",
    ],

    Travel: [
      "https://www.instagram.com/reel/DZDJvhJMTnP/?igsh=MTV5NnFjbzNlZDljdw==",
      "https://www.instagram.com/reel/DYnTo1LCXF0/?igsh=aHV5azh3d3R3OXp1",
      "https://www.instagram.com/reel/DGLUo_6tKgY/?igsh=MWx4YjA4dWVpY3pnag==",
      "https://www.instagram.com/reel/DVOUVDKkUcj/?igsh=NWF4NW5ra25lNXlm",
      "https://www.instagram.com/reel/DRChnYzjFhq/?igsh=OGc1b2gxeTZnZmZi",
    ],

    Fitness: [
      "https://www.instagram.com/reel/DYaLNTtIORQ/?igsh=dzN3dDJ3eGNuMjVk",
      "https://www.instagram.com/reel/DLU_K6PqnDe/?igsh=bHR0ZG1iaXUzcXcz",
      "https://www.instagram.com/reel/DYXPRUessHc/?igsh=MXN4OG8wdnpjNXQ3NA==",
    ],

    Health: [
      "https://www.instagram.com/reel/DXMYxrmAvsE/?igsh=MTU1MHp5c3UzZHJicw==",
      "https://www.instagram.com/reel/DQC9xErETQc/?igsh=ZGd0ajQ1YW03ZHds",
      "https://www.instagram.com/reel/DW1cqMBhj8-/?igsh=Y2lwdHRjNHprNzZh",
    ],

    Education: [
      "https://www.instagram.com/reel/DZIyBXxBevI/?igsh=MWthNWRlY2dlbnBucA==",
      "https://www.instagram.com/reel/DYC5M39xdvz/?igsh=ajE5ZWQ0bTY5NXpn",
      "https://www.instagram.com/reel/DSccblNk6t1/?igsh=Z21xYW8xYmY3YzRr",
    ],
  };

  let allReels: string[] = [];

  selectedInterests.forEach(
    (interest) => {
      if (reelDatabase[interest]) {
        allReels.push(
          ...reelDatabase[interest]
        );
      }
    }
  );

  if (allReels.length === 0)
    return;

  const randomReel =
    allReels[
      Math.floor(
        Math.random() *
          allReels.length
      )
    ];

  if (Platform.OS === "web") {
    window.open(
      randomReel,
      "_blank"
    );
  } else {
    Linking.openURL(
      randomReel
    );
  }
};
  
    const contentMap: Record<string, string> = {
  AI: "🤖 OpenAI launches new model",
  Technology: "💻 Top technology trends",
  Business: "📈 Startup funding insights",
  Gaming: "🎮 Popular gaming creators",
  Travel: "✈️ Hidden travel destinations",
  Fitness: "💪 New workout routines",
  Health: "🩺 Latest health innovations",
  Education: "📚 AI-powered learning tools",
  Finance: "💰 Smart investing strategies",
  Startups: "🚀 Fast-growing startups to watch",
};
const blinkAnim = useRef(
  new Animated.Value(1)
).current;

useEffect(() => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(blinkAnim, {
        toValue: 0.2,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(blinkAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ])
  ).start();
}, []);
  return (
    <ScrollView style={styles.container}>
  <TouchableOpacity
  style={styles.settingsButton}
    onPress={() => router.push("/settings")}
  >
    <Text style={styles.settingsIcon}>
      ⚙️
    </Text>
  </TouchableOpacity>

<Text style={styles.dashboardTitle}>
  Dashboard
</Text>

<Text style={styles.dashboardSubtitle}>
  Monitor and optimize your Instagram feed
</Text>
  <View style={styles.content}>  
        {/* Hero Stat */}
<View style={styles.card}>
  <Text style={styles.sectionTitle}>
    ✨ Recommended For You
  </Text>

{selectedInterests.map((interest) => (
  <View
    key={interest}
    style={styles.recommendationCard}
  >
    <Text
      style={styles.recommendationText}
    >
      {contentMap[interest]}
    </Text>
  </View>
))}

<TouchableOpacity
  style={styles.automationButton}
  onPress={openPersonalizedFeed}
>
  <Text style={styles.automationButtonText}>
    🎬 Watch Personalized Feed
  </Text>
</TouchableOpacity>
</View>
        {/* Interests */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            🎯 Your Interests
          </Text>

         <View style={styles.interestsWrap}>
  {selectedInterests.map((interest) => (
    <View
      key={interest}
      style={styles.interestChip}
    >
      <Text style={styles.chipText}>
        {interest}
      </Text>
    </View>
  ))}
</View>
        </View>

     {/* Automation */}
<View style={styles.card}>
  <View style={styles.headerRow}>
    <Text style={styles.sectionTitle}>
      ⚡ Automation
    </Text>

    <View style={styles.statusRow}>
      <Animated.View
  style={[
    styles.dot,
    { opacity: blinkAnim }
  ]}
/>
      <Text style={styles.green}>
        Active
      </Text>
    </View>
  </View>
</View>

{/* Instagram */}
<View style={styles.card}>
  <View style={styles.headerRow}>
    <Text style={styles.sectionTitle}>
      📸 Instagram
    </Text>

    <View style={styles.statusRow}>
      <Animated.View
  style={[
    styles.dot,
    { opacity: blinkAnim }
  ]}
/>
      <Text style={styles.green}>
        Connected
      </Text>
    </View>
  </View>
</View>
      </View>
      <TouchableOpacity
  style={styles.automationButton}
  onPress={() => router.push("/automation")}
>
  <Text style={styles.automationButtonText}>
    Open Personalization Engine →
  </Text>
</TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    paddingTop:50,
  },
settingsButton: {
  position: "absolute",
  top: 45,
  right: 20,
  zIndex: 100,
},
settingsIcon: {
  fontSize: 28,
},

content: {
  width: "100%",
  maxWidth: 700,
  alignSelf: "center",

  backgroundColor: "#121A2E",
  borderRadius: 28,

  padding: 28,
  marginBottom: 20,
},
headerRow: {
  flexDirection: "row",
  justifyContent:"space-between",
  alignItems: "center",
},
dashboardTitle: {
  color: "#FFFFFF",
  fontSize: 24,
  fontWeight: "700",
  textAlign: "center",
  marginBottom: 8,
},
recommendationCard: {
  backgroundColor: "#1E293B",
  borderRadius: 14,
  padding: 14,
  marginTop: 12,
},

recommendationText: {
  color: "#FFFFFF",
  fontSize: 15,
  fontWeight: "600",
},

interestsWrap: {
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 12,
},

interestChip: {
  backgroundColor: "#7C3AED20",
  borderColor: "#7C3AED",
  borderWidth: 1,
  borderRadius: 999,
  paddingHorizontal: 14,
  paddingVertical: 8,
  marginRight: 8,
  marginBottom: 8,
},

chipText: {
  color: "#FFFFFF",
  fontSize: 13,
  fontWeight: "600",
},
dashboardSubtitle: {
  color: "#94A3B8",
  textAlign: "center",
  fontSize: 14,
  marginBottom: 25,
},

logo: {
  color: "#FFFFFF",
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 12,
},

automationButton: {
  backgroundColor: "#7C3AED",
  width: 280,
  alignSelf: "center",
  justifyContent:"center",
  alignItems:"center",
  paddingVertical: 14,
  borderRadius: 14,
  marginTop: 10,
  marginBottom: 30,
},

automationButtonText: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},

card: {
  backgroundColor: "#111827",
  borderRadius: 20,
  padding: 16,
  marginBottom: 12,
},

statusRow: {
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 12,
},
pageLogo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
  },
dot: {
  width: 8,
  height: 8,
  borderRadius: 5,
  backgroundColor: "#22C55E",
  marginRight: 8,
},
  heroLabel: {
  color: "#94A3B8",
  textAlign: "center",
  fontSize: 14,
  marginTop: 6,
},
 sectionTitle: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},

  interestCard: {
    marginBottom: 12,
    marginTop:8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  left: {
    color: "#FFFFFF",
    fontSize: 12,
  },

  right: {
    color: "#7C3AED",
    fontWeight: "700",
    fontSize: 13,
  },

  track: {
    height: 8,
    backgroundColor: "#1E293B",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 8,
  },

  fill: {
    height: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 20,
  },

  green: {
    color: "#22C55E",
    fontWeight: "700",
    fontSize: 14,
  },
  label: {
    color: "#94A3B8",
    marginTop: 5,
    fontSize:13,
  },
  analyticsButton: {
  backgroundColor: "#7C3AED",
  paddingVertical: 16,
  borderRadius: 16,
  alignItems: "center",
  marginTop: 10,
},

analyticsButtonText: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},
});