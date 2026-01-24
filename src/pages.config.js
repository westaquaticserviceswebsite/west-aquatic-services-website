import RequestQuote from './pages/RequestQuote';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import __Layout from './Layout.jsx';


export const PAGES = {
    "RequestQuote": RequestQuote,
    "Contact": Contact,
    "Home": Home,
    "Services": Services,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};