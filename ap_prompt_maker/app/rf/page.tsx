// app/rf/page.tsx
"use client";
import React, { useState } from 'react';
export default function RouteFinder() {
    const [word, setWord] = useState('');
    // You need to take the word from user and inject the word in the prompt and send the prompt to the AI and get the response and show it to the user.
    const handleSubmit = async (e: React.FormEvent) => {       
        e.preventDefault();
        const prompt = `Find the route for the word: ${word}`;
        // Here you would typically call your AI API with the prompt and get the response.
        // For demonstration, we'll just show the prompt Below the web page,
        //  after user clicking the Submit button.
        alert(prompt); // Replace this with actual API call and response handling.
    };
    return (
        <div>
            <h1>Route Finder</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Enter a word"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}