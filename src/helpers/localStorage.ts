import { PostItemType } from "../types/Post.type";

export const getAllLocalStorageItems = () => JSON.parse(localStorage.getItem('posts') || '[]');

export const addToLocalStorage = (post: PostItemType) => {
  const currentStorage = localStorage.getItem('posts');
  if (!currentStorage) {
    let newArr = [];
    newArr.push(post);
    localStorage.setItem('posts', JSON.stringify(newArr));
  } else {
    let posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
  }
}

export const removeFromLocalStorage = async (postId: string) => {
  const items = JSON.parse(localStorage.getItem('posts') || '[]');
  const filtered = items.filter((item: any) => item.id !== postId);
  localStorage.setItem('posts', JSON.stringify(filtered));
}

