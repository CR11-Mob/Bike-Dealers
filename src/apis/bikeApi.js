import allBikesData from "./../bikesData";

export const requestAllBikes = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ data: allBikesData });
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};
