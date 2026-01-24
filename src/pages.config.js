import Contact from './pages/Contact';
import Home from './pages/Home';
import RequestQuote from './pages/RequestQuote';
import Services from './pages/Services';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Contact": Contact,
    "Home": Home,
    "RequestQuote": RequestQuote,
    "Services": Services,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};