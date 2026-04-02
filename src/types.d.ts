declare global {
    type Timer = ReturnType<typeof setTimeout>;
    function clearInterval(intervalId?: Timer): void;
    function clearTimeout(timeoutId?: Timer): void;
}

export {};
