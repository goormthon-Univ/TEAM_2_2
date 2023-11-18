import dayjs from "dayjs";
import { atom } from "recoil";

//여기다가 메인에 필요한 날짜들은 다 담아둠
export const weeklyDayAtom = atom({
  key: "weeklyDayAtom",
  default: [
    {
      monthShow: "",
      dayShow: "",
      monthSee: "",
      dayDataFormat: "",
      daySelectFormat: "",
    },
  ],
});

export const signupDayAtom = atom({
  key: "signupDayAtom",
  default: {
    year: dayjs().format("YYYY"),
    month: "01",
    day: "01",
  },
});

export const sidebarOpenAtom = atom({
  key: "sidebarOpenAtom",
  default: false,
});

export const sidebarShowAtom = atom({
  key: "sidebarShowAtom",
  default: "basic",
});

export const writeCompleteModalAtom = atom({
  key: "writeCompleteModalAtom",
  default: false,
});

export const LikeandCommentCurrentday = atom({
  key: "likeandcommentday",
  default: dayjs(),
});

export const AlarmDataAtom = atom({
  key: "alarmData",
  default: [],
});

export const GetMyLikeDataAtom = atom({
  key: "getMyLikeData",
  default: [],
});

export const GetMyCommentDataAtom = atom({
  key: "getMyCommentData",
  default: [],
});

export const UserIdAtom = atom({
  key: "userIdAtom",
  default: 0,
});

export const DailyMainAtom = atom({
  key: "dailyMainAtom",
  default: [],
});
