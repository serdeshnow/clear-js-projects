import moment from "moment";

export const getDate = (date) => {
	return moment(date).format("DD MMMM YYYY, hh:mm:ss a");
};
