import { useEffect, useState } from 'react'
import axios from "axios";
import s from "./App.module.css";
import { ImageList } from './components/ImageList/ImageList'
import { useScrollPosition } from './hooks/useScrollPosition'

function App() {

  const [imageList, setImageList] = useState([]);
  // store the page number to fetch
  const [pageToFetch, setPageToFetch] = useState(1);
  //
  const [isLoading, setIsLoading] = useState(false);

  const { isBottom } = useScrollPosition();

  useEffect(() => {
    fetchImagesByPage(pageToFetch);
  }, [pageToFetch]);

  useEffect(() => {
    if(isBottom) {
      console.log("increment page !");
      incrementPage();
    }
  }, [isBottom])

  async function fetchImagesByPage(page) {
    setIsLoading(true);
    const { data } = await axios(`https://picsum.photos/v2/list?page=${page}&limit=5`);
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  function incrementPage() {
    setPageToFetch(pageToFetch + 1);
  }

  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className="spinner-border" role="status" />}
    </div>
  )
}

// const DATA = [
//   {
//     id: "0",
//     author: "Alejandro Escamilla",
//     width: 5000,
//     height: 3333,
//     url: "https://unsplash.com/photos/yC-Yzbqy7PY",
//     download_url: "https://picsum.photos/id/0/5000/3333",
//   },
//   {
//     id: "1",
//     author: "Alejandro Escamilla",
//     width: 5000,
//     height: 3333,
//     url: "https://unsplash.com/photos/LNRyGwIJr5c",
//     download_url: "https://picsum.photos/id/1/5000/3333",
//   },
//   {
//     id: "2",
//     author: "Alejandro Escamilla",
//     width: 5000,
//     height: 3333,
//     url: "https://unsplash.com/photos/N7XodRrbzS0",
//     download_url: "https://picsum.photos/id/2/5000/3333",
//   },
//   {
//     id: "3",
//     author: "Alejandro Escamilla",
//     width: 5000,
//     height: 3333,
//     url: "https://unsplash.com/photos/Dl6jeyfihLk",
//     download_url: "https://picsum.photos/id/3/5000/3333",
//   },
//   {
//     id: "4",
//     author: "Alejandro Escamilla",
//     width: 5000,
//     height: 3333,
//     url: "https://unsplash.com/photos/y83Je1OC6Wc",
//     download_url: "https://picsum.photos/id/4/5000/3333",
//   },
// ];

export default App
