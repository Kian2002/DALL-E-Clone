import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

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

export const downloadImage = async (_id: string, photo: string) => {
    FileSaver.saveAs(photo, _id);
}