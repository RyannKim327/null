function countWordOccurrences(str: string, word: string): number {
    return str.split(' ').reduce((count: number, currentWord: string) => currentWord === word ? count + 1 : count, 0);
}
