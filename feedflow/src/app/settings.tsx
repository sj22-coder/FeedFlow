import React, { useEffect, useRef } from "react";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import {
  selectedInterests,
} from "../store/preferencesStore";

export default function SettingsScreen() {
  const blinkAnim = useRef(
    new Animated.Value(1)
  ).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Settings
      </Text>

      <Text style={styles.subtitle}>
        Manage your FeedFlow preferences
      </Text>

      <View style={styles.content}>
        {/* Instagram */}
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>
              📸 Instagram Connection
            </Text>

            <View style={styles.statusRow}>
              <Animated.View
                style={[
                  styles.dot,
                  {
                    opacity: blinkAnim,
                  },
                ]}
              />

              <Text style={styles.connected}>
                Connected
              </Text>
            </View>
          </View>
        </View>

  {/* Interests */}
<View style={styles.card}>
  <Text style={styles.cardTitle}>
    🎯 Selected Interests
  </Text>

  {selectedInterests.map((interest) => (
    <Text
      key={interest}
      style={styles.interest}
    >
      • {interest}
    </Text>
  ))}

  <TouchableOpacity
    style={styles.button}
    onPress={() =>
      router.push("/preferences")
    }
  >
    <Text style={styles.buttonText}>
      Change Interests
    </Text>
  </TouchableOpacity>
</View>
        {/* Automation */}
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>
              ⚡ Automation Status
            </Text>

            <View style={styles.statusRow}>
              <Animated.View
                style={[
                  styles.dot,
                  {
                    opacity: blinkAnim,
                  },
                ]}
              />

              <Text style={styles.connected}>
                Active
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
            FeedFlow is reinforcing your
            selected interests.
          </Text>
        </View>

        {/* Privacy */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            🔒 Privacy
          </Text>

          <Text style={styles.text}>
            User preferences are stored
            locally for this prototype.
          </Text>
        </View>

        {/* About */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            ℹ️ About FeedFlow
          </Text>

          <Text style={styles.text}>
            FeedFlow helps users improve
            Instagram feed relevance using
            interest-based personalization.
          </Text>
        </View>
      </View>
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
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 20,
  },

  content: {
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
    backgroundColor: "#121A2E",
    borderRadius: 28,
    padding: 24,
    marginBottom: 30,
  },
button: {
  backgroundColor: "#7C3AED",
  paddingVertical: 12,
  borderRadius: 12,
  alignItems: "center",
  marginTop: 10,
},

buttonText: {
  color: "#FFFFFF",
  fontWeight: "700",
  fontSize: 14,
},
  card: {
    backgroundColor: "#111827",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
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
    borderRadius: 5,
    backgroundColor: "#22C55E",
    marginRight: 6,
  },

  connected: {
    color: "#22C55E",
    fontWeight: "700",
    fontSize: 12,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  interest: {
    color: "#FFFFFF",
    marginBottom: 8,
    fontSize: 14,
  },

  text: {
    color: "#94A3B8",
    lineHeight: 22,
    marginTop: 10,
  },
});