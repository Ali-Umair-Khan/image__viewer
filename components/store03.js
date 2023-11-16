import { create } from 'zustand'
const API_KEY = process.env.NEXT_PUBLIC_VITE_API_KEY;
// const page = 1;
const perPage = 30;
const useStore = create((set) => ({
  loading:true,
  data: [],
  fetchData:async(query,page) => {
    try {
        console.log('api key is ', API_KEY);
        console.log('page is', page);
        console.log('query is', query);
        const url = `https://api.unsplash.com/search/photos?&query=${query}&client_id=${API_KEY}&page=${page}&per_page=${perPage}`;
        // const response = await fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${API_KEY}&page=${page}&per_page=${perPage}`);
        // const response = await fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${API_KEY}&page=${page}&per_page=${perPage}`);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('response is', response);
        const responseData = await response.json();
        console.log('response json data',responseData);
        console.log('data is here ', responseData.results);
        set(()=>({loading: false, data:responseData.results || []}));
  } catch (error) {
        console.log('error is ',error)
        set(()=>({loading:false, data:[]}))
  }
}
}))

// set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),

//   set(() => ({ loading: false, data: responseData.results || [] }));
export default useStore;