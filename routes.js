import { useSelector } from "react-redux";

import { AppNav, AuthNav } from "./src/navigation";

export default function Routes() {
  const { user } = useSelector((state) => state.auth);

    // return user ? <AppNav /> : <AuthNav />;
  return <AppNav />;
}
