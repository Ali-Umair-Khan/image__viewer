import create from "zustand";

const API_KEY = process.env.NEXT_PUBLIC_VITE_API_KEY; // Assuming VITE_API_KEY is defined in your environment
const perPage = 16;

export const useSnapper = create((set) => ({
  data: [],
  loading: true,
  fetchUsers: async (query, page) => {
    console.log('api key', API_KEY);
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${API_KEY}&page=${page}&per_page=${perPage}`);
        const responseData = await response.json();
        console.log("API Response:", responseData); // Log API Response
        set(() => ({ loading: false, data: responseData.results || [] }));
      } catch (error) {
        console.error("Error fetching data:", error);
        set(() => ({ loading: false, data: [] }));
      }
  },
}));

// useSnapper.js
// import create from "zustand";

// const useSnapper = create((set) => ({
//   data: [],
//   loading: true,
//   fetchUsers: async (query, page) => {
//     console.log("API Key:", API_KEY); // Log API Key
//     try {
//       const response = await fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${API_KEY}&page=${page}&per_page=${perPage}`);
//       const responseData = await response.json();
//       console.log("API Response:", responseData); // Log API Response
//       set(() => ({ loading: false, data: responseData.results || [] }));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       set(() => ({ loading: false, data: [] }));
//     }
//   },
// }));

// export default useSnapper;
