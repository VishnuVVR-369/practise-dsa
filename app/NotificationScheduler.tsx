"use client";

import { useEffect } from "react";

function getMillisUntilNext8amIST() {
  const now = new Date();
  const istOffset = 5.5 * 60;
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istNow = new Date(utc + istOffset * 60000);

  const next8am = new Date(istNow);
  next8am.setHours(8, 0, 0, 0);
  if (istNow >= next8am) {
    next8am.setDate(next8am.getDate() + 1);
  }
  return next8am.getTime() - istNow.getTime();
}

export default function NotificationScheduler() {
  useEffect(() => {
    if (!("Notification" in window)) return;

    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") return;
      const timeout = getMillisUntilNext8amIST();
      const timer = setTimeout(() => {
        new Notification("Revise DSA", {
          body: "Time to revise DSA! Click to open app.",
          icon: "/favicon.ico",
        });
      }, timeout);
      return () => clearTimeout(timer);
    });
  }, []);

  return null;
}
