#!/usr/bin/env node

process.stdin.setEncoding('utf8');
process.stdout.setDefaultEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        const sanitizedChunk = chunk
            .replace(/^.*?"</, '<')
            .replace(/>".*$/m, '>')
            .replace(/\\"/g, "\"")
            .replace(/\\n/g, '\n')
        process.stdout.write(sanitizedChunk);
    }
})
