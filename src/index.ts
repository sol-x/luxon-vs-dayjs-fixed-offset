import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

import { DateTime } from "luxon";

function formatUTCOffset(offsetInNumber: number): string {
  return offsetInNumber === 0
    ? "UTC"
    : offsetInNumber > 0
    ? `UTC+${offsetInNumber}`
    : `UTC${offsetInNumber}`;
}

const time = new Date();
const fixedOffset = 10;
const luxonTime = DateTime.fromJSDate(time)
  .setZone(formatUTCOffset(fixedOffset))
  .toISO();
const dayjsTime = dayjs(time).utcOffset(fixedOffset).format();
console.log(`The current time under UTC offset ${fixedOffset}:`);
console.log({ luxonTime, dayjsTime });

const luxonTime2 = DateTime.fromJSDate(time)
  .setZone(formatUTCOffset(fixedOffset))
  .set({ hour: 1 })
  .toISO();
const dayjsTime2 = dayjs(time).utcOffset(fixedOffset).set("hour", 1).format();
console.log(
  `The current time under UTC offset ${fixedOffset} after set hour to 1:`
);
console.log({ luxonTime2, dayjsTime2 });
