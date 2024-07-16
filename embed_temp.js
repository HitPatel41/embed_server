(function() {
    // Function to parse the script tag's src for parameters
    function getScriptParams(scriptName) {
        // Find the script tag with the given name
        var scripts = document.getElementsByTagName('script');
        var scriptTag = Array.from(scripts).find(script => script.src.includes(scriptName));
        if (!scriptTag) {
            console.log("Script tag with specified name not found.");
            return {};
        }

        // Parse the script tag's src for query parameters
        var queryString = scriptTag.src.split('?')[1];
        if (!queryString) {
            console.log("No query string found in script tag's src.");
            return {};
        }

        var params = {};
        queryString.split('&').forEach(param => {
            var pair = param.split('=');
            if (pair.length === 2) {
                params[pair[0]] = decodeURIComponent(pair[1]);
            } else {
                // If there is no '=' assume it is a single parameter name with a value set to true
                params[param] = true;
            }
        });
        return params;
    }

    // Extract parameters from this script's URL
    var params = getScriptParams('embed.js');
    // Assuming we want the first parameter name as the key, regardless of its value
    var firstParamKey = Object.keys(params)[0];
    window.embedParam = firstParamKey

    // console.log("Script parameters:", params);
    // console.log("First parameter key:", firstParamKey);
    // console.log("Global embedParam set to:", window.embedParam);

    var appRoot = document.createElement('div');
    appRoot.id = 'embeddedAppRoot';
    document.body.appendChild(appRoot);
    console.log("App root element added to the DOM.");

    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://admin.parth2success.com/popup/static/css/main.04475b15.css';
    document.head.appendChild(cssLink);
    console.log("CSS link added to the DOM.");

    var reactScript = document.createElement('script');
    reactScript.src = 'https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js';
    document.body.appendChild(reactScript);
    console.log("React script added to the DOM.");

    var reactDOMScript = document.createElement('script');
    reactDOMScript.src = 'https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js';
    document.body.appendChild(reactDOMScript);
    console.log("ReactDOM script added to the DOM.");

    reactDOMScript.onload = function() {
        var appScript = document.createElement('script');
        appScript.src = 'https://admin.parth2success.com/popup/static/js/main.99d89e26.js';
        document.body.appendChild(appScript);
        console.log("Application script added to the DOM.");
    };
})();
