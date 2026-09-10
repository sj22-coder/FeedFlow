import {
  selectedInterests,
} from "../store/preferencesStore";

export const generateSearchTerms = () => {
  const searches: string[] = [];

  selectedInterests.forEach(
    (interest) => {
      switch (interest) {
        case "AI":
          searches.push(
            "Artificial Intelligence",
            "Machine Learning",
            "OpenAI",
            "AI Startups"
          );
          break;

        case "Technology":
          searches.push(
            "Technology News",
            "Tech Creators",
            "Software Engineering"
          );
          break;

        case "Startups":
          searches.push(
            "Startup Founders",
            "Venture Capital",
            "Innovation"
          );
          break;

        case "Business":
          searches.push(
            "Business Growth",
            "Entrepreneurship",
            "Leadership"
          );
          break;

        case "Finance":
          searches.push(
            "Investing",
            "Stock Market",
            "Personal Finance"
          );
          break;

        case "Gaming":
          searches.push(
            "Gaming Creators",
            "Esports",
            "Gaming Clips"
          );
          break;

        case "Travel":
          searches.push(
            "Travel Photography",
            "Adventure Travel",
            "World Destinations"
          );
          break;

        case "Fitness":
          searches.push(
            "Gym Motivation",
            "Workout Routines",
            "Athlete Lifestyle"
          );
          break;

        case "Health":
          searches.push(
            "Nutrition",
            "Wellness",
            "Healthy Living"
          );
          break;

        case "Education":
          searches.push(
            "Online Learning",
            "Study Tips",
            "STEM Education"
          );
          break;

        default:
          searches.push(interest);
      }
    }
  );

  return searches;
};

export const getNextSearch = () => {
  const searches =
    generateSearchTerms();

  if (searches.length === 0)
    return "No Interests";

  const randomIndex =
    Math.floor(
      Math.random() *
        searches.length
    );

  return searches[randomIndex];
};

export const getTargetProfile = (
  search: string
) => {
  const profiles: Record<
    string,
    string
  > = {
    // AI
    "Artificial Intelligence":
      "artificialintelligence.co",
    "Machine Learning":
      "deeplearning.ai",
    "OpenAI":
      "openai",
    "AI Startups":
      "aistartupimpact",

    // Technology
    "Technology News":
      "techcrunch",
    "Tech Creators":
      "mkbhd",
    "Software Engineering":
      "github",

    // Startups
    "Startup Founders":
      "ycombinator",
    "Venture Capital":
      "sequoiacap",
    "Innovation":
      "techstars",

    // Business
    "Business Growth":
      "garyvee",
    "Entrepreneurship":
      "startupgrind",
    "Leadership":
      "forbes",

    // Finance
    "Investing":
      "investopedia",
    "Stock Market":
      "wsj",
    "Personal Finance":
      "finance",

    // Gaming
    "Gaming Creators":
      "playstation",
    "Esports":
      "eslcs",
    "Gaming Clips":
      "ign",

    // Travel
    "Travel Photography":
      "natgeo",
    "Adventure Travel":
      "lonelyplanet",
    "World Destinations":
      "beautifuldestinations",

    // Fitness
    "Gym Motivation":
      "gymshark",
    "Workout Routines":
      "nike",
    "Athlete Lifestyle":
      "underarmour",

    // Health
    "Nutrition":
      "healthline",
    "Wellness":
      "mindbodygreen",
    "Healthy Living":
      "who",

    // Education
    "Online Learning":
      "coursera",
    "Study Tips":
      "studygram",
    "STEM Education":
      "unacademy",
  };

  return (
    profiles[search] ||
    "instagram"
  );
};