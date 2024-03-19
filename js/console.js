const { exec } = require('child_process');
exec('chcp 65001');
let hostname = "";

const myConsole = {
    ping: function () {
        console.log(`>Pinging server '${hostname}'`)
        exec(`ping ${hostname}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`\x1b[91m>Server not found\x1b[0m`);
                return;
            }
            if (stderr) {
                console.error(`Ping error: ${stderr}`);
                return;
            }

            console.log("\x1b[1;96m>Server found\x1b[0m")
            let replyCount = 0;
            let sent;
            let received;
            let packetsInfo;
            let isStable = false;
            const lines = stdout.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes("Reply")) {
                    replyCount++;
                }
                if (lines[i].includes("Packets")) {
                    const regex = /Sent = (\d+), Received = (\d+), Lost = (\d+)/;
                    // Используем метод match для поиска совпадений в строке
                    const match = lines[i].match(regex);
                    sent = match[1]; // количество отправленных пакетов
                    received = match[2]; // количество полученных пакетов
                    lost = match[3]; // количество потерянных пакетов
                }
            }
            for (let i = 1; i <= replyCount; i++) {
                console.log(`>Sending package ${i}/${replyCount}`);
            }
            if (received == sent) {
                packetsInfo = `Ping finished, received \x1b[92m${received}/${sent}\x1b[0m packages`;
                isStable = true;
            }
            else {
                packetsInfo = `Ping finished, received \x1b[91m${received}/${sent}\x1b[0m packages`;
            }
            console.log(`>${packetsInfo}`);
            if (isStable) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};

const args = process.argv.slice(2);

if (args.includes("ping")) {
    hostname = args[1];
    myConsole.ping();
}
if (args.includes("cheats")) {
    console.log(">lmao no");
}
if (args.includes("target")) {
    domain = args[1];
    exec(`start "" "https://${domain}"`);
}
if (args.includes("hash")) {
    domain = args[1];
    const dns = require('dns');
    dns.lookup(domain, (err, address, family) => {
        if (err) {
            console.error(`\x1b[91m>Server not found\x1b[0m`);
            return;
        }
        console.log(`>${address}`);
    });
}