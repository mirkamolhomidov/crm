import 'dotenv/config'

function getConfig(name) {
	return process.env[name]
}

export default getConfig
