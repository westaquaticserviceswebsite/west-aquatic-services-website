import Home from './pages/Home';
import Services from './pages/Services';
import RequestQuote from './pages/RequestQuote';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Services": Services,
    "RequestQuote": RequestQuote,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};