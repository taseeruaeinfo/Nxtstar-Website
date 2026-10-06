import { createContext } from 'react';

// During prerendering the provider holds a plain object that <SEO> writes into.
// In the browser there is no provider and <SEO> updates document.head directly.
const HeadContext = createContext(null);

export default HeadContext;
