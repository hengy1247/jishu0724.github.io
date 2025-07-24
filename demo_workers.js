let count = 0;
let intervalId = null;

onmessage = function(event) {
    console.log("Worker received message:", event.data); // Debug log
    if (event.data === 'start') {
        console.log("Worker starting counting"); // Debug log
        if (!intervalId) {
            intervalId = setInterval(() => {
                count++;
                postMessage(count);
            }, 1000);
        }
    }
};
