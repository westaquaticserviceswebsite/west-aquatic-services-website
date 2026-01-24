import RequestQuote from './pages/RequestQuote';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "RequestQuote": RequestQuote,
    "Contact": Contact,
    "Services": Services,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};