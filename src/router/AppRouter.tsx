import { useRoutes } from 'react-router-dom';

import routes from 'router/routes';
import MainLayout from 'components/MainLayout';
import Home from 'screens/home/Home';
import Login from 'screens/login/Login';
import About from 'screens/about/about';
import Contact from 'screens/contact/Contact';
import Dashboard from 'screens/dashboard/Dashboard';
import Calendar from 'screens/calendar/Calendar';
import Workouts from 'screens/workouts/Workouts';
import Programs from 'screens/programs/Programs';

function AppRouter() {
  let element = useRoutes([
    {
      path: routes.root.path,
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: routes.about.path, element: <About /> },
        { path: routes.contact.path, element: <Contact /> },
        { path: routes.dashboard.path, element: <Dashboard /> },
        { path: routes.calendar.path, element: <Calendar /> },
        { path: routes.workouts.path, element: <Workouts /> },
        { path: routes.programs.path, element: <Programs /> },
      ],
    },
    { path: routes.login.path, element: <Login /> },
  ]);

  return element;
}

export default AppRouter;
