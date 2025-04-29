function getStringLength(str: string): number {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}
