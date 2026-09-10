import React, { useEffect, useRef, useState } from "react";
import * as Linking from "expo-linking";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  Platform,
} from "react-native";
import {
  selectedInterests,
  currentTask,
  lastActivity,
  interestScores,
  setCurrentTask,
  setLastActivity,
  incrementActions,
} from "../store/preferencesStore";
import {
  getNextSearch,
  getTargetProfile,
} from "../services/automation";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
export default function AutomationScreen() {
  const blinkAnim = useRef(
    new Animated.Value(1)
  ).current;
const initialSearch =
  getNextSearch();

const [task, setTask] =
  useState(currentTask);

const [activity, setActivity] =
  useState(lastActivity);

const [currentSearch,
  setCurrentSearch] =
  useState(initialSearch);

const [currentProfile,
  setCurrentProfile] =
  useState(
    getTargetProfile(
      initialSearch
    )
  );
const openTargetProfile = () => {
  const url =
    `https://www.instagram.com/${currentProfile}/`;

  if (Platform.OS === "web") {
    globalThis.open(url, "_blank");
  } else {
    Linking.openURL(url);
  }
};
useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
const search =
  getNextSearch();

setCurrentSearch(search);

const nextTask =
  `🔍 Searching ${search}`;

const nextProfile =
  getTargetProfile(search);

setCurrentProfile(nextProfile);

    setCurrentTask(nextTask);

    setLastActivity(nextTask);

    incrementActions();
selectedInterests.forEach(
  (interest, index) => {
    interestScores[interest] =
      (interestScores[interest] || 0) +
      (index === 0 ? 2 : 1);
  }
);
    setTask(nextTask);
    

    setActivity(nextTask);

    index++;
  }, 4000);

  return () => clearInterval(interval);
}, []);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 600,
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
      <Text style={styles.title}>
        Personalization Engine
      </Text>

      <Text style={styles.subtitle}>
       See how FeedFlow adapts to your interests over time
      </Text>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>
              ⚡ Status
            </Text>

            <View style={styles.statusRow}>
              <Animated.View
                style={[
                  styles.dot,
                  { opacity: blinkAnim },
                ]}
              />

              <Text style={styles.status}>
                Active
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
             FeedFlow is actively analyzing content related
             to your selected interests and improving feed relevance.
          </Text>
        </View>
      <View style={styles.card}>
  <Text style={styles.cardTitle}>
    🎯 Interest Signals
  </Text>

  {selectedInterests.map((interest, index) => {
    const signal =
      index === 0
        ? "Strong Signal"
        : index === 1
        ? "Learning"
        : "Emerging";

    return (
      <View
        key={interest}
        style={styles.interestRow}
      >
        <Text style={styles.interestName}>
          {interest}
        </Text>

        <Text
          style={[
            styles.interestSignal,
            index === 0
              ? styles.strong
              : index === 1
              ? styles.learning
              : styles.emerging,
          ]}
        >
          {signal}
        </Text>
      </View>
    );
  })}
</View>
<View style={styles.card}>
  <Text style={styles.cardTitle}>
    ⚙️ Live Automation
  </Text>

  <Text style={styles.text}>
    Current Task
  </Text>

  <Text style={styles.liveTask}>
    {task}
  </Text>
  
    <TouchableOpacity
      style={styles.openButton}
      onPress={openTargetProfile}
    >
      <Text style={styles.openButtonText}>
        🚀 Open Instagram Target
      </Text>
    </TouchableOpacity>
</View>
</View>

<TouchableOpacity
  style={styles.analyticsButton}
  onPress={() => router.push("/analytics")}
>
  <Text style={styles.analyticsButtonText}>
    View Analytics →
  </Text>
</TouchableOpacity>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    paddingTop: 50,
  },

  pageLogo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
cardTitle: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},
  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
  },
interestRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 10,
},
openButton: {
  backgroundColor: "#7C3AED",
  paddingVertical: 10,
  paddingHorizontal: 14,
  borderRadius: 12,
  alignSelf: "flex-start",
  marginTop: 12,
},

openButtonText: {
  color: "#FFFFFF",
  fontWeight: "700",
},
interestName: {
  color: "#FFFFFF",
  fontSize: 15,
  fontWeight: "600",
},
liveTask: {
  color: "#7C3AED",
  fontSize: 20,
  fontWeight: "700",
  marginTop: 6,
  marginBottom: 12,
},

liveInfo: {
  color: "#FFFFFF",
  fontSize: 16,
  marginTop: 6,
  marginBottom: 12,
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
liveNumber: {
  color: "#22C55E",
  fontSize: 40,
  fontWeight: "700",
  marginTop: 6,
},
interestStrength: {
  fontSize: 13,
  fontWeight: "700",
},
analyticsButton: {
  backgroundColor: "#7C3AED",
  width: 280,
  alignSelf: "center",
  justifyContent:"center",
  alignItems:"center",
  paddingVertical: 14,
  borderRadius: 14,
  marginTop: 20,
  marginBottom: 30,
},
analyticsButtonText: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},
strong: {
  color: "#22C55E",
},
growing: {
  color: "#F59E0B",
},
moderate: {
  color: "#94A3B8",
},
  content: {
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
    backgroundColor: "#121A2E",
    borderRadius: 28,
    padding: 28,
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },

interestSignal: {
  fontSize: 13,
  fontWeight: "700",
},

learning: {
  color: "#F59E0B",
},

emerging: {
  color: "#94A3B8",
},
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  statCard: {
    flex: 1,
    alignItems: "center",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginRight: 6,
  },


  status: {
    color: "#22C55E",
    fontSize: 14,
    fontWeight: "700",
  },

  text: {
    color: "#94A3B8",
    marginTop: 10,
    fontSize: 13,
    lineHeight:22,
  },

  number: {
    color: "#7C3AED",
    fontSize: 30,
    fontWeight: "700",
  },

  label: {
    color: "#94A3B8",
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
  },
});