/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      "0": () => import('./containers/HelloWorld2'),
"1": () => import('./containers/Article'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;