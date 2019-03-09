process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/get-info':
                process.stdout.write(process.env.LANG + '\n' + process.versions.node);
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
