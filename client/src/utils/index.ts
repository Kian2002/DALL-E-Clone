import { surpriseMePrompts } from "../constants";

interface GetRandomPrompt {
    (prompt: string): string;
}

export const getRandomPrompt: GetRandomPrompt = (prompt: string) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (prompt === randomPrompt) {
        return getRandomPrompt(prompt);
    }

    return randomPrompt;
}