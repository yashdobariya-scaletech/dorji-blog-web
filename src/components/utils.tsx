import moment from "moment";

export const formatDate = (date: any, format?: string) => {
  if (!date) {
    return "";
  }
  return moment(date)
    .local()
    .format(format || "MMM Do YYYY");
};
