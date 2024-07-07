import { Dexie } from 'dexie';
import { Priority, WeekDays } from './utils.service';

export const icons = ["format_color_fill", "zoom_out_map", "chevron_right", "alternate_email", "delete", "format_size", "person_remove", "medical_services", "message", "info", "fullscreen_exit", "explosion", "description", "waveform", "ring_volume", "domain_disabled", "casino", "calendar_today", "anchor", "business", "sports_volleyball", "vertical_align_top", "arrow_downward", "remove_circle", "door_open", "logout", "science", "soap", "widgets", "bolt", "mic_off", "bridge", "local_hospital", "fingerprint", "chevron_right", "place", "skip_next", "sentiment_very_satisfied", "flag", "sports_football", "school", "crop", "expand_more", "people", "sports_bar", "diagram", "arrow_upward", "whatshot", "person", "laptop", "grid_on", "candlestick_chart", "local_shipping", "album", "sentiment_satisfied_alt", "smoking_rooms", "restaurant_menu", "compare_arrows", "restaurant", "eco", "mail", "report", "local_hospital", "pager", "contacts", "strikethrough_s", "k", "flag", "edit", "skip_previous", "arrow_forward", "comment", "content_paste", "source_branch", "checklist", "local_shipping", "person_add_check", "science", "folder_special", "rss_feed", "person", "person_pin_circle", "scroll", "sports", "toggle_off", "archive", "person_pin", "sort", "mood", "color_lens", "offroad", "w", "public", "filter_hdr", "donut_large", "tablet", "pets", "cloud", "construction", "face", "local_hospital", "tent", "gavel", "visibility", "mic_off", "local_pharmacy"];

export interface IHabitLog {
  habitId: string;
  day: number;
  done?: number;
}

export interface ITask {
  id: string;
  title: string;
  priority: Priority;
  habitId?: string;
  day?: number;
  done?: number;
  description?: string;
}

export interface IHabit {
  id: string;
  title: string;
  start: string;
  end: string;
  createdAt: Date;
  points: number;
  repeat: WeekDays[];
  lastCheck: number;
  icon: string;
  description: string;
}

export class DbService extends Dexie {
  habits: Dexie.Table<IHabit, string>;
  habitLogs: Dexie.Table<IHabitLog, [string, number]>;
  tasks: Dexie.Table<ITask, string>;

  constructor() {
    super('DB');
    this.version(1).stores({
      habits: 'id, title, start, end, points, createdAt, lastCheck, icon, description',
      habitLogs: '[habitId+day], habitId, day, done',
      tasks: 'id, title, priority, habitId, day, done, description'
    });

    this.habits = this.table('habits');
    this.habitLogs = this.table('habitLogs');
    this.tasks = this.table('tasks');
  }
}


