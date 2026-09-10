import React, { useEffect, useRef } from "react";
import {router} from "expo-router";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";

import {
  selectedInterests,
  interestScores,
} from "../store/preferencesStore";
export default function AnalyticsScreen() {
  const blinkAnim = useRef(
    new Animated.Value(1)
  ).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 0.3,
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

  const primaryInterest =
    selectedInterests[0] || "None";

const totalScore =
  Object.values(
    interestScores
  ).reduce(
    (sum, score) =>
      sum + score,
    0
  );

const chartData =
  Object.entries(
    interestScores
  ).map(([label, score]) => ({
    label,
    value:
      totalScore > 0
        ? Math.round(
            (score / totalScore) *
              100
          )
        : 0,
  }));
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
        Analytics
      </Text>

      <Text style={styles.subtitle}>
        Track FeedFlow personalization progress
      </Text>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>
              ⚡ Automation Status
            </Text>

            <View style={styles.statusRow}>
              <Animated.View
                style={[
                  styles.dot,
                  { opacity: blinkAnim },
                ]}
              />

              <Text style={styles.statusText}>
                Active
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
            Personalization engine is running.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>
              🎯 Personalization Progress
            </Text>

            <View style={styles.statusRow}>
              <Animated.View
                style={[
                  styles.purpleDot,
                  { opacity: blinkAnim },
                ]}
              />

              <Text style={styles.progressText}>
                Growing
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
            FeedFlow continues learning from your
            selected interests.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            📊 Feed Distribution
          </Text>

          <View style={styles.chartContainer}>
            {chartData.map((item) => (
              <View
                key={item.label}
                style={styles.barItem}
              >
                <Text style={styles.percent}>
                  {item.value}%
                </Text>

                <View
                  style={[
                    styles.bar,
                    {
                      height: item.value * 2,
                    },
                  ]}
                />

                <Text style={styles.barLabel}>
                  {item.label}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.text}>
            Estimated content distribution
            based on FeedFlow learning signals.
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
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 20,
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
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 20,
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

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  statusText: {
    color: "#22C55E",
    fontWeight: "700",
    fontSize: 14,
  },

  progressText: {
    color: "#7C3AED",
    fontWeight: "700",
    fontSize: 14,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginRight: 6,
  },

  purpleDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#7C3AED",
    marginRight: 6,
  },

 chartContainer: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "flex-end",
  height: 220,
  marginTop: 20,
},

  barItem: {
    alignItems: "center",
  },

  percent: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
  },

  bar: {
    width: 42,
    backgroundColor: "#7C3AED",
    borderRadius: 10,
    marginVertical: 8,
  },

  barLabel: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },

  text: {
    color: "#94A3B8",
    marginTop: 8,
    lineHeight: 22,
  },
});