import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import { Funds } from '../pages';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<h1>I am Example1</h1>} />
                    <Route path="funds" element={<Funds />} />
                    <Route path="companies" element={<h1>I am Example1</h1>} />
                    <Route
                        path="current-documents"
                        element={<h1>I am Example1</h1>}
                    />
                    <Route path="documents" element={<h1>I am Example1</h1>} />
                    <Route path="members" element={<h1>I am Example1</h1>} />
                    <Route path="profile" element={<h1>I am Example1</h1>} />
                </Route>
            </Routes>
        </Router>
    );
};