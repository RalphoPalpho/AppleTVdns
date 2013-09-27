atv.config = { 
    "doesJavaScriptLoadRoot": true,
    "DEBUG_LEVEL": 4,
    "ROOT_URL": "https://trailers.apple.com/appletv/index.xml"
};

atv.onAppEntry = function()
{
    atv.loadURL('https://trailers.apple.com/index.xml');
}
