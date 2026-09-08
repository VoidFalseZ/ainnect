// UI-only port: this file originally contained the server-side `calculateDailyStats`
// job. Only the prop type is needed by the admin analytics components.
import { type DailyStats } from "wasp/entities";

export type DailyStatsProps = {
  dailyStats?: DailyStats;
  weeklyStats?: DailyStats[];
  isLoading?: boolean;
};
