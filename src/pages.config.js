import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Services": Services,
    "Contact": Contact,
    "RequestQuote": RequestQuote,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};