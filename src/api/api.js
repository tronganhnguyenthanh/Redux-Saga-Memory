import axios from "axios"
export const getListPosts = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  let limitPost = res?.data?.slice(0, 10)
  return limitPost
}