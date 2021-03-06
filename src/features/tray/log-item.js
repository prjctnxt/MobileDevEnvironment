import crel from "crel";
import { isUndefined } from "lodash";

export default function LogItem({
  message,
  filePath,
  fileName,
  lineNumber,
  amount,
  type = "log"
} = {}) {
  // figure out type
  if (type === "error") type = "error";
  else if (typeof message === "string") type = "string";
  else if (typeof message === "number") type = "number";
  else if (typeof message === "boolean") type = "boolean";
  else if (typeof message === "object") type = "object";
  else if (Array.isArray(message)) type = "array";
  else if (message === null) type = "null";
  else if (typeof message === "undefined") type = "undefined";

  // prepare message
  if (type === "null" || type === "undefined") message = type;
  else if (type === "object" || type === "array") message = JSON.stringify(message, undefined, 2);
  else if (type === "number" || type === "boolean") message = message.toString();

  // line location
  const lineLoc = fileName + ":" + lineNumber;

  // prepare amount
  amount = isUndefined(amount) ? 1 : amount;

  // Prepare LogItem parts
  const LogAmount = crel("div", { class: "mde-log-amount" }, amount === 1 ? "" : amount);
  const LogMessage = crel("div", { class: "mde-log-message" }, message);
  const LogTrace = crel("a", { class: "mde-log-trace", href: filePath, target: "_blank" }, lineLoc);
  const LogMessageFull = crel("pre", { class: "mde-log-message-full" }, message);

  // Build LogItem
  let LogItem = crel(
    "div",
    { class: "mde-log", "data-type": type },
    LogAmount,
    LogMessage,
    LogTrace,
    LogMessageFull
  );

  // Listen for toggling full message
  LogMessage.addEventListener("click", () => LogItem.classList.toggle("mde-log-open"));

  return LogItem;
}
