const { calculatePing } = require("../../utils");
const os = require("os");
const { formatSize } = require("../../utils");

module.exports = {
	name: "ping",
	category: "misc",
	desc: "Bot response in second.",
	async exec({ msg }) {
		let cpus = os.cpus(),
			txt =
				`*Server:*\n\n- Nodejs: ${process.version}\n- Memory: ${
					formatSize(os.totalmem() - os.freemem()) + "/" + formatSize(os.totalmem())
				}\n` +
				`- CPU: ${cpus[0].model} ${
					cpus.length > 1 ? `(${cpus.length} core)` : ""
				}\n- Platform: ${os.platform()}` +
				`\n- Ping: ${calculatePing(msg.messageTimestamp, Date.now())} second(s)`;
		await msg.reply(txt);
	},
};
