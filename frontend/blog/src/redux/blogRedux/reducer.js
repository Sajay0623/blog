import { All_ACTION_TYPE } from "./actionType";

const initState = {
  allBlog: [
    {
      title: "ajay Blog",
    },
  ],
  selecetedBlog: {},
};

export const blogReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case All_ACTION_TYPE.ALL_BLOG:
      return { ...state, allBlog: payload };
    case All_ACTION_TYPE.SELECTED_BLOG:
      return { ...state, selecetedBlog: payload };
    default:
      return state;
  }
};

 