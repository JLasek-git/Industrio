export const getAppInfo = ({ appInfo }) => appInfo;

const reducerName = "appInfo";
const createActionName = (name) => `app/${reducerName}/${name}`;

export const SET_CURRENT_ALERT_TEXT = createActionName(
  "SET_CURRENT_ALERT_TEXT"
);

export const setCurrentAlertText = (payload) => ({
  payload,
  type: SET_CURRENT_ALERT_TEXT,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_CURRENT_ALERT_TEXT: {
      return {
        ...statePart,
        currentAlertText: action.payload,
      };
    }

    default:
      return statePart;
  }
}
