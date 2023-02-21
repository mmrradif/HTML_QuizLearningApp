
// Array of Objects
const quiz = [
    {
        q: 'Why the developer must provide formats that are available across most browsers when incorporating media element such audio or video in web pages?',
        options: ['So that browsers can decide which plugin or extension they should use to play the media',
            'So that browsers allow user to choose which format they want to load',
            'So that browsers can decide which format they want to support',
            'All of the above'],
        answer:2
    },
    {
        q: 'What one of the following is not HTML5 supported video format?',
        options: ['Ogg/Theora (.ogv extension) ',
            'WebM/VP8 (.webm extension)',
            'MPEG-4/H.264 (.mp4 extension)',
            'Flash Video (.flv extension)'],
        answer: 3
    },
    {
        q: 'Why should you should include more than one <source> element in video element?',
        options: ['o allow users to play one video after another', 'To provide many sources so that the browser can choose the most appropriate video codec.',
            'To provide user a playlist from where users can choose which video to play',
            'It is not possible to add more than one <source> element'],
        answer: 1
    },
    {
        q: ' How do the browsers choose the format of the audio/video when you provide multiple sources of various formats?',
        options: ['The browser checks all the sources and selects one which has the minimum size',
            'The browser checks all the sources and selects one which takes the minimum time to download',
            'The browser checks all the sources and selects one which provides the best performance',
            'The browser starts looking at the top and stops when it finds a file that it can display'],
        answer: 3
    },
    {
        q: 'When providing multiple source of video, what is the recommended order?',
        options: ['Start with .mp4, then .ogv and then .webm',
            'Start with .webm, then .ogv and then .mp4',
            'Start with .ogv, then .webm and then .mp4',
            'Start with .ogv, then .mp4 and then .webm'],
        answer: 1
    },
    {
        q: 'Which attribute of the video element control how the video should be loaded when the page loads?',
        options: ['controls ',
            'loop',
            'preload',
            'autoplay '],
        answer: 2
    },
    {
        q: 'How do you specify the video in a web page starts loading when the page loads?',
        options: ['By setting the preload attribute to true',
            'By setting the preload attribute to auto',
            'By setting the preload attribute to metadata ',
            'By setting the preload attribute to none'],
        answer: 1
    },
    {
        q: 'Which one is the developed and recommended by W3C for subtitling video?',
        options: ['SRT',
            'WebVTT',
            'VTT',
            'XML'],
        answer: 1
    },
    {
        q: ' Which of the following is or are HTML5 standards for providing captions in video?',
        options: ['SRT',
            'WebVTT',
            'TTML',
            'XML',
            'WebVTT & TTML'],
        answer: 4
    },
    {
        q: 'Which property of the HTMLMediaElement can be used to determine whether the media is playing?',
        options: ['played',
            'readyState', 'muted', 'paused'],
        answer: 3
    }
    //{
    //    q: ' Which of the following is a valid WebSocket instantiation?',
    //    options: ['wsConnection = new WebSocket(‘http://studygroup.70480.com’);', 'wsConnection = new WebSocket(‘tcp://studygroup.70480.com’,[‘soap’,’xmpp’]);', 'wsConnection = new WebSocket(‘wss://studygroup.70480.com’,[‘soap’,’xmpp’]);', 'wsConnection = new WebSocket(‘ftp://studygroup.70480.com’,[‘soap’,’xmpp’]);'],
    //    answer: 2
    //},
    //{
    //    q: 'Which of the following statements properly handles the reception of data from a WebSocket?',
    //    options: ['wsConnection.onpost = function(msg){..};', 'SiwsConneciton.onreceive = function(msg){...};', 'wsConnection.onmessage = function(msg){...};', 'wsConnection.ongetdata = function(msg){...}'],
    //    answer: 2
    //},
    //{
    //    q: 'Which is true in about the WebSkocket object?',
    //    options: ['The WebSocket object, which connects to the server when the connect method is invoked', 'The WebSocket object, which connects to the server when first message is sent to server using the send method', 'The WebSocket object, which connects to the server when its constructor is invoked', 'The WebSocket object, which connects to the server when you set the URL after its constructor is invoked'],
    //    answer: 2
    //},
    //{
    //    q: 'Which of the following is not an event of WebSocket object?',
    //    options: ['onopen', 'onclose', 'onmessage', 'onready'],
    //    answer: 3
    //},
    //{
    //    q: ' Which of the following are the methods of Websocket object?',
    //    options: ['open', 'close', 'send', 'ready','send & close'],
    //    answer: 4
    //},
    //{
    //    q: 'When working with the WebSocket object, which event can be used to retrieve the data that was received from the server?',
    //    options: ['onopen', 'onclose', 'onmessage', 'onready'],
    //    answer: 2
    //},
    //{
    //    q: 'Which property of the WebSocket object indicates the binary data format the onmessage event receives?',
    //    options: ['type', 'format', 'messageType', 'binaryType'],
    //    answer: 3
    //},
    //{
    //    q: 'The WebSocket URL begins with ______________',
    //    options: ['http:// or https://', 'ws:// or wss://', 'tcp:// or http://', 'http:// or ftp://'],
    //    answer: 1
    //},
    //{
    //    q: ' How do you open an WebSocket connection?',
    //    options: ['Create a WebSocket object and call the open method when you want to open a WebSocket connection', 'Create a WebSocket object and call the connect method when you want to open a WebSocket connection', 'There is no method to open WebSocket connection. When we instantiate the WebSocket object, it automatically attempts to open asynchronously', 'None of the above'],
    //    answer: 2
    //},
    //{
    //    q: 'Which property of the WebSocket object do you check to obtain the state of the connection?',
    //    options: ['state', 'ready', 'readyState', 'status'],
    //    answer: 2
    //},
    //{
    //    q: ' Which value of readyState attribute of the WebSocket object indicates that the connection has been closed or could not be opened?',
    //    options: ['0', '1', '2', '3'],
    //    answer: 3
    //},
    //{
    //    q: 'You want to ensure that the WebSocket connection is not disconnected as a result of inactivity.How can you accomplish this?',
    //    options: ['Add code to the onclose event to reopen the connection when it’s closed', 'Add code to send an empty message periodically before the connection is closed.', 'Set the keepAlive property on the WebSocket object to true.', 'Create a new WebSocket object each time you send a message'],
    //    answer: 1
    //},
    //{
    //    q: 'Which of the following is or are websocket libraries?',
    //    options: ['Socket.io', 'SignalR', 'Express', 'AngularJS','Socket.io & SignalR'],
    //    answer: 4
    //},
    //{
    //    q: 'Which library would you use if you are creating a Node.js website and want to write browser independent code that uses WebSocket?',
    //    options: ['SignalR', 'Socket.IO', 'FarmSockets', 'AgnosticSocket'],
    //    answer: 1
    //},
    //{
    //    q: 'How to transmit WebSockets data?',
    //    options: ['push(data)', 'socketConnection.push(data)', 'socketConnection.send(data)', 'send(data)'],
    //    answer: 2
    //},
    //{
    //    q: ' Which of the following activities usually WebSockets perform?',
    //    options: ['Use a persistent connection', 'Permit server-side push', 'Do not permit client to send request to server', 'More overhead','Use a persistent connection & Permit server-side push'],
    //    answer: 4
    //},
    //{
    //    q: 'Which one do you use to broadcast the message to all clients?',
    //    options: ['socket object', 'socket.broadcast object', 'io.sockets object', 'io object'],
    //    answer: 2
    //},
    //{
    //    q: 'Which one do you use to broadcast the message to all clients except the current client?',
    //    options: ['socket object', 'socket.broadcast object', 'io.sockets object', 'io object'],
    //    answer: 1
    //},
    //{
    //    q: 'You want that whenever a client is connected an event will triggered on the client. Which code block will you insert at line 3?',
    //    options: ['io.sockets.emit(‘connectionSuccess’,’You are connected.’);', 'socket.emit(‘connectionSuccess’,’You are connected.’)', 'socket.broadcast.emit(‘connectionSuccess’,’You are connected.’)', 'socket.on((‘connectionSuccess’,’You are connected.’)'],
    //    answer: 1
    //},
    //{
    //    q: 'You want that whenever a client is connected an event will triggered on all the clients except the current client.Which code block will you insert at line 3?',
    //    options: [' io.sockets.emit(‘newConnected’,’You are connected.’);', 'socket.emit(‘newConnected’,’You are connected.’)', 'socket.broadcast.emit(‘newConnected’,’You are connected.’)', 'socket.on((‘newConnected’,’You are connected.’)'],
    //    answer: 2
    //}
]