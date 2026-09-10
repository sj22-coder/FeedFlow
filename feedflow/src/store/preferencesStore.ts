export let selectedInterests: string[] = [];

export let automationStatus = "Active";

export let actionsCompleted = 0;

export let currentTask = "Starting Engine";

export let lastActivity = "No activity yet";
export let interestScores: Record<
  string,
  number
> = {};

export const setSelectedInterests = (
  interests: string[]
) => {
  selectedInterests = interests;

  interestScores = {};

  interests.forEach(
    (interest, index) => {
      interestScores[interest] =
        index === 0
          ? 50
          : index === 1
          ? 30
          : 20;
    }
  );
};

export const setCurrentTask = (
  task: string
) => {
  currentTask = task;
};

export const setLastActivity = (
  activity: string
) => {
  lastActivity = activity;
};

export const incrementActions = () => {
  actionsCompleted += 1;
};