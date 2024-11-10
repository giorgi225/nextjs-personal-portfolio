/**
 * Formats a date string in "YYYY-MM" format to "YYYY MMM" format.
 *
 * Example:
 * Input: "2022-01"
 * Output: "2022 Jan"
 *
 * @param dateString - The date string in "YYYY-MM" format.
 * @returns A formatted date string in "YYYY MMM" format, e.g., "2022 Jan".
 *          Returns an empty string if no date is provided.
 */
export const formatYearMonth = (dateString: string) => {
  if (!dateString) {
    return "";
  }
  const monthMap = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };

  const [year, month] = dateString.split("-");
  const monthAbbreviation = monthMap[month as keyof typeof monthMap]; // Type assertion here

  return `${year} ${monthAbbreviation}`;
};
