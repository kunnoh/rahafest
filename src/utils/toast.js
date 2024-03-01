import Toast from "react-native-root-toast";

const success = async (msg, time = Toast.durations.SHORT) => {
  await showToast(msg, time, "success");
};

const warning = async (msg, time = Toast.durations.SHORT) => {
  await showToast(msg, time, "warning");
};

const danger = async (msg, time = Toast.durations.SHORT) => {
  await showToast(msg, time, "danger");
};

const showToast = async (msg, time, type) => {
  let backgroundColor;

  switch (type) {
    case "success":
      backgroundColor = "green";
      break;
    case "warning":
      backgroundColor = "orange";
      break;
    case "danger":
      backgroundColor = "red";
      break;
    default:
      backgroundColor = "black";
  }

  Toast.show(msg, {
    duration: time,
    backgroundColor,
    textColor: "white",
    shadow: true,
    animation: true,
    hideOnPress: true,
  });
};

export { success, warning, danger };
