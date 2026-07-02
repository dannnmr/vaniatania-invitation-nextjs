export function getCalendarLinks(date: Date, eventName: string = "XV Años") {
  const startDate = date.toISOString().replace(/-|:|\.\d+/g, "");
  const endDate = new Date(date.getTime() + 6 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, ""); // +6 hours

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventName
  )}&dates=${startDate}/${endDate}`;

  const icsUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:${
    typeof window !== "undefined" ? window.location.href : ""
  }%0ADTSTART:${startDate}%0ADTEND:${endDate}%0ASUMMARY:${encodeURIComponent(
    eventName
  )}%0AEND:VEVENT%0AEND:VCALENDAR`;

  return { googleUrl, icsUrl };
}
