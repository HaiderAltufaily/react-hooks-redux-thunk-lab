const initialState = {
  entities: [],
  status: "idle",
};

export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: "cats/catsLoading" });
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        } else {
          return response.json();
        }
      })
      .then((cats) => {
        dispatch({
          type: "cats/catsLoaded",
          payload: cats.images,
        });
      });
  };
}

export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };
    case "cats/catsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    default:
      return state;
  }
}
