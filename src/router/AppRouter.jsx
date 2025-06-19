import { Navigate, Route, Routes } from 'react-router';
import { Users } from '../pages/Users';
import { UsersDetails } from '../pages/UserDetails';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/users'} />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UsersDetails />} />
        </Routes>
    );
};
