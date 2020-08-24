
export const isUserThere = (responseData) => {
	// This is the quickest way to check whether or not the user exists.
	// I used a more standard way in my original application, but didn't take the time
	// to implement it because it's not exactly what I wanted to showcase.

	return responseData.data.length > 0;
};