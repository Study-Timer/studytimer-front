import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import SubjectPage from "../pages/SubjectPage";
import Profile from "../pages/Profile";

export function LayoutSwitcher(index) {
  switch (index) {
    case 1:
      return <Home />;
    case 2:
      return <Subjects />;
    case 3:
      return <SubjectPage />;
    case 4:
      return <Profile />;
  }
}

