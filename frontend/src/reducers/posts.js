// reducer takes in 2 things
// 1. action about what happened
// 2. copy of current state
// 3. logic to update state
// 4. React handles updates to UI

function posts(state = [], action) {
  const i = action.id;
  switch (action.type) {
    case "INCREMENT_VOTESCORE":
      console.log("incrementing vote score");
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], voteScore: state[i].voteScore + 1 },
        ...state.slice(i + 1) // after the one we are updating
      ];

    case "DECREMENT_VOTESCORE":
      console.log("decrementing vote score");
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], voteScore: state[i].voteScore - 1 },
        ...state.slice(i + 1) // after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;
